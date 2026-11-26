import { createClient } from "@/lib/supabase/server";
import { PLANS } from "@/lib/plans";

export default async function Billing({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan: highlight } = await searchParams;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const { data: sub } = await supabase.from("subscriptions").select("plan,status").eq("user_id", auth.user!.id).maybeSingle();
  const current = sub?.status === "active" ? PLANS.find((p) => p.id === sub.plan) : undefined;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Billing</h1>
      <p className="mt-2 text-slate-600">Current plan: <b className="text-brand">{current?.name ?? "Free"}</b></p>
      <p className="mt-1 text-sm text-slate-500">Payments are completed on Selar. Your plan is activated after the payment is verified by an administrator, so it can take a little while after checkout. Include your account email when you pay.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.id} className={`rounded-2xl bg-white p-6 shadow-sm ${highlight === p.id ? "ring-2 ring-brand" : ""}`}>
            <h2 className="font-semibold">{p.name}</h2>
            <p className="mt-1 text-3xl font-semibold">${p.price}<span className="text-sm font-normal text-slate-500"> /mo</span></p>
            <p className="mt-1 text-sm text-slate-600">{p.scans} scans / month</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark">{current?.id === p.id ? "Current plan" : "Pay on Selar"}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
