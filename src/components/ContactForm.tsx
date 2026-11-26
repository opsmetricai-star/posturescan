"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));
    setState("busy"); setErr(null);
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) return setState("done");
    setState("idle");
    setErr((await res.json().catch(() => null))?.error ?? "Could not send your message.");
  }

  if (state === "done") return <div className="rounded-2xl bg-brand-soft p-8 text-lg">Thanks! We have your details and will be in touch soon.</div>;

  const cls = "w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-brand";
  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 p-8 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="first_name" required placeholder="First name*" className={cls} />
        <input name="last_name" required placeholder="Last name*" className={cls} />
      </div>
      <input name="email" type="email" required placeholder="Work email*" className={cls} />
      <input name="company" required placeholder="Company*" className={cls} />
      <textarea name="message" rows={4} placeholder="How can we help?" className={cls} />
      {err && <p className="text-sm text-rose-600">{err}</p>}
      <button disabled={state === "busy"} className="w-full rounded-full bg-brand py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-60">{state === "busy" ? "Sending…" : "Submit"}</button>
    </form>
  );
}
