"use client";

import { useEffect, useState, useLayoutEffect } from "react";

const heroBackgroundImage =
  "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1920";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroBackgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-dim">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        {imageLoaded && (
          <div
            className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              backgroundImage: `url('${heroBackgroundImage}')`,
            }}
          />
        )}
        {/* Fallback gradient while loading */}
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-surface-dim to-surface-container" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-inter text-xs font-semibold mb-6 uppercase tracking-wider">
              Visibilidad que impacta
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-montserrat text-5xl md:text-6xl font-bold mb-6 leading-tight text-on-surface tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Hacemos que tu negocio sea{" "}
            <span className="text-secondary-container">imposible de ignorar</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`font-inter text-lg text-on-surface mb-10 max-w-xl leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Expertos en rotulación profesional, vinilos y soluciones visuales a
            medida en Paterna. Transformamos fachadas en herramientas de venta.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <button
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-montserrat text-xl font-semibold btn-hover-effect flex items-center justify-center gap-2 shadow-lg"
              onClick={() => handleScrollTo("#contacto")}
            >
              Solicitar Presupuesto Gratis
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-md font-montserrat text-xl font-semibold btn-hover-effect border-2 border-outline-variant/30"
              onClick={() => handleScrollTo("#servicios")}
            >
              Nuestros Servicios
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 flex flex-wrap gap-8 text-on-surface-variant/70 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">
                verified
              </span>
              <span className="font-inter text-sm font-medium">+15 años experiencia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">
                star
              </span>
              <span className="font-inter text-sm font-medium">+500 proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">
                location_on
              </span>
              <span className="font-inter text-sm font-medium">Valencia y alrededores</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-bounce">
          <span className="material-symbols-outlined text-on-surface-variant">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
}
