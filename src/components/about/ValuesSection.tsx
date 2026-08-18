import { Crown, Heart, Eye, Trophy } from "lucide-react";

const VALUES = [
  { icon: Crown, title: "Excellence", num: "01", desc: "Nothing leaves our chairs unless it meets a senior stylist's standard." },
  { icon: Heart, title: "Hospitality", num: "02", desc: "Warmth is part of every appointment — guests are never just clients." },
  { icon: Eye, title: "Detail", num: "03", desc: "From product to ambience, every detail is curated with purpose." },
  { icon: Trophy, title: "Mastery", num: "04", desc: "Decades of combined training across hair, skin, makeup and nails." },
];

export function ValuesSection() {
  return (
    <section
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="relative overflow-hidden bg-[#0e0c09] px-6 py-14 rounded-xl"
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 65%)" }}
      />

      {/* Corner brackets */}
      <span className="absolute top-4 left-5 h-4 w-4 border-t border-l border-[rgba(201,168,76,0.3)]" />
      <span className="absolute bottom-4 right-5 h-4 w-4 border-b border-r border-[rgba(201,168,76,0.3)]" />

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-9 bg-[rgba(201,168,76,0.45)]" />
        <span className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
          Brand Values
        </span>
        <span className="h-px w-9 bg-[rgba(201,168,76,0.45)]" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[42px] font-light leading-tight text-[#f5edd8] mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Crafted With <em className="italic text-[#d4a843]">Intention</em>
      </h2>
      <p className="text-center text-[12.5px] font-light tracking-widest text-[rgba(245,237,216,0.35)] mb-12">
        Every visit. Every detail. Every time.
      </p>

      {/* Cards grid */}
      <div
        className="mx-auto grid max-w-4xl overflow-hidden rounded-md border border-[rgba(201,168,76,0.15)]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(148px, 1fr))",
          gap: "1px",
          background: "rgba(201,168,76,0.12)",
        }}
      >
        {VALUES.map(({ icon: Icon, title, num, desc }) => (
          <div
            key={title}
            className="group relative flex flex-col items-center bg-[#0e0c09] px-6 py-9 text-center transition-colors duration-300 hover:bg-[#141109]"
          >
            {/* Top hover line */}
            <span className="absolute top-0 left-1/2 h-px w-12 -translate-x-1/2 scale-x-0 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] transition-all duration-300 group-hover:border-[rgba(201,168,76,0.6)] group-hover:bg-[rgba(201,168,76,0.09)]">
              <Icon className="h-5 w-5 text-[#c9a84c]" />
            </div>

            {/* Number */}
            <span
              className="mb-1 text-[10px] tracking-[0.15em] text-[rgba(201,168,76,0.3)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {num}
            </span>

            {/* Title */}
            <h3
              className="mb-3 text-[23px] font-semibold leading-none text-[#f5edd8]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h3>

            {/* Divider */}
            <span className="mb-3 block h-px w-5 bg-[rgba(201,168,76,0.35)]" />

            {/* Description */}
            <p className="text-[12px] font-light leading-relaxed tracking-wide text-[rgba(245,237,216,0.45)]">
              {desc}
            </p>
          </div>
        ))}
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
