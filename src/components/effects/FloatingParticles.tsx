"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

interface Props {
  count?: number;
}

export function FloatingParticles({ count = 22 }: Props) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 8,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: -60 }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full bg-[var(--gold-light)] shadow-[0_0_8px_rgba(255,215,0,0.8)]"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
        />
      ))}
    </div>
  );
}
