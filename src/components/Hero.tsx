"use client";

import { useState, useEffect } from "react";

/*
 * CINEMAGRAPH CSS: secuencia de imágenes de rótulos reales
 * con transiciones suaves que crean efecto de "foto viva"
 *
 * Las imágenes muestran: fachada con rótulo, letras corpóreas,
 * vehículo rotulado, y taller de fabricación de rótulos.
 */

const signageImages = [
  /* Rótulo luminoso de tienda - caja de luz comercial */
  "https://images.pexels.com/photos/5593197/pexels-photo-5593197.jpeg?auto=compress&cs=tinysrgb&w=1920",
  /* Rótulo / letrero comercial en fachada */
  "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1920",
  /* Señalética y rotulación corporativa */
  "https://images.pexels.com/photos/3974774/pexels-photo-3974774.jpeg?auto=compress&cs=tinysrgb&w=1920",
  /* Rótulo luminoso tipo banderola / lightbox */
  "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1920",
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
            <a
              href="https://wa.me/34620049872"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-montserrat text-lg font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
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
