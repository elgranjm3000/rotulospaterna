import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Rótulos Paterna",
  description:
    "Política de cookies de Rótulos Paterna. No utilizamos cookies de seguimiento ni almacenamos datos de navegación.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-surface">
      <Header />
      <main className="flex-1 pt-20">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg font-inter text-on-surface leading-relaxed space-y-6">
            <p>
              En <strong>Rótulos Paterna</strong> (
              <a
                href="https://rotulospaterna.com"
                className="text-secondary-container underline"
              >
                rotulospaterna.com
              </a>
              ) utilizamos un enfoque de mínima intervención respecto al
              almacenamiento de datos en su dispositivo.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web
              almacenan en su navegador. Se utilizan habitualmente para recordar
              preferencias, mantener sesiones de usuario o recopilar datos
              analíticos.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Cookies que utilizamos
            </h2>
            <p>
              <strong>No utilizamos cookies de seguimiento, cookies
              publicitarias ni cookies de terceros.</strong> Nuestro sitio web
              no almacena cookies propias con fines de análisis, seguimiento de
              usuarios o personalización de contenido.
            </p>
            <p>
              Las únicas cookies que podrían generarse son de carácter
              estrictamente técnico y necesario para el funcionamiento básico
              del sitio, como las relacionadas con el equilibrio de carga del
              servidor. Estas cookies son temporales y no recopilan información
              personal.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Servicios de terceros
            </h2>
            <p>
              Nuestro sitio web incluye un mapa de Google Maps en la sección de
              contacto. Google puede establecer sus propias cookies al cargar
              este contenido. Para más información, consulte la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-container underline"
              >
                política de privacidad de Google
              </a>
              .
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Cómo gestionar las cookies
            </h2>
            <p>
              Usted puede configurar su navegador para rechazar todas las
              cookies o para que le avise cuando se envía una cookie. Consulte
              la sección de ayuda de su navegador para conocer cómo modificar
              esta configuración.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Contacto
            </h2>
            <p>
              Si tiene dudas sobre esta política, puede contactarnos en{" "}
              <a
                href="mailto:contacto@rotulospaterna.com"
                className="text-secondary-container underline"
              >
                contacto@rotulospaterna.com
              </a>
              .
            </p>

          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
