"use client";

import { useEffect, useState, useRef } from "react";

/* Video cinemagraph de fondo - escena nocturna con rótulos luminosos */
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4";

/* Imagen estática solo como respaldo si el video falla */
const HERO_POSTER =
  "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1920";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);

    video.addEventListener("canplay", onReady);
    video.addEventListener("error", onError);

    // Si no carga en 6s, mostrar fallback
    const t = setTimeout(() => {
      if (!videoReady) setVideoFailed(true);
    }, 6000);

    return () => {
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
      clearTimeout(t);
    };
  }, []);

  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const showVideo = videoReady && !videoFailed;
  const showPoster = !videoReady || videoFailed;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* === VIDEO BACKGROUND (Cinemagraph) === */}
      <div className="absolute inset-0 z-0">
        {/* Video - siempre se renderiza, pero se oculta si falla */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          poster={HERO_POSTER}
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Fallback: imagen estática si el video tarda o falla */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            showPoster ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${HERO_POSTER}')` }}
        />
      </div>

      {/* === OVERLAY OSCURO para legibilidad del texto === */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* === TEXTO (H1 + subtítulo + CTAs) === */}
      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-secondary-container text-on-secondary-container font-inter text-xs font-bold uppercase tracking-wider shadow-lg">
              Rótulos en Paterna · Desde 2008
            </span>
          </div>

          {/* H1 */}
          <h1
            className={`mt-6 font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none text-white drop-shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Rótulos en Paterna que hacen tu negocio{" "}
            <span className="text-secondary-container drop-shadow-lg">
              imposible de ignorar
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className={`mt-6 font-inter text-lg md:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-md transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
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
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-montserrat text-lg font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg"
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
                className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
              >
                <span className="material-symbols-outlined text-secondary-container text-lg">
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
        <div className="animate-bounce bg-white/15 backdrop-blur-md rounded-full p-2 border border-white/20">
          <span className="material-symbols-outlined text-white">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}
