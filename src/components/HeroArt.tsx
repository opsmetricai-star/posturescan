export default function HeroArt() {
  const nodes = [
    [150, 120],
    [220, 80],
    [290, 120],
    [360, 210],
    [360, 260],
  ];
  return (
    <svg viewBox="0 0 480 380" className="w-full max-w-[520px]" fill="none" aria-hidden>
      <ellipse cx="200" cy="300" rx="170" ry="50" fill="#f5f3ff" />
      <path d="M90 300a50 50 0 0 1 12-98 70 70 0 0 1 130-20 55 55 0 0 1 70 55 45 45 0 0 1-12 63Z" fill="#fff" stroke="#c4b5fd" strokeWidth="3" />
      <path d="M130 250V160a90 90 0 0 1 180 0v90" stroke="#a78bfa" strokeWidth="26" strokeLinecap="round" />
      <path d="M130 250V160a90 90 0 0 1 180 0v90" stroke="#6d28d9" strokeWidth="14" strokeLinecap="round" />
      <rect x="300" y="170" width="120" height="120" rx="22" fill="#6d28d9" opacity=".92" />
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" fill="#fff" stroke="#6d28d9" strokeWidth="4" />
          <circle cx={x} cy={y} r="5" fill="#6d28d9" />
        </g>
      ))}
      <circle cx="130" cy="250" r="11" fill="#ec4899" />
      <circle cx="440" cy="120" r="8" fill="#ec4899" />
    </svg>
  );
}
