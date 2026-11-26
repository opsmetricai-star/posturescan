import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PLANS } from "@/lib/plans";

export const metadata = { title: "Pricing | PostureScan" };

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1240px] px-5 py-20">
        <h1 className="text-center text-5xl font-semibold tracking-tight">Simple pricing for <span className="highlight">every team</span></h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">Pick the plan that matches how many cloud posture scans your team runs each month.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.id} className={`flex flex-col rounded-3xl border p-8 ${p.featured ? "border-brand shadow-xl ring-2 ring-brand" : "border-slate-200"}`}>
              {p.featured && <span className="mb-3 w-fit rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">Most popular</span>}
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <p className="mt-6 text-5xl font-semibold">${p.price}<span className="text-base font-normal text-slate-500"> /mo</span></p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-700">{p.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
              <Link href={`/dashboard/billing?plan=${p.id}`} className="mt-8 rounded-full bg-brand py-3 text-center font-semibold text-white hover:bg-brand-dark">Upgrade to {p.name}</Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
