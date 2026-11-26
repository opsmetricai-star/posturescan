import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroArt from "@/components/HeroArt";

const logos = ["Northwind", "Halcyon", "Fabrikon", "Orbitly", "Quanta", "Lumen&Co", "Brightpath", "Voltaic", "Kestrel", "Arcadia", "Mosaic", "Tessera"];

const pillars = [
  { tag: "Code", title: "Secure Development", body: "Catch risk from the first line of code in the IDE through CI/CD and deployment." },
  { tag: "Cloud", title: "Prevent Cloud and AI Risks", body: "Secure every application you build in the cloud, from infrastructure to data." },
  { tag: "Defend", title: "Runtime Protection", body: "Threat detection and response designed for cloud and AI workloads." },
];

const agents = [
  { name: "Green Agent", color: "bg-emerald-500", body: "Turns risks into code fixes, opening pull requests at the source and nudging secure code from the start." },
  { name: "Red Agent", color: "bg-rose-500", body: "Maps every attack path with automated penetration testing and continuous risk discovery." },
  { name: "Violet Agent", color: "bg-brand", body: "Automates SecOps threat hunting and investigation to validate and rank real threats." },
];

const steps = [
  { h: "Attack surface scanning", t: "PostureScan maps externally reachable assets and models initial access paths.", l: ["Reachable, exploitable endpoints", "Effective internet exposure", "Threat research intelligence"] },
  { h: "Deep internal analysis", t: "Code, cloud, identity, network and runtime are connected to model:", l: ["Lateral movement", "Privilege escalation", "Data access chains"] },
  { h: "Fix at scale in code", t: "Using graph context and ownership mapping, PostureScan:", l: ["Finds the right place for the fix", "Assigns the right owner", "Generates code and infra fixes"] },
  { h: "Detect and block", t: "A lightweight runtime sensor plus log analysis lets teams:", l: ["Block exploitation attempts", "Stop lateral movement", "Investigate with full lineage"] },
];

const quotes = [
  ["It surfaced real exposure within an hour, and we standardized on it across every account.", "Erik Hart", "CISO"],
  ["Nothing else gave us this much impact for so little operational effort.", "Dana Ruiz", "Global CISO"],
  ["It made our cloud understandable enough to talk to every team, even without being cloud experts.", "Illya Tarn", "Security Lead"],
  ["Findings arrive with owners and fixes attached. Our MTTR collapsed.", "Mei Lin", "VP Security Operations"],
];

const ai = [
  ["Visibility", "Discover AI models, agents, MCP servers and services across cloud and SaaS."],
  ["AI-native risk", "Spot sensitive data exposure, weak guardrails and exposed endpoints."],
  ["AI posture", "Connect infrastructure, identity, data and AI context into one risk view."],
  ["Runtime & response", "Detect and respond to data exposure and malicious agent actions."],
];

const awards = [
  ["Analyst Wave", "Cloud Native Application Protection, 2026", "Named a Leader with the highest current offering score."],
  ["Market Scape", "Cloud-Native Application Protection Platforms, 2025", "Recognized as a Leader in the worldwide market assessment."],
  ["Voice of the Customer", "Cloud Security Posture Management, 2026", "Named a Customers' Choice for CSPM tooling."],
];

const outcomes = [
  ["Speed", "Customers reaching zero criticals", "We saw information within 60 minutes."],
  ["Impact", "Reduction in MTTR with security agents", "The biggest impact I have seen."],
  ["Simplicity", "Active users who are Dev/DevOps", "It demystifies the cloud for other teams."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1 Hero */}
        <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-10 pt-16 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Protect <span className="highlight">Everything</span> You Build and Run
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              PostureScan connects code, cloud and runtime into a single security graph that supplies the context needed to automate risk reduction and threat response. AI alone doesn&apos;t make security faster. <strong>Context does.</strong>
            </p>
            <form action="/signup" className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input name="email" type="email" required placeholder="Your work email here" className="flex-1 rounded-full border border-slate-300 px-5 py-3 text-sm outline-none focus:border-brand" />
              <button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Get a demo →</button>
            </form>
          </div>
          <div className="flex justify-center"><HeroArt /></div>
        </section>

        {/* 2 Logos */}
        <section className="mx-auto max-w-[1240px] px-5 py-12 text-center">
          <p className="text-sm text-slate-500">Trusted by more than 65% of Fortune 100 companies</p>
          <div className="mt-8 grid grid-cols-2 gap-y-6 text-lg font-bold text-slate-400 sm:grid-cols-4 lg:grid-cols-6">
            {logos.map((l) => <span key={l}>{l}</span>)}
          </div>
        </section>

        {/* 3 Reviews */}
        <section className="mx-auto max-w-[1240px] px-5 py-14">
          <div className="grid gap-8 rounded-3xl bg-brand-soft p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-brand">THE REVIEWS ARE IN</p>
              <h2 className="mt-2 text-3xl font-semibold">Customers rate PostureScan #1 in cloud and AI security</h2>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand">941</div>
              <div className="text-sm text-slate-600">Reviews</div>
              <Link href="#customers" className="mt-2 inline-block text-sm font-semibold text-brand">See all reviews →</Link>
            </div>
          </div>
        </section>

        {/* 4 Operating model */}
        <section id="platform" className="mx-auto max-w-[1240px] px-5 py-16">
          <p className="text-xs font-semibold tracking-widest text-brand">A NEW OPERATING MODEL FOR AI-ERA SECURITY</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">Security at AI speed, powered by context.</h2>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            One unified context graph lets teams use AI to fix exploitable risks at the source, stop attacks in real time and start secure from the IDE, automatically and accurately. For the first time, defenders can move as fast as attackers without sacrificing precision.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.tag} className="rounded-2xl border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg">
                <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">{p.tag}</span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.body}</p>
                <Link href="/signup" className="mt-4 inline-block text-sm font-semibold text-brand">Learn more →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Agents */}
        <section id="agents" className="bg-[#14102b] py-20 text-white">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-4xl font-semibold">Meet the agents</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {agents.map((a) => (
                <div key={a.name} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <span className={`inline-block h-3 w-3 rounded-full ${a.color}`} />
                  <h3 className="mt-4 text-xl font-semibold">{a.name}</h3>
                  <p className="mt-2 text-slate-300">{a.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-3xl bg-white/5 p-10 ring-1 ring-white/10">
              <p className="text-xs font-semibold tracking-widest text-rose-400">RED AGENT · AI-POWERED ATTACKER</p>
              <p className="mt-3 max-w-3xl text-lg text-slate-200">Continuously simulate real attack paths across your cloud and AI stack to prove what is actually exploitable and surface the risks that matter most.</p>
              <blockquote className="mt-6 border-l-2 border-brand pl-5 text-slate-300">
                &ldquo;It found authorization flaws across services where traditional testing and our bug bounty came up short.&rdquo;
                <footer className="mt-2 text-sm text-slate-400">Head of Product Security</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 6 CTA band */}
        <section className="mx-auto max-w-[1240px] px-5 py-16 text-center">
          <h2 className="text-3xl font-semibold">Ready to protect your cloud?</h2>
          <p className="mt-2 text-slate-600">Schedule a call with a PostureScan expert.</p>
          <Link href="/signup" className="mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white hover:bg-brand-dark">Get a demo</Link>
        </section>

        {/* 7 How it helps */}
        <section className="bg-brand-soft py-20">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-4xl font-semibold">How PostureScan helps: from exposure to code fix</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.h} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-brand/30">0{i + 1}</div>
                  <h3 className="mt-2 font-semibold">{s.h}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.t}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">{s.l.map((x) => <li key={x}>• {x}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 Customers */}
        <section id="customers" className="mx-auto max-w-[1240px] px-5 py-20">
          <h2 className="text-3xl font-semibold">Trusted by security teams all over the world</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quotes.map(([q, n, r]) => (
              <figure key={n} className="rounded-2xl border border-slate-200 p-6">
                <blockquote className="text-slate-700">&ldquo;{q}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm"><strong>{n}</strong><br /><span className="text-slate-500">{r}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 9 AI frontier */}
        <section className="mx-auto max-w-[1240px] px-5 pb-20">
          <h2 className="text-4xl font-semibold">PostureScan secures the AI frontier</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">Leading AI teams rely on PostureScan to secure their cloud, their AI workloads and the data behind next-generation products.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ai.map(([h, b]) => (
              <div key={h} className="rounded-2xl bg-brand-soft p-6"><h3 className="font-semibold text-brand">{h}</h3><p className="mt-2 text-sm text-slate-700">{b}</p></div>
            ))}
          </div>
        </section>

        {/* 10 Analysts */}
        <section id="resources" className="bg-brand-soft py-20">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-3xl font-semibold">Recognized market leader by top analysts</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {awards.map(([a, b, c]) => (
                <div key={a} className="rounded-2xl bg-white p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-widest text-brand">{a.toUpperCase()}</p>
                  <h3 className="mt-2 font-semibold">{b}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c}</p>
                  <Link href="#" className="mt-4 inline-block text-sm font-semibold text-brand">Get Report →</Link>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-10 text-slate-700">
              <div><b className="text-2xl text-brand">4.7/5</b><br />941+ Reviews</div>
              <div><b className="text-2xl text-brand">4.8/5</b><br />265+ Reviews</div>
            </div>
          </div>
        </section>

        {/* 11 Outcomes */}
        <section className="mx-auto max-w-[1240px] px-5 py-20">
          <h2 className="text-3xl font-semibold">Driving outcomes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map(([k, h, q]) => (
              <div key={k} className="rounded-2xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-brand">{k}</p>
                <h3 className="mt-2 text-lg font-semibold">{h}</h3>
                <p className="mt-3 text-slate-600">&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* 12 Final CTA */}
        <section className="bg-brand py-16 text-center text-white">
          <h2 className="text-3xl font-semibold">Ready to see PostureScan in action?</h2>
          <Link href="/signup" className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-brand hover:bg-brand-light">Get a demo</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
