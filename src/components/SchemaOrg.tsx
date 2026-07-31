const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rótulos Paterna",
  description:
    "Expertos en rotulación profesional, vinilos y soluciones visuales a medida en Paterna, Valencia. Transformamos fachadas en herramientas de venta con cajones de luz, letras corpóreas y vinilos decorativos.",
  url: "https://rotulospaterna.com",
  telephone: "+34620049872",
  email: "info@rotulospaterna.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.5015,
    longitude: -0.4495,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  image: "https://rotulospaterna.com/logo.png",
  sameAs: [
    "https://www.facebook.com/rotulospaterna",
    "https://www.instagram.com/rotulospaterna",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Rotulación",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rotulación Luminosa",
          description:
            "Cajones de luz y letras retroiluminadas con tecnología LED de bajo consumo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinilos Decorativos",
          description:
            "Personalización total para escaparates y vehículos. Vinilos de corte, ácido o impresión digital.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Letras Corpóreas",
          description:
            "Elegancia y relieve para tu fachada. En acero, aluminio, PVC o metacrilato.",
        },
      },
    ],
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 39.5015,
      longitude: -0.4495,
    },
    geoRadius: "50000",
  },
};

export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
    />
  );
}
