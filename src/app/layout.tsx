import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://metiers-ia.fr"
  ),
  title: {
    default: "Métiers de l'IA en France : fiches métiers, salaires et formations",
    template: "%s | Métiers IA",
  },
  description:
    "Découvrez les 18 métiers de l'intelligence artificielle en France : fiches métiers détaillées, grille des salaires, formations recommandées et guides pour votre carrière dans l'IA.",
  keywords: [
    "métiers intelligence artificielle",
    "métiers IA",
    "carrière IA France",
    "data scientist",
    "machine learning engineer",
    "salaire IA",
    "formation intelligence artificielle",
    "emploi IA",
    "ingénieur IA",
    "prompt engineer",
    "reconversion IA",
  ],
  authors: [{ name: "KipDev" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Métiers IA",
    title: "Métiers de l'IA en France : fiches métiers, salaires et formations",
    description:
      "Le guide de référence des métiers de l'intelligence artificielle en France. 18 fiches métiers, salaires, formations et conseils carrière.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Métiers de l'IA en France",
    description:
      "Le guide de référence des métiers de l'intelligence artificielle en France.",
  },
  alternates: {
    canonical: "/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script defer src="https://kipstats.com/tracker.js" data-site="kp_f061c949" />
      </body>
    </html>
  );
}
