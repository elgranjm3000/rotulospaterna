import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rotulospaterna.vercel.app";
  const now = new Date();

  const blogSlugs = [
    "por-que-son-necesarios-los-rotulos",
    "como-un-rotulo-ayuda-a-destacar",
    "por-que-elegir-rotulistas-en-paterna",
  ];

  return [
    // Home
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // Secciones de la landing
    {
      url: `${baseUrl}/#servicios`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#nosotros`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contacto`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Páginas
    {
      url: `${baseUrl}/proceso`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Artículos del blog
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Legales
    {
      url: `${baseUrl}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
