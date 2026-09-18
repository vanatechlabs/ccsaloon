import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import priceBg from "@/assets/price_bg.png";
import { RevealText } from "@/components/ui-luxe/RevealText";

// ─── Data (from price list image) ────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "BEAUTY SERVICES",
    label: "Beauty Services",
    num: "01",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="20" cy="14" r="7" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <path d="M8 36 Q20 24 32 36" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <path d="M14 20 Q20 30 26 20" stroke="#c9a227" strokeWidth=".7" fill="none" opacity=".5" />
      </svg>
    ),
  },
  {
    id: "HAIR SERVICES",
    label: "Hair Services",
    num: "02",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M20 4 C12 4 8 12 10 20 C12 28 16 32 20 36 C24 32 28 28 30 20 C32 12 28 4 20 4Z" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <path d="M14 14 Q20 20 26 14" stroke="#c9a227" strokeWidth=".7" fill="none" opacity=".5" />
        <line x1="20" y1="4" x2="20" y2="36" stroke="#c9a227" strokeWidth=".5" opacity=".3" />
      </svg>
    ),
  },
  {
    id: "FACIALS",
    label: "Facials",
    num: "03",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <circle cx="20" cy="20" r="14" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <circle cx="15" cy="17" r="2" stroke="#c9a227" strokeWidth=".7" fill="none" />
        <circle cx="25" cy="17" r="2" stroke="#c9a227" strokeWidth=".7" fill="none" />
        <path d="M14 25 Q20 30 26 25" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <path d="M10 12 Q12 6 20 6 Q28 6 30 12" stroke="#c9a227" strokeWidth=".6" fill="none" opacity=".4" />
      </svg>
    ),
  },
  {
    id: "MANI / PEDI",
    label: "Mani / Pedi",
    num: "04",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M12 28 L12 16 Q12 12 16 12 Q20 12 20 16 L20 24" stroke="#c9a227" strokeWidth=".9" fill="none" strokeLinecap="round" />
        <path d="M16 28 L16 14 Q16 10 20 10 Q24 10 24 14 L24 24" stroke="#c9a227" strokeWidth=".9" fill="none" strokeLinecap="round" opacity=".7" />
        <path d="M20 28 L20 16 Q20 12 24 12 Q28 12 28 16 L28 24" stroke="#c9a227" strokeWidth=".9" fill="none" strokeLinecap="round" opacity=".4" />
        <line x1="10" y1="30" x2="30" y2="30" stroke="#c9a227" strokeWidth=".8" />
        <line x1="10" y1="34" x2="30" y2="34" stroke="#c9a227" strokeWidth=".5" opacity=".4" />
      </svg>
    ),
  },
  {
    id: "MAKEUP",
    label: "Makeup",
    num: "05",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <path d="M10 34 L20 8 L30 34" stroke="#c9a227" strokeWidth=".9" fill="none" strokeLinejoin="round" />
        <line x1="13" y1="26" x2="27" y2="26" stroke="#c9a227" strokeWidth=".7" />
        <circle cx="20" cy="8" r="2.5" stroke="#c9a227" strokeWidth=".8" fill="rgba(201,162,39,.15)" />
        <path d="M16 34 Q20 31 24 34" stroke="#c9a227" strokeWidth=".6" fill="none" opacity=".5" />
      </svg>
    ),
  },
  {
    id: "NAIL SERVICES",
    label: "Nail Services",
    num: "06",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: "100%", height: "100%" }}>
        <rect x="13" y="8" width="14" height="20" rx="7" stroke="#c9a227" strokeWidth=".9" fill="none" />
        <rect x="16" y="11" width="8" height="10" rx="4" stroke="#c9a227" strokeWidth=".6" fill="rgba(201,162,39,.1)" />
        <line x1="20" y1="28" x2="20" y2="34" stroke="#c9a227" strokeWidth=".9" />
        <line x1="15" y1="34" x2="25" y2="34" stroke="#c9a227" strokeWidth=".8" />
      </svg>
    ),
  },
] as const;

type CatId = (typeof CATEGORIES)[number]["id"];

const PRICING_DATA: Record<CatId, { name: string; price: string }[]> = {
  "BEAUTY SERVICES": [
    { name: "Eyebrows", price: "40" },
    { name: "Upper Lips", price: "20" },
    { name: "Forehead", price: "20" },
    { name: "Chin", price: "20" },
    { name: "Eyebrows (Wax)", price: "100" },
    { name: "Upper Lips (Wax)", price: "60" },
    { name: "Forehead (Wax)", price: "40" },
    { name: "Chin (Wax)", price: "40" },
    { name: "Side Lock Wax", price: "200" },
    { name: "Face Wax", price: "400" },
    { name: "Under Arms (Normal)", price: "80" },
    { name: "Under Arms (Rica)", price: "100" },
    { name: "Hand Wax (Normal)", price: "250" },
    { name: "Half Legs Wax (Normal)", price: "400" },
    { name: "Full Legs Wax (Normal)", price: "600" },
    { name: "Hand Wax (Rica)", price: "400" },
    { name: "Half Legs Wax (Rica)", price: "500" },
    { name: "Full Legs Wax (Rica)", price: "800" },
    { name: "B. Wax (Normal)", price: "1500" },
    { name: "B. Wax (Rica)", price: "2000" },
  ],
  "HAIR SERVICES": [
    { name: "Headwash", price: "200" },
    { name: "Blow Dryer", price: "300" },
    { name: "Hair Spa (Basic)", price: "800" },
    { name: "Hair Spa (Advance)", price: "1200" },
    { name: "Baby Haircut", price: "250" },
    { name: "Haircut", price: "500" },
    { name: "Smoothing / Rebonding", price: "3000" },
    { name: "Keratin", price: "2500" },
    { name: "Botox", price: "3500" },
    { name: "Nanoplastia", price: "5000" },
    { name: "Highlights Per Stick", price: "250" },
    { name: "Global Color", price: "3000" },
    { name: "Highlights + Global Color", price: "5000" },
    { name: "Hair Ironing", price: "500" },
    { name: "Hair Curls", price: "700" },
    { name: "Advance Hairstyling", price: "1000" },
  ],
  "FACIALS": [
    { name: "Cleanup", price: "800" },
    { name: "Face Bleach", price: "200" },
    { name: "Full Back Bleach", price: "200" },
    { name: "Face D-Tan", price: "500" },
    { name: "Skin Brightening Mask", price: "500" },
    { name: "VLCC Facial", price: "1000" },
    { name: "Lotus Facial", price: "1500" },
    { name: "Kanpeki", price: "2000" },
    { name: "O3+ Facial", price: "2500" },
    { name: "Hydra Facial", price: "3500" },
  ],
  "MANI / PEDI": [
    { name: "Manicure (Basic)", price: "500" },
    { name: "Manicure (Deluxe)", price: "800" },
    { name: "Foot Massage", price: "350" },
    { name: "Pedicure (Basic)", price: "800" },
    { name: "Pedicure (Deluxe)", price: "1200" },
  ],
  "MAKEUP": [
    { name: "Basic Makeup", price: "1500" },
    { name: "Party Makeup", price: "2500" },
    { name: "HD Party Makeup", price: "3500" },
    { name: "HD + Airbrush Party Makeup", price: "5000" },
    { name: "Engagement Makeup", price: "8000" },
    { name: "Reception Makeup", price: "10,000" },
    { name: "Bridal Makeup", price: "15,000" },
  ],
  "NAIL SERVICES": [
    { name: "Nail Paint Overlay", price: "600" },
    { name: "Nail Extension", price: "800" },
    { name: "Acrylic Nail Extensions", price: "1400" },
    { name: "Gel Nail Extensions", price: "1200" },
    { name: "French Nail Art", price: "300" },
    { name: "Ombre Nail Art", price: "400" },
    { name: "Cat Eye Nail Art", price: "600" },
    { name: "Advance Chrome Nail Art", price: "200" },
    { name: "Brush Nail Art (Per Finger)", price: "50" },
    { name: "Poly Gel Nail", price: "1400" },
  ],
};

// ─── Stagger variants ─────────────────────────────────────────────────────────
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.02 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -18, filter: "blur(4px)" },
  show:   { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  exit:   { opacity: 0, x: 12,  filter: "blur(3px)", transition: { duration: 0.2,  ease: "easeIn" as const } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function PricingSection() {
  const [active, setActive] = useState<CatId>("BEAUTY SERVICES");
  const activeCat = CATEGORIES.find((c) => c.id === active)!;
  const items = PRICING_DATA[active];

  return (
    <section
      className="relative overflow-hidden pt-12 pb-24"
      style={{ background: "#080604", minHeight: "100vh" }}
    >
      {/* Subtle bg image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src={priceBg}
          alt=""
          aria-hidden
          style={{ width: "100%", maxWidth: 860, objectFit: "contain", opacity: 0.9, mixBlendMode: "screen" }}
        />
      </div>

      {/* Radial gold glow center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <RevealText>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 20 }}>
              <span style={{ flex: "0 0 50px", height: "1px", background: "linear-gradient(90deg,transparent,#c9a227)" }} />
              <span style={{ fontSize: 16, letterSpacing: ".4em", color: "#6b5520", textTransform: "uppercase", fontWeight: "bold" }}>
                Our Prices
              </span>
              <span style={{ flex: "0 0 50px", height: "1px", background: "linear-gradient(90deg,#c9a227,transparent)" }} />
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px,4.5vw,48px)",
              fontWeight: 400,
              color: "#e8dcc8",
              letterSpacing: ".12em",
              lineHeight: 1.15,
            }}>
              CityCalls{" "}
              <span style={{
                color: "transparent",
                background: "linear-gradient(135deg,#7a5c1a 0%,#d4af37 40%,#f7e47a 55%,#d4af37 72%,#7a5c1a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}>Saloon Service</span>{" "}Price List
            </h2>
          </RevealText>
          <RevealText delay={0.18}>
            <p style={{ marginTop: 14, fontSize: 12, color: "#5a4718", letterSpacing: ".2em", textTransform: "uppercase" }}>
              Transparent pricing · No hidden charges
            </p>
          </RevealText>
        </div>

        {/* ── Category tabs — vertical left sidebar + content right ── */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 0, border: "1px solid rgba(201,162,39,0.14)", minHeight: 620 }}>

          {/* Left sidebar — category list */}
          <div style={{ borderRight: "1px solid rgba(201,162,39,0.14)", display: "flex", flexDirection: "column" }}>
            {CATEGORIES.map((cat, idx) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "20px 24px",
                    borderBottom: idx < CATEGORIES.length - 1 ? "1px solid rgba(201,162,39,0.1)" : "none",
                    background: isActive ? "rgba(201,162,39,0.07)" : "transparent",
                    position: "relative",
                    transition: "background .3s",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.03)"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: 2, background: "#c9a227",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Number */}
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 11, color: isActive ? "#c9a227" : "rgba(201,162,39,0.6)",
                    letterSpacing: ".3em", minWidth: 20,
                    transition: "color .3s",
                  }}>
                    {cat.num}
                  </span>

                  {/* Icon */}
                  <div style={{
                    width: 28, height: 28, flexShrink: 0,
                    opacity: isActive ? 1 : 0.6,
                    transition: "opacity .3s",
                  }}>
                    {cat.icon}
                  </div>

                  {/* Label */}
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13, fontWeight: 400,
                    color: isActive ? "#e8dcc8" : "#a89060",
                    letterSpacing: ".08em",
                    transition: "color .3s",
                  }}>
                    {cat.label}
                  </span>

                  {/* Arrow on active */}
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ marginLeft: "auto", color: "#c9a227", fontSize: 10 }}
                    >
                      →
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div style={{ padding: "36px 40px", position: "relative", overflow: "hidden" }}>

            {/* Category header inside panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${active}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 18 }}
              >
                <div style={{ width: 44, height: 44 }}>{activeCat.icon}</div>
                <div>
                  <p style={{ fontSize: 10, letterSpacing: ".45em", color: "#6b5520", textTransform: "uppercase", marginBottom: 4 }}>
                    {activeCat.num} / 06
                  </p>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 400,
                    color: "#e8dcc8", letterSpacing: ".1em",
                  }}>
                    {activeCat.label}
                  </h3>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <span style={{ fontSize: 10, letterSpacing: ".3em", color: "rgba(201,162,39,0.3)", textTransform: "uppercase" }}>
                    {items.length} Services
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Gold rule */}
            <div style={{ height: ".5px", background: "linear-gradient(90deg,#c9a227,rgba(201,162,39,0.1) 60%,transparent)", marginBottom: 28 }} />

            {/* Pricing rows */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{
                  display: "grid",
                  gridTemplateColumns: items.length > 8 ? "1fr 1fr" : "1fr",
                  columnGap: 48,
                  rowGap: 0,
                }}
              >
                {items.map((item, idx) => (
                  <motion.div
                    key={item.name + idx}
                    variants={itemVariants}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px 0",
                      borderBottom: "1px solid rgba(201,162,39,0.07)",
                      cursor: "default",
                      gap: 12,
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Index dot */}
                    <span style={{
                      width: 4, height: 4, borderRadius: "50%",
                      background: "rgba(201,162,39,0.3)", flexShrink: 0,
                    }} />

                    {/* Name */}
                    <span style={{
                      flex: 1,
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 400,
                      color: "#a89060",
                      letterSpacing: ".06em",
                      transition: "color .2s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#e8dcc8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#a89060")}
                    >
                      {item.name}
                    </span>

                    {/* Dotted rule */}
                    <div style={{
                      flex: "0 0 40px",
                      borderBottom: "1px dashed rgba(201,162,39,0.15)",
                    }} />

                    {/* Price */}
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "#c9a227",
                      letterSpacing: ".04em",
                      flexShrink: 0,
                      minWidth: 52,
                      textAlign: "right",
                    }}>
                      ₹{item.price}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Ghost large category number — bg decoration */}
            <div style={{
              position: "absolute", right: 28, bottom: 16,
              fontFamily: "'Playfair Display', serif",
              fontSize: 120, fontWeight: 400, lineHeight: 1,
              color: "rgba(201,162,39,0.035)",
              pointerEvents: "none", userSelect: "none",
            }}>
              {activeCat.num}
            </div>
          </div>
        </div>

        {/* ── Footer note ── */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 13,
            color: "#5a4718",
            letterSpacing: ".08em",
          }}>
            Beauty Begins Here, Confidence Stays Forever.
          </p>
          <p style={{ marginTop: 8, fontSize: 10, letterSpacing: ".4em", color: "rgba(201,162,39,0.3)", textTransform: "uppercase" }}>
            Book your appointment · 8796047447
          </p>
        </div>

      </div>
    </section>
  );
}
