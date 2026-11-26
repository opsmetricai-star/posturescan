import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroArt from "@/components/HeroArt";
import { Check } from "@/components/Icons";
import { PLANS } from "@/lib/plans";

const outcomes = [
  { k: "Risk", h: "Cut exposure before it is exploited", b: "The engine finds the misconfigurations that create real attack paths and ranks them by severity, so the riskiest gaps close first." },
  { k: "Cost", h: "Remove manual triage from the loop", b: "Every finding arrives explained, scored and paired with a fix, replacing hours of analyst review with a single analysis." },
  { k: "Speed", h: "Move from discovery to fix in one pass", b: "Paste a configuration and receive validated, prioritized remediation in the time it takes to read a report." },
];

const engine = [
  { h: "Analyzes", b: "Reads IAM policies, Terraform, Kubernetes manifests and storage configurations as a connected system, not as isolated rules." },
  { h: "Predicts", b: "Identifies the combinations of settings that an attacker could chain into privilege escalation or data exposure." },
  { h: "Decides", b: "Scores posture from 0 to 100 and ranks every finding critical, high, medium or low, so priorities are explicit." },
  { h: "Automates", b: "Generates the remediation for each finding, so engineers receive an action instead of an investigation." },
];

const steps = [
  { h: "Ingest", b: "Paste a configuration from any environment into your workspace." },
  { h: "Analyze", b: "The AI engine evaluates every resource in context." },
  { h: "Validate", b: "Output is checked against a strict schema before it is saved." },
  { h: "Act", b: "Apply the generated fix, then re-analyze to confirm the score improves." },
];

const coverage = ["IAM policies and roles", "Terraform and infrastructure templates", "Kubernetes manifests", "Object storage and data stores", "Network and security group rules", "Encryption and logging settings"];

const teams = [
  { h: "Security leaders", b: "A defensible posture score and an auditable record of what was found and when." },
  { h: "Platform engineering", b: "Fixes written against the exact resource, ready to apply to the template." },
  { h: "Compliance and risk", b: "Saved analyses that document control gaps and their remediation." },
  { h: "Executives", b: "One number per environment that connects security work to business risk." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-10 pt-14 lg:grid-cols-2 lg:pt-16">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              The AI engine that finds, ranks and fixes <span className="highlight">cloud risk</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              PostureScan analyzes your infrastructure configurations, predicts exploitable exposure, decides what matters most and automates the remediation. Lower risk, lower triage cost, faster decisions.
            </p>
            <form action="/signup" className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input name="email" type="email" required aria-label="Work email" placeholder="Work email" className="flex-1 rounded-full border border-slate-300 px-5 py-3 text-sm outline-none focus:border-brand" />
              <button className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Sign up</button>
            </form>
          </div>
          <div className="flex justify-center"><HeroArt /></div>
        </section>

        {/* Outcomes */}
        <section className="mx-auto max-w-[1240px] px-5 py-16">
          <p className="text-xs font-semibold tracking-widest text-brand">BUSINESS OUTCOMES</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">Security that is measured in risk reduced, hours saved and decisions made faster.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.k} className="rounded-2xl border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg">
                <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">{o.k}</span>
                <h3 className="mt-4 text-xl font-semibold">{o.h}</h3>
                <p className="mt-2 text-slate-600">{o.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engine */}
        <section className="bg-[#14102b] py-20 text-white">
          <div className="mx-auto max-w-[1240px] px-5">
            <p className="text-xs font-semibold tracking-widest text-violet-300">THE ENGINE</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">AI is the core of PostureScan, not a feature added to it.</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {engine.map((e) => (
                <div key={e.h} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <h3 className="text-xl font-semibold text-violet-300">{e.h}</h3>
                  <p className="mt-2 text-slate-300">{e.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example output */}
        <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-brand">OUTPUT</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Every finding is explained, ranked and fixed.</h2>
            <p className="mt-5 text-lg text-slate-600">Results are not a list of alerts. Each one names the affected resource, states the exposure in plain language and carries the change that closes it.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest text-slate-500">EXAMPLE ANALYSIS</span>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-700">critical</span>
            </div>
            <h3 className="mt-3 font-semibold">Storage bucket allows public read access</h3>
            <p className="text-xs text-slate-500">Resource: customer-exports</p>
            <p className="mt-3 text-sm text-slate-700">The bucket policy grants read to every principal, exposing stored customer data to anyone with the URL.</p>
            <p className="mt-3 rounded-lg bg-brand-soft p-3 text-sm"><b>Fix:</b> Remove the public principal and grant read only to the application role.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-3xl font-semibold md:text-4xl">From configuration to closed risk</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.h} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-brand/30">0{i + 1}</div>
                  <h3 className="mt-2 font-semibold">{s.h}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="mx-auto max-w-[1240px] px-5 py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Coverage across the configurations that define your risk</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((c) => (
              <li key={c} className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand"><Check /></span>{c}
              </li>
            ))}
          </ul>
        </section>

        {/* Teams */}
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-3xl font-semibold md:text-4xl">Built for the teams that own cloud risk</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teams.map((t) => (
                <div key={t.h} className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-brand">{t.h}</h3>
                  <p className="mt-2 text-sm text-slate-700">{t.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-[1240px] px-5 py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Plans sized to your analysis volume</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.id} className={`flex flex-col rounded-2xl border p-7 ${p.featured ? "border-brand ring-2 ring-brand" : "border-slate-200"}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 text-4xl font-semibold">${p.price}<span className="text-base font-normal text-slate-500"> per month</span></p>
                <p className="mt-2 flex-1 text-sm text-slate-600">{p.scans} AI analyses per month</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark">Sign up</a>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-center text-white">
          <h2 className="mx-auto max-w-2xl px-5 text-3xl font-semibold">Put an AI engine on your cloud risk.</h2>
          <Link href="/signup" className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand hover:bg-brand-light">Sign up</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
