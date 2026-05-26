"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { GalleryItem } from "@/lib/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index !== null) {
        onNavigate((index - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight" && index !== null) {
        onNavigate((index + 1) % items.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && item ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.92 }}
            exit={{ opacity: 0 }}
          />

          <button
            type="button"
            className="absolute left-4 top-1/2 z-[2] -translate-y-1/2 font-mono text-2xl text-text/80 transition-colors hover:text-text md:left-8"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              if (index !== null) onNavigate((index - 1 + items.length) % items.length);
            }}
          >
            ←
          </button>

          <button
            type="button"
            className="absolute right-4 top-1/2 z-[2] -translate-y-1/2 font-mono text-2xl text-text/80 transition-colors hover:text-text md:right-8"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              if (index !== null) onNavigate((index + 1) % items.length);
            }}
          >
            →
          </button>

          <motion.figure
            layoutId={`gallery-${item.src}`}
            className="relative z-[1] h-[min(85vh,900px)] w-[min(92vw,1200px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <figcaption className="mt-4 text-center font-mono text-xs text-muted">
              {item.alt}
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
