import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Proceso de Trabajo | Cómo Fabricamos Tus Rótulos en Paterna",
  description:
    "Descubre nuestro proceso de rotulación profesional paso a paso: consulta, diseño, fabricación e instalación de rótulos, letras corpóreas y vinilos en Paterna.",
  keywords: [
    "proceso rotulación Paterna",
    "fabricación rótulos Paterna",
    "cómo hacemos rótulos",
    "instalación rótulos Paterna",
    "diseño letras corpóreas",
    "rotulistas Paterna",
  ],
};

const steps = [
  {
    number: "01",
    icon: "chat",
    title: "Consulta y Asesoramiento",
    description:
      "Visita gratuita a tu local en Paterna. Escuchamos tus necesidades, analizamos tu fachada, medimos el espacio y te asesoramos sobre la mejor solución de rotulación para tu negocio. Sin compromiso.",
    details: [
      "Visita presencial sin coste en Paterna y alrededores",
      "Toma de medidas precisa de tu fachada o vehículo",
      "Asesoramiento sobre materiales, colores y tipos de rótulo",
      "Presupuesto detallado en menos de 24 horas",
    ],
  },
  {
    number: "02",
    icon: "design_services",
    title: "Diseño y Propuesta Visual",
    description:
      "Nuestro equipo creativo diseña un mockup digital de cómo se verá tu rótulo instalado. Podrás ver el resultado antes de fabricar y hacer los ajustes que necesites hasta que quede perfecto.",
    details: [
      "Mockup digital realista sobre foto de tu fachada",
      "Propuesta de tipografías, colores y materiales",
      "Revisiones ilimitadas hasta tu aprobación",
      "Asesoría en normativa municipal de Paterna si aplica",
    ],
  },
  {
    number: "03",
    icon: "precision_manufacturing",
    title: "Fabricación en Taller Propio",
    description:
      "Una vez aprobado el diseño, fabricamos tu rótulo en nuestro taller con materiales premium. Acero, aluminio, PVC, metacrilato, vinilos 3M y Avery, tecnología LED de bajo consumo.",
    details: [
      "Materiales de primeras marcas (3M, Avery Dennison)",
      "Corte de precisión con maquinaria profesional",
      "Control de calidad en cada etapa de fabricación",
      "Fabricación en Paterna: apoyas el comercio local",
    ],
  },
  {
    number: "04",
    icon: "build",
    title: "Instalación Profesional",
    description:
      "Equipo de instaladores especializados coloca tu rótulo con las máximas garantías de seguridad y acabado. Trabajamos en horarios flexibles para no interrumpir tu actividad.",
    details: [
      "Instalación con medios de elevación si es necesario",
      "Conexión eléctrica de rótulos luminosos (LED)",
      "Limpieza de la zona tras la instalación",
      "Prueba de funcionamiento y foto final del resultado",
    ],
  },
  {
    number: "05",
    icon: "verified",
    title: "Garantía y Mantenimiento",
    description:
      "Todos nuestros trabajos incluyen garantía por escrito. Además, ofrecemos servicio de mantenimiento para que tu rótulo luzca siempre como el primer día. Limpieza, revisión de iluminación y repaso de vinilos.",
    details: [
      "Garantía en todos los trabajos",
      "Servicio de mantenimiento periódico disponible",
      "Reparación rápida en caso de incidencia",
      "Limpieza profesional para mantener la imagen impecable",
    ],
  },
];

export default function ProcesoPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-surface">
      <Header />
      <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-24 md:py-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/20 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Nuestro Proceso
          </span>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4 text-white">
            Cómo Fabricamos Tus Rótulos en Paterna
          </h1>
          <p className="font-inter text-lg text-primary-fixed max-w-2xl mx-auto leading-relaxed">
            De la idea a la instalación. Te explicamos cada paso de nuestro
            proceso de trabajo, diseñado para que tengas la mejor experiencia
            sin preocupaciones.
          </p>
        </div>
      </section>

      {/* Timeline / Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-6 md:gap-8 pb-16 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-16 bottom-0 w-0.5 bg-secondary-container/20 md:left-[31px]" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary-container rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">
                    {step.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-montserrat text-3xl md:text-4xl font-extrabold text-secondary-container/20">
                    {step.number}
                  </span>
                  <h2 className="font-montserrat text-xl md:text-2xl font-bold text-primary">
                    {step.title}
                  </h2>
                </div>

                <p className="font-inter text-base text-on-surface leading-relaxed mb-4">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-inter text-sm text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined text-secondary-container text-base mt-0.5">
                        check_small
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-secondary-container rounded-3xl p-10 md:p-14 shadow-2xl text-center">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-on-secondary-container">
              ¿Empezamos tu proyecto?
            </h2>
            <p className="font-inter text-base md:text-lg text-on-secondary-container max-w-xl mx-auto mb-8">
              Cuéntanos qué necesitas y te preparamos un presupuesto sin
              compromiso. Primer paso gratuito.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-montserrat text-xl font-bold hover:shadow-2xl transition-all"
            >
              Solicitar Presupuesto Gratis
              <span className="material-symbols-outlined">send</span>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
