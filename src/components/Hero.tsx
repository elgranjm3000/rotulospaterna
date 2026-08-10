"use client";

import { useState, useEffect } from "react";

/*
 * CINEMAGRAPH: 8 tipos de rótulos reales que muestran
 * toda la gama de servicios de rotulación en Paterna.
 * Cada imagen representa una categoría distinta.
 */

const signageImages = [
  "/rotulos/images.jpeg",
  "/rotulos/images1.jpeg",
  "/rotulos/images2.jpeg",
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  /* Ciclo de imágenes estilo cinemagraph - transición cada 5 segundos */
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % signageImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* === CINEMAGRAPH: imágenes de rótulos con transición suave === */}
      <div className="absolute inset-0 z-0">
        {signageImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Brillo sutil animado sobre la zona del rótulo (efecto cinemagraph) */}
        <div
          className="absolute z-10"
          style={{
            top: "10%",
            right: "15%",
            width: "300px",
            height: "100px",
            background:
              "radial-gradient(ellipse, rgba(254,166,25,0.15) 0%, transparent 70%)",
            filter: "blur(30px)",
            animation: "cinemaPulse 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* === TEXTO: flotando sobre el fondo, sin taparlo === */}
      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-0">
        <div className="max-w-2xl">
          {/* Badge - vidrio esmerilado sutil */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-black/40 backdrop-blur-md text-secondary-container font-inter text-xs font-bold uppercase tracking-wider border border-white/10">
              Rótulos en Paterna · Desde 2008
            </span>
          </div>

          {/* H1 - texto con sombra para leer sobre cualquier fondo */}
          <h1
            className={`mt-6 font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{
              transitionDelay: "200ms",
              color: "white",
              textShadow:
                "0 2px 10px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.4)",
            }}
          >
            Rótulos en Paterna que hacen tu negocio{" "}
            <span
              style={{
                color: "#fea619",
                textShadow:
                  "0 2px 10px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.4)",
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
              textShadow: "0 1px 8px rgba(0,0,0,0.8)",
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
              { icon: "star", text: "+500 proyectos" },
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
