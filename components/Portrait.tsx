"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type PortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Portrait({
  className = "aspect-[3/4] w-full max-w-xs",
  priority = false,
  sizes = "(max-width: 768px) 40vw, 280px",
}: PortraitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const highlightX = useMotionValue(50);
  const highlightY = useMotionValue(50);

  const springConfig = { stiffness: 260, damping: 22 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springHighlightX = useSpring(highlightX, springConfig);
  const springHighlightY = useSpring(highlightY, springConfig);

  const transformRotateX = useTransform(springRotateX, (v) => `${v}deg`);
  const transformRotateY = useTransform(springRotateY, (v) => `${v}deg`);
  const highlightBackground = useTransform(
    [springHighlightX, springHighlightY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.22) 0%, transparent 55%)`,
  );

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateY.set((x - 0.5) * 16);
    rotateX.set((0.5 - y) * 16);
    highlightX.set((1 - x) * 100);
    highlightY.set((1 - y) * 100);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    highlightX.set(50);
    highlightY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      className={`image-frame group/frame relative overflow-hidden ${className}`}
      style={{ perspective: 800 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="relative h-full min-h-[12rem] w-full"
        style={{
          rotateX: transformRotateX,
          rotateY: transformRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/dona.png"
          alt="Edona S. Mulaj"
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center"
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/frame:opacity-100"
          style={{ background: highlightBackground }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
