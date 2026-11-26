import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { bySection, type PageData } from "@/lib/content";

export default function PageTemplate({ page }: { page: PageData }) {
  const siblings = bySection(page.section);
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-[1240px] px-5 pb-12 pt-16">
          <p className="text-xs font-semibold tracking-widest text-brand">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight">{page.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">{page.intro}</p>
          <div className="mt-8 flex gap-3">
            <Link href="/signup" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Get a demo</Link>
            <Link href="/pricing" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand">See pricing</Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pb-12">
          <div className="grid gap-6 rounded-3xl bg-brand-soft p-8 sm:grid-cols-3">
            {page.stats.map(([v, l]) => (
              <div key={l}><div className="text-3xl font-bold text-brand">{v}</div><div className="mt-1 text-sm text-slate-600">{l}</div></div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.features.map((f) => (
              <div key={f.h} className="rounded-2xl border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg">
                <h3 className="text-lg font-semibold">{f.h}</h3>
                <p className="mt-2 text-slate-600">{f.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#14102b] py-16 text-white">
          <div className="mx-auto max-w-[1240px] px-5">
            <h2 className="text-3xl font-semibold">{page.stepsTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {page.steps.map((s, i) => (
                <div key={s.h} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="text-2xl font-bold text-violet-400">0{i + 1}</div>
                  <h3 className="mt-2 font-semibold">{s.h}</h3>
                  <p className="mt-1 text-sm text-slate-300">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-16">
          <h2 className="text-xl font-semibold">More in {page.section}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {siblings.filter((s) => s.slug !== page.slug).map((s) => (
              <Link key={s.slug} href={`/${s.section}/${s.slug}`} className="rounded-full bg-brand-light px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand hover:text-white">{s.nav}</Link>
            ))}
          </div>
        </section>

        <section className="bg-brand py-14 text-center text-white">
          <h2 className="text-3xl font-semibold">Ready to see PostureScan in action?</h2>
          <Link href="/signup" className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-brand hover:bg-brand-light">Get a demo</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
