"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const projects = [
  {
    category: "Retail",
    title: "Luxury Boutique",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    category: "Corporativo",
    title: "Tech Hub HQ",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    category: "Flotas",
    title: "Logistics Express",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80",
  },
  {
    category: "Luminosos",
    title: "City Pharmacy",
    image:
      "https://images.unsplash.com/photo-1576163340292-5c40758ede80?w=600&q=80",
  },
];

export function Portfolio() {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="portafolio" className="py-32 bg-surface-container-low">
      <div
        ref={sectionRef}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-4 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-semibold mb-4 text-primary">
              Proyectos Recientes
            </h2>
            <p className="font-inter text-base text-on-surface-variant leading-relaxed">
              Confianza depositada por empresas líderes en Valencia.
            </p>
          </div>
          <button className="font-inter text-sm font-semibold text-secondary-container border-b-2 border-secondary-container pb-1 flex items-center gap-2 hover:text-secondary transition-colors">
            Ver todo el portafolio
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card relative overflow-hidden rounded-xl bg-white shadow-lg aspect-square transition-all duration-700 ${
                sectionVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              {/* Background Image */}
              <div
                className="portfolio-card-bg w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-white/90 font-inter text-xs font-semibold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h4 className="text-white font-montserrat text-xl font-semibold">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
