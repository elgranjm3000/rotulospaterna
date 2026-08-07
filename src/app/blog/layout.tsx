import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
