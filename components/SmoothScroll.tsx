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
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
