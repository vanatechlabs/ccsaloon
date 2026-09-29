"use client";

import Link from "next/link";
import { FEATURED } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { RevealText } from "@/components/ui/RevealText/RevealText";

export function FeaturedServicesSection() {
  return (
    <section className="relative pt-12 pb-16 bg-[#0e0c0b] overflow-hidden">

      {/* Top gold line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a] to-transparent" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Section Header */}
      <div className="text-center px-6 pb-12 relative">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-12 h-px bg-[#b8945a] opacity-60" />
          <span className="font-sans text-[14px] font-semibold tracking-[0.35em] text-[#b8945a] uppercase">
            Our Services
          </span>
          <span className="w-12 h-px bg-[#b8945a] opacity-60" />
        </div>

        <h2
          className="font-display text-[clamp(42px,6vw,72px)] font-light text-[#f2ede8] leading-[1.1] tracking-tight mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Crafted Beauty{" "}
          <em className="italic text-[#b8945a]">Rituals</em>
        </h2>

        <p className="font-sans text-[13px] font-light text-[#7a6e66] tracking-wide leading-relaxed max-w-md mx-auto">
          From editorial makeup to spa-grade hair restoration — each service is a
          curated experience, never a transaction.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
          <span className="w-20 h-px bg-[#b8945a]" />
          <span className="w-1.5 h-1.5 bg-[#b8945a] rotate-45 block" />
          <span className="w-20 h-px bg-[#b8945a]" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1612] border border-[#1a1612] rounded-sm overflow-hidden">
          {FEATURED.map((s, i) => (
            <RevealText key={s.key} delay={i * 0.1}>
              <div className="group relative h-[520px] overflow-hidden bg-[#0e0c0b] cursor-pointer">

                {/* Image */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08] brightness-75 saturate-80 group-hover:brightness-[0.6]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,8,6,0.95)] via-[rgba(10,8,6,0.4)] to-transparent transition-all duration-600 group-hover:from-[rgba(10,8,6,0.98)] group-hover:via-[rgba(10,8,6,0.65)]" />

                {/* Shine sweep */}
                <div className="absolute inset-0 pointer-events-none translate-x-[-100%] group-hover:translate-x-[250%] transition-transform duration-[800ms] ease-in-out"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)", width: "60%" }}
                />

                {/* Top gold border on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Card number */}
                <span
                  className="absolute top-6 right-6 font-light text-[14px] tracking-[0.2em] text-[#b8945a]/50 group-hover:text-[#b8945a]/90 transition-colors duration-400"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  0{i + 1}
                </span>

                {/* Card content */}
                <div className="absolute bottom-0 inset-x-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-[11px] font-semibold tracking-[0.3em] text-[#b8945a] uppercase mb-2.5">
                    {s.blurb}
                  </span>
                  <h3
                    className="text-[34px] font-light text-[#f2ede8] leading-[1.15] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.title}
                  </h3>

                  {/* Animated gold line */}
                  <div className="h-px bg-[#b8945a] w-0 group-hover:w-12 transition-all duration-600 mb-4" />

                  {/* CTA */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.3em] uppercase text-[#b8945a] opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100 hover:gap-4"
                  >
                    Discover
                    <span className="relative inline-block w-5 h-px bg-[#b8945a] group-hover:w-7 transition-all">
                      <span className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-r border-t border-[#b8945a] rotate-45 block" />
                    </span>
                  </Link>
                </div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center pt-8 px-6">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3.5 font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-[#f2ede8] px-10 py-4 border border-[#b8945a]/40 relative overflow-hidden hover:text-[#0e0c0b] hover:border-[#b8945a] transition-colors duration-400"
        >
          <span className="absolute inset-0 bg-[#b8945a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-10" />
          View All Services
          <span className="relative w-5 h-px bg-current group-hover:w-7 transition-all duration-300">
            <span className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-r-[1.5px] border-t-[1.5px] border-current rotate-45 block" />
          </span>
        </Link>
      </div>
    </section>
  );
}
