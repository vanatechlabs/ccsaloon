"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { RevealText, SplitHeading } from "@/components/ui/RevealText/RevealText";
import { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const heroImage = "/assets/banner/hero-hair.jpg";

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) { setCount(Math.floor(v)); },
      });
      return controls.stop;
    }
  }, [inView, value]);
  return <span ref={ref}>{count}</span>;
}

export function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#161311] pt-16 pb-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* ── Image Panel ── */}
        <RevealText>
          <div className="relative">

            {/* Outer wrapper clips everything */}
            <div
              className="relative rounded-lg shadow-luxe"
              style={{ height: 460, overflow: "hidden" }}
            >
              <motion.img
                src={heroImage}
                alt="SS Luxe About"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transformOrigin: "center center", willChange: "transform" }}
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 25,
                  background:
                    "linear-gradient(to top,rgba(12,9,6,0.62) 0%,transparent 52%)," +
                    "linear-gradient(to right,rgba(12,9,6,0.22) 0%,transparent 45%)",
                }}
              />

              {/* Gold border */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{ zIndex: 31, border: "1px solid rgba(201,162,39,0.2)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 hidden md:flex h-40 w-40 items-center justify-center rounded-lg border border-[var(--gold)] bg-[#1c1715] text-center shadow-luxe"
              style={{ zIndex: 40 }}
            >
              <div>
                <p className="font-display text-5xl text-[var(--gold)]">
                  <AnimatedNumber value={10} />+
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Years of Artistry
                </p>
              </div>
            </div>
          </div>
        </RevealText>

        {/* ── Text Panel ── */}
        <div>
          <p className="eyebrow mb-4">About CityCalls Saloon</p>
          <SplitHeading
            text={"Where Beauty \n Meets Confidence"}
            className="text-foreground !text-4xl md:!text-5xl lg:!text-[3.5rem] !leading-[1.1]"
            lastWordClassName="text-[var(--gold)]"
          />
          <p className="font-luxury mt-6 text-xl italic leading-relaxed text-muted-foreground">
            A salon imagined as an atelier — opulent in detail, intimate in service.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            From your first consultation to the final mirror moment, every step is curated. We blend
            international training, world-class products and warm Indian hospitality into a single,
            unforgettable experience.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["10+ Years Experience", "Certified Experts", "Luxury Environment", "Premium Products", "Award-Winning Team"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                  <Star className="h-3 w-3 fill-current" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex justify-end">
            <Link href="/about">
              <button className="group relative overflow-hidden rounded-none px-6 py-3 bg-[var(--gold)] text-black transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-bold border border-[var(--gold)]">
                <span className="relative z-10 flex items-center gap-2">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black z-20 pointer-events-none px-6 py-3 whitespace-nowrap gap-2">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
