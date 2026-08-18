import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui-luxe/SectionHeading";
import { RevealText } from "@/components/ui-luxe/RevealText";
import aboutInterior from "@/assets/about-interior.jpg";

export function VideoShowcaseSection() {
  return (
    <section className="relative py-28">
      <SectionHeading
        eyebrow="The Reel"
        title={<>A Cinematic <span className="text-gradient-gold">Glimpse</span></>}
        subtitle="Step inside the atelier — moods, hands, transformations."
      />
      <RevealText className="mx-auto mt-14 max-w-6xl px-6">
        <div className="group relative h-[480px] overflow-hidden rounded-xl shadow-luxe">
          <img src={aboutInterior} alt="Salon showcase" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40" />
          <button className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-gold text-background shadow-gold-glow animate-pulse-gold">
            <Play className="h-8 w-8 translate-x-0.5" />
          </button>
        </div>
      </RevealText>
    </section>
  );
}
