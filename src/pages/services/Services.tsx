import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesMenuSection } from "@/components/services/ServicesMenuSection";
import { ServicesFaqSection } from "@/components/services/ServicesFaqSection";

export default function Services() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesMenuSection />
      <ServicesFaqSection />
    </>
  );
}
