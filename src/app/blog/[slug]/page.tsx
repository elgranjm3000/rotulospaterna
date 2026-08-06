import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

// Lista de artículos disponibles
const articleSlugs = [
  "por-que-son-necesarios-los-rotulos",
  "como-un-rotulo-ayuda-a-destacar",
  "por-que-elegir-rotulistas-en-paterna",
];

// Generar rutas estáticas
export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

const articles: Record<string, {
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  image: string;
  keywords: string;
}> = {
  "por-que-son-necesarios-los-rotulos": {
    title: "Por Qué Son Necesarios los Rótulos para Tu Negocio",
    description: "Descubre por qué la rotulación profesional es fundamental para la visibilidad de tu negocio. Un buen rótulo puede aumentar hasta un 80% el reconocimiento de marca en Paterna.",
    date: "2024-08-01",
    category: "Visibilidad",
    image: "/rotulos/images1.jpeg",
    keywords: "rotulación profesional Paterna, rótulos necesarios, visibilidad negocio, rótulos comerciales, letras corpóreas, rótulos Valencia",
    content: `
## La Importancia de los Rótulos en el Éxito Comercial

Cuando paseas por las calles de Paterna, ¿qué negocios notices primero? Aquellos con **rotulación profesional visible**. Un rótulo bien diseñado no es decoración; es una herramienta de venta que trabaja 24 horas al día, 7 días a la semana.

### El Rótulo como Primer Punto de Contacto

El **80% de las decisiones de compra** se toman antes de entrar al local. Tu rótulo es tu primer vendedor silencioso:

- **Visibilidad permanente** en la calle
- **Comunicación constante** de tu marca
- **Diferenciación** de la competencia
- **Generación de confianza** profesional

### Estadísticas que Hablan por Sí Solas

Los negocios con **rotulación profesional** experimentan:

- Aumento del **75% en reconocimiento de marca**
- Crecimiento del **50% en tráfico peatonal**
- Mejora del **60% en percepción de calidad**

### Tipos de Rótulos que Funcionan

No todos los rótulos son iguales. En Paterna, los rotulistas recomendamos:

1. **Rótulos Luminosos**: Visibilidad día y noche
2. **Letras Corpóreas**: Elegancia y durabilidad
3. **Vinilos Decorativos**: Versatilidad para cristaleras
4. **Rotulación Vehicular**: Publicidad móvil

### Por Qué Elegir Rotulistas en Paterna

Paterna es un centro empresarial estratégico en Valencia. Elegir **rotulistas locales** garantiza:

- **Conocimiento del mercado** local
- **Cercanía** para mantenimiento
- **Materiales adaptados** al clima valenciano
- **Cumplimiento de normativas** municipales

### Inversión, No Gasto

Un rótulo profesional es una inversión con retorno medible:

> "El rótulo es el activo más rentable de un negocio local. Cada persona que pasa por tu fachada es un cliente potencial, y tu rótulo es tu carta de presentación."

### El Momento de Actuar es Ahora

Si tu competencia ya tiene rotulación profesional y tú no, estás perdiendo clientes cada día. Los rotulistas en Paterna están listos para transformar tu fachada en una herramienta de venta.

## ¿Listo para Destacar en Paterna?

Contacta con nuestros rotulistas profesionales y descubre cómo la rotulación estratégica puede transformar tu negocio.
    `,
  },
  "como-un-rotulo-ayuda-a-destacar": {
    title: "Cómo un Rótulo Ayuda a Destacar Tu Negocio",
    description: "Un rótulo bien diseñado trabaja 24/7 para ti. Analizamos cómo la rotulación estratégica transforma tu fachada en una herramienta de venta automática.",
    date: "2024-07-28",
    category: "Estrategia",
    image: "/rotulos/images4.jpeg",
    keywords: "rótulo destacar, rotulación estratégica Paterna, letras corpóreas Valencia, fachada comercial, rótulos luminosos",
    content: `
## Cómo un Rótulo Transforma Tu Fachada en Ventas

Tu fachada es tu mejor vendedor. Aprende cómo los **rotulistas profesionales en Paterna** convierten una simple placa en una máquina de generar clientes.

### El Factor "Primera Impresión"

Tienes **7 segundos** para causar impacto. Lo que un cliente ve desde la calle define si entra o sigue caminando:

✅ Rótulo visible = Confianza profesional
✅ Letras iluminadas = Negocio activo
✅ Diseño cuidado = Calidad percibida

### Psicología del Color en Rotulación

Los rotulistas en Valencia saben que cada color comunica:

- **Amarillo/Dorado**: Atención, lujo, premium
- **Rojo/Naranja**: Energía, urgencia, comida
- **Azul/Turquesa**: Confianza, profesionalidad
- **Verde**: Salud, naturaleza, bienestar
- **Blanco sobre negro**: Minimalismo, modernidad

### Rótulos que Trabajan Nocturnamente

La **rotulación luminosa** en Paterna es vital porque:

- Comercios abiertos hasta tarde necesitan visibilidad
- El tráfico nocturno no ve rótulos sin iluminación
- Los **LED bajan consumo** un 80% vs neón tradicional
- Durabilidad de 50,000+ horas

### Caso de Éxito: Clínicas Veterinarias

Las clínicas veterinarias en Valencia con **rótulos LED verdes** reportan:

- Clientes que llegan "porque vi el rótulo desde lejos"
- Reconocimiento instantáneo como "servicio de salud animal"
- Aumento del **45% en nuevas consultas**

### El Poder de las Letras Corpóreas

Las **letras corpóreas en Paterna** comunican:

- Seriedad y permanencia (no es un negocio temporal)
- Inversión en calidad (materiales duraderos)
- Diferenciación de negocios genéricos

### Rotulación Vehicular: Tu Marca en Movimiento

La rotulación de vehículos en Paterna ofrece:

- **12,000+ impactos diarios** en promedio
- Publicidad en toda Valencia
- Coste por impresión más bajo que cualquier otro medio

### Errores Comunes en Rotulación

Evita estos errores que rotulistas profesionales ven demasiado:

❌ Rótulo demasiado pequeño para leer desde la calle
❌ Colores que no contrastan con el fondo
❌ Tipografía ilegible
❌ Falta de iluminación en horarios nocturnos
❌ Ubicación poco visible en la fachada

### La Fórmula Ganadora

Rotulistas en Paterna recomiendan:

**Visibilidad + Legibilidad + Durabilidad = Rótulo que Vende**

### Medición del Resultado

Un rótulo efectivo se mide en:

- Personas que entran "por el rótulo"
- Llamadas preguntando "¿dónde están ubicados?"
- Reconocimiento en redes sociales

## Transforma Tu Fachada Hoy

Los rotulistas profesionales en Paterna están listos para convertir tu fachada en tu mejor vendedor.
    `,
  },
  "por-que-elegir-rotulistas-en-paterna": {
    title: "Por Qué Elegir Rotulistas Profesionales en Paterna",
    description: "Paterna es un centro empresarial en crecimiento. Descubre por qué elegir rotulistas locales en Paterna asegura calidad, cercanía y conocimientos del mercado valenciano.",
    date: "2024-07-25",
    category: "Local",
    image: "/rotulos/images.jpeg",
    keywords: "rotulistas Paterna, rotulación Valencia, fabricación rótulos Paterna, rotulistas profesionales, rótulos comerciales",
    content: `
## Por Qué Elegir Rotulistas Profesionales en Paterna

Paterna se ha consolidado como uno de los centros empresariales más dinámicos de Valencia. Descubre por qué elegir **rotulistas locales** es la mejor decisión para tu negocio.

### Paterna: Hub Empresarial en Crecimiento

Con más de **5,000 empresas** y un crecimiento anual del **8%**, Paterna ofrece:

- Polígonos industriales activos
- Zonas comerciales con alta afluencia
- Conexión estratégica con Valencia
- Población en aumento (+3% anual)

### Ventajas de Rotulistas Locales en Paterna

Elegir rotulistas en Paterna significa:

#### 1. Conocimiento del Mercado Local

Los rotulistas valencianos entienden:

- Normativas municipales específicas
- Clima y condiciones meteorológicas
- Preferencias estéticas locales
- Competencia en tu sector

#### 2. Cercanía y Mantenimiento

La **rotulación en Paterna** con profesionales locales ofrece:

- Respuesta rápida ante incidencias
- Servicio técnico cercano
- Sin costes de desplazamiento externos
- Relación comercial a largo plazo

#### 3. Materiales Adaptados al Clima

Rotulistas en Valencia seleccionan materiales para:

- Resistir humedad del Mediterráneo
- Soportar temperaturas extremas
- Mantener color con sol intenso
- Durabilidad +10 años en exteriores

### Tipos de Rotulación que Destacan en Paterna

#### Letras Corpóreas para Polígonos Industriales

Las empresas en polígonos de Paterna prefieren:

- **Letras de acero inoxidable**: Durabilidad industrial
- **Cajones de luz LED**: Visibilidad en turnos nocturnos
- **Rotulación vehicular**: Flotas identificadas

#### Rótulos para Zonas Comerciales

Los comercios en áreas céntricas optan por:

- **Rótulos luminosos clásicos**: Estilo tradicional
- **Vinilos decorativos**: Promociones temporales
- **Cristaleras**: Mostrar productos y servicios

### Inversión Inteligente en Rotulación

Comparativa de costes con rotulistas en Paterna:

| Servicio | Coste Promedio | Durabilidad |
|----------|----------------|-------------|
| Letras Corpóreas | 600-1,500€ | 15+ años |
| Cajón de Luz LED | 800-2,000€ | 10+ años |
| Vinilo Vehículo | 150-400€ | 5+ años |
| Rotulación Fachada | 400-1,200€ | 10+ años |

### El Valor Local: Rótulos que Entienden Tu Negocio

Rotulistas en Paterna entienden:

- La competencia en tu sector
- Lo que funciona en tu zona
- Cómo destacar entre vecinos
- Normativas de la comunidad

### Casos de Éxito en Paterna

Empresas locales que invirtieron en rotulación profesional:

- **Restaurante en centro**: +40% clientes nuevos en 3 meses
- **Taller industrial**: Contratos grandes tras imagen profesional
- **Tienda moda**: Tráfico aumentó tras rótulo luminoso

### El Proceso con Rotulistas Paterna

Trabajar con rotulistas profesionales en Paterna implica:

1. **Visita gratuita** a tu local
2. **Diseño personalizado** según tu marca
3. **Fabricación propia** en taller local
4. **Instación con garantía** incluida
5. **Mantenimiento** post-venta

### Paterna vs Valencia: La Elección Inteligente

Elegir rotulistas en Paterna vs Valencia ciudad:

✅ **Sin costes extra** por desplazamiento
✅ **Respuesta inmediata** ante incidencias
✅ **Conocimiento** de normativas locales
✅ **Relación personal** con el rotulista
✅ **Apoyo a empresas** de la comunidad

## Rotulistas en Paterna: Tu Mejor Inversión

Si tienes un negocio en Paterna o alrededores, elegir rotulistas locales es la decisión más inteligente.

**Contacta hoy** y descubre cómo la rotulación profesional puede transformar tu negocio.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Artículo no encontrado - Rótulos Paterna",
    };
  }

  return {
    title: `${article.title} | Rótulos Paterna`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
      authors: ["Rótulos Paterna"],
      locale: "es_ES",
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Artículo no encontrado</h1>
      </div>
    );
  }

  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface">
        <Header />
        <main className="flex-1">
          <article className="bg-surface">
            {/* Hero del Artículo */}
            <div className="relative h-64 md:h-80 bg-surface-dim overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${article.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex flex-col justify-end pb-8">
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full w-fit mb-4">
                  {article.category}
                </span>
                <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-2">
                  {article.title}
                </h1>
                <time className="font-inter text-sm text-white/80">
                  {new Date(article.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>

            {/* Contenido del Artículo */}
            <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-16">
              <div className="prose prose-lg max-w-none">
                {article.content.split("\n").map((line, index) => {
                  // Helper: convierte **texto** en HTML real
                  const formatLine = (text: string) =>
                    text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="font-montserrat text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
                        {line.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="font-montserrat text-xl md:text-2xl font-semibold text-primary mt-8 mb-4">
                        {line.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="font-inter text-base text-on-surface leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: formatLine(line.replace("- ", "")) }} />
                      </li>
                    );
                  }
                  if (line.startsWith("✅") || line.startsWith("❌")) {
                    return (
                      <li key={index} className="font-inter text-base text-on-surface leading-relaxed flex items-start gap-2">
                        <span className="text-2xl">{line.startsWith("✅") ? "✅" : "❌"}</span>
                        <span dangerouslySetInnerHTML={{ __html: formatLine(line.substring(2)) }} />
                      </li>
                    );
                  }
                  if (line.startsWith("> ")) {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-secondary-container pl-4 py-2 my-6 bg-secondary-container/10 rounded-r"
                      >
                        <p className="font-inter text-lg italic text-on-surface" dangerouslySetInnerHTML={{ __html: formatLine(line.replace("> ", "")) }} />
                      </blockquote>
                    );
                  }
                  if (line.includes("|")) {
                    return (
                      <div key={index} className="my-8 overflow-x-auto">
                        <table className="min-w-full divide-y divide-outline-variant">
                          <thead className="bg-surface-container">
                            <tr>
                              {line.split("|").filter(Boolean).map((cell, i) => (
                                <th
                                  key={i}
                                  className="px-6 py-3 text-left text-xs font-medium text-on-surface uppercase tracking-wider"
                                  dangerouslySetInnerHTML={{ __html: formatLine(cell.trim()) }}
                                />
                              ))}
                            </tr>
                          </thead>
                        </table>
                      </div>
                    );
                  }
                  if (line.trim() === "") {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="font-inter text-base text-on-surface leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatLine(line) }} />
                  );
                })}
              </div>

              {/* CTA Final */}
              <div className="mt-16 p-8 bg-secondary-container/10 rounded-2xl text-center">
                <h3 className="font-montserrat text-2xl font-bold mb-4 text-primary">
                  ¿Necesitas Rotulación Profesional en Paterna?
                </h3>
                <p className="font-inter text-base text-on-surface mb-6">
                  Contacta con nuestros rotulistas para una consulta gratuita
                </p>
                <a
                  href="/#contacto"
                  className="inline-block bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-montserrat text-lg font-semibold btn-hover-effect shadow-lg"
                >
                  Pedir Presupuesto Gratis
                </a>
              </div>

              {/* Artículos Relacionados */}
              <div className="mt-16">
                <h3 className="font-montserrat text-xl font-bold mb-6 text-primary">
                  Artículos Relacionados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(articles)
                    .filter(([articleSlug]) => articleSlug !== slug)
                    .slice(0, 3)
                    .map(([slug, relatedArticle]) => (
                      <a
                        key={slug}
                        href={`/blog/${slug}`}
                        className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-xs text-secondary-container font-semibold">
                          {relatedArticle.category}
                        </span>
                        <h4 className="font-montserrat text-base font-semibold mt-2 mb-2 text-primary">
                          {relatedArticle.title}
                        </h4>
                        <p className="font-inter text-sm text-on-surface-variant line-clamp-2">
                          {relatedArticle.description}
                        </p>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
