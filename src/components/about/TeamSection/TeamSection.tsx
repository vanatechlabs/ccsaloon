"use client";

import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { TEAM } from "@/data/team";

export function TeamSection() {
  return (
    <section
      className="relative overflow-hidden rounded-xl bg-[#0e0c09] px-6 py-14"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
      />

      {/* Corner brackets */}
      <span className="absolute top-4 left-5 h-4 w-4 border-t border-l border-[rgba(201,168,76,0.3)]" />
      <span className="absolute bottom-4 right-5 h-4 w-4 border-b border-r border-[rgba(201,168,76,0.3)]" />

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
        <span className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
          Meet The Team
        </span>
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[40px] font-light leading-tight text-[#f5edd8] mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Artists Behind <em className="italic text-[#d4a843]">The Magic</em>
      </h2>
      <p className="text-center text-xs font-light tracking-widest text-[rgba(245,237,216,0.3)] mb-10">
        Each hand. Each eye. Each vision — curated.
      </p>

      {/* Cards */}
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>

      {/* Bottom ornament */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.35)]" />
      </div>
    </section>
  );
}

function TeamCard({
  name,
  role,
  experience,
  image,
}: {
  name: string;
  role: string;
  experience: string;
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-md border border-[rgba(201,168,76,0.15)] transition-all duration-300 hover:border-[rgba(201,168,76,0.45)]">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1710]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-85"
          style={{ background: "linear-gradient(to top, rgba(14,12,9,0.97) 0%, rgba(14,12,9,0.4) 45%, transparent 100%)" }}
        />
      </div>

      {/* Info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#c9a84c] mb-1">
          {experience}
        </p>
        <h3
          className="text-[20px] font-semibold leading-tight text-[#f5edd8] mb-1"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {name}
        </h3>
        {/* Animated divider */}
        <span className="mb-2 block h-px w-0 bg-[rgba(201,168,76,0.5)] transition-all duration-400 group-hover:w-6" />
        <p className="text-[11px] font-light text-[rgba(245,237,216,0.45)]">{role}</p>
      </div>
    </div>
  );
}
