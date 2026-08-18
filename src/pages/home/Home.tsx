import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedServicesSection } from "@/components/home/FeaturedServicesSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { Marquee } from "@/components/effects/Marquee";
import { ParallaxCTASection } from "@/components/home/ParallaxCTASection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { VideoShowcaseSection } from "@/components/home/VideoShowcaseSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { BookingCTASection } from "@/components/home/BookingCTASection";
import { PricingSection } from "@/components/home/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServicesSection />
      <AboutPreviewSection />
      <Marquee />
     
      <WhyChooseUsSection />
      <PricingSection />
       <ParallaxCTASection />
   
      {/* <VideoShowcaseSection /> */}
      <GalleryPreviewSection />
         <StatsSection />
      <TestimonialsSection />
      {/* <InstagramSection />
      <BookingCTASection /> */}
    </>
  );
}
