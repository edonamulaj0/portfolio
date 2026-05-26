"use client";

import { useState } from "react";
import { galleryItems } from "@/lib/gallery";
import { GalleryImage } from "./GalleryImage";
import { Lightbox } from "./Lightbox";

type GalleryGridProps = {
  limit?: number;
  className?: string;
};

export function GalleryGrid({ limit, className = "" }: GalleryGridProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ul className={`gallery-grid ${className}`.trim()}>
        {items.map((item, index) => (
          <li key={item.src} className="gallery-grid__item">
            <GalleryImage
              item={item}
              layoutId={`gallery-${item.src}`}
              onOpen={() => setLightboxIndex(index)}
            />
          </li>
        ))}
      </ul>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
