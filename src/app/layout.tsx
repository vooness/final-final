// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

// Načtení fontu Inter
const inter = Inter({ subsets: ["latin"] });

// ---- METADATA ----
export const metadata: Metadata = {
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
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.ai-andrt.cz"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icons/icons8-ai-color-32.png",
  },
  themeColor: "#ffffff",
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
  twitter: {
    card: "summary_large_image",
    title: "AI Andrt",
    description:
      "Konzultant a nadšenec do AI, pomáhající firmám s rychlou implementací a efektivním nasazením umělé inteligence.",
    images: ["/imgs/icon.png"],
    creator: "@tvůjTwitterHandle",
  },
};

// ---- LAYOUT KOMPONENTA ----
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5MT9ZCSJ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MT9ZCSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
