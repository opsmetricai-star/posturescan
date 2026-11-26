"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const site = () => process.env.NEXT_PUBLIC_SITE_URL || location.origin;

export default function AuthForm({ mode, notice, defaultEmail = "" }: { mode: "login" | "signup"; notice?: string; defaultEmail?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(notice ?? null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const supabase = createClient();
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${site()}/auth/callback?next=/dashboard` } });
        if (error) throw error;
        if (data.session) router.push("/dashboard");
        else setMsg("Check your email and open the confirmation link to activate your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function reset() {
    if (!email) return setMsg("Enter your email address first.");
    const { error } = await createClient().auth.resetPasswordForEmail(email, { redirectTo: `${site()}/auth/callback?next=/dashboard/settings` });
    setMsg(error ? error.message : "Password reset email sent. Open the link to choose a new password.");
  }

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">{mode === "login" ? "Sign in to PostureScan" : "Create your PostureScan account"}</h1>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" aria-label="Work email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-brand" />
      <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password, 8 characters minimum" aria-label="Password" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-brand" />
      {msg && <p role="status" className="text-sm text-brand-dark">{msg}</p>}
      <button disabled={loading} className="w-full rounded-full bg-brand py-2.5 font-semibold text-white hover:bg-brand-dark disabled:opacity-60">{loading ? "Please wait" : mode === "login" ? "Sign in" : "Sign up"}</button>
      <div className="flex justify-between text-sm text-slate-600">
        {mode === "login" ? (
          <>
            <Link href="/signup" className="text-brand">Create an account</Link>
            <button type="button" onClick={reset} className="text-brand">Reset password</button>
          </>
        ) : (
          <Link href="/login" className="text-brand">Already have an account? Sign in</Link>
        )}
      </div>
    </form>
  );
}
