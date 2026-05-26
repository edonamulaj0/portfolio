"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GradientBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e0b3a_0%,transparent_58%)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.18)_0%,transparent_55%)]" />

      <motion.div
        className="gradient-blob gradient-blob-1"
        animate={prefersReducedMotion ? undefined : { x: [0, 48, 0], y: [0, -36, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className="gradient-blob gradient-blob-2"
        animate={prefersReducedMotion ? undefined : { x: [0, -55, 0], y: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className="gradient-blob gradient-blob-3"
        animate={prefersReducedMotion ? undefined : { x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className="gradient-blob gradient-blob-4"
        animate={prefersReducedMotion ? undefined : { x: [0, -35, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />

      <div
        className="absolute inset-0 opacity-40 backdrop-blur-[1px]"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(168,85,247,0.08) 0%, transparent 45%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(7,5,14,0.25)_0%,var(--color-bg)_72%)]" />
    </div>
  );
}
