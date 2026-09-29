import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { AboutHeroSection } from "@/components/about/AboutHeroSection/AboutHeroSection";
import { OurStorySection } from "@/components/about/OurStorySection/OurStorySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection/MissionVisionSection";
import { ValuesSection } from "@/components/about/ValuesSection/ValuesSection";
import { TimelineSection } from "@/components/about/TimelineSection/TimelineSection";
import { TeamSection } from "@/components/about/TeamSection/TeamSection";

export const metadata: Metadata = {
  title: `About — ${SITE.name}`,
  description: "Inside CityCalls Saloon — our story, our team, our award-winning craft.",
  openGraph: {
    title: `About — ${SITE.name}`,
    description: "Meet the team and the philosophy behind CityCalls Saloon.",
    url: "/about",
    images: ["/assets/about-interior.jpg"],
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      {/* <AboutCTASection /> — hidden on the live site */}
    </>
  );
}
