"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function RevealText({ children, className, delay = 0, y = 24 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface SplitProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  lastWordClassName?: string;
}

export function SplitHeading({ text, className, delay = 0, stagger = 0.06, lastWordClassName }: SplitProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={cn("h-display", className)}>
      {words.map((w, i) => {
        if (w === "\n") return <br key={i} />;
        return (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
              className={cn("inline-block", i === words.length - 1 ? lastWordClassName : "")}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </h2>
  );
}
