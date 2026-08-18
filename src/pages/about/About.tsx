import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { OurStorySection } from "@/components/about/OurStorySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutCTASection } from "@/components/about/AboutCTASection";

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      {/* <AboutCTASection /> */}
    </>
  );
}
