import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection/ContactHeroSection";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection/ContactDetailsSection";
import { ContactMapSection } from "@/components/contact/ContactMapSection/ContactMapSection";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description: "Book your appointment or visit CityCalls Saloon. Reach us on phone, WhatsApp or our quick contact form.",
  openGraph: {
    title: `Contact — ${SITE.name}`,
    description: "Book your appointment or get in touch with CityCalls Saloon.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactMapSection />
    </>
  );
}
