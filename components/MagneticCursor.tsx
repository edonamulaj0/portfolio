"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const DOT_SIZE = 8;
const RING_SIZE = 32;
const RING_HOVER_SIZE = 56;

export function MagneticCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 55, mass: 0.15 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 55, mass: 0.15 });
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });

  const ringSize = useSpring(hovering ? RING_HOVER_SIZE : RING_SIZE, {
    stiffness: 320,
    damping: 28,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const interactiveSelector =
      "a, button, [data-magnetic], input, textarea, select, label[for]";

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(interactiveSelector)) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related?.closest(interactiveSelector)) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY, prefersReducedMotion, visible]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute rounded-full border border-accent will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovering
            ? "color-mix(in srgb, var(--color-purple) 20%, transparent)"
            : "transparent",
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          width: DOT_SIZE,
          height: DOT_SIZE,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: hovering ? "difference" : "normal",
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
