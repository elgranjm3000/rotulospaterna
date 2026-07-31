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
  title: "Rótulos Paterna | Fabricación e Instalación de Rótulos en Paterna",
  description:
    "Rótulos en Paterna: fabricación de letras corpóreas, rotulación de fachadas, vinilos y rotulación de vehículos en Paterna. Expertos en rótulos luminosos y banderolas LED. Presupuesto sin compromiso.",
  keywords: [
    "rótulos Paterna",
    "rotulación Paterna",
    "letras corpóreas Paterna",
    "rotulación fachadas Paterna",
    "rotulación vehículos Paterna",
    "fabricación rótulos Paterna",
    "rótulos luminosos Paterna",
    "vinilos Paterna",
    "banderolas Paterna",
    "cajones luz Paterna",
    "rótulos Valencia",
    "rotulistas Paterna",
  ],
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
    title: "Rótulos Paterna | Fabricación de Rótulos en Paterna",
    description:
      "Rótulos en Paterna: letras corpóreas, rotulación de fachadas, vinilos, rotulación de vehículos y rótulos luminosos. Fabricación propia en Paterna. ¡Presupuesto gratis!",
    siteName: "Rótulos Paterna",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rótulos Paterna - Fabricación de rótulos en Paterna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rótulos Paterna | Rótulos en Paterna",
    description:
      "Fabricación de rótulos, letras corpóreas, rotulación de fachadas y vehículos en Paterna. Expertos en rotulación. ¡Presupuesto gratis!",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://rotulospaterna.com",
  },
  other: {
    "geo.region": "ES-VC",
    "geo.placename": "Paterna",
    "geo.position": "39.5015;-0.4495",
    "ICBM": "39.5015, -0.4495",
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
