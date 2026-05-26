"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.25,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.35,
        wheelMultiplier: 0.95,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
