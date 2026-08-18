"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "I have been to high-end salons across the world. SS Luxe stands proudly among them — same quality, warmer hospitality.",
    name: "Neha Sinha",
    role: "Fashion Editor",
    rating: 5,
    initials: "NS",
    featured: false,
  },
  {
    quote:
      "Their hair spa transformed my hair completely. I keep coming back — it's my monthly self-care ritual.",
    name: "Tara Malhotra",
    role: "Working Professional",
    rating: 5,
    initials: "TM",
    featured: false,
  },
  {
    quote:
      "The makeup artists understand light, skin and emotion. Booked them for three editorials already.",
    name: "Isha Reddy",
    role: "Beauty Influencer",
    rating: 5,
    initials: "IR",
    featured: false,
  },
  {
    quote:
      "My bridal look was beyond a dream. The team at SS Luxe made me feel like absolute royalty — every detail was perfection.",
    name: "Priya Verma",
    role: "Bride · 2025",
    rating: 5,
    initials: "PV",
    featured: true,
  },
  {
    quote:
      "The luxury experience here is unmatched. From the ambience to the products, everything feels world-class.",
    name: "Anjali Kapoor",
    role: "Loyal Client · 3 Years",
    rating: 5,
    initials: "AK",
    featured: false,
  },
  {
    quote:
      "Every visit feels like an occasion. The staff is attentive, skilled, and genuinely passionate about their craft.",
    name: "Meera Nair",
    role: "Entrepreneur",
    rating: 5,
    initials: "MN",
    featured: false,
  },
];

export function TestimonialsSection() {
  // Duplicate array for seamless marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0f0c0a 0%, #1a1410 40%, #0f0c0a 100%)",
        padding: "48px 0 64px",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
          padding: 10px 20px;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          /* Shift by -50% minus half the gap to perfectly align the duplicate */
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        /* Fading edges */
        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #0f0c0a, transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #0f0c0a, transparent);
        }
      `}</style>

      {/* Top gold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 320,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #c9a96e, transparent)",
        }}
      />

      {/* Bottom gold line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 320,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #c9a96e, transparent)",
        }}
      />

      {/* Eyebrow */}
      <p
        style={{
          textAlign: "center",
          fontSize: 10,
          letterSpacing: "0.35em",
          color: "#c9a96e",
          fontWeight: 500,
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Voices Of Confidence
      </p>

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 40,
          fontWeight: 400,
          color: "#f5efe6",
          marginBottom: 48,
          lineHeight: 1.2,
        }}
      >
        Loved By Our{" "}
        <span style={{ color: "#c9a96e", fontStyle: "italic" }}>Clients</span>
      </h2>

      {/* Marquee Track */}
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((t, index) => (
            <TestimonialCard key={`${t.name}-${index}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "320px", // Fixed width to ensure 4 fit cleanly
        minWidth: "320px",
        background: testimonial.featured
          ? "rgba(201, 169, 110, 0.04)"
          : hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.03)",
        border: `0.5px solid ${
          hovered || testimonial.featured
            ? "rgba(201,169,110,0.5)"
            : "rgba(201,169,110,0.2)"
        }`,
        borderRadius: 12,
        padding: "28px 22px 26px",
        textAlign: "center",
        transition: "border-color 0.3s, background 0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Opening quote mark */}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 52,
          lineHeight: 1,
          color: "#c9a96e",
          opacity: 0.4,
          marginBottom: -8,
        }}
      >
        "
      </span>

      {/* Stars */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          marginBottom: 14,
        }}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: "#c9a96e", fontSize: 12 }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: 15,
          lineHeight: 1.75,
          color: "#d4c4a8",
          marginBottom: 20,
          flex: 1,
        }}
      >
        {testimonial.quote}
      </p>

      {/* Gold divider */}
      <div
        style={{
          width: 32,
          height: 0.5,
          background:
            "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          marginBottom: 16,
        }}
      />

      {/* Avatar */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.4)",
          background: "rgba(201,169,110,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          color: "#c9a96e",
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        {testimonial.initials}
      </div>

      {/* Name */}
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#c9a96e",
          fontWeight: 500,
          marginBottom: 4,
        }}
      >
        {testimonial.name}
      </p>

      {/* Role */}
      <p
        style={{
          fontSize: 10,
          color: "rgba(212, 196, 168, 0.5)",
          letterSpacing: "0.05em",
          fontWeight: 300,
        }}
      >
        {testimonial.role}
      </p>
    </div>
  );
}
