import Link from "next/link";
import Logo from "./Logo";
import { bySection } from "@/lib/content";

const cols = [
  { title: "PLATFORM", section: "platform" as const },
  { title: "SOLUTIONS", section: "solutions" as const },
  { title: "COMPANY", section: "company" as const },
];

export default function Footer() {
  return (
    <footer className="bg-[#14102b] text-slate-300">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-slate-400">AI-native cloud security posture for businesses.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-white">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {bySection(c.section).map((p) => (
                <li key={p.slug}><Link href={`/${p.section}/${p.slug}`} className="hover:text-white">{p.nav}</Link></li>
              ))}
              {c.section === "company" && <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-slate-400">
          <span>© 2026 PostureScan</span>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
