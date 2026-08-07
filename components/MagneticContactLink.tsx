"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ContactLink } from "@/lib/contact";
import { SocialIcon } from "./SocialIcon";

const PULL_RADIUS = 80;
const MAX_OFFSET = 12;

type MagneticContactLinkProps = {
  link: ContactLink;
};

export function MagneticContactLink({ link }: MagneticContactLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 280, damping: 22 });
  const springY = useSpring(offsetY, { stiffness: 280, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;
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
      className="contact-link link-slide group"
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      aria-label={link.ariaLabel}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <SocialIcon id={link.id} className="contact-link__icon" />
      <span className="contact-link__handle">{link.handle}</span>
      <span className="contact-link__arrow" aria-hidden="true">
        →
      </span>
    </motion.a>
  );
}
