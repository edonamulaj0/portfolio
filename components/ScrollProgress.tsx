"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useMounted } from "@/lib/useMounted";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="progress-bar fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
      style={{ scaleX }}
    />
  );
}

export function ScrollProgress() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return <ScrollProgressBar />;
}
