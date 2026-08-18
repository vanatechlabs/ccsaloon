"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      lerp: 0.08, // Adjust smoothness (lower is smoother, default is 0.1)
      wheelMultiplier: 1.0, // Wheel scroll multiplier
      smoothWheel: true, // Enable smooth scrolling for mouse wheels
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
