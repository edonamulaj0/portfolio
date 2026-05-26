"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { GalleryItem } from "@/lib/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const item = open && index !== null ? items[index] : null;
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollYRef.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (!open || index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((index - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((index + 1) % items.length);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onClose, onNavigate]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && item && index !== null ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black/92"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          <button
            type="button"
            className="absolute left-3 top-1/2 z-[3] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-divider bg-bg/80 font-mono text-xl text-text backdrop-blur-sm transition-colors hover:border-accent md:left-6"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + items.length) % items.length);
            }}
          >
            ←
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-[3] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-divider bg-bg/80 font-mono text-xl text-text backdrop-blur-sm transition-colors hover:border-accent md:right-6"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % items.length);
            }}
          >
            →
          </button>

          <button
            type="button"
            className="absolute right-4 top-4 z-[3] font-mono text-xs text-muted transition-colors hover:text-text md:right-6 md:top-6"
            aria-label="Close image"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            close ×
          </button>

          <figure
            className="relative z-[2] flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[min(75vh,800px)] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 max-w-2xl px-2 text-center font-mono text-xs leading-relaxed text-muted md:text-sm">
              {item.alt}
            </figcaption>
          </figure>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
