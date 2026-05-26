"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import { galleryToMasonryItems } from "@/lib/masonryItems";
import { GalleryImage } from "./GalleryImage";
import { galleryItems } from "@/lib/gallery";
import { getGallerySpan } from "@/lib/gallery";

const Masonry = dynamic(() => import("@/components/reactbits/Masonry"), {
  ssr: false,
});

type GalleryMasonryProps = {
  limit?: number;
  className?: string;
};

function StaticGalleryGrid({ limit }: { limit?: number }) {
  const visible = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="gallery-mosaic">
      {visible.map((item, index) => {
        const { cols, rows } = getGallerySpan(item);
        return (
          <div
            key={`${item.src}-${index}`}
            className="gallery-mosaic-item min-h-0"
            data-cols={cols}
            data-rows={rows}
          >
            <GalleryImage item={item} />
          </div>
        );
      })}
    </div>
  );
}

export function GalleryMasonry({ limit, className = "" }: GalleryMasonryProps) {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const items = galleryToMasonryItems(galleryItems, limit);

  if (!mounted || prefersReducedMotion) {
    return (
      <div className={className}>
        <StaticGalleryGrid limit={limit} />
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`} style={{ height: "min(85vh, 900px)" }}>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.65}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.96}
        blurToFocus
        colorShiftOnHover
      />
    </div>
  );
}
