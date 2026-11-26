"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setMsg(null);
    const { error } = await createClient().auth.updateUser({ password });
    setBusy(false);
    setMsg(error ? error.message : "Your password has been updated.");
    if (!error) setPassword("");
  }

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password, 8 characters minimum" aria-label="New password" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-brand" />
      {msg && <p role="status" className="text-sm text-brand-dark">{msg}</p>}
      <button disabled={busy} className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60">{busy ? "Please wait" : "Update password"}</button>
    </form>
  );
}
