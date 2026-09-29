"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const topValanceRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const lightBurstRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 1. Golden Stardust / Ambient Sparkles Canvas
    const canvas = canvasRef.current;
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      life: number;
      maxLife: number;
      twinkleSpeed: number;
    }> = [];

    if (canvas) {
      const ctx = canvas.getContext("2d");
      const resize = () => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      const count = window.innerWidth < 768 ? 35 : 70;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * (canvas?.width || 1000),
        y: Math.random() * (canvas?.height || 800),
        radius: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.1,
        alpha: Math.random() * 0.7 + 0.3,
        life: Math.random() * 150 + 50,
        maxLife: 200,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
      }));

      const render = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life--;
          p.alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.8;

          if (p.life <= 0 || p.y < -10) {
            p.x = Math.random() * canvas.width;
            p.y = canvas.height + 10;
            p.life = p.maxLife;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 120, ${Math.max(0, p.alpha)})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#ffcf7a";
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame(render);
      };
      render();
    }

    // 2. GSAP Master Timeline — Slow, Buttery-Smooth Curtain Parting Reveal
    const ctxTimeline = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "sine.inOut" },
        onComplete: () => {
          setIsFinished(true);
          onComplete?.();
        },
      });

      // Initial Setup
      gsap.set(leftCurtainRef.current, { xPercent: 0, scaleX: 1, skewY: 0, transformOrigin: "left center" });
      gsap.set(rightCurtainRef.current, { xPercent: 0, scaleX: 1, skewY: 0, transformOrigin: "right center" });
      gsap.set(topValanceRef.current, { yPercent: 0, opacity: 1 });
      gsap.set(lightBurstRef.current, { opacity: 0, scale: 0.2 });

      // Step 1: Central Emblem & Monogram Glow In (0.0s - 1.1s) — gentle ease, no harsh snap
      tl.fromTo(
        emblemRef.current,
        { scale: 0.85, opacity: 0, filter: "blur(6px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power2.out" }
      )
      // Step 2: Light shimmer glides across the emblem (0.9s - 1.7s)
      .to(".curtain-shimmer-line", {
        x: "200%",
        duration: 1.0,
        ease: "sine.inOut",
      }, "-=0.3")
      // Step 3: Soft ambient light starts to build behind the curtains (1.3s)
      .to(
        lightBurstRef.current,
        {
          opacity: 1,
          scale: 1.6,
          duration: 1.1,
          ease: "sine.in",
        },
        "-=0.2"
      )
      // Step 4: Emblem dissolves softly, no jump — smooth fade + gentle scale
      .to(
        emblemRef.current,
        {
          scale: 1.1,
          opacity: 0,
          filter: "blur(8px) brightness(1.3)",
          duration: 0.7,
          ease: "sine.in",
        },
        "-=0.5"
      )
      // Step 5: Slow, Real Fabric Curtain Parting (long, smooth pull — no jerk)
      // Left curtain glides open with gentle fabric bunching
      .to(
        leftCurtainRef.current,
        {
          xPercent: -102,
          scaleX: 0.55,
          skewY: -0.8,
          duration: 2.6,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      // Right curtain mirrors it in perfect sync
      .to(
        rightCurtainRef.current,
        {
          xPercent: 102,
          scaleX: 0.55,
          skewY: 0.8,
          duration: 2.6,
          ease: "power2.inOut",
        },
        "<"
      )
      // Top pelmet lifts slowly and smoothly, matching curtain pace
      .to(
        topValanceRef.current,
        {
          yPercent: -110,
          opacity: 0.2,
          duration: 2.0,
          ease: "power2.inOut",
        },
        "<"
      )
      // Light gently blooms and fades as the site is revealed underneath
      .to(
        lightBurstRef.current,
        {
          scale: 3.2,
          opacity: 0,
          duration: 1.6,
          ease: "sine.out",
        },
        "-=1.4"
      )
      // Tiny settle — curtains ease to a soft stop instead of stopping dead
      .to(
        [leftCurtainRef.current, rightCurtainRef.current],
        {
          xPercent: "+=1.5",
          duration: 0.5,
          ease: "sine.out",
        },
        "-=0.4"
      )
      // Whole overlay fades away last, nice and slow
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "sine.inOut",
        },
        "-=0.2"
      );
    }, containerRef);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", () => {});
      ctxTimeline.revert();
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          setIsFinished(true);
          onComplete?.();
        },
      });
    }
  };

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      aria-label="Loading CityCalls Saloon"
      className="fixed inset-0 z-[999999] pointer-events-auto select-none overflow-hidden bg-[#0d0202]"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-30 opacity-90"
      />

      {/* Behind-Curtains Dramatic Light Burst Effect */}
      <div
        ref={lightBurstRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,223,128,0.85) 0%, rgba(212,175,55,0.45) 30%, rgba(20,4,4,0.1) 65%, transparent 80%)",
          filter: "blur(24px)",
        }}
      />

      {/* ================= LEFT CURTAIN ================= */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-[50.5vw] h-full z-20 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.8)]"
        style={{
          background: `
            linear-gradient(180deg, rgba(212, 175, 55, 0.10) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.8) 100%),
            repeating-linear-gradient(
              90deg,
              #1a0404 0px,
              #300808 14px,
              #4d0d0d 28px,
              #7a1414 42px,
              #3d0a0a 56px,
              #1c0505 70px,
              #2a0707 84px
            )
          `,
          boxShadow: "inset -14px 0 26px rgba(0,0,0,0.9), 10px 0 30px rgba(0,0,0,0.7)",
        }}
      >
        {/* Fabric Specular Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0px, rgba(255,180,140,0.14) 42px, transparent 84px)",
          }}
        />

        {/* Vertical fold shadow pass for extra fabric depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.35) 0px, transparent 10px, transparent 20px, rgba(0,0,0,0.25) 30px)",
          }}
        />

        {/* Decorative Golden Fringe & Embroidery on the Right Seam of Left Curtain */}
        <div
          className="absolute top-0 right-0 w-[8px] h-full flex flex-col items-center justify-between"
          style={{
            background:
              "linear-gradient(180deg, #aa822a 0%, #f7e47a 25%, #d4af37 50%, #f7e47a 75%, #8b651b 100%)",
            boxShadow: "-2px 0 10px rgba(212,175,55,0.6), inset 0 0 4px rgba(255,255,255,0.4)",
          }}
        >
          {/* Subtle gold stitch pattern dots */}
          <div
            className="w-full h-full opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #2a1f06 1.5px, transparent 2px)",
              backgroundSize: "6px 12px",
            }}
          />
        </div>

        {/* Bottom Gold Fringe on Left Curtain */}
        <div
          className="absolute bottom-0 left-0 w-full h-[14px]"
          style={{
            background:
              "repeating-linear-gradient(90deg, #b8860b 0px, #ffd700 3px, #5c4308 6px)",
            boxShadow: "0 -2px 10px rgba(212,175,55,0.4)",
          }}
        />

        {/* Swag Rope Tieback Shadow / Accent */}
        <div
          className="absolute top-[48%] left-0 w-full h-[3px] opacity-25 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(212,175,55,0.4), transparent)",
          }}
        />
      </div>

      {/* ================= RIGHT CURTAIN ================= */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-[50.5vw] h-full z-20 overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.8)]"
        style={{
          background: `
            linear-gradient(180deg, rgba(212, 175, 55, 0.10) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.8) 100%),
            repeating-linear-gradient(
              90deg,
              #2a0707 0px,
              #1c0505 14px,
              #3d0a0a 28px,
              #7a1414 42px,
              #4d0d0d 56px,
              #300808 70px,
              #1a0404 84px
            )
          `,
          boxShadow: "inset 14px 0 26px rgba(0,0,0,0.9), -10px 0 30px rgba(0,0,0,0.7)",
        }}
      >
        {/* Fabric Specular Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0px, rgba(255,180,140,0.14) 42px, transparent 84px)",
          }}
        />

        {/* Vertical fold shadow pass for extra fabric depth */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, transparent 10px, transparent 20px, rgba(0,0,0,0.35) 30px)",
          }}
        />

        {/* Decorative Golden Fringe & Embroidery on the Left Seam of Right Curtain */}
        <div
          className="absolute top-0 left-0 w-[8px] h-full flex flex-col items-center justify-between"
          style={{
            background:
              "linear-gradient(180deg, #aa822a 0%, #f7e47a 25%, #d4af37 50%, #f7e47a 75%, #8b651b 100%)",
            boxShadow: "2px 0 10px rgba(212,175,55,0.6), inset 0 0 4px rgba(255,255,255,0.4)",
          }}
        >
          {/* Subtle gold stitch pattern dots */}
          <div
            className="w-full h-full opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #2a1f06 1.5px, transparent 2px)",
              backgroundSize: "6px 12px",
            }}
          />
        </div>

        {/* Bottom Gold Fringe on Right Curtain */}
        <div
          className="absolute bottom-0 right-0 w-full h-[14px]"
          style={{
            background:
              "repeating-linear-gradient(90deg, #b8860b 0px, #ffd700 3px, #5c4308 6px)",
            boxShadow: "0 -2px 10px rgba(212,175,55,0.4)",
          }}
        />

        {/* Swag Rope Tieback Shadow / Accent */}
        <div
          className="absolute top-[48%] right-0 w-full h-[3px] opacity-25 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, rgba(212,175,55,0.4), transparent)",
          }}
        />
      </div>

      {/* ================= TOP VALANCE / PELMET ================= */}
      <div
        ref={topValanceRef}
        className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] z-25 pointer-events-none overflow-hidden"
        style={{
          background: `
            linear-gradient(180deg, #3d0a0a 0%, #1c0505 70%, #0a0202 100%)
          `,
          boxShadow: "0 10px 30px rgba(0,0,0,0.85)",
          borderBottom: "2px solid #d4af37",
        }}
      >
        {/* Scalloped / Drapery swag arches along valance */}
        <div
          className="w-full h-full opacity-35"
          style={{
            backgroundImage: `radial-gradient(circle at 50% -20%, #7a1a1a 30%, transparent 70%)`,
            backgroundSize: "120px 80px",
          }}
        />
        {/* Valance bottom gold trim line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[4px]"
          style={{
            background:
              "repeating-linear-gradient(90deg, #aa822a 0px, #f7e47a 10px, #d4af37 20px, #aa822a 30px)",
            boxShadow: "0 0 10px #ffd700",
          }}
        />
      </div>

      {/* ================= CENTRAL EMBLEM ================= */}
      <div
        ref={emblemRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center pointer-events-none"
        style={{
          filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 30px rgba(212, 175, 55, 0.4))",
        }}
      >
        {/* Outer Circular Royal Medallion */}
        <div className="relative w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center p-[3px] bg-gradient-to-tr from-[#997524] via-[#f7e47a] to-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.45)]">
          {/* Inner dark core */}
          <div className="w-full h-full rounded-full bg-[#1a0505] border border-[#d4af37]/40 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
            {/* Shimmer light bar passing over badge */}
            <div
              className="curtain-shimmer-line absolute top-0 -left-[120%] w-[80%] h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(247,228,122,0.8), transparent)",
                transform: "skewX(-25deg)",
              }}
            />

            {/* Stylized Scissors & Crown Monogram Icon */}
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-[#f7e47a] mb-1 drop-shadow-[0_2px_8px_rgba(247,228,122,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 6L8 10L12 5L16 10L19 6L18 12H6L5 6Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.4" />
              <line x1="8.2" y1="16" x2="16.5" y2="7.5" stroke="currentColor" strokeWidth="1.4" />
              <line x1="15.8" y1="16" x2="7.5" y2="7.5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
        </div>

        {/* Brand Name — matches the real CityCalls logo styling */}
        <div className="mt-6 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
            <span className="text-[#8CC63F] drop-shadow-[0_2px_10px_rgba(140,198,63,0.45)]">City</span>
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]">Calls</span>
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <span className="w-8 md:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#e6be8a] font-light">
              Beauty &amp; Salon
            </span>
            <span className="w-8 md:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>
      </div>

      {/* Skip Intro Button */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute bottom-6 right-6 z-50 px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#1a0505]/80 hover:bg-[#2a0808] text-[#f7e47a] text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105 hover:border-[#ffd700] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] backdrop-blur-md cursor-pointer"
      >
        Enter Salon &rarr;
      </button>
    </div>
  );
}