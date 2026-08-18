"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  variant?: "solid" | "outline" | "ghost";
}

export function MagneticButton({ children, className, asChild, variant = "solid" }: Props) {
  const Tag = asChild ? motion.span : motion.button;

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] transition-colors";
  const variants = {
    solid:
      "bg-gradient-gold text-background hover:shadow-gold-glow before:absolute before:inset-0 before:translate-x-[-120%] before:bg-white/30 before:transition-transform before:duration-700 hover:before:translate-x-[120%]",
    outline:
      "border border-[var(--gold)]/60 text-foreground hover:border-[var(--gold)] hover:text-[var(--gold-light)]",
    ghost:
      "text-foreground hover:text-[var(--gold-light)]",
  } as const;

  return (
    <Tag
      data-magnetic
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  );
}
