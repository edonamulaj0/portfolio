"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function PolkaField({
  flip,
  reduceMotion,
}: {
  flip?: boolean;
  reduceMotion: boolean;
}) {
  const style = {
    backgroundImage:
      "radial-gradient(circle at center, rgba(124, 58, 237, 0.07) 1px, transparent 1px)",
    backgroundSize: "26px 26px",
    maskImage:
      "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
  } as const;

  if (reduceMotion) {
    return (
      <div
        className={`absolute inset-0 opacity-40 ${flip ? "scale-x-[-1]" : ""}`}
        style={style}
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 ${flip ? "scale-x-[-1]" : ""}`}
      style={style}
      initial={false}
      animate={{
        y: [0, -12, 0],
        opacity: [0.35, 0.5, 0.35],
      }}
      transition={{
        duration: 32,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden
    />
  );
}

function SideStrip({
  side,
  reduceMotion,
}: {
  side: "left" | "right";
  reduceMotion: boolean;
}) {
  const flip = side === "right";
  const isLeft = side === "left";

  return (
    <div
      className={`pointer-events-none fixed inset-y-0 z-0 hidden w-[clamp(3.5rem,14vw,11rem)] overflow-hidden md:block ${
        isLeft ? "left-0" : "right-0"
      }`}
      aria-hidden
    >
      {reduceMotion ? (
        <>
          <div
            className={`absolute top-[12%] h-[min(75vh,520px)] w-[min(90vw,420px)] rounded-full opacity-50 blur-[100px] ${
              isLeft
                ? "left-[-40%] bg-violet-300/25"
                : "right-[-40%] bg-fuchsia-200/20"
            }`}
          />
          <div
            className={`absolute bottom-[8%] h-[40vh] w-[280px] rounded-full opacity-40 blur-[72px] ${
              isLeft
                ? "left-[-20%] bg-violet-200/15"
                : "right-[-20%] bg-violet-100/20"
            }`}
          />
        </>
      ) : (
        <>
          <motion.div
            className={`absolute top-[12%] h-[min(75vh,520px)] w-[min(90vw,420px)] rounded-full blur-[100px] ${
              isLeft
                ? "left-[-40%] bg-violet-300/25"
                : "right-[-40%] bg-fuchsia-200/20"
            }`}
            animate={{
              opacity: [0.45, 0.62, 0.45],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-[8%] h-[40vh] w-[280px] rounded-full blur-[72px] ${
              isLeft
                ? "left-[-20%] bg-violet-200/15"
                : "right-[-20%] bg-violet-100/20"
            }`}
            animate={{
              opacity: [0.3, 0.48, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: isLeft ? 0 : 4,
            }}
          />
        </>
      )}
      <PolkaField flip={flip} reduceMotion={reduceMotion} />
    </div>
  );
}

export function AmbientSides() {
  const reduceMotion = usePrefersReducedMotion();
  return (
    <>
      <SideStrip side="left" reduceMotion={reduceMotion} />
      <SideStrip side="right" reduceMotion={reduceMotion} />
    </>
  );
}
