"use client";

import { Instagram } from "lucide-react";
import { SITE } from "@/data/site";
import { GALLERY } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

export function InstagramSection() {
  return (
    <section className="bg-[var(--secondary)] py-24">
      <SectionHeading eyebrow="@citycalls.in" title={<>Follow The <span className="text-gradient-gold">Journey</span></>} />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-3 px-6 md:grid-cols-6">
        {GALLERY.slice(0, 6).map((g, i) => (
          <a key={i} href={SITE.socials.instagram} className="group relative aspect-square overflow-hidden rounded-lg">
            <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 grid place-items-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <Instagram className="h-7 w-7 text-[var(--gold-light)]" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
