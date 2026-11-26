// Plan names/limits are placeholders: the user supplied only the three payment links and prices implied by their URLs.
export type Plan = { id: "p47" | "p57" | "p97"; name: string; price: number; scans: number; description: string; features: string[]; featured?: boolean; link: string };

export const PLANS: Plan[] = [
  { id: "p47", name: "Starter", price: 47, scans: 25, description: "For small teams starting cloud posture reviews.", link: "https://selar.com/47plan?currency=USD", features: ["25 AI scans / month", "Findings dashboard", "Email support"] },
  { id: "p57", name: "Growth", price: 57, scans: 100, featured: true, description: "For teams scanning multiple environments.", link: "https://selar.com/57plan?currency=USD", features: ["100 AI scans / month", "Everything in Starter", "Scan history & export"] },
  { id: "p97", name: "Scale", price: 97, scans: 500, description: "For security teams with heavy scan volume.", link: "https://selar.com/97plan?currency=USD", features: ["500 AI scans / month", "Everything in Growth", "Priority support"] },
];

export const FREE_SCANS = 3;
