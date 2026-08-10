"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const blogPosts = [
  {
    slug: "por-que-son-necesarios-los-rotulos",
    title: "Por Qué Son Necesarios los Rótulos para Tu Negocio",
    excerpt:
      "Descubre por qué la rotulación profesional es fundamental para la visibilidad de tu negocio. Un buen rótulo puede aumentar hasta un 80% el reconocimiento de marca.",
    category: "Visibilidad",
    readTime: "5 min",
    date: "2024-08-01",
    image: "/rotulos/images1.jpeg",
    alt: "Rótulo luminoso profesional para negocio visible desde la calle",
    keywords:
      "rotulación profesional, rótulos necesarios, visibilidad negocio, rótulos Paterna",
  },
  {
    slug: "como-un-rotulo-ayuda-a-destacar",
    title: "Cómo un Rótulo Ayuda a Destacar tu Negocio",
    excerpt:
      "Un rótulo bien diseñado trabaja 24/7 para ti. Analizamos cómo la rotulación estratégica transforma tu fachada en una herramienta de venta automática.",
    category: "Estrategia",
    readTime: "4 min",
    date: "2024-07-28",
    image: "/rotulos/images4.jpeg",
    alt: "Rótulo LED iluminado que destaca entre la competencia",
    keywords:
      "rótulo destacar, rotulación estratégica, fachada comercial, letras corpóreas Paterna",
  },
  {
    slug: "por-que-elegir-rotulistas-en-paterna",
    title: "Por Qué Elegir Rotulistas Profesionales en Paterna",
    excerpt:
      "Paterna es un centro empresarial en crecimiento. Descubre por qué elegir rotulistas locales en Paterna asegura calidad, cercanía y conocimientos del mercado valenciano.",
    category: "Local",
    readTime: "3 min",
    date: "2024-07-25",
    image: "/rotulos/images.jpeg",
    alt: "Letras corpóreas profesionales fabricadas por rotulistas en Paterna",
    keywords:
      "rotulistas Paterna, rotulación Valencia, fabricación rótulos Paterna, rotulistas profesionales",
  },
];

export function BlogSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useFadeIn({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useFadeIn({ threshold: 0.2 });

  return (
    <section id="blog" className="py-32 bg-surface-container-low">
      <div
        ref={sectionRef}
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/10 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Blog de Rotulación
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-primary">
            Consejos de Rotulistas en Paterna
          </h2>
          <p className="font-inter text-base text-on-surface max-w-2xl mx-auto leading-relaxed">
            Artículos sobre rotulación profesional, visibilidad comercial y cómo
            destacar tu negocio en Paterna, Valencia.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 150 + 200}ms` : "0ms",
              }}
            >
              {/* SEO: Hidden img */}
              <img
                src={post.image}
                alt={post.alt}
                title={post.title}
                className="sr-only"
                loading="lazy"
              />
              {/* Image with organic clip mask */}
              <div className="relative h-48 bg-surface-dim overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url('${post.image}')`,
                    clipPath: "ellipse(105% 92% at 50% 0%)",
                  }}
                  role="img"
                  aria-label={post.alt}
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 text-xs text-on-surface-variant">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime} lectura</span>
                </div>

                {/* Title */}
                <h3 className="font-montserrat text-xl font-bold mb-3 text-primary leading-tight">
                  <a
                    href={`/blog/${post.slug}`}
                    className="hover:text-secondary-container transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="font-inter text-sm text-on-surface leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-secondary-container font-inter text-sm font-semibold gap-1 group-hover:gap-2 transition-all"
                  aria-label={`Leer más sobre ${post.title}`}
                >
                  Leer artículo
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* SEO Keywords (hidden) */}
              <meta itemProp="keywords" content={post.keywords} />
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="font-inter text-base text-on-surface mb-6">
            ¿Necesitas asesoramiento sobre rotulación en Paterna?
          </p>
          <button
            className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-montserrat text-lg font-semibold btn-hover-effect shadow-lg"
            onClick={() => {
              const target = document.querySelector("#contacto");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Consulta Gratuita con Rotulistas
          </button>
        </div>
      </div>
    </section>
  );
}
