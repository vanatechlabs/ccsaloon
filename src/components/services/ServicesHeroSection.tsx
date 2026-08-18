import { Parallax } from "@/components/ui-luxe/ClientParallax";
import servicesBg from "@/assets/banner/servicesbg.jpg";

export function ServicesHeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;600&display=swap');

        @keyframes ah-fadeup {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .ah-content {
          opacity: 0;
          animation: ah-fadeup 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s forwards;
        }

        .ah-title-plain {
          font-family: 'Cormorant Garamond', serif;
          display: inline-block;
          font-size: clamp(42px, 7vw, 76px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.01em;
          color: #f5ede2;
          text-shadow: 0 2px 40px rgba(0,0,0,0.5);
        }

        .ah-title-gold {
          font-family: 'Cormorant Garamond', serif;
          display: inline-block;
          font-size: clamp(42px, 7vw, 76px);
          font-weight: 300;
          font-style: italic;
          line-height: 0.95;
          letter-spacing: 0.01em;
          background: linear-gradient(135deg, #c9a55a 0%, #e8c97a 45%, #b8945a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 28px;
          filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4));
        }

        .ah-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 300;
          font-style: italic;
          color: rgba(242, 237, 232, 0.88);
          letter-spacing: 0.04em;
          line-height: 1.55;
          text-shadow: 0 1px 20px rgba(0,0,0,0.6);
        }

        .ah-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(220, 185, 110, 0.95);
          text-shadow: 0 1px 12px rgba(0,0,0,0.5);
        }
      `}</style>

      <section className="relative -mt-[68px] h-[80vh] overflow-hidden md:-mt-[100px]">
        <Parallax
          bgImage={servicesBg}
          strength={350}
          bgImageStyle={{ objectFit: "cover", objectPosition: "center 30%" }}
        >
          <div className="relative flex h-[80vh] items-center justify-center">

            {/* Layer 1 — full-screen base tint, keeps image visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(8,6,4,0.28)" }}
            />

            {/* Layer 2 — strong bottom-up gradient so text area is dark enough */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,4,2,0.82) 0%, rgba(6,4,2,0.55) 35%, rgba(6,4,2,0.10) 65%, transparent 100%)",
              }}
            />

            {/* Layer 3 — soft top-down vignette for nav area */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(6,4,2,0.45) 0%, transparent 30%)",
              }}
            />

            {/* Main content */}
            <div className="ah-content relative z-10 text-center px-6">

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="block w-12 h-px bg-[#c9a55a] opacity-70" />
                <span className="ah-eyebrow">Our Services</span>
                <span className="block w-12 h-px bg-[#c9a55a] opacity-70" />
              </div>

              {/* Title */}
              <h1 className="mb-6 whitespace-nowrap">
                <span className="ah-title-plain">Luxury,</span>{" "}
                <span className="ah-title-gold !mb-0">Service By Service</span>
              </h1>

              {/* Gold ornament divider */}
              <div className="flex items-center justify-center gap-4 mb-6 opacity-70">
                <span className="block w-9 h-px bg-[#c9a55a]" />
                <span className="block w-1.5 h-1.5 bg-[#c9a55a] rotate-45" />
                <span className="block w-9 h-px bg-[#c9a55a]" />
              </div>

              {/* Subtitle */}
              <p className="ah-subtitle mx-auto max-w-lg">
                Transparent pricing. Premium products.<br className="hidden md:block" />
                Senior artistry.
              </p>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  );
}
