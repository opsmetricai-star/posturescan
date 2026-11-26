export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-bold text-xl tracking-tight">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path d="M13 2 3 6v7c0 5.5 4 9.5 10 11 6-1.500 10-5.500 10-11V6L13 2Z" fill="#6d28d9" />
        <path d="M8.500 13.200 12 16.500l6-6.500" stroke="#fff" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={light ? "text-white" : "text-[#1a2138]"}>PostureScan</span>
    </span>
  );
}
