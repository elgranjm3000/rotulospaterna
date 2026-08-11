"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

export function ManufacturingDetail() {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-surface-container-lowest">
      <div
        ref={ref}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/10 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Fabricación propia
          </span>
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold mb-4 text-primary">
            Cómo fabricamos tus rótulos
          </h2>
          <p className="font-inter text-base md:text-lg text-on-surface max-w-2xl mx-auto leading-relaxed">
            Todo el proceso de fabricación se realiza en nuestro taller de Paterna.
            Desde el diseño hasta el montaje final, controlamos cada detalle para
            entregarte un producto impecable.
          </p>
        </div>

        {/* === 1. Rótulos Luminosos === */}
        <div className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/rotulos/images3.jpeg')" }}
                  role="img"
                  aria-label="Fabricación de rótulos luminosos y banderolas LED en taller"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-black/40 backdrop-blur-md text-white font-inter text-xs font-bold uppercase tracking-wider border border-white/10">
                    Rótulos Luminosos
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`order-1 lg:order-2 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="inline-flex items-center gap-2 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-lg">lightbulb</span>
                Iluminación profesional
              </span>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-6">
                Fabricación de Rótulos Luminosos
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Cajones de luz LED
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      Estructura de aluminio con difusor de metacrilato opalino e
                      iluminación LED de bajo consumo. Acabado impecable con
                      iluminación uniforme sin puntos oscuros. Ideal para fachadas
                      comerciales y señalética corporativa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Banderolas luminosas
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      Fabricadas en aluminio lacado con vinilo impreso de alta
                      resolución retroiluminado. Visibilidad 24 horas. Perpendiculares
                      a la fachada para máxima captación de tráfico peatonal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Materiales y acabados
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      LEDs de alta eficiencia (mínimo 50.000 horas de vida útil),
                      metacrilato de 3 mm, aluminio lacado al horno y vinilos de
                      impresión ecosolvente con protección UV. Todo resistente a la
                      intemperie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Tiempos de fabricación
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      De 5 a 12 días laborables según dimensiones y complejidad.
                      Incluye diseño, fabricación, montaje eléctrico y control de
                      calidad antes de la instalación.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-inter text-sm font-bold hover:shadow-lg transition-all"
              >
                Solicitar presupuesto para rótulo luminoso
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* === 2. Letras Corpóreas === */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="inline-flex items-center gap-2 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-lg">text_fields</span>
                Volumen y relieve
              </span>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-6">
                Fabricación de Letras Corpóreas
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Letras corpóreas de aluminio
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      Fabricadas con chapa de aluminio de 2 mm, laterales de 20 a 40 mm
                      de profundidad para dar relieve. Acabado lacado al horno en
                      cualquier color RAL, con posibilidad de iluminación LED interior
                      (letras retroiluminadas) o frontal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Letras de metacrilato y PVC
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      Corte CNC de precisión en metacrilato de colores o transparente.
                      Ideales para interiores, escaparates y recepciones. Acabado
                      pulido en cantos y posibilidad de montaje con separadores
                      invisibles que dan efecto flotante en la pared.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Letras de acero inoxidable
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      Acero inoxidable AISI 304 de 1.5 mm con acabado pulido espejo,
                      cepillado o lacado. Máxima resistencia a la corrosión para
                      exteriores. Laterales soldados y pulidos artesanalmente. La
                      opción más premium y duradera.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-container/15 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat text-base font-bold text-primary mb-1">
                      Iluminación LED integrada
                    </h4>
                    <p className="font-inter text-sm text-on-surface leading-relaxed">
                      LEDs de 24V con drivers estancos IP67. Iluminación interior que
                      crea un halo de luz alrededor de cada letra (efecto halo) o
                      iluminación frontal directa. Consumo mínimo, visibilidad máxima.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-inter text-sm font-bold hover:shadow-lg transition-all"
              >
                Solicitar presupuesto para letras corpóreas
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>

            {/* Image */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/rotulos/corporea-detalle.jpeg')" }}
                  role="img"
                  aria-label="Letras corpóreas doradas fabricadas en taller"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-black/40 backdrop-blur-md text-white font-inter text-xs font-bold uppercase tracking-wider border border-white/10">
                    Letras Corpóreas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
