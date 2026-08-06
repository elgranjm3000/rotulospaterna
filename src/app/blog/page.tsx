import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Rotulación en Paterna | Consejos y Guías Profesionales",
  description:
    "Blog sobre rotulación profesional en Paterna. Artículos sobre letras corpóreas, rótulos luminosos, vinilos, rotulación de fachadas y vehículos. Consejos de rotulistas expertos.",
  keywords: [
    "blog rotulación Paterna",
    "consejos rótulos",
    "guía letras corpóreas",
    "rotulación fachadas Paterna",
    "rotulistas Paterna",
    "rótulos luminosos Valencia",
  ],
};

const articles = [
  {
    slug: "por-que-son-necesarios-los-rotulos",
    title: "Por Qué Son Necesarios los Rótulos para Tu Negocio",
    excerpt:
      "Descubre por qué la rotulación profesional es fundamental para la visibilidad de tu negocio en Paterna.",
    category: "Visibilidad",
    date: "2024-08-01",
    image: "/rotulos/images1.jpeg",
  },
  {
    slug: "como-un-rotulo-ayuda-a-destacar",
    title: "Cómo un Rótulo Ayuda a Destacar Tu Negocio",
    excerpt:
      "Un rótulo bien diseñado trabaja 24/7 para ti. La rotulación estratégica transforma tu fachada.",
    category: "Estrategia",
    date: "2024-07-28",
    image: "/rotulos/images4.jpeg",
  },
  {
    slug: "por-que-elegir-rotulistas-en-paterna",
    title: "Por Qué Elegir Rotulistas Profesionales en Paterna",
    excerpt:
      "Paterna es un centro empresarial en crecimiento. Elegir rotulistas locales asegura calidad.",
    category: "Local",
    date: "2024-07-25",
    image: "/rotulos/images.jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-surface-dim to-surface-container py-24 md:py-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container/20 text-secondary-container font-inter text-sm font-bold uppercase tracking-wider mb-4">
            Blog
          </span>
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4 text-primary">
            Blog de Rotulación en Paterna
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Consejos, guías y novedades sobre rotulación profesional, letras
            corpóreas, vinilos y mucho más. Escrito por rotulistas expertos en
            Paterna.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 bg-surface-dim overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <time className="font-inter text-xs text-on-surface-variant">
                    {new Date(article.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="font-montserrat text-lg font-bold mt-2 mb-3 text-primary group-hover:text-secondary-container transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
