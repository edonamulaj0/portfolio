"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const DOT_SIZE = 8;
const RING_SIZE = 32;
const RING_HOVER_SIZE = 56;

function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine;
}

export function MagneticCursor() {
  const prefersReducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 55, mass: 0.15 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 55, mass: 0.15 });
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });

  const ringSize = useSpring(hovering ? RING_HOVER_SIZE : RING_SIZE, {
    stiffness: 320,
    damping: 28,
  });

  const dotLeft = useTransform(dotX, (v) => v - DOT_SIZE / 2);
  const dotTop = useTransform(dotY, (v) => v - DOT_SIZE / 2);
  const ringLeft = useTransform([ringX, ringSize], ([x, size]) => (x as number) - (size as number) / 2);
  const ringTop = useTransform([ringY, ringSize], ([y, size]) => (y as number) - (size as number) / 2);

  useEffect(() => {
    if (prefersReducedMotion || !finePointer) return;

    const interactiveSelector =
      "a, button, [data-magnetic], input, textarea, select, label[for]";

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovering(!!target?.closest(interactiveSelector));
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related?.closest(interactiveSelector)) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY, prefersReducedMotion, finePointer]);

  if (prefersReducedMotion || !finePointer) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10000] isolation-isolate"
      aria-hidden="true"
    >
      <motion.div
        className="absolute rounded-full border border-accent bg-transparent"
        style={{
          left: ringLeft,
          top: ringTop,
          width: ringSize,
          height: ringSize,
          backgroundColor: hovering
            ? "color-mix(in srgb, var(--color-purple) 20%, transparent)"
            : "transparent",
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.45)]"
        style={{
          left: dotLeft,
          top: dotTop,
          width: DOT_SIZE,
          height: DOT_SIZE,
          mixBlendMode: hovering ? "difference" : "normal",
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
