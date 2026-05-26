"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const narrowViewport = window.matchMedia("(max-width: 767px)").matches;

    if (coarsePointer || narrowViewport) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("cursor-none");

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      setHovering(
        Boolean(
          target.closest("a, button, input, textarea, select, [data-cursor-hover]"),
        ),
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference md:block"
      animate={{
        x: position.x - (hovering ? 20 : 6),
        y: position.y - (hovering ? 20 : 6),
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.4 }}
      style={{ backgroundColor: "#e8e4de", borderRadius: "9999px" }}
    />
  );
}
