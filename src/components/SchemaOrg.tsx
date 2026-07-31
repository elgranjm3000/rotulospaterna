const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rótulos Paterna",
  description:
    "Fabricación de rótulos en Paterna: letras corpóreas, rotulación de fachadas, vinilos, rotulación de vehículos y rótulos luminosos. Rotulistas en Paterna desde 2008. Presupuesto sin compromiso.",
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
    name: "Servicios de Rotulación en Paterna",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fabricación de Rótulos en Paterna",
          description:
            "Diseño y fabricación de rótulos a medida en Paterna. Rótulos comerciales, señalética corporativa y banderolas luminosas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Letras Corpóreas en Paterna",
          description:
            "Fabricación de letras corpóreas en acero, aluminio, PVC y metacrilato en Paterna. Con iluminación LED integrada.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rotulación de Fachadas en Paterna",
          description:
            "Rotulación integral de fachadas y escaparates en Paterna. Vinilos de corte, microperforados y láminas de control solar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rotulación de Vehículos en Paterna",
          description:
            "Rotulación integral de coches, furgonetas y camiones en Paterna. Vinilos de alta resistencia y diseño personalizado.",
        },
      },
    ],
  },
  areaServed: {
    "@type": "City",
    name: "Paterna",
    sameAs: "https://es.wikipedia.org/wiki/Paterna",
  },
  knowsAbout: [
    "Rótulos en Paterna",
    "Rotulación de fachadas Paterna",
    "Letras corpóreas Paterna",
    "Rotulación de vehículos Paterna",
    "Vinilos decorativos Paterna",
    "Rótulos luminosos Paterna",
    "Fabricación de rótulos Paterna",
  ],
};

export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
    />
  );
}
