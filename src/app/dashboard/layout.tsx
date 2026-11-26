import Link from "next/link";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";

export const instant = false;

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/login");
  async function logout() {
    "use server";
    const s = await createClient();
    await s.auth.signOut();
    redirect("/");
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/" aria-label="PostureScan home"><Logo /></Link>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-700 sm:gap-6">
            <Link href="/dashboard" className="hover:text-brand">Analyses</Link>
            <Link href="/dashboard/billing" className="hover:text-brand">Billing</Link>
            <Link href="/dashboard/settings" className="hover:text-brand">Settings</Link>
            <form action={logout}><button className="rounded-full border border-slate-300 px-4 py-1.5 font-semibold hover:border-brand hover:text-brand">Sign out</button></form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
    </div>
  );
}
