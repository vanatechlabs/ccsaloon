import { SectionHeading } from "@/components/ui-luxe/SectionHeading";
import { GALLERY } from "@/data/gallery";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const TIMELINE = [
  { year: "2014", title: "The Beginning", desc: "CityCalls Saloon is founded with a single chair and a single vision.", side: "left", image: GALLERY[1].src },
  { year: "2017", title: "Award-Winning Bridal Studio", desc: "Recognised as one of the city's top bridal studios.", side: "right", image: GALLERY[2].src },
  { year: "2020", title: "New Flagship Atelier", desc: "Our black & gold flagship opens — designed by interior maestros.", side: "left", image: GALLERY[3].src },
  { year: "2023", title: "10,000+ Happy Clients", desc: "A loyal community of women who trust us with their most precious moments.", side: "right", image: GALLERY[4].src },
  { year: "2025", title: "Couture Beauty", desc: "Launching our luxury bridal couture and editorial division.", side: "left", image: GALLERY[5].src },
];

export function TimelineSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-[#0e0c09] px-6 py-14"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <style>{`
        .hover-bg-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          opacity: 0; transform: scale(1.05); transition: opacity 0.5s ease, transform 0.5s ease;
          z-index: 0; pointer-events: none;
        }
        .group:hover .hover-bg-img {
          opacity: 0.4; transform: scale(1);
        }

        @keyframes tl-flash-bg {
          0% { opacity: 0; transform: scale(1.05); }
          30% { opacity: 0.4; transform: scale(1); }
          70% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        .flash-anim { animation: tl-flash-bg 2s ease-in-out; }
      `}</style>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
      />

      {/* Corner brackets */}
      <span className="absolute top-4 left-5 h-4 w-4 border-t border-l border-[rgba(201,168,76,0.3)]" />
      <span className="absolute bottom-4 right-5 h-4 w-4 border-b border-r border-[rgba(201,168,76,0.3)]" />

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
        <span className="text-[14px] font-medium tracking-[0.22em] uppercase text-[#c9a84c]">
          Our Journey
        </span>
        <span className="h-px w-8 bg-[rgba(201,168,76,0.45)]" />
      </div>

      {/* Heading */}
      <h2
        className="text-center text-[40px] font-light leading-tight text-[#f5edd8] mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        A Decade Of <em className="italic text-[#d4a843]">Beauty</em>
      </h2>
      <p className="text-center text-xs font-light tracking-widest text-[rgba(245,237,216,0.3)] mb-12">
        From a single chair to a city institution.
      </p>

      {/* Timeline grid */}
      <div className="relative mx-auto grid max-w-3xl" style={{ gridTemplateColumns: "1fr 32px 1fr" }}>

        {/* Center vertical line */}
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.5) 10%, rgba(201,168,76,0.5) 90%, transparent 100%)" }}
        />

        {TIMELINE.map((item, index) => (
          <div key={item.year} className="contents">
            {/* Left slot */}
            <div className={`flex justify-end pb-10 pr-5 ${item.side === "right" ? "invisible" : ""}`}>
              {item.side === "left" && <TimelineCard {...item} inView={inView} index={index} />}
            </div>

            {/* Dot */}
            <div className="relative z-10 flex justify-center pb-10 pt-2.5">
              <span className="relative flex h-[9px] w-[9px] items-center justify-center rounded-full border-[1.5px] border-[#c9a84c] bg-[#0e0c09]">
                <span className="h-[4px] w-[4px] rounded-full bg-[#c9a84c]" />
              </span>
            </div>

            {/* Right slot */}
            <div className={`flex justify-start pb-10 pl-5 ${item.side === "left" ? "invisible" : ""}`}>
              {item.side === "right" && <TimelineCard {...item} inView={inView} index={index} />}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom ornament */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.35)]" />
      </div>
    </section>
  );
}

function TimelineCard({ year, title, desc, image, inView, index }: { year: string; title: string; desc: string; image: string; inView: boolean; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden max-w-[280px] rounded-md border border-[rgba(201,168,76,0.15)] bg-[rgba(255,255,255,0.03)] p-5 transition-all duration-300 hover:border-[rgba(201,168,76,0.4)] hover:bg-[rgba(201,168,76,0.04)]">
      {/* Image background */}
      <img
        src={image}
        alt=""
        onLoad={() => setLoaded(true)}
        className={`hover-bg-img ${(inView && loaded) ? "flash-anim" : ""}`}
        style={{ animationDelay: `${index * 0.2}s` }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <p
          className="mb-1 text-[32px] font-light leading-none text-[#c9a84c]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {year}
        </p>
        <h4
          className="mb-3 text-[17px] font-semibold leading-snug text-[#f5edd8]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h4>
        <span className="mb-3 block h-px w-[18px] bg-[rgba(201,168,76,0.35)]" />
        <p className="text-[11.5px] font-light leading-relaxed text-[#E8D08A]">
          {desc}
        </p>
      </div>
    </div>
  );
}
