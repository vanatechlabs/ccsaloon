"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: { src: string; title: string }[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onChange, onClose]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <button
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]"
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
          <button
            className="absolute left-6 grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]"
            onClick={(e) => { e.stopPropagation(); onChange((index - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-6 bottom-1/2 grid h-12 w-12 translate-y-1/2 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]"
            onClick={(e) => { e.stopPropagation(); onChange((index + 1) % images.length); }}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
          <motion.img
            key={images[index].src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={images[index].src}
            alt={images[index].title}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-luxe"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-luxury text-lg italic text-[var(--gold-light)]">
            {images[index].title}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
