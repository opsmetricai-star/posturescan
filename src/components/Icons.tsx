const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const Check = ({ className = "" }: { className?: string }) => (
  <svg {...base} className={className}><path d="M3 8.5 6.5 12 13 4.5" /></svg>
);
export const Chevron = ({ className = "" }: { className?: string }) => (
  <svg {...base} width={12} height={12} className={className}><path d="M3 6l5 5 5-5" /></svg>
);
export const Menu = () => (<svg {...base} width={22} height={22}><path d="M2 4h12M2 8h12M2 12h12" /></svg>);
export const Close = () => (<svg {...base} width={22} height={22}><path d="M3 3l10 10M13 3L3 13" /></svg>);
