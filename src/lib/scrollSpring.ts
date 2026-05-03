import { animate } from "framer-motion";

const HEADER_NUDGE = 8;

export function scrollToSectionElement(el: HTMLElement | null) {
  if (!el) return Promise.resolve();
  const targetY = el.getBoundingClientRect().top + window.scrollY - HEADER_NUDGE;
  const clamped = Math.max(0, targetY);
  return animate(window.scrollY, clamped, {
    type: "spring",
    stiffness: 140,
    damping: 24,
    mass: 0.75,
    restDelta: 0.5,
    onUpdate: (latest) => window.scrollTo(0, latest),
  }).then(() => undefined);
}
