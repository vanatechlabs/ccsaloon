"use client";
import { motion } from "framer-motion";

const PHRASES = [
  { text: "SS LUXE SALON",            filled: true  },
  { text: "Luxury Beauty Experience", filled: false },
  { text: "Premium Salon Services",   filled: true  },
  { text: "Bridal Makeup Experts",    filled: false },
  { text: "Hair · Skin · Nails · Makeup", filled: true },
];

const SEP = "✦";

// Alternate filled ↔ stroke automatically
const row = [...PHRASES, ...PHRASES];

export function Marquee() {
  return (
    <section className="relative overflow-hidden bg-[#0c0a09] py-5 md:py-8"
      style={{ borderTop: "0.5px solid rgba(201,162,39,0.18)", borderBottom: "0.5px solid rgba(201,162,39,0.18)" }}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28"
        style={{ background: "linear-gradient(to right, #0c0a09 0%, transparent 100%)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28"
        style={{ background: "linear-gradient(to left, #0c0a09 0%, transparent 100%)" }} />

      {/* Thin gold rule above & below text */}
      <div className="pointer-events-none absolute inset-x-0 top-[18%] h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(201,162,39,0.12) 20%,rgba(201,162,39,0.12) 80%,transparent)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(201,162,39,0.12) 20%,rgba(201,162,39,0.12) 80%,transparent)" }} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        className="flex shrink-0 items-center whitespace-nowrap will-change-transform"
        style={{ gap: 0 }}
      >
        {row.map((p, i) => (
          <span key={i} className="flex items-center" style={{ gap: 0 }}>
            {/* The phrase — alternates filled / stroke */}
            <span
              style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "clamp(1.1rem, 2.2vw, 2rem)",
                letterSpacing: "0.12em",
                lineHeight: 1,
                fontWeight: p.filled ? 400 : 400,
                // Filled = solid gold; Stroke = transparent fill with gold outline
                ...(p.filled
                  ? { color: "#c9a227" }
                  : {
                      color: "transparent",
                      WebkitTextStroke: "0.8px #c9a227",
                      // fallback for non-webkit
                      textShadow: "none",
                    }),
              }}
            >
              {p.text}
            </span>

            {/* Separator */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginInline: "clamp(20px, 2.5vw, 36px)",
                fontSize: "0.55em",
                color: "rgba(201,162,39,0.45)",
                lineHeight: 1,
                position: "relative",
                top: "0.05em",
              }}
            >
              {SEP}
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
