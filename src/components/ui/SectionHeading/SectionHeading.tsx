"use client";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className, titleClassName }: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={cn("h-display text-foreground", titleClassName)}>{title}</h2>
      {subtitle && (
        <p className="font-luxury mt-5 text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
          {subtitle}
        </p>
      )}
      <div className={cn("gold-divider mt-7 w-24", align === "center" && "mx-auto")} />
    </div>
  );
}
