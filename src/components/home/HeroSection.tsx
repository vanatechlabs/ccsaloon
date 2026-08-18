import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

import saloonBan1 from "@/assets/banner/saloon111.png";
import saloonBan2 from "@/assets/banner/saloon222.png";
import saloonBan3 from "@/assets/banner/saloonban3.jpg";

const heroSlides = [
  {
    id: 1,
    image: saloonBan1,
    subtitle: "PREMIUM BEAUTY DESTINATION",
    title: "The Art of Hair & Styling",
    description: "Transform your look with our expert stylists. From precision cuts to seamless color blends, step into confidence.",
  },
  {
    id: 2,
    image: saloonBan2,
    subtitle: "REJUVENATING TREATMENTS",
    title: "Glow From Within",
    description: "Indulge in our luxurious facial therapies designed to refresh, restore, and reveal your natural radiance.",
  },
  {
    id: 3,
    image: saloonBan3,
    subtitle: "BRIDAL & MAKEUP STUDIO",
    title: "Flawless Perfection",
    description: "Your special day deserves the ultimate touch. Experience exquisite bridal makeup and bespoke artistry in a relaxing atmosphere.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black -mt-[68px] md:-mt-[100px]">
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.8]"
            initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1.08, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ 
              opacity: { duration: 1.8, ease: "easeInOut" },
              filter: { duration: 1.8, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
          />
        </AnimatePresence>
        {/* Premium Ambient Overlays */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 z-10" />
        
        {/* Subtle Dynamic Grain Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center pt-32 pb-10 md:pt-0 md:pb-0 items-start text-left text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="max-w-3xl"
          >
            {/* Subtitle - Emerging from Baseline */}
            <div className="overflow-hidden mb-6">
              <motion.div
                variants={{
                  initial: { y: 40, opacity: 0, filter: "blur(5px)" },
                  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                  exit: { y: -20, opacity: 0, filter: "blur(5px)" }
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="w-12 h-[1px] bg-[var(--gold)]/80" />
                <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[var(--gold)] flex items-center gap-2">
                  <Sparkles size={14} className="text-[var(--gold)]/70" />
                  {heroSlides[current].subtitle}
                </span>
              </motion.div>
            </div>

            {/* Title - Powerful Rise from Bottom */}
            <div className="overflow-hidden mb-8 py-2">
              <motion.h1
                variants={{
                  initial: { y: 60, opacity: 0, filter: "blur(8px)" },
                  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                  exit: { y: -30, opacity: 0, filter: "blur(8px)" }
                }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {heroSlides[current].title}
              </motion.h1>
            </div>

            {/* Description - Soft Fade-up */}
            <div className="overflow-hidden mb-12">
              <motion.p
                variants={{
                  initial: { y: 40, opacity: 0, filter: "blur(5px)" },
                  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                  exit: { y: -20, opacity: 0, filter: "blur(5px)" }
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm md:text-lg font-light max-w-xl text-white/80 leading-relaxed tracking-wide"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {heroSlides[current].description}
              </motion.p>
            </div>

            {/* Buttons - Staggered Rise */}
            <motion.div
              variants={{
                initial: { y: 30, opacity: 0, filter: "blur(5px)" },
                animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                exit: { opacity: 0, filter: "blur(5px)" }
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a href={SITE.socials.whatsapp}>
                <button 
                  className="group relative overflow-hidden rounded-none px-5 py-3 md:px-8 md:py-4 bg-[var(--gold)] text-black transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold border border-[var(--gold)]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Appointment
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black z-20 pointer-events-none px-5 py-3 md:px-8 md:py-4 whitespace-nowrap">
                     Book Appointment
                     <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </a>

              <Link to="/services">
                <button
                  className="group relative overflow-hidden rounded-none px-5 py-3 md:px-8 md:py-4 border border-white/40 text-white hover:border-white transition-all duration-500 uppercase tracking-[0.25em] text-[10px] font-bold bg-white/5 backdrop-blur-md hover:bg-white hover:text-black"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Services
                    <Sparkles size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Progress Dots */}
      <div className="absolute bottom-16 right-12 z-30 flex flex-col gap-6 hidden md:flex">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className="group relative flex items-center justify-end"
          >
            <motion.span
              className="absolute right-0 text-[10px] font-semibold text-white/0 group-hover:text-[var(--gold)] transition-all duration-300 mr-16 uppercase tracking-wider"
              whileHover={{ x: -10 }}
            >
              0{i + 1}
            </motion.span>
            <div className="relative w-16 h-[2px] bg-white/20 overflow-hidden">
              <motion.span
                className="absolute left-0 top-0 h-full bg-[var(--gold)]"
                initial={{ width: "0%" }}
                animate={{ width: i === current ? "100%" : "0%" }}
                transition={{ duration: i === current ? 6 : 0.5, ease: "linear" }}
              />
            </div>
            <span
              className={cn(
                "ml-3 w-2 h-2 rounded-full transition-all duration-300",
                i === current ? "bg-[var(--gold)] scale-125 shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "bg-white/30 scale-75 group-hover:bg-[var(--gold)]/50",
              )}
            />
          </button>
        ))}
      </div>

      {/* Cinematic Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent z-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
}
