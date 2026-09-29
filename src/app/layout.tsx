import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { SocialSidebar } from "@/components/layout/SocialSidebar/SocialSidebar";
import { FloatingContact } from "@/components/layout/FloatingContact/FloatingContact";
import { LenisProvider } from "@/components/effects/LenisProvider/LenisProvider";
import { AosInit } from "@/components/effects/AosInit/AosInit";
import { SITE } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: "website",
    title: `${SITE.name} — Luxury Salon & Beauty Studio`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phonesRaw,
  openingHours: "Mo-Su 10:00-21:00",
  priceRange: "$$$",
  image: "/og-image.jpg",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Loaded as <link> (not a CSS @import): Next's CSS pipeline drops the
            Lato @import, and components reference these families by name. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {/* <Preloader /> and <TopBar /> are disabled on the live site; see components/layout. */}
        <LenisProvider />
        <AosInit />
        <Navbar />
        <SocialSidebar />
        <FloatingContact />
        <main className="relative pt-[68px] md:pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
