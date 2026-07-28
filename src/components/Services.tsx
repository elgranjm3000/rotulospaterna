"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    icon: "lightbulb",
    title: "Rotulación Luminosa",
    description:
      "Proyecta tu marca de día y de noche. Fabricamos cajones de luz y letras retroiluminadas con tecnología LED de bajo consumo.",
    colorClass: "bg-secondary-container/20",
    iconColor: "text-secondary-container",
  },
  {
    icon: "branding_watermark",
    title: "Vinilos Decorativos",
    description:
      "Personalización total para escaparates y vehículos. Vinilos de corte, ácido o impresión digital de alta resistencia.",
    colorClass: "bg-primary-fixed/20",
    iconColor: "text-primary",
  },
  {
    icon: "architecture",
    title: "Letras Corpóreas",
    description:
      "Elegancia y relieve para tu fachada. En acero, aluminio, PVC o metacrilato, diseñadas para durar y destacar.",
    colorClass: "bg-on-tertiary-container/10",
    iconColor: "text-on-tertiary-container",
  },
];

export function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="servicios" className="py-32 bg-surface">
      <div
        ref={sectionRef}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold mb-4 text-primary">
            Soluciones de Imagen Corporativa
          </h2>
          <p className="font-inter text-base text-on-surface max-w-2xl mx-auto leading-relaxed">
            Desde el diseño conceptual hasta la instalación final, cuidamos cada
            detalle de tu presencia física.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group bg-surface-container-lowest p-8 rounded-xl shadow-lg border border-outline-variant/10 transition-all duration-700 hover:shadow-xl ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 150 + 200}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${service.colorClass} rounded-xl flex items-center justify-center mb-6 service-icon`}
              >
                <span
                  className={`material-symbols-outlined ${service.iconColor} text-4xl`}
                >
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base text-on-surface leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA Link */}
              <a
                className="inline-flex items-center text-secondary-container font-inter text-sm font-semibold gap-1 group-hover:gap-2 transition-all"
                href="#contacto"
              >
                Saber más{" "}
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
