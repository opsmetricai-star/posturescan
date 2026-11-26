import Header from "@/components/Header";
import AuthForm from "@/components/AuthForm";

export const metadata = { title: "Sign in | PostureScan" };

export const instant = false;

export default async function Login({ searchParams }: { searchParams: Promise<{ notice?: string }> }) {
  const { notice } = await searchParams;
  return (
    <>
      <Header />
      <main className="px-5 py-16 md:py-20">
        <AuthForm mode="login" notice={notice === "link" ? "That link has expired or was already used. Sign in, or request a new one." : undefined} />
      </main>
    </>
  );
}
