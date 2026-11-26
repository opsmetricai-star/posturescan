import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const docs: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PostureScan stores the account details you give us, the configurations you submit for scanning and the results generated from them.",
      "Submitted configurations are sent to our AI provider to produce findings. Do not submit secrets or credentials.",
      "You can ask us to delete your account and associated data at any time through the contact page.",
      "This is a draft placeholder. Have it reviewed by legal counsel before launch.",
    ],
  },
  terms: {
    title: "Terms of Use",
    body: [
      "PostureScan provides AI-assisted security guidance. Findings may be incomplete and must be reviewed by a qualified person before action.",
      "Plans are billed monthly through our payment provider and renew until cancelled.",
      "This is a draft placeholder. Have it reviewed by legal counsel before launch.",
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
      <main className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="text-4xl font-semibold">{d.title}</h1>
        <div className="mt-6 space-y-4 text-slate-700">{d.body.map((p) => <p key={p}>{p}</p>)}</div>
      </main>
      <Footer />
    </>
  );
}
