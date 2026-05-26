"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/lib/useMounted";
import { LIQUID_ETHER_COLORS, RB_BG } from "@/lib/reactbitsTheme";

const LiquidEther = dynamic(() => import("@/components/reactbits/LiquidEther"), {
  ssr: false,
});

export function LiquidEtherBackground() {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ backgroundColor: RB_BG }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <LiquidEther
        className="h-full w-full"
        colors={LIQUID_ETHER_COLORS}
        mouseForce={22}
        cursorSize={110}
        resolution={0.5}
        autoDemo
        autoSpeed={0.45}
        autoIntensity={1.8}
        autoResumeDelay={1200}
        autoRampDuration={0.65}
      />
    </div>
  );
}
