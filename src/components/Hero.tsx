"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Fondo fijo con overlay de alto contraste */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/rotulos/hero-bg.jpeg')" }}
        />
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        {/* Segundo overlay direccional para reforzar el lado del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* TEXTO */}
      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-black/40 backdrop-blur-md text-secondary-container font-inter text-xs font-bold uppercase tracking-wider border border-white/10">
              Rótulos en Paterna
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`mt-6 font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{
              transitionDelay: "200ms",
              color: "white",
              textShadow:
                "0 2px 4px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7), 0 0 80px rgba(0,0,0,0.5)",
            }}
          >
            Rótulos en Paterna que hacen tu negocio{" "}
            <span
              style={{
                color: "#fea619",
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7), 0 0 80px rgba(0,0,0,0.5)",
              }}
            >
              imposible de ignorar
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className={`mt-6 font-inter text-lg md:text-xl max-w-xl leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{
              transitionDelay: "300ms",
              color: "white",
              textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 2px 16px rgba(0,0,0,0.6)",
            }}
          >
            Letras corpóreas, rotulación de fachadas, vinilos y rotulación de
            vehículos en Paterna. Fabricación propia. Presupuesto sin
            compromiso en 24h.
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={() => handleScrollTo("#contacto")}
              className="bg-[#fea619] text-[#0b1c30] px-8 py-4 rounded-lg font-montserrat text-lg font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Solicitar Presupuesto Gratis
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo("#servicios")}
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-lg font-montserrat text-lg font-bold hover:bg-white/30 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Ver Servicios
              <span className="material-symbols-outlined">storefront</span>
            </button>
          </div>

          {/* Trust */}
          <div
            className={`mt-10 flex flex-wrap gap-3 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {[
              { icon: "verified", text: "+15 años experiencia" },
              { icon: "location_on", text: "Paterna y alrededores" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
              >
                <span className="material-symbols-outlined text-[#fea619] text-lg">
                  {item.icon}
                </span>
                <span className="font-inter text-sm font-semibold text-white">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-bounce bg-black/30 backdrop-blur-md rounded-full p-2 border border-white/10">
          <span className="material-symbols-outlined text-white">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
}
