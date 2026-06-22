import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.fullName} — ${site.role} au Bénin`,
    template: `%s | ${site.name}`,
  },
  description:
    "Portfolio de Jérémie Bodjrenou (ITZJEY), développeur web et mobile passionné par l'IA. React, Next.js, Flutter, Python. Basé à Sèmè-Kpodji, Bénin.",
  keywords: [
    "développeur web Bénin",
    "développeur mobile",
    "React",
    "Next.js",
    "Flutter",
    "intelligence artificielle",
    "Sèmè-Kpodji",
    "Cotonou",
    "ITZJEY",
    "Jérémie Bodjrenou",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} | ${site.role} au Bénin`,
    description: "Solutions digitales intelligentes au Bénin et en Afrique.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.fullName}`,
    description: "Développeur web & mobile passionné par l'IA.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef4fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070d1c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh">
        <Providers>
          <a
            href="#accueil"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
          >
            Aller au contenu
          </a>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
