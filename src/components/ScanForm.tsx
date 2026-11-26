"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Result = { summary: string; score: number; findings: { title: string; severity: string; resource: string; explanation: string; fix: string }[] };
const sev: Record<string, string> = { critical: "bg-rose-100 text-rose-700", high: "bg-orange-100 text-orange-700", medium: "bg-amber-100 text-amber-700", low: "bg-brand-light text-brand-dark" };

export default function ScanForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [config, setConfig] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr(null); setResult(null);
    try {
      const res = await fetch("/api/scan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, config }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "The analysis failed. Try again.");
      setResult(data);
      router.refresh();
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "The analysis failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <form onSubmit={run} className="space-y-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={120} placeholder="Analysis name, for example production storage policy" aria-label="Analysis name" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-brand" />
        <textarea value={config} onChange={(e) => setConfig(e.target.value)} required minLength={10} rows={9} placeholder="Paste an IAM policy, Terraform, Kubernetes manifest or storage configuration. Remove secrets first." aria-label="Configuration" className="w-full rounded-lg border border-slate-300 px-4 py-3 font-mono text-sm outline-none focus:border-brand" />
        <button disabled={busy} className="rounded-full bg-brand px-6 py-2.5 font-semibold text-white hover:bg-brand-dark disabled:opacity-60">{busy ? "Analyzing" : "Analyze configuration"}</button>
        {err && <p role="alert" className="text-sm text-rose-600">{err}</p>}
      </form>
      {result && (
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl bg-brand-soft p-5"><b className="text-3xl text-brand">{Math.round(result.score)}</b><span className="text-slate-500"> out of 100</span><p className="mt-1 text-slate-700">{result.summary}</p></div>
          {result.findings.length === 0 && <p className="text-slate-600">No misconfigurations were identified in this configuration.</p>}
          {result.findings.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-5">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${sev[f.severity]}`}>{f.severity}</span>
              <h3 className="mt-2 font-semibold">{f.title}</h3><p className="text-xs text-slate-500">{f.resource}</p>
              <p className="mt-2 text-sm text-slate-700">{f.explanation}</p><p className="mt-2 text-sm"><b>Fix:</b> {f.fix}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
