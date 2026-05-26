"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

type GalleryImageProps = {
  item: GalleryItem;
  onOpen: () => void;
};

export function GalleryImage({ item, onOpen }: GalleryImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className="gallery-card group flex h-full min-h-0 cursor-pointer flex-col"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="gallery-grid__frame image-frame relative overflow-hidden border-purple-500/25 bg-violet-950/10">
        {!loaded && (
          <div className="absolute inset-0 bg-violet-950/20" aria-hidden="true" />
        )}
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className={`object-cover transition-[transform,opacity] duration-[1.35s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-950/35 via-transparent to-violet-400/10 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-3 shrink-0 font-mono text-[11px] leading-snug text-muted transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-purple-200/80 md:text-xs">
        {item.alt}
      </figcaption>
    </figure>
  );
}
