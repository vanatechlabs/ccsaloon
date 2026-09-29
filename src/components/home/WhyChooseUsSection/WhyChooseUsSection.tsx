"use client";

import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { GALLERY } from "@/data/gallery";
import { useInView } from "react-intersection-observer";

const WHY_TOP = [
  {
    num: "01",
    title: "Certified Stylists",
    desc: "A senior team trained at India's top academies — bringing precision craft to every look.",
    image: GALLERY[0].src,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="h-full w-full">
        <circle cx="22" cy="22" r="20" stroke="#c9a227" strokeWidth=".8" opacity=".3" />
        <path d="M22 10L25 18L34 18L27 23L29 32L22 27L15 32L17 23L10 18L19 18Z"
          stroke="#c9a227" strokeWidth="1" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Premium Brands",
    desc: "Olaplex, K18, O3+, Wella, Schwarzkopf — only the finest products touch your hair.",
    image: GALLERY[1].src,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="h-full w-full">
        <path d="M22 6L28 14L38 16L30 24L32 34L22 30L12 34L14 24L6 16L16 14Z"
          stroke="#c9a227" strokeWidth=".9" fill="none" strokeLinejoin="round" />
        <circle cx="22" cy="22" r="4" stroke="#c9a227" strokeWidth=".8" fill="rgba(201,162,39,.12)" />
      </svg>
    ),
  },
];

const WHY_STRIP = [
  {
    num: "04",
    title: "Latest Equipment",
    desc: "Industry-leading tools, sanitized after every guest without exception.",
    image: GALLERY[2].src,
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
        <rect x="4" y="10" width="28" height="18" rx="2" stroke="#c9a227" strokeWidth=".9" />
        <line x1="18" y1="4" x2="18" y2="10" stroke="#c9a227" strokeWidth=".9" />
        <circle cx="18" cy="19" r="4" stroke="#c9a227" strokeWidth=".8" fill="rgba(201,162,39,.1)" />
        <line x1="10" y1="28" x2="26" y2="28" stroke="#c9a227" strokeWidth=".8" opacity=".4" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Personalised Service",
    desc: "Every visit begins with an honest consultation — your vision drives our art.",
    image: GALLERY[3].src,
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
        <circle cx="14" cy="12" r="5" stroke="#c9a227" strokeWidth=".9" />
        <circle cx="24" cy="10" r="4" stroke="#c9a227" strokeWidth=".8" opacity=".6" />
        <path d="M6 28Q14 20 22 28" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <path d="M20 26Q26 20 32 26" stroke="#c9a227" strokeWidth=".8" fill="none" opacity=".6" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Bespoke Packages",
    desc: "Bridal, pre-bridal, seasonal — curated entirely for your occasion.",
    image: GALLERY[4].src,
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
        <circle cx="11" cy="12" r="5" stroke="#c9a227" strokeWidth=".9" />
        <circle cx="11" cy="26" r="5" stroke="#c9a227" strokeWidth=".9" />
        <line x1="14.5" y1="16" x2="32" y2="8" stroke="#c9a227" strokeWidth=".9" strokeLinecap="round" />
        <line x1="14.5" y1="22" x2="32" y2="30" stroke="#c9a227" strokeWidth=".9" strokeLinecap="round" />
        <circle cx="14.5" cy="19" r="2" fill="#c9a227" opacity=".6" />
      </svg>
    ),
  },
];

// Card bg & text colors — same as section bg so they blend
const CARD_BG   = "#0d0a06";   // ← change this one value to match your section bg
const CARD_BG2  = "#110e08";   // hover state (slightly lighter)
const CARD_FEAT = "linear-gradient(160deg,#1a1206 0%,#0d0a05 100%)";
const CELL_TEXT = "#e8dcc8";   // warm cream — matches card feel
const MUTED     = "#7a6a4a";

export function WhyChooseUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    // Section bg = same dark tone as cards so everything blends
    <section ref={ref} className="pt-12 pb-28 px-6" style={{ background: CARD_BG }}>
      <style>{`
        .why-cell{position:relative;overflow:hidden;cursor:default;transition:background .4s;}
        .why-cell::before{content:'';position:absolute;top:0;left:0;width:0;height:0;border-top:40px solid #c9a227;border-right:40px solid transparent;opacity:0;transition:opacity .35s;z-index:2;}
        .why-cell:hover::before{opacity:1;}
        .why-cell:hover{background:${CARD_BG2} !important;}
        .why-cell:hover .cell-title{color:#f0d060 !important;}
        .why-cell .title-line{display:block;width:0;height:.5px;background:#c9a227;margin-top:8px;transition:width .4s;}
        .why-cell:hover .title-line{width:32px;}
        .cell-num{position:absolute;right:20px;bottom:8px;font-family:'Playfair Display',serif;font-size:90px;font-weight:400;color:rgba(201,162,39,0.04);line-height:1;pointer-events:none;transition:color .4s;}
        .why-cell:hover .cell-num{color:rgba(201,162,39,0.09);}
        .why-strip-item{position:relative;overflow:hidden;cursor:default;transition:background .4s;flex:1;}
        .why-strip-item::before{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#c9a227;transition:width .5s;}
        .why-strip-item:hover::before{width:100%;}
        .why-strip-item:hover{background:${CARD_BG2} !important;}
        .why-strip-item:hover .strip-title{color:#f0d060 !important;}
        .shine-sweep::after{content:'';position:absolute;top:0;left:-80%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(247,228,122,.03),transparent);transform:skewX(-15deg);transition:left .6s ease;pointer-events:none;z-index:3;}
        .shine-sweep:hover::after{left:130%;}
        .hover-bg-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transform:scale(1.05); transition:opacity .5s ease, transform .5s ease; z-index:0; pointer-events:none; }
        .why-cell:hover .hover-bg-img, .why-strip-item:hover .hover-bg-img { opacity:0.6; transform:scale(1); }
        @keyframes flash-bg {
          0% { opacity: 0; transform: scale(1.05); }
          30% { opacity: 0.6; transform: scale(1); }
          70% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        .flash-anim { animation: flash-bg 2s ease-in-out; }
      `}</style>

      {/* ── Section Heading – single line title ── */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 24, marginBottom: 20,
        }}>
          <span style={{ flex: "0 0 50px", height: "1px", background: "linear-gradient(90deg,transparent,#c9a227)" }} />
          <span style={{ fontSize: 16, letterSpacing: ".4em", color: MUTED, textTransform: "uppercase", fontWeight: "bold" }}>
            Why Choose Us
          </span>
          <span style={{ flex: "0 0 50px", height: "1px", background: "linear-gradient(90deg,#c9a227,transparent)" }} />
        </div>

        {/* Single-line title */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(26px, 4vw, 42px)",
          fontWeight: 400,
          color: CELL_TEXT,
          lineHeight: 1.2,
          whiteSpace: "nowrap",
        }}>
          The{" "}
          <span style={{
            color: "transparent",
            background: "linear-gradient(135deg,#7a5c1a 0%,#d4af37 40%,#f7e47a 55%,#d4af37 72%,#7a5c1a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}>
            CityCalls Saloon
          </span>
          {" "}Difference
        </h2>

        <p style={{
          marginTop: 16, fontSize: 13, color: MUTED,
          letterSpacing: ".08em", lineHeight: 1.8,
        }}>
          Six promises that define every appointment, every service, every smile.
        </p>
      </div>

      {/* ── Bento Grid ── */}
      <div
        className="mx-auto max-w-6xl"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "1px",
          background: "rgba(201,162,39,0.15)",
          border: "1px solid rgba(201,162,39,0.15)",
        }}
      >
        {/* Top two cells */}
        {WHY_TOP.map((w, i) => (
          <div
            key={w.num}
            className="why-cell shine-sweep"
            style={{ background: CARD_BG, padding: "44px 38px" }}
          >
            <img src={w.image} alt="" className={`hover-bg-img ${inView ? "flash-anim" : ""}`} style={{ animationDelay: `${i * 0.15}s` }} />
            <span className="cell-num">{w.num}</span>
            <div style={{ width: 44, height: 44, marginBottom: 26, position: "relative", zIndex: 1 }}>
              {w.icon}
            </div>
            <h3
              className="cell-title"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 400,
                color: CELL_TEXT,
                marginBottom: 12, position: "relative", zIndex: 1,
                lineHeight: 1.3, transition: "color .3s",
              }}
            >
              {w.title}
              <span className="title-line" />
            </h3>
            <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.85, letterSpacing: ".03em", position: "relative", zIndex: 1 }}>
              {w.desc}
            </p>
          </div>
        ))}

        {/* Featured cell — col 3, rows 1–2 */}
        <div
          className="why-cell"
          style={{
            gridColumn: 3, gridRow: "1 / 3",
            background: CARD_FEAT,
            padding: "52px 42px",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}
        >
          <img src={GALLERY[5].src} alt="" className={`hover-bg-img ${inView ? "flash-anim" : ""}`} style={{ animationDelay: "0.3s" }} />
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 30%,rgba(201,162,39,0.07),transparent)",
            pointerEvents: "none",
          }} />
          <span className="cell-num" style={{ fontSize: 130, right: 8, bottom: 0 }}>✦</span>

          <blockquote style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: 26, color: "#c9a227", lineHeight: 1.4,
            marginBottom: 28, position: "relative", zIndex: 1,
          }}>
            <span style={{ display: "block", fontSize: 56, lineHeight: 0.6, color: "rgba(201,162,39,.22)", marginBottom: 12 }}>&ldquo;</span>
            Beauty is confidence made visible.
          </blockquote>

          <div style={{ width: 32, height: ".5px", background: "#c9a227", marginBottom: 28, position: "relative", zIndex: 1 }} />

          <div style={{ width: 40, height: 40, marginBottom: 18, position: "relative", zIndex: 1 }}>
            <svg viewBox="0 0 44 44" fill="none" style={{ width: "100%", height: "100%" }}>
              <path d="M8 36Q22 4 36 36" stroke="#c9a227" strokeWidth="1" fill="none" />
              <circle cx="22" cy="20" r="6" stroke="#c9a227" strokeWidth=".8" fill="rgba(201,162,39,.08)" />
              <line x1="22" y1="14" x2="22" y2="8" stroke="#c9a227" strokeWidth=".7" opacity=".5" />
              <line x1="22" y1="26" x2="22" y2="36" stroke="#c9a227" strokeWidth=".7" opacity=".5" />
            </svg>
          </div>

          <h3
            className="cell-title"
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400,
              color: CELL_TEXT, marginBottom: 14,
              position: "relative", zIndex: 1, transition: "color .3s",
            }}
          >
            Luxury Ambience
            <span className="title-line" />
          </h3>
          <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.85, position: "relative", zIndex: 1 }}>
            Step into our opulent black-and-gold sanctuary — designed to let you exhale, unwind, and emerge transformed.
          </p>
        </div>

        {/* Strip row — cols 1–2, row 2 */}
        <div style={{
          gridColumn: "1 / 3", gridRow: 2,
          display: "flex",
          background: CARD_BG,
          borderTop: "1px solid rgba(201,162,39,0.15)",
        }}>
          {WHY_STRIP.map((w, i) => (
            <div
              key={w.num}
              className="why-strip-item shine-sweep"
              style={{
                flex: 1, padding: "38px 32px",
                background: CARD_BG,
                borderRight: i < WHY_STRIP.length - 1 ? "1px solid rgba(201,162,39,0.15)" : "none",
              }}
            >
              <img src={w.image} alt="" className={`hover-bg-img ${inView ? "flash-anim" : ""}`} style={{ animationDelay: `${(i + 3) * 0.15}s` }} />
              <div style={{ fontSize: 10, letterSpacing: ".3em", color: "rgba(201,162,39,.35)", marginBottom: 14, position: "relative", zIndex: 1 }}>
                {w.num}
              </div>
              <div style={{ width: 34, height: 34, marginBottom: 16, position: "relative", zIndex: 1 }}>{w.icon}</div>
              <div
                className="strip-title"
                style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 400,
                  color: CELL_TEXT, marginBottom: 8, transition: "color .3s", position: "relative", zIndex: 1,
                }}
              >
                {w.title}
              </div>
              <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.75, position: "relative", zIndex: 1 }}>
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
