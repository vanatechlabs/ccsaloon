"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { RevealText } from "@/components/ui/RevealText/RevealText";
const aboutInterior = "/assets/about-interior.jpg";

export function OurStorySection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineActive, setLineActive] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLineActive(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;600&display=swap');

        .os-title-underline {
          height: 0.5px;
          background: linear-gradient(90deg, #b8945a, transparent);
          width: 0;
          margin-bottom: 28px;
          transition: width 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .os-title-underline.active { width: 120px; }

        .os-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #f2ede8;
          padding: 13px 28px;
          border: 0.5px solid rgba(184,148,90,0.35);
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease, border-color 0.4s ease;
          text-decoration: none;
        }
        .os-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #b8945a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }
        .os-cta:hover::before { transform: scaleX(1); }
        .os-cta:hover { color: #0a0806; border-color: #b8945a; }

        .os-arrow {
          width: 18px; height: 1px;
          background: currentColor;
          position: relative;
          flex-shrink: 0;
          transition: width 0.3s;
        }
        .os-arrow::after {
          content: '';
          position: absolute;
          right: 0; top: -3px;
          width: 6px; height: 6px;
          border-right: 1px solid currentColor;
          border-top: 1px solid currentColor;
          transform: rotate(45deg);
        }
        .os-cta:hover .os-arrow { width: 26px; }
      `}</style>

      <section className="relative overflow-hidden bg-[#0a0806] py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">

          {/* ── IMAGE SIDE ── */}
          <RevealText delay={0}>
            <div className="relative">
              {/* Offset decorative frame */}
              <div className="relative pl-4 pt-4">
                {/* TL corner */}
                <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-[#b8945a]/60 pointer-events-none" />
                {/* BR corner */}
                <div className="absolute -bottom-4 -right-4 h-12 w-12 border-b border-r border-[#b8945a]/60 pointer-events-none" />

                <img
                  src={aboutInterior}
                  alt="Our atelier"
                  loading="lazy"
                  className="h-[500px] w-full object-cover brightness-90 saturate-[0.85]"
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute -left-5 bottom-8 border border-[#b8945a]/30 bg-[#0a0806] px-5 py-3.5"
                style={{ zIndex: 10 }}
              >
                <p
                  className="leading-none text-[#b8945a]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300 }}
                >
                  10+
                </p>
                <p
                  className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#b8945a]/50"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Years of Artistry
                </p>
              </div>
            </div>
          </RevealText>

          {/* ── TEXT SIDE ── */}
          <RevealText delay={0.15}>
            <div className="relative">

              {/* Vertical ghost label */}
              <span
                className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 select-none whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.35em] text-[#b8945a]/15"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CityCalls Saloon
              </span>

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-7 bg-[#b8945a]/55" />
                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.38em] text-[#b8945a]/80"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Our Story
                </span>
              </div>

              {/* Title */}
              <h2
                className="mb-1.5 font-light leading-[1.08] text-[#f2ede8]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(38px, 4vw, 56px)",
                }}
              >
                Built on artistry,
                <br />
                refined by{" "}
                <em className="italic text-[#b8945a]" style={{ fontStyle: "italic" }}>time</em>
              </h2>

              {/* Animated underline */}
              <div
                ref={lineRef}
                className={`os-title-underline ${lineActive ? "active" : ""}`}
              />

              {/* Lead quote */}
              <p
                className="mb-5 border-l border-[#b8945a]/30 pl-4 font-light italic leading-relaxed text-[#b8945a]/75"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "19px",
                  letterSpacing: "0.03em",
                }}
              >
                A studio born from love for craft.
              </p>

              {/* Body */}
              <p
                className="font-light leading-[1.85] tracking-wide text-[#ffffff]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
              >
                CityCalls Saloon began as a quiet dream — to build a sanctuary where women could
                feel pampered, understood and genuinely transformed. A decade later, we are one
                of the most loved luxury salons in the country.
              </p>

              {/* Ornament divider */}
              <div className="my-6 flex items-center gap-2.5 opacity-35">
                <span className="block h-px w-10 bg-[#b8945a]" />
                <span className="block h-1 w-1 rotate-45 bg-[#b8945a]" />
                <span className="block h-px w-10 bg-[#b8945a]" />
              </div>

              <p
                className="font-light leading-[1.85] tracking-wide text-[#ffffff]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px" }}
              >
                Our team is trained internationally, our products are sourced globally, and our
                standards stay obsessively local — to you.
              </p>

              {/* CTA */}
              <Link href="/services" className="os-cta mt-8 inline-flex">
                Our Services
                <span className="os-arrow" />
              </Link>
            </div>
          </RevealText>

        </div>
      </section>
    </>
  );
}
