"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className = "",
  strength = 0.32,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useSpring(0, { stiffness: 280, damping: 22, mass: 0.3 });
  const y = useSpring(0, { stiffness: 280, damping: 22, mass: 0.3 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((event.clientX - centerX) * strength);
    y.set((event.clientY - centerY) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      data-magnetic
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}
