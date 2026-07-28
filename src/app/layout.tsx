import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "@/components/SchemaOrg";

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

export const metadata: Metadata = {
  title: "Rótulos Paterna | Soluciones Visuales Profesionales en Valencia",
  description: "Expertos en rotulación profesional, vinilos y soluciones visuales a medida en Paterna, Valencia. Transformamos fachadas en herramientas de venta con cajones de luz, letras corpóreas y vinilos decorativos.",
  keywords: ["rótulos", "rotulación", "vinilos", "letras corpóreas", "cajones luz", "Paterna", "Valencia", "rotulación profesional", "vinilos decorativos", "rotulación luminosa"],
  authors: [{ name: "Rótulos Paterna" }],
  creator: "Rótulos Paterna",
  publisher: "Rótulos Paterna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rotulospaterna.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://rotulospaterna.com",
    title: "Rótulos Paterna | Soluciones Visuales Profesionales en Valencia",
    description: "Expertos en rotulación profesional, vinilos y soluciones visuales a medida en Paterna, Valencia.",
    siteName: "Rótulos Paterna",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rótulos Paterna - Soluciones Visuales Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rótulos Paterna | Soluciones Visuales Profesionales en Valencia",
    description: "Expertos en rotulación profesional, vinilos y soluciones visuales a medida en Paterna, Valencia.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://rotulospaterna.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
