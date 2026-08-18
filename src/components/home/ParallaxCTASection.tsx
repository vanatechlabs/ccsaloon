import { Parallax } from "@/components/ui-luxe/ClientParallax";
import { Link } from "@tanstack/react-router";
import parabg from "@/assets/parabg.jpg";

export function ParallaxCTASection() {
  return (
    <Parallax 
      bgImage={parabg} 
      bgImageAlt="Beautiful Hair" 
      strength={300}
      className="relative w-full"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-20">
        <p className="text-[10px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-white mb-4 drop-shadow-md">
          We care about your hair and your well-being
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-10 drop-shadow-lg tracking-wide">
          BEAUTIFUL HAIR, HEALTHY YOU
        </h2>
        
        <Link to="/about">
          <button className="border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-500 text-white uppercase tracking-[0.15em] text-[12px] font-bold py-3 px-8">
            Find Out More
          </button>
        </Link>
      </div>
    </Parallax>
  );
}
