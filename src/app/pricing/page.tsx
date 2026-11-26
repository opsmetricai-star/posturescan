import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "@/components/Icons";
import { PLANS, FREE_SCANS } from "@/lib/plans";

export const metadata = { title: "Pricing | PostureScan" };

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1240px] px-5 py-16 md:py-20">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">Pricing that scales with <span className="highlight">analysis volume</span></h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">Every plan includes the full AI engine: risk scoring, ranked findings and generated fixes. Every new account starts with {FREE_SCANS} analyses at no cost.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.id} className={`flex flex-col rounded-3xl border p-8 ${p.featured ? "border-brand shadow-xl ring-2 ring-brand" : "border-slate-200"}`}>
              {p.featured && <span className="mb-3 w-fit rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">Most popular</span>}
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <p className="mt-6 text-5xl font-semibold">${p.price}<span className="text-base font-normal text-slate-500"> per month</span></p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 text-brand"><Check /></span>{f}</li>
                ))}
              </ul>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-8 rounded-full bg-brand py-3 text-center font-semibold text-white hover:bg-brand-dark">Sign up</a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">Use the email address of your PostureScan account at checkout so your plan can be applied to it.</p>
      </main>
      <Footer />
    </>
  );
}
