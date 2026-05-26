"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GradientBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1030_0%,transparent_55%)] opacity-80" />

      <motion.div
        className="gradient-blob gradient-blob-1"
        animate={prefersReducedMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-blob gradient-blob-2"
        animate={prefersReducedMotion ? undefined : { x: [0, -50, 0], y: [0, 35, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-blob gradient-blob-3"
        animate={prefersReducedMotion ? undefined : { x: [0, 25, 0], y: [0, 45, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-blob gradient-blob-4"
        animate={prefersReducedMotion ? undefined : { x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,8,18,0.3)_0%,var(--color-bg)_70%)]" />
    </div>
  );
}
