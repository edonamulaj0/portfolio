"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import { getCircularGalleryItems } from "@/lib/circularGalleryItems";
import { CIRCULAR_GALLERY } from "@/lib/reactbitsTheme";

const CircularGallery = dynamic(() => import("@/components/reactbits/CircularGallery"), {
  ssr: false,
});

export function HomeCircularGallery() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const items = getCircularGalleryItems(10);

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2"
      aria-label="Featured gallery"
    >
      <div className="h-[min(52vh,420px)] w-full md:h-[min(58vh,480px)]">
        <CircularGallery
          items={items}
          bend={CIRCULAR_GALLERY.bend}
          textColor={CIRCULAR_GALLERY.textColor}
          borderRadius={CIRCULAR_GALLERY.borderRadius}
          font={CIRCULAR_GALLERY.font}
          scrollSpeed={1.8}
          scrollEase={0.06}
        />
      </div>
    </section>
  );
}
