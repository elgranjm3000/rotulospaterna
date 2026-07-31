import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PaternaServices } from "@/components/PaternaServices";
import { WhyUs } from "@/components/WhyUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <PaternaServices />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
