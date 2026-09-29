"use client";

import { RevealText } from "@/components/ui/RevealText/RevealText";
import { GALLERY } from "@/data/gallery";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const CARDS = [
  {
    tag: "Our Mission",
    bgLetter: "M",
    title: <>The art of<br /><em className="italic text-[#b8945a]">celebration</em></>,
    body: "To celebrate every woman through the art of beauty, blending world-class technique with warm, intentional hospitality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    image: GALLERY[3].src,
  },
  {
    tag: "Our Vision",
    bgLetter: "V",
    title: <>Luxury,<br /><em className="italic text-[#b8945a]">redefined</em></>,
    body: "To redefine what luxury beauty feels like in India — intimate, inclusive, and quietly opulent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    image: GALLERY[4].src,
  },
];

export function MissionVisionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;600&display=swap');

        .mv-card {
          background: #0e0c0b;
          position: relative;
          overflow: hidden;
          padding: 52px 48px;
          transition: background 0.4s ease;
        }

        .hover-bg-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          opacity: 0; transform: scale(1.05); transition: opacity 0.5s ease, transform 0.5s ease;
          z-index: 0; pointer-events: none;
        }
        .mv-card:hover .hover-bg-img {
          opacity: 0.6; transform: scale(1);
        }

        @keyframes mv-flash-bg {
          0% { opacity: 0; transform: scale(1.05); }
          30% { opacity: 0.6; transform: scale(1); }
          70% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        .flash-anim { animation: mv-flash-bg 2s ease-in-out; }

        .mv-icon-box {
          width: 44px; height: 44px;
          border: 0.5px solid rgba(184,148,90,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          background: rgba(184,148,90,0.03);
          color: rgba(184,148,90,0.65);
          position: relative;
          flex-shrink: 0;
        }
        .mv-icon-box::after {
          content: '';
          position: absolute; bottom: -1px; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #b8945a, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .mv-card:hover .mv-icon-box::after { transform: scaleX(1); }

        .mv-gold-bar {
          height: 0.5px;
          background: linear-gradient(90deg, #b8945a, transparent);
          width: 0; margin-bottom: 22px;
          transition: width 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s;
        }
        .mv-card:hover .mv-gold-bar { width: 56px; }

        .mv-corner {
          position: absolute; bottom: 0; right: 0;
          width: 0; height: 0;
          border-bottom: 24px solid rgba(184,148,90,0.12);
          border-left: 24px solid transparent;
          transition: border-bottom-width 0.3s ease, border-left-width 0.3s ease;
        }
        .mv-card:hover .mv-corner {
          border-bottom-width: 32px;
          border-left-width: 32px;
        }
      `}</style>

      <section ref={ref} className="relative overflow-hidden bg-[#0e0c0b] pt-12 pb-24">
        {/* Top + bottom gold edge lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a]/40 to-transparent" />

        {/* Eyebrow */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#b8945a]/40" />
          <span
            className="text-[14px] font-semibold uppercase tracking-[0.38em] text-[#b8945a]/70"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            What Drives Us
          </span>
          <span className="h-px w-12 bg-[#b8945a]/40" />
        </div>

        {/* Cards grid */}
        <div
          className="mx-auto grid max-w-4xl grid-cols-1 gap-px md:grid-cols-2"
          style={{ background: "rgba(184,148,90,0.10)", border: "0.5px solid rgba(184,148,90,0.12)" }}
        >
          {CARDS.map((card, i) => (
            <RevealText key={card.tag} delay={i * 0.12}>
              <MissionCard card={card} inView={inView} index={i} />
            </RevealText>
          ))}
        </div>
      </section>
    </>
  );
}

function MissionCard({ card, inView, index }: { card: any; inView: boolean; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mv-card h-full">
      {/* Image background */}
      <img
        src={card.image}
        alt=""
        onLoad={() => setLoaded(true)}
        className={`hover-bg-img ${(inView && loaded) ? "flash-anim" : ""}`}
        style={{ animationDelay: `${index * 0.2}s` }}
      />

      <div className="relative z-10">
        {/* Large faded background letter */}
        <span
          className="pointer-events-none absolute -bottom-5 -right-2.5 select-none leading-none text-[#b8945a]/[0.04]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "180px", fontWeight: 300 }}
          aria-hidden="true"
        >
          {card.bgLetter}
        </span>

        {/* Icon */}
        <div className="mv-icon-box">{card.icon}</div>

        {/* Tag */}
        <span
          className="mb-3.5 block text-[13px] font-semibold uppercase tracking-[0.32em] text-[#b8945a]/60"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {card.tag}
        </span>

        {/* Title */}
        <h3
          className="mb-2 font-light leading-[1.05] text-[#f2ede8]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 3.5vw, 44px)" }}
        >
          {card.title}
        </h3>

        {/* Animated gold underline */}
        <div className="mv-gold-bar" />

        {/* Body */}
        <p
          className="font-light italic leading-[1.7] tracking-wide text-[rgba(220,210,198,0.68)]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", letterSpacing: "0.02em" }}
        >
          {card.body}
        </p>
      </div>

      {/* Corner accent */}
      <div className="mv-corner" />
    </div>
  );
}
