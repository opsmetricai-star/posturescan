import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const docs: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PostureScan stores the account details you provide, the configurations you submit for analysis and the results generated from them.",
      "Submitted configurations are sent to our AI provider to produce findings. Remove secrets and credentials before you submit.",
      "Each analysis is stored under your account and protected by row-level security, so other customers cannot read it.",
      "We do not sell customer data. You may request deletion of your account and its data at any time.",
    ],
  },
  terms: {
    title: "Terms of Use",
    body: [
      "PostureScan provides AI-assisted security analysis for business use. Findings can be incomplete and must be reviewed by a qualified person before action is taken.",
      "Plans are billed monthly through our payment partner and include a fixed number of AI analyses per month.",
      "You are responsible for the configurations you submit and for removing secrets from them.",
      "We may suspend accounts that abuse the service or attempt to disrupt it.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export default async function Legal({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  const d = docs[doc];
  if (!d) notFound();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <h1 className="text-4xl font-semibold">{d.title}</h1>
        <div className="mt-6 space-y-4 text-slate-700">{d.body.map((p) => <p key={p}>{p}</p>)}</div>
      </main>
      <Footer />
    </>
  );
}
