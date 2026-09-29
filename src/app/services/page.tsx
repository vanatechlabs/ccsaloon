import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection/ServicesHeroSection";
import { ServicesMenuSection } from "@/components/services/ServicesMenuSection/ServicesMenuSection";
import { ServicesFaqSection } from "@/components/services/ServicesFaqSection/ServicesFaqSection";

export const metadata: Metadata = {
  title: `Services & Pricing — ${SITE.name}`,
  description: "Explore luxury hair, skin, nail, makeup and bridal services at CityCalls Saloon with transparent pricing.",
  openGraph: {
    title: `Services & Pricing — ${SITE.name}`,
    description: "Luxury hair, skin, nails, makeup, bridal & spa rituals — premium pricing, transparent.",
    url: "/services",
    images: ["/assets/hero-hair.jpg"],
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesMenuSection />
      <ServicesFaqSection />
    </>
  );
}
