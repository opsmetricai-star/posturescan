import Header from "@/components/Header";
import AuthForm from "@/components/AuthForm";

export default function Signup() {
  return (
    <>
      <Header />
      <main className="px-5 py-20"><AuthForm mode="signup" /></main>
    </>
  );
}
