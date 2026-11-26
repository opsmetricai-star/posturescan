import { createClient } from "@/lib/supabase/server";
import ScanForm from "@/components/ScanForm";
import { PLANS, FREE_SCANS } from "@/lib/plans";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const uid = auth.user!.id;
  const { data: sub } = await supabase.from("subscriptions").select("plan,status").eq("user_id", uid).maybeSingle();
  const plan = sub?.status === "active" ? PLANS.find((p) => p.id === sub.plan) : undefined;
  const limit = plan?.scans ?? FREE_SCANS;
  const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
  const { data: scans } = await supabase.from("scans").select("id,title,score,created_at").eq("user_id", uid).order("created_at", { ascending: false }).limit(20);
  const used = (scans ?? []).filter((s) => new Date(s.created_at) >= monthStart).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
      <section className="rounded-2xl bg-white p-7 shadow-sm">
        <h1 className="mb-5 text-2xl font-semibold">New posture scan</h1>
        <ScanForm />
      </section>
      <aside className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{plan?.name ?? "Free"} plan usage</p>
          <p className="mt-1 text-3xl font-semibold text-brand">{used}<span className="text-base text-slate-400"> / {limit}</span></p>
          <div className="mt-3 h-2 rounded-full bg-brand-light"><div className="h-2 rounded-full bg-brand" style={{ width: `${Math.min(100, (used / limit) * 100)}%` }} /></div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-semibold">Recent scans</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {(scans ?? []).length === 0 && <li className="text-slate-500">No scans yet.</li>}
            {(scans ?? []).map((s) => <li key={s.id} className="flex justify-between"><span className="truncate pr-2">{s.title}</span><b className="text-brand">{s.score}</b></li>)}
          </ul>
        </div>
      </aside>
    </div>
  );
}
