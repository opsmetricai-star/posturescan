import Link from "next/link";
import Logo from "./Logo";

const cols = [
  { title: "PLATFORM", links: ["Cloud & AI Security", "PostureScan Code", "PostureScan Cloud", "PostureScan Defend", "Integrations", "Environments", "Documentation"] },
  { title: "LEARN", links: ["Customer Stories", "Security Courses", "Blog", "Academy", "Resource Center", "Threat Landscape", "Security Assessment", "Vulnerability Database"] },
  { title: "COMPANY", links: ["About", "Careers", "Newsroom", "Events", "Contact Us", "Trust Center", "Partner Alliance"] },
];

export default function Footer() {
  return (
    <footer id="company" className="bg-[#14102b] text-slate-300">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-4">
        <div><Logo light /><p className="mt-4 max-w-xs text-sm text-slate-400">One security graph for your code, cloud and runtime.</p></div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-white">{c.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l) => <li key={l}><Link href="#" className="hover:text-white">{l}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-slate-400">
          <span>© 2026 PostureScan, Inc.</span>
          <div className="flex gap-5"><Link href="#">Status</Link><Link href="#">Privacy Policy</Link><Link href="#">Terms of Use</Link><Link href="#">Cookie Settings</Link></div>
        </div>
      </div>
    </footer>
  );
}
