import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { GalleryHeroSection } from "@/components/gallery/GalleryHeroSection/GalleryHeroSection";
import { GalleryGridSection } from "@/components/gallery/GalleryGridSection/GalleryGridSection";

export const metadata: Metadata = {
  title: `Gallery — ${SITE.name}`,
  description: "Step inside our visual archive — hair, bridal, makeup, nails, facials and the CityCalls Saloon atelier.",
  openGraph: {
    title: `Gallery — ${SITE.name}`,
    description: "A curated visual archive of CityCalls Saloon transformations and ambience.",
    url: "/gallery",
  },
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <GalleryGridSection />
    </>
  );
}
