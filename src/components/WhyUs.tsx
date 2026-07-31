"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const benefits = [
  {
    icon: "speed",
    title: "Rapidez de Ejecución",
    description:
      "Optimizamos nuestros procesos de fabricación para cumplir con plazos ajustados sin comprometer el acabado.",
  },
  {
    icon: "verified",
    title: "Materiales Premium",
    description:
      "Utilizamos únicamente vinilos y componentes de primeras marcas (3M, Avery) para garantizar la durabilidad ante el sol y la lluvia.",
  },
  {
    icon: "draw",
    title: "Diseño Personalizado",
    description:
      "No somos meros instaladores. Nuestro equipo creativo asesora en la mejor solución estética para tu marca y local.",
  },
];

const craftImage =
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80";

export function WhyUs() {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useFadeIn({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="nosotros" className="py-32 bg-surface">
      <div
        ref={sectionRef}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div
            ref={imageRef}
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-full aspect-video rounded-2xl shadow-xl bg-cover bg-center relative overflow-hidden">
              {/* Placeholder gradient while loading */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-dim">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${craftImage}')` }}
                />
              </div>

              {/* Floating Badge - Improved contrast */}
              <div className="absolute -bottom-6 -right-6 bg-secondary-container p-8 rounded-xl shadow-2xl hidden md:flex flex-col">
                <span className="block text-on-secondary-container font-montserrat text-4xl font-bold leading-none">
                  +15
                </span>
                <span className="text-on-secondary-container/90 font-inter text-sm font-medium">
                  Años de experiencia
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            ref={contentRef}
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-semibold mb-8 text-primary">
              ¿Por qué Rótulos Paterna?
            </h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 transition-all duration-500"
                  style={{
                    opacity: contentVisible ? 1 : 0,
                    transform: contentVisible ? "translateX(0)" : "translateX(20px)",
                    transitionDelay: contentVisible ? `${index * 150}ms` : "0ms",
                  }}
                >
                  {/* Icon circle - Using amber for better contrast */}
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-xl font-semibold mb-2 text-primary">
                      {benefit.title}
                    </h4>
                    <p className="font-inter text-base text-on-surface leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA - Improved contrast */}
            <button className="mt-10 inline-flex items-center gap-2 text-secondary-container font-inter text-sm font-semibold border-b-2 border-secondary-container pb-1 hover:text-secondary transition-colors">
              Conoce más sobre nuestro proceso
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
