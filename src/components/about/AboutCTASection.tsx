import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";
import { MagneticButton } from "@/components/ui-luxe/MagneticButton";

export function AboutCTASection() {
  return (
    <section className="relative overflow-hidden bg-[var(--secondary)] py-24 text-center">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="h-display"><span className="text-gradient-gold">Come, experience CityCalls Saloon.</span></h2>
        <p className="font-luxury mt-5 text-xl italic text-muted-foreground">A consultation is on us.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MagneticButton asChild><Link to="/contact">Get In Touch <ArrowRight className="h-3.5 w-3.5" /></Link></MagneticButton>
          <MagneticButton variant="outline" asChild><a href={SITE.socials.whatsapp}>Book On WhatsApp</a></MagneticButton>
        </div>
      </div>
    </section>
  );
}
