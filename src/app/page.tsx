import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PaternaServices } from "@/components/PaternaServices";
import { ManufacturingDetail } from "@/components/ManufacturingDetail";
import { WhyUs } from "@/components/WhyUs";
import { ContactForm } from "@/components/ContactForm";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <PaternaServices />
        <ManufacturingDetail />
        <WhyUs />
        <ContactForm />
        <BlogSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
