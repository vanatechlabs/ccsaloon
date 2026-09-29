"use client";

import { useEffect, useRef, useState } from "react";

/* ─── data ─────────────────────────────────────────────────── */
const STATS = [
  {
    end: 10000,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    end: 10,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    end: 50,
    suffix: "+",
    label: "Premium Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    end: 15,
    suffix: "+",
    label: "Beauty Experts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

/* ─── easing ────────────────────────────────────────────────── */
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ─── single animated counter ──────────────────────────────── */
function AnimatedCounter({
  end,
  suffix,
  active,
  delay,
}: {
  end: number;
  suffix: string;
  active: boolean;
  delay: number;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.round(easeOutExpo(progress) * end));
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      }

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, end, delay]);

  const display = end >= 1000 ? value.toLocaleString() : value;
  return (
    <>
      {display}
      <span
        className="text-[36px] font-light text-[#b8945a]"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {suffix}
      </span>
    </>
  );
}

/* ─── main section ──────────────────────────────────────────── */
export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Montserrat:wght@300;600&display=swap');

        .stat-item-enter {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.34,1.3,0.64,1);
        }
        .stat-item-enter.stat-active {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-gold-bar {
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8945a, transparent);
          width: 0;
          margin: 0 auto;
          transition: width 1.2s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .stat-active .stat-gold-bar {
          width: 40px;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#0a0806] pt-10 pb-10"
      >
        {/* Top border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a]/50 to-transparent" />
        {/* Bottom border */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#b8945a]/50 to-transparent" />

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-[#b8945a]/60" />
          <span
            className="text-[12px] font-semibold tracking-[0.4em] uppercase text-[#b8945a]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Numbers
          </span>
          <span className="w-12 h-px bg-[#b8945a]/30" />
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item-enter ${active ? "stat-active" : ""} relative px-6 py-8 text-center`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {/* Vertical divider */}
              {i > 0 && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#b8945a]/20 to-transparent" />
              )}

              {/* Icon box */}
              <div className="relative w-9 h-9 mx-auto mb-5 border border-[#b8945a]/40 flex items-center justify-center bg-[#b8945a]/[0.05]">
                <span className="text-[#b8945a]">{stat.icon}</span>
              </div>

              {/* Number */}
              <div
                className="flex items-baseline justify-center gap-0.5 mb-4 text-[#f2ede8] text-[72px] font-light leading-none tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  active={active}
                  delay={i * 110 + 200}
                />
              </div>

              {/* Gold bar */}
              <div className="stat-gold-bar mb-4" />

              {/* Label */}
              <p
                className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#e8dcc8]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
