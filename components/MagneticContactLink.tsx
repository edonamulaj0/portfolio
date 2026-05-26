"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ContactLink } from "@/lib/contact";

const PULL_RADIUS = 80;
const MAX_OFFSET = 12;

type MagneticContactLinkProps = {
  link: ContactLink;
};

export function MagneticContactLink({ link }: MagneticContactLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 280, damping: 22 });
  const springY = useSpring(offsetY, { stiffness: 280, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > PULL_RADIUS) {
      offsetX.set(0);
      offsetY.set(0);
      return;
    }

    const strength = 1 - dist / PULL_RADIUS;
    offsetX.set((dx / PULL_RADIUS) * MAX_OFFSET * strength);
    offsetY.set((dy / PULL_RADIUS) * MAX_OFFSET * strength);
  };

  const onLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={link.href}
      className="link-slide inline-flex items-center gap-4 font-mono text-base text-text md:text-xl"
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span>{link.label}</span>
      <motion.span
        className="inline-block text-accent"
        whileHover={{ rotate: -45 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        →
      </motion.span>
    </motion.a>
  );
}
