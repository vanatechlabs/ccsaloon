"use client";

import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton/MagneticButton";
import { FloatingParticles } from "@/components/effects/FloatingParticles/FloatingParticles";

export function BookingCTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--secondary)] to-black" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-50" />
      <FloatingParticles count={30} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow mb-5">Reserve Your Moment</p>
        <h2 className="h-display"><span className="text-gradient-gold">Ready For Your Next Transformation?</span></h2>
        <p className="font-luxury mx-auto mt-6 max-w-2xl text-xl italic leading-relaxed text-muted-foreground">
          Walk in feeling lovely. Walk out feeling iconic.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton asChild>
            <a href={SITE.socials.whatsapp}>Book Appointment <ArrowRight className="h-3.5 w-3.5" /></a>
          </MagneticButton>
          <MagneticButton variant="outline" asChild>
            <a href={`tel:${SITE.phonesRaw[0]}`}><Phone className="h-3.5 w-3.5" /> Call Now</a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
