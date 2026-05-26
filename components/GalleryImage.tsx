"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

type GalleryImageProps = {
  item: GalleryItem;
};

export function GalleryImage({ item }: GalleryImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group flex h-full min-h-0 flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm border border-divider/80 bg-divider/10">
        {failed ? (
          <div className="flex h-full min-h-[10rem] flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300/60">
              {item.category}
            </span>
            <span className="font-mono text-[10px] text-muted">
              add {item.src.replace("/gallery/", "")} to public/gallery/
            </span>
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
            className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption className="mt-3 shrink-0 font-mono text-[11px] text-muted md:text-xs">
        {item.caption}
      </figcaption>
    </figure>
  );
}
