"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

type GalleryImageProps = {
  item: GalleryItem;
};

export function GalleryImage({ item }: GalleryImageProps) {
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const orientation = "landscape";
  const src = item.src;

  return (
    <figure ref={rootRef} className="gallery-card group flex h-full min-h-0 flex-col">
      <div
        className="gallery-card__frame image-frame relative min-h-0 flex-1 overflow-hidden border-purple-500/25 bg-violet-950/10 backdrop-blur-[12px]"
        style={{ perspective: 1000 }}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-violet-950/20" aria-hidden="true" />
        )}
        <Image
          src={src}
          alt={item.alt}
          fill
          sizes={
            orientation === "landscape"
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 640px"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
          }
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
      <figcaption className="mt-3 shrink-0 font-mono text-[11px] text-muted transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-purple-200/80 md:text-xs">
        {item.alt}
      </figcaption>
    </figure>
  );
}
