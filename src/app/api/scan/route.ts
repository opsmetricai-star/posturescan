import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { PLANS, FREE_SCANS } from "@/lib/plans";

const Input = z.object({ title: z.string().trim().min(1).max(120), config: z.string().trim().min(10).max(20000) });
const Finding = z.object({
  title: z.string(),
  severity: z.enum(["critical", "high", "medium", "low"]),
  resource: z.string(),
  explanation: z.string(),
  fix: z.string(),
});
const Output = z.object({ summary: z.string(), score: z.number().min(0).max(100), findings: z.array(Finding).max(25) });

const schema = {
  type: "OBJECT",
  properties: {
    summary: { type: "STRING" },
    score: { type: "NUMBER" },
    findings: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          severity: { type: "STRING", enum: ["critical", "high", "medium", "low"] },
          resource: { type: "STRING" },
          explanation: { type: "STRING" },
          fix: { type: "STRING" },
        },
        required: ["title", "severity", "resource", "explanation", "fix"],
      },
    },
  },
  required: ["summary", "score", "findings"],
};

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = Input.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Provide a title and a configuration (10+ characters)." }, { status: 400 });

  // Usage limit, enforced server-side against the active plan.
  const { data: sub } = await supabase.from("subscriptions").select("plan,status").eq("user_id", auth.user.id).maybeSingle();
  const plan = sub?.status === "active" ? PLANS.find((p) => p.id === sub.plan) : undefined;
  const limit = plan?.scans ?? FREE_SCANS;
  const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
  const { count } = await supabase.from("scans").select("id", { count: "exact", head: true }).eq("user_id", auth.user.id).gte("created_at", monthStart.toISOString());
  if ((count ?? 0) >= limit) return NextResponse.json({ error: `You have used all ${limit} analyses included this month. Choose a plan on the billing page to continue.` }, { status: 402 });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "Analysis is temporarily unavailable. Try again shortly." }, { status: 503 });
  const model = process.env.GEMINI_MODEL || "gemini-3.8-flash";

  const prompt = `You are a cloud security engineer. Review the following cloud configuration (IAM policy, Terraform, Kubernetes manifest, storage config, etc.) and report real misconfigurations only. Score 0-100 where 100 is fully hardened. Do not invent resources that are not in the input.\n\n<config>\n${parsed.data.config}\n</config>`;
  // Try the primary model first, then fall back to others if it is overloaded or unavailable.
  const models = [model, "gemini-3-flash-preview", "gemini-3.1-flash-lite"].filter((m, i, a) => a.indexOf(m) === i);
  const call = (m: string) => fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", responseSchema: schema, temperature: 0.2 } }),
    signal: AbortSignal.timeout(25000),
  });
  let res: Response | null = null;
  for (const m of models) {
    try { res = await call(m); } catch { res = null; }
    if (res?.ok) break;
  }
  if (!res || !res.ok) return NextResponse.json({ error: "Analysis is temporarily unavailable. Try again shortly." }, { status: 502 });

  const json = await res.json();
  const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
  const out = Output.safeParse((() => { try { return JSON.parse(text); } catch { return null; } })());
  if (!out.success) return NextResponse.json({ error: "AI returned an invalid result. Try again." }, { status: 502 });

  const { data: row, error } = await supabase.from("scans").insert({ user_id: auth.user.id, title: parsed.data.title, input: parsed.data.config, result: out.data, score: Math.round(out.data.score) }).select("id").single();
  if (error) return NextResponse.json({ error: "The analysis could not be saved. Try again." }, { status: 500 });
  return NextResponse.json({ id: row.id, ...out.data });
}
