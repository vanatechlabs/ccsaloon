import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { GALLERY } from "@/data/gallery";

export function GalleryPreviewSection() {
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

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
        <span className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
          Gallery
        </span>
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[48px] font-light leading-tight text-[#f5edd8] mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Moments In <em className="italic text-[#d4a843]">Gold</em>
      </h2>
      <p className="text-center text-sm font-light tracking-widest text-[rgba(245,237,216,0.3)] mb-10">
        Every look, a story. Every visit, a transformation.
      </p>

      {/* Masonry Grid */}
      <div
        className="mx-auto max-w-6xl [&>*]:break-inside-avoid"
        style={{ columns: 4, columnGap: "8px" }}
      >
        {GALLERY.slice(0, 12).map((g, i) => (
          <PinCard key={i} src={g.src} title={g.title} tag={g.category || "CityCalls Saloon"} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/gallery"
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-[rgba(201,168,76,0.3)] px-8 py-3.5 text-[9.5px] font-medium tracking-[0.28em] uppercase text-[#c9a84c] transition-all duration-300 hover:border-[rgba(201,168,76,0.6)]"
          style={{ borderRadius: "2px" }}
        >
          <span
            className="absolute inset-0 origin-left scale-x-0 bg-[rgba(201,168,76,0.05)] transition-transform duration-400 group-hover:scale-x-100"
          />
          <span className="relative">View Full Gallery</span>
          <svg className="relative" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 4h6M4 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
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

function PinCard({ src, title, tag }: { src: string; title: string; tag: string }) {
  return (
    <div className="group relative mb-2 overflow-hidden cursor-pointer border border-[rgba(201,168,76,0.1)] bg-[#1a1710] transition-all duration-300 hover:border-[rgba(201,168,76,0.4)]"
      style={{ borderRadius: "6px" }}
    >
      {/* Image */}
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="block w-full transition-all duration-[1100ms] ease-out group-hover:scale-[1.06]"
        style={{ filter: "brightness(0.88) saturate(0.9)" }}
      />

      {/* Gold top shimmer */}
      <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
        style={{ background: "linear-gradient(to top, rgba(10,8,7,0.95) 0%, rgba(10,8,7,0.3) 50%, transparent 100%)", borderRadius: "6px" }}
      />

      {/* Heart button */}
      <button
        className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.12)] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[rgba(201,168,76,0.25)]"
        aria-label="Save"
      >
        <Heart className="h-3 w-3 text-[#c9a84c]" strokeWidth={1.5} />
      </button>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1.5 px-3 py-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-0.5 text-[8.5px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
          {tag}
        </p>
        <p
          className="text-[15px] font-light leading-tight text-[#f5edd8]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
