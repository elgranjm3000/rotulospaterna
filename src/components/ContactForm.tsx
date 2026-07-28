"use client";

import { useState, FormEvent } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const contactInfo = [
  {
    icon: "call",
    label: "+34 960 000 000",
    href: "tel:+34960000000",
    description: "Llámanos directamente",
  },
  {
    icon: "mail",
    label: "info@rotulospaterna.com",
    href: "mailto:info@rotulospaterna.com",
    description: "Envíanos un email",
  },
  {
    icon: "location_on",
    label: "C/ Principal, 123",
    sublabel: "Paterna, Valencia",
    href: null,
    description: "Visítanos en taller",
  },
];

const projectTypes = [
  "Rotulación Luminosa",
  "Vinilos",
  "Letras Corpóreas",
  "Otro",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.1 });
  const { ref: mapRef, isVisible: mapVisible } = useFadeIn({ threshold: 0.2 });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section id="contacto" className="py-32 bg-gradient-to-b from-surface-container-lowest to-surface">
      <div
        ref={sectionRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/10 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-primary">
            ¿Listo para destacar?
          </h2>
          <p className="font-inter text-lg text-on-surface max-w-2xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto y te daremos una solución personalizada sin compromiso.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden order-2 lg:order-1">
              {submitStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg">
                    <span className="material-symbols-outlined text-white text-5xl">
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold mb-3 text-primary">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-inter text-lg text-on-surface-variant">
                    Te contactaremos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-inter text-sm font-bold text-primary uppercase tracking-wide">
                        Nombre completo
                      </label>
                      <input
                        required
                        className="w-full px-4 py-4 rounded-xl border-2 border-surface-container bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 outline-none transition-all font-inter text-base"
                        placeholder="Tu nombre"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-inter text-sm font-bold text-primary uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        required
                        className="w-full px-4 py-4 rounded-xl border-2 border-surface-container bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 outline-none transition-all font-inter text-base"
                        placeholder="email@ejemplo.com"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-inter text-sm font-bold text-primary uppercase tracking-wide">
                      Teléfono
                    </label>
                    <input
                      className="w-full px-4 py-4 rounded-xl border-2 border-surface-container bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 outline-none transition-all font-inter text-base"
                      placeholder="+34 600 000 000"
                      type="tel"
                      name="phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-inter text-sm font-bold text-primary uppercase tracking-wide">
                      Tipo de proyecto
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-4 py-4 rounded-xl border-2 border-surface-container bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 outline-none transition-all appearance-none font-inter text-base cursor-pointer font-medium"
                        name="projectType"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-inter text-sm font-bold text-primary uppercase tracking-wide">
                      Detalles del proyecto
                    </label>
                    <textarea
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-surface-container bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/20 outline-none transition-all resize-none font-inter text-base leading-relaxed"
                      placeholder="Describe qué necesitas (dimensiones, ubicación, plazos...)"
                      rows={4}
                      name="message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-secondary-container to-amber-500 text-on-secondary-container py-5 rounded-xl font-montserrat text-xl font-bold btn-hover-effect disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">refresh</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">send</span>
                        Enviar Solicitud
                      </>
                    )}
                  </button>

                  <p className="font-inter text-xs text-on-surface-variant/70 text-center flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Tus datos están protegidos. Política de privacidad.
                  </p>
                </form>
              )}
            </div>

            {/* Info & Map Column */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Contact Info Card - Maximum Contrast */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-surface-container">
                <div className="mb-8">
                  <h3 className="font-montserrat text-2xl font-bold mb-2 text-primary">
                    Información de contacto
                  </h3>
                  <p className="font-inter text-base text-on-surface-variant">
                    Estamos aquí para ayudarte con tu proyecto
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-2xl border-2 border-surface-container hover:border-secondary-container/30 transition-all group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary-container to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white text-2xl">
                          {info.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-xs font-bold text-secondary-container uppercase tracking-wider mb-1">
                          {info.description}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-montserrat text-lg font-bold text-primary hover:text-secondary-container transition-colors block"
                          >
                            {info.label}
                          </a>
                        ) : (
                          <>
                            <span className="font-montserrat text-lg font-bold text-primary block">
                              {info.label}
                            </span>
                            {info.sublabel && (
                              <span className="font-inter text-base text-on-surface-variant">
                                {info.sublabel}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schedule Section - High Contrast */}
                <div className="bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-2xl p-6 mb-8">
                  <h4 className="font-inter text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container text-xl">
                      schedule
                    </span>
                    Horario de atención
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-base font-semibold text-primary">
                        Lunes - Viernes
                      </span>
                      <span className="font-inter text-base font-bold text-secondary-container">
                        9:00 - 19:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-base font-semibold text-primary">
                        Sábados
                      </span>
                      <span className="font-inter text-base font-bold text-secondary-container">
                        10:00 - 14:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links - Enhanced */}
                <div>
                  <p className="font-inter text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    Síguenos
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl bg-surface-container-low border-2 border-surface-container flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-white transition-all duration-300 group"
                      aria-label="Facebook"
                    >
                      <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:scale-110 transition-all">
                        share
                      </span>
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl bg-surface-container-low border-2 border-surface-container flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-white transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:scale-110 transition-all">
                        photo_camera
                      </span>
                    </a>
                    <a
                      href="#"
                      className="w-14 h-14 rounded-xl bg-surface-container-low border-2 border-surface-container flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-white transition-all duration-300 group"
                      aria-label="WhatsApp"
                    >
                      <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:scale-110 transition-all">
                        chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div
                ref={mapRef}
                className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
                  mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="relative h-72 bg-surface-container">
                  {/* Map Label */}
                  <div className="absolute top-4 left-4 z-10 bg-white px-5 py-3 rounded-xl shadow-lg border-2 border-surface-container">
                    <p className="font-montserrat text-base font-bold text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary-container text-xl">
                        location_on
                      </span>
                      Rótulos Paterna
                    </p>
                    <p className="font-inter text-sm text-on-surface-variant font-medium">
                      Paterna, Valencia
                    </p>
                  </div>

                  {/* Google Maps iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-0.4495!3d39.5015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f123456789%3A0x123456789abcdef!2sPaterna%2C%20Valencia!5e0!3m2!1ses!2ses!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title="Ubicación de Rótulos Paterna en Paterna, Valencia"
                  />

                  {/* Map Overlay Button */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Paterna,+Valencia,+España"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-10 bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl font-inter text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">
                      directions
                    </span>
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
