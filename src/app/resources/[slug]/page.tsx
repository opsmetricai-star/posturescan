import { notFound } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { bySection, findPage } from "@/lib/content";

export function generateStaticParams() {
  return bySection("resources").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findPage("resources", slug);
  return { title: page ? `${page.title} | PostureScan` : "PostureScan" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findPage("resources", slug);
  if (!page) notFound();
  return <PageTemplate page={page} />;
}
