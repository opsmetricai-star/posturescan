import { createClient } from "@/lib/supabase/server";
import PasswordForm from "@/components/PasswordForm";

export default async function Settings() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-2 text-slate-600">Signed in as <b>{data.user?.email}</b></p>
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-semibold">Change password</h2>
        <PasswordForm />
      </div>
    </div>
  );
}
