"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Chevron, Close, Menu } from "./Icons";
import { bySection } from "@/lib/content";

const groups = [
  { label: "Platform", section: "platform" as const },
  { label: "Solutions", section: "solutions" as const },
  { label: "Company", section: "company" as const },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5">
        <Link href="/" onClick={close} aria-label="PostureScan home"><Logo /></Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="group relative py-5">
              <button className="inline-flex items-center gap-1.5 hover:text-brand">{g.label}<Chevron /></button>
              <div className="invisible absolute left-0 top-full w-72 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {bySection(g.section).map((p) => (
                  <Link key={p.slug} href={`/${p.section}/${p.slug}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-brand-soft hover:text-brand">{p.nav}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/pricing" className="hover:text-brand">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand hover:text-brand sm:block">Sign in</Link>
          <Link href="/signup" className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:block">Sign up</Link>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 lg:hidden">{open ? <Close /> : <Menu />}</button>
        </div>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-6 lg:hidden">
          {groups.map((g) => (
            <div key={g.label} className="border-b border-slate-100">
              <button onClick={() => setMobileGroup(mobileGroup === g.label ? null : g.label)} className="flex w-full items-center justify-between py-4 font-medium">
                {g.label}<Chevron className={mobileGroup === g.label ? "rotate-180" : ""} />
              </button>
              {mobileGroup === g.label && (
                <div className="pb-3">
                  {bySection(g.section).map((p) => (
                    <Link key={p.slug} href={`/${p.section}/${p.slug}`} onClick={close} className="block py-2 pl-3 text-sm text-slate-600">{p.nav}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/pricing" onClick={close} className="block border-b border-slate-100 py-4 font-medium">Pricing</Link>
          <div className="mt-5 flex gap-3">
            <Link href="/login" onClick={close} className="flex-1 rounded-full border border-slate-300 py-2.5 text-center text-sm font-semibold">Sign in</Link>
            <Link href="/signup" onClick={close} className="flex-1 rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white">Sign up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
