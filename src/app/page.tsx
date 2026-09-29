import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { FeaturedServicesSection } from "@/components/home/FeaturedServicesSection/FeaturedServicesSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection/AboutPreviewSection";
import { Marquee } from "@/components/effects/Marquee/Marquee";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection/WhyChooseUsSection";
import { PricingSection } from "@/components/home/PricingSection/PricingSection";
import { ParallaxCTASection } from "@/components/home/ParallaxCTASection/ParallaxCTASection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection/GalleryPreviewSection";
import { StatsSection } from "@/components/home/StatsSection/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection/TestimonialsSection";

export const metadata: Metadata = {
  title: `${SITE.name} — Luxury Salon & Beauty Studio`,
  description: SITE.description,
  openGraph: { title: `${SITE.name} — Luxury Salon & Beauty Studio`, description: SITE.description, url: "/" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServicesSection />
      <AboutPreviewSection />
      <Marquee />
      <WhyChooseUsSection />
      <PricingSection />
      <ParallaxCTASection />
      {/* <VideoShowcaseSection /> — hidden on the live site */}
      <GalleryPreviewSection />
      <StatsSection />
      <TestimonialsSection />
      {/* <InstagramSection /> and <BookingCTASection /> — hidden on the live site */}
    </>
  );
}
