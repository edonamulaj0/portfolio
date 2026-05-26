"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

type GalleryImageProps = {
  item: GalleryItem;
};

export function GalleryImage({ item }: GalleryImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <figure ref={ref} className="group flex h-full min-h-0 flex-col">
      <div className="image-frame relative min-h-0 flex-1 overflow-hidden">
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
          <>
            {!loaded && (
              <div
                className="absolute inset-0 animate-pulse bg-divider/20"
                aria-hidden="true"
              />
            )}
            {prefersReducedMotion ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
                className={`object-cover transition-[transform,opacity] duration-[1.25s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
              />
            ) : (
              <motion.div
                className="absolute inset-[-6%] will-change-transform"
                style={{ y: imageY }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
                  className={`object-cover transition-[transform,opacity] duration-[1.25s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setLoaded(true)}
                  onError={() => setFailed(true)}
                />
              </motion.div>
            )}
          </>
        )}
      </div>
      <figcaption className="mt-3 shrink-0 font-mono text-[11px] text-muted transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-purple-200/80 md:text-xs">
        {item.caption}
      </figcaption>
    </figure>
  );
}
