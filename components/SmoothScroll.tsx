"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import { type ReactNode } from "react";
import { GsapLenisBridge } from "./GsapLenisBridge";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) {
    return <>{children}</>;
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
      <GsapLenisBridge />
      {children}
    </ReactLenis>
  );
}
