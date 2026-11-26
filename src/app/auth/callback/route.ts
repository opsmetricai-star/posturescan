import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Handles email confirmation and password reset links.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const base = process.env.NEXT_PUBLIC_SITE_URL || origin;
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(`${base}${safeNext}`);
  }
  return NextResponse.redirect(`${base}/login?notice=link`);
}
