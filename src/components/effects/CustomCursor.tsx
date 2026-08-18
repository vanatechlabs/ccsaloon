"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    document.body.style.cursor = "none";

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: Event) => {
      const t = e.currentTarget as HTMLElement;
      if (t.matches("[data-magnetic], a, button")) {
        ringRef.current?.classList.add("scale-150", "border-[var(--gold-light)]");
      }
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("scale-150", "border-[var(--gold-light)]");
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    const targets = document.querySelectorAll("a, button, [data-magnetic]");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-[var(--gold)]/70 transition-[transform,border-color] duration-150 ease-out"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[var(--gold-light)] shadow-[0_0_10px_rgba(255,215,0,0.8)]"
      />
    </>
  );
}
