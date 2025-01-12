import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Načtení fontu Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Základní meta
  title: "AI Andrt",
  description:
    "Konzultant a nadšenec do AI, který pomáhá firmám s implementací umělé inteligence. Specializace na strategie, marketing, HR a transformaci byznysu. Ušetřete čas a získejte náskok díky AI nástrojům a technologiím.",
  keywords: [
    "AI Andrt Martin",
    "Martin Andrt",
    "AI Andrt",
    "AI Andrt digitalizace",
    "AI",
    "Umělá inteligence",
    "Konzultant AI",
    "Implementace AI",
    "Automatizace",
    "Transformace byznysu",
    "HR",
    "Marketing",
    "Strategie",
    "Start-up",
    "Digitální transformace",
    "AI nástroje",
    "Inovace",
    "Machine learning",
    "ChatGPT",
    "OpenAI",
    "Podnikání",
    "Technologie",
    "Management",
    "Budoucnost práce",
    "Digitalizace",
  ],
  authors: [{ name: "Martin Andrt", url: "https://www.ai-andrt.cz/" }],
  creator: "Martin Andrt",
  publisher: "Martin Andrt",
  // Důležité pro vyhledávače (index/follow)
  robots: {
    index: true,
    follow: true,
  },
  // Nastavení základní URL (ovlivňuje také generování kanonických URL u podstránek)
  metadataBase: new URL("https://www.ai-andrt.cz"),
  alternates: {
    canonical: "/",
  },
  // Nastavení favicon či dalších ikon (podle potřeby)
  icons: {
    icon: "/icons/icons8-ai-color-32.png",
    // apple: "/icons/apple-touch-icon.png", // Pokud chcete Apple touch ikonku
  },
  // Nastavení barevného tématu pro mobilní prohlížeče (není nezbytné, ale občas se hodí)
  themeColor: "#ffffff",

  // Open Graph
  openGraph: {
    title: "AI Andrt",
    description:
      "Konzultant a nadšenec do AI, pomáhající firmám s rychlou implementací a efektivním nasazením umělé inteligence.",
    url: "https://www.ai-andrt.cz",
    siteName: "Martin Andrt AI Consulting",
    images: [
      {
        url: "/imgs/icon.png",
        width: 1200,
        height: 630,
        alt: "AI Andrt Logo",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },

  // Twitter karty
  twitter: {
    card: "summary_large_image",
    title: "AI Andrt",
    description:
      "Konzultant a nadšenec do AI, pomáhající firmám s rychlou implementací a efektivním nasazením umělé inteligence.",
    images: ["/imgs/icon.png"],
    creator: "@tvůjTwitterHandle", // upravte na svůj Twitter handle
  },
};
