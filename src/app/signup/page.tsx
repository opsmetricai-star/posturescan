import Header from "@/components/Header";
import AuthForm from "@/components/AuthForm";

export const metadata = { title: "Sign up | PostureScan" };

export const instant = false;

export default async function Signup({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email } = await searchParams;
  return (
    <>
      <Header />
      <main className="px-5 py-16 md:py-20"><AuthForm mode="signup" defaultEmail={email ?? ""} /></main>
    </>
  );
}
