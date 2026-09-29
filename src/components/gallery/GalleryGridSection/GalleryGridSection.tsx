"use client";

import { useMemo, useState } from "react";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox/Lightbox";
import { RevealText } from "@/components/ui/RevealText/RevealText";
import { Heart } from "lucide-react";

export function GalleryGridSection() {
  const [cat, setCat] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = useMemo(
    () => (cat === "all" ? GALLERY : GALLERY.filter((g) => g.category === cat)),
    [cat]
  );

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#0e0c09] px-6 py-20"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
        />

        {/* Heading Area */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
            <span className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
              Visual Archive
            </span>
            <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
          </div>

          <h2
            className="mb-2 text-[40px] font-light leading-tight text-[#f5edd8]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hand-Picked <em className="italic text-[#d4a843]">Transformations</em>
          </h2>
          <p className="mb-10 text-xs font-light tracking-widest text-[rgba(245,237,216,0.3)]">
            Explore our curated portfolio of styles.
          </p>

          {/* Filters */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                  cat === c.key
                    ? "border-[#c9a84c] bg-[#c9a84c] text-[#0e0c09]"
                    : "border-[rgba(201,168,76,0.25)] text-[rgba(245,237,216,0.6)] hover:border-[#c9a84c] hover:text-[#f5edd8]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div
          className="mx-auto max-w-7xl [&>*]:break-inside-avoid"
          style={{ columns: "4 240px", columnGap: "12px" }}
        >
          {filtered.map((g, i) => (
            <RevealText key={`${g.src}-${i}`} delay={(i % 8) * 0.04} className="mb-3 block">
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative w-full overflow-hidden cursor-pointer border border-[rgba(201,168,76,0.1)] bg-[#1a1710] text-left transition-all duration-300 hover:border-[rgba(201,168,76,0.4)]"
                style={{ borderRadius: "6px" }}
              >
                {/* Image */}
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="block w-full transition-all duration-[1100ms] ease-out group-hover:scale-[1.06]"
                  style={{ filter: "brightness(0.88) saturate(0.9)" }}
                />

                {/* Gold top shimmer */}
                <span className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,8,7,0.95) 0%, rgba(10,8,7,0.3) 50%, transparent 100%)",
                    borderRadius: "6px",
                  }}
                />

                {/* Heart button */}
                <div
                  className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.12)] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[rgba(201,168,76,0.25)]"
                  aria-label="Save"
                >
                  <Heart className="h-3 w-3 text-[#c9a84c]" strokeWidth={1.5} />
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-1.5 px-3 py-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-0.5 text-[8.5px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
                    {g.category || "CityCalls Saloon"}
                  </p>
                  <p
                    className="text-[15px] font-light leading-tight text-[#f5edd8]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {g.title}
                  </p>
                </div>
              </button>
            </RevealText>
          ))}
        </div>
      </section>

      <Lightbox
        images={filtered.map((f) => ({ src: f.src, title: f.title }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </>
  );
}
