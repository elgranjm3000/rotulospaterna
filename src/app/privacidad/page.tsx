import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Rótulos Paterna",
  description:
    "Política de privacidad de Rótulos Paterna. Información sobre el tratamiento de datos personales en rotulospaterna.com.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-surface">
      <Header />
      <main className="flex-1 pt-20">
        <article className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg font-inter text-on-surface leading-relaxed space-y-6">
            <p>
              En <strong>Rótulos Paterna</strong>, accesible desde{" "}
              <a
                href="https://rotulospaterna.com"
                className="text-secondary-container underline"
              >
                rotulospaterna.com
              </a>
              , la privacidad de nuestros visitantes es una prioridad. Este
              documento describe los tipos de información personal que
              recopilamos y cómo la utilizamos.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Información que recopilamos
            </h2>
            <p>
              Al utilizar nuestro formulario de contacto, recopilamos la
              siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Tipo de proyecto y detalles del mismo</li>
            </ul>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Finalidad del tratamiento
            </h2>
            <p>
              Los datos recopilados se utilizan exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a su solicitud de presupuesto o consulta</li>
              <li>Gestionar la relación comercial derivada de su solicitud</li>
              <li>Enviar comunicaciones relacionadas con su proyecto</li>
            </ul>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Base legal
            </h2>
            <p>
              El tratamiento de sus datos se basa en el consentimiento que usted
              otorga al enviar el formulario de contacto, así como en el interés
              legítimo de Rótulos Paterna para atender su solicitud.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Conservación de datos
            </h2>
            <p>
              Conservamos sus datos personales durante el tiempo necesario para
              atender su consulta y, en caso de establecerse una relación
              comercial, durante el plazo legalmente exigible.
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Derechos del usuario
            </h2>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, puede contactarnos en{" "}
              <a
                href="mailto:contacto@rotulospaterna.com"
                className="text-secondary-container underline"
              >
                contacto@rotulospaterna.com
              </a>
              .
            </p>

            <h2 className="font-montserrat text-xl font-bold text-primary mt-8 mb-3">
              Contacto
            </h2>
            <p>
              Si tiene cualquier duda sobre esta política de privacidad, puede
              escribirnos a{" "}
              <a
                href="mailto:contacto@rotulospaterna.com"
                className="text-secondary-container underline"
              >
                contacto@rotulospaterna.com
              </a>{" "}
              o visitar nuestra web{" "}
              <a
                href="https://rotulospaterna.com"
                className="text-secondary-container underline"
              >
                rotulospaterna.com
              </a>
              .
            </p>

            <p className="text-sm text-on-surface-variant mt-12">
              Última actualización: {new Date().toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
