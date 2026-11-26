import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | PostureScan" };

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-widest text-brand">CONTACT</p>
          <h1 className="mt-3 text-5xl font-semibold leading-[1.1] tracking-tight">Talk to a <span className="highlight">PostureScan</span> expert</h1>
          <p className="mt-6 max-w-md text-lg text-slate-600">Tell us about your cloud environment and we will follow up to schedule a walkthrough.</p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
