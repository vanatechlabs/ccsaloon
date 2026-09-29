"use client";

import { SITE } from "@/data/site";

export function ContactMapSection() {
  return (
    <section
      className="relative overflow-hidden rounded-xl bg-[#0e0c09] px-6 py-14"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
      />

      {/* Corner brackets */}
      <span className="absolute top-4 left-5 h-4 w-4 border-t border-l border-[rgba(201,168,76,0.3)]" />
      <span className="absolute bottom-4 right-5 h-4 w-4 border-b border-r border-[rgba(201,168,76,0.3)]" />

      {/* Map - Expanded Width */}
      <div
        className="relative mx-auto w-full max-w-7xl overflow-hidden border border-[rgba(201,168,76,0.2)]"
        style={{ borderRadius: "8px" }}
      >
        {/* Gold top shimmer */}
        <span className="absolute inset-x-0 top-0 z-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <iframe
          title="SS Luxe Salon location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
          className="h-[500px] w-full block"
          loading="lazy"
          allowFullScreen
        />
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
