"use client";

import { useState, FormEvent } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const projectTypes = [
  "Rotulación Luminosa",
  "Vinilos",
  "Letras Corpóreas",
  "Rotulación de Vehículos",
  "Fabricación de Rótulos",
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
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
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
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-surface-container">
                <div className="mb-8">
                  <h3 className="font-montserrat text-2xl font-bold mb-2 text-primary">
                    Contacta con nosotros
                  </h3>
                  <p className="font-inter text-base text-on-surface-variant">
                    Elige el canal que prefieras. Te respondemos rápido.
                  </p>
                </div>

                {/* WhatsApp - Prominent */}
                <a
                  href="https://wa.me/34620049872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all group mb-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs font-bold text-green-600 uppercase tracking-wider mb-1">
                      WhatsApp - Respuesta rápida
                    </p>
                    <span className="font-montserrat text-xl font-bold text-green-700">
                      +34 620 049 872
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-green-500 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+34620049872"
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-2xl border-2 border-surface-container hover:border-secondary-container/30 transition-all group mb-3"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-container to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">
                      call
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs font-bold text-secondary-container uppercase tracking-wider mb-1">
                      Llámanos
                    </p>
                    <span className="font-montserrat text-lg font-bold text-primary block">
                      +34 620 049 872
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@rotulospaterna.vercel.app"
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-2xl border-2 border-surface-container hover:border-secondary-container/30 transition-all group mb-8"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-container to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">
                      mail
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs font-bold text-secondary-container uppercase tracking-wider mb-1">
                      Escríbenos
                    </p>
                    <span className="font-montserrat text-lg font-bold text-primary block">
                      info@rotulospaterna.vercel.app
                    </span>
                  </div>
                </a>

                {/* Schedule */}
                <div className="bg-gradient-to-r from-surface-container-lowest to-surface-container-low rounded-2xl p-6">
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
              </div>

              {/* Google Map - Wide view of Paterna */}
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
                      Área de servicio
                    </p>
                    <p className="font-inter text-sm text-on-surface-variant font-medium">
                      Paterna y alrededores
                    </p>
                  </div>

                  {/* Google Maps - Wide view of Paterna (zoom level 13) */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24614.20948133683!2d-0.4615!3d39.5015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f5e5e5e5e5e5%3A0x1234567890abcdef!2sPaterna%2C+Valencia!5e0!3m2!1ses!2ses!4v1722000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title="Paterna, Valencia - Área de servicio de Rótulos Paterna"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
