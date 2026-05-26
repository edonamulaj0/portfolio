"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useMounted } from "@/lib/useMounted";
import { useRef, useState } from "react";
import type { MarqueeCardData } from "@/lib/marqueeCards";

type MarqueeCardProps = {
  card: MarqueeCardData;
  className?: string;
};

const sizeClasses = {
  portrait:
    "h-[300px] w-[220px] sm:h-[340px] sm:w-[250px] md:h-[400px] md:w-[300px]",
  landscape:
    "h-[200px] w-[320px] sm:h-[230px] sm:w-[380px] md:h-[260px] md:w-[440px]",
} as const;

export function MarqueeCard({ card, className = "" }: MarqueeCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const enableTilt = mounted && !prefersReducedMotion;
  const [loaded, setLoaded] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 260, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 260, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-11, 11]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const isPortrait = card.orientation === "portrait";

  const content = (
    <>
      <div
        className={`gallery-card__frame relative overflow-hidden rounded-sm border border-purple-500/25 bg-violet-950/10 shadow-[0_0_0_1px_rgba(139,92,246,0.08)_inset,0_28px_60px_-28px_rgba(76,29,149,0.55)] backdrop-blur-[12px] transition-[border-color,box-shadow] duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-purple-400/40 group-hover:shadow-[0_0_0_1px_rgba(192,132,252,0.15)_inset,0_36px_72px_-24px_rgba(109,40,217,0.65)] ${sizeClasses[card.orientation]}`}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-violet-950/20" aria-hidden="true" />
        )}
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes={
            isPortrait
              ? "(max-width: 768px) 220px, 300px"
              : "(max-width: 768px) 320px, 440px"
          }
          className={`object-cover object-center transition-[transform,opacity] duration-[1.35s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07050e]/50 via-transparent to-violet-500/10 opacity-80 transition-opacity duration-700 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-3 max-w-full truncate font-mono text-[10px] text-muted transition-colors duration-500 group-hover:text-purple-200/85 md:text-xs">
        {card.caption}
      </figcaption>
    </>
  );

  return (
    <div
      ref={rootRef}
      className={`gallery-card group shrink-0 ${className}`}
      style={{ perspective: 1000 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {enableTilt ? (
        <motion.figure
          className="flex h-full flex-col"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {content}
        </motion.figure>
      ) : (
        <figure className="flex h-full flex-col">{content}</figure>
      )}
    </div>
  );
}
