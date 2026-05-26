"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";

type ParallaxMediaProps = {
  className?: string;
  imageProps: ImageProps;
  hoverZoom?: boolean;
  parallaxStrength?: number;
};

export function ParallaxMedia({
  className = "",
  imageProps,
  hoverZoom = true,
  parallaxStrength = 36,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const enableMotion = mounted && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxStrength * 0.45, -parallaxStrength * 0.45],
  );

  const image = (
    <Image
      {...imageProps}
      className={`object-cover object-center transition-[transform,opacity] duration-[1.25s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
        hoverZoom ? "group/frame:scale-[1.05]" : ""
      } ${imageProps.className ?? ""}`}
    />
  );

  const frame = (
    <div className="image-frame group/frame relative h-full w-full overflow-hidden">
      {enableMotion ? (
        <motion.div
          className="absolute inset-[-8%] will-change-transform"
          style={{ y: imageY }}
        >
          {image}
        </motion.div>
      ) : (
        <div className="absolute inset-0">{image}</div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-violet-400/8 opacity-60 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/frame:opacity-100"
        aria-hidden="true"
      />
    </div>
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {frame}
    </div>
  );
}
