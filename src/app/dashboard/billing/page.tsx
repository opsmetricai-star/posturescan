import { createClient } from "@/lib/supabase/server";
import { PLANS } from "@/lib/plans";

export default async function Billing() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const { data: sub } = await supabase.from("subscriptions").select("plan,status").eq("user_id", auth.user!.id).maybeSingle();
  const current = sub?.status === "active" ? PLANS.find((p) => p.id === sub.plan) : undefined;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Billing</h1>
      <p className="mt-2 text-slate-600">Current plan: <b className="text-brand">{current?.name ?? "Free"}</b></p>
      <p className="mt-1 max-w-2xl text-sm text-slate-500">Checkout is completed on our payment partner. Use the email address of this account at checkout. Your plan is applied once the payment is verified.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.id} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="mt-1 text-3xl font-semibold">${p.price}<span className="text-sm font-normal text-slate-500"> per month</span></p>
            <p className="mt-1 flex-1 text-sm text-slate-600">{p.scans} AI analyses per month</p>
            {current?.id === p.id ? (
              <p className="mt-5 rounded-full bg-brand-light py-2.5 text-center text-sm font-semibold text-brand-dark">Current plan</p>
            ) : (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark">Sign up</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
