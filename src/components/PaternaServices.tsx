"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import Image from "next/image";

const paternaServices = [
  {
    title: "Fabricación de Rótulos y Banderolas Luminosas",
    description:
      "Diseñamos y fabricamos rótulos y banderolas luminosas a medida para tu negocio en Paterna. Desde rótulos comerciales y señalética corporativa hasta banderolas y cajones de luz LED, con materiales premium y acabados profesionales que garantizan durabilidad y máximo impacto visual de día y de noche.",
    icon: "lightbulb",
    image: "/rotulos/images3.jpeg",
    alt: "Fabricación profesional de rótulos y banderolas luminosas en taller",
  },
  {
    title: "Fabricación de Letras Corpóreas en Paterna",
    description:
      "Letras corpóreas con relieve y elegancia para tu fachada en Paterna. Trabajamos acero inoxidable, aluminio, PVC y metacrilato. Iluminación LED integrada para que tu marca destaque de día y de noche con un acabado impecable.",
    icon: "text_fields",
    image: "/rotulos/corporea.jpeg",
    alt: "Letras corpóreas doradas instaladas en fachada",
  },
  {
    title: "Rotulación de Fachadas en Paterna",
    description:
      "Transformamos la fachada de tu local en Paterna en una poderosa herramienta de ventas. Instalamos vinilos de corte, láminas de control solar, microperforados y rotulación integral para escaparates que captan la atención de cada transeúnte.",
    icon: "storefront",
    image: "/rotulos/images4.jpeg",
    alt: "Rotulación profesional de fachada comercial",
  },
  {
    title: "Rotulación de Vehículos en Paterna",
    description:
      "Convierte tu flota de vehículos en vallas publicitarias móviles. Rotulación integral de coches, furgonetas y camiones en Paterna con vinilos de alta resistencia. Diseño personalizado que proyecta profesionalidad en cada kilómetro recorrido.",
    icon: "directions_car",
    image: "/rotulos/images5.jpeg",
    alt: "Rotulación integral de vehículos comerciales",
  },
];

export function PaternaServices() {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.05 });
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn({ threshold: 0.1 });

  return (
    <section id="servicios" className="py-20 md:py-32 bg-surface">
      <div
        ref={sectionRef}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/10 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Especialistas en Paterna
          </span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mb-4 text-primary">
            Servicios de Rotulación en Paterna
          </h2>
          <p className="font-inter text-base md:text-lg text-on-surface max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales de comunicación visual para negocios, comercios y
            profesionales en Paterna. Fabricación propia, materiales premium y
            equipo especializado.
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {paternaServices.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 150 + 200}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  role="img"
                  aria-label={service.alt}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Icon Badge on Image */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-on-secondary-container text-xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="font-inter text-base text-on-surface leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-inter text-sm font-bold hover:shadow-lg transition-all"
                  >
                    Solicitar Presupuesto
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </a>

                  {/* Trust badges */}
                  <div className="hidden sm:flex items-center gap-3 text-on-surface-variant/60">
                    <span className="font-inter text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary-container">
                        verified
                      </span>
                      Garantizado
                    </span>
                    <span className="font-inter text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-secondary-container">
                        schedule
                      </span>
                      Entrega rápida
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <div className="bg-secondary-container rounded-3xl p-10 md:p-14 shadow-2xl">
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-on-secondary-container">
              ¿Negocio en Paterna? Te ayudamos a destacar
            </h3>
            <p className="font-inter text-base md:text-lg text-on-secondary-container max-w-xl mx-auto mb-8">
              Cuéntanos tu idea y te asesoramos sin compromiso con la mejor
              solución de rotulación para tu proyecto en Paterna.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-montserrat text-xl font-bold hover:shadow-2xl transition-all"
            >
              Pedir Presupuesto Gratis
              <span className="material-symbols-outlined">send</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
