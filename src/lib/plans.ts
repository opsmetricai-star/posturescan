export type Plan = { id: "p47" | "p57" | "p97"; name: string; price: number; scans: number; description: string; features: string[]; featured?: boolean; link: string };

export const PLANS: Plan[] = [
  { id: "p47", name: "Starter", price: 47, scans: 25, description: "For teams establishing a baseline of cloud configuration risk.", link: "https://selar.com/47plan?currency=USD", features: ["25 AI analyses per month", "Ranked findings with fixes", "Risk score and history"] },
  { id: "p57", name: "Growth", price: 57, scans: 100, featured: true, description: "For platform and security teams analyzing multiple environments.", link: "https://selar.com/57plan?currency=USD", features: ["100 AI analyses per month", "Everything in Starter", "Higher-volume pipelines"] },
  { id: "p97", name: "Scale", price: 97, scans: 500, description: "For organizations that analyze infrastructure continuously.", link: "https://selar.com/97plan?currency=USD", features: ["500 AI analyses per month", "Everything in Growth", "Priority support"] },
];

export const FREE_SCANS = 3;
