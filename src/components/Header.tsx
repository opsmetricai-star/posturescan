import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#agents" },
  { label: "Customers", href: "/#customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/#resources" },
  { label: "Company", href: "/#company" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5">
        <Link href="/"><Logo /></Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-[15px] font-medium text-slate-700 hover:text-brand sm:block">Sign in</Link>
          <Link href="/signup" className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">Get a demo</Link>
        </div>
      </div>
    </header>
  );
}
