"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { useReducedMotion } from "framer-motion";
import {
  BLACK,
  ETHER_PALETTES,
  type EtherSection,
} from "@/lib/reactbitsTheme";
import { useSectionEther } from "@/lib/useSectionEther";

const LiquidEther = dynamic(() => import("@/components/reactbits/LiquidEther"), {
  ssr: false,
});

export function LiquidEtherBackground() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const section = useSectionEther("hero");
  const colors = ETHER_PALETTES[section as EtherSection] ?? ETHER_PALETTES.default;

  if (!mounted || prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ backgroundColor: BLACK }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" style={{ backgroundColor: BLACK }} aria-hidden="true">
      <LiquidEther
        key={section}
        className="h-full w-full opacity-90"
        colors={colors}
        mouseForce={16}
        cursorSize={90}
        resolution={0.35}
        autoDemo
        autoSpeed={0.35}
        autoIntensity={1.4}
        autoResumeDelay={1400}
        autoRampDuration={0.7}
      />
    </div>
  );
}
