"use client";

import { useEffect, useState, useLayoutEffect, useRef } from "react";

/* Cinemagraph: video de fondo con efecto de luz viva sobre rótulos */
const heroVideo =
  "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4";

const heroPoster =
  "https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1920";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setVideoLoaded(true);
      video.play().catch(() => setVideoError(true));
    };

    const handleError = () => setVideoError(true);

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("error", handleError);

    // Timeout fallback: si en 8s no carga, usar poster
    const timeout = setTimeout(() => {
      if (!videoLoaded) setVideoError(true);
    }, 8000);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("error", handleError);
      clearTimeout(timeout);
    };
  }, [videoLoaded]);

  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-dim">
      {/* === CINEMAGRAPH BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        {/* Video layer (cinemagraph) */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            poster={heroPoster}
            preload="auto"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        {/* Fallback static image with cinemagraph-like glow animation */}
        {(videoError || !videoLoaded) && (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${heroPoster}')` }}
          />
        )}

        {/* Overlay: oscurece solo el lado izquierdo para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />

        {/* Cinemagraph light effect: glow pulsante sutil sobre la zona del rótulo */}
        <div
          className="absolute z-10 opacity-30 animate-pulse"
          style={{
            top: "15%",
            right: "20%",
            width: "200px",
            height: "60px",
            background:
              "radial-gradient(ellipse, rgba(254,166,25,0.4) 0%, transparent 70%)",
            filter: "blur(20px)",
            animation: "cinemaPulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute z-10 opacity-20"
          style={{
            top: "18%",
            right: "25%",
            width: "250px",
            height: "80px",
            background:
              "radial-gradient(ellipse, rgba(254,166,25,0.3) 0%, transparent 70%)",
            filter: "blur(30px)",
            animation: "cinemaPulse 6s ease-in-out 1s infinite",
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/90 text-on-secondary-container font-inter text-xs font-bold uppercase tracking-wider shadow-lg">
              Rótulos en Paterna · Desde 2008
            </span>
          </div>

          {/* H1 - SEO optimizado */}
          <h1
            className={`font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-on-surface tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Rótulos en Paterna que hacen tu negocio{" "}
            <span className="text-secondary-container">imposible de ignorar</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`font-inter text-lg md:text-xl text-on-surface mb-10 max-w-xl leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Letras corpóreas, rotulación de fachadas, vinilos y rotulación de
            vehículos en Paterna. Fabricación propia. Presupuesto sin
            compromiso en 24h.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <button
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-montserrat text-lg md:text-xl font-bold btn-hover-effect flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              onClick={() => handleScrollTo("#contacto")}
            >
              Solicitar Presupuesto Gratis
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <a
              href="https://wa.me/34620049872"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-montserrat text-lg md:text-xl font-bold btn-hover-effect flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 flex flex-wrap gap-6 md:gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {[
              { icon: "verified", text: "+15 años experiencia" },
              { icon: "star", text: "+500 proyectos" },
              { icon: "location_on", text: "Paterna y alrededores" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary-container text-lg">
                  {item.icon}
                </span>
                <span className="font-inter text-sm font-semibold text-primary">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="animate-bounce bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <span className="material-symbols-outlined text-primary">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
}
