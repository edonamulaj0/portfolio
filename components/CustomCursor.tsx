"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [magnetic, setMagnetic] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const magneticTarget = useRef({ x: 0, y: 0 });

  const cursorX = useSpring(0, { stiffness: 420, damping: 32, mass: 0.35 });
  const cursorY = useSpring(0, { stiffness: 420, damping: 32, mass: 0.35 });
  const size = useSpring(12, { stiffness: 380, damping: 28 });

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const narrowViewport = window.matchMedia("(max-width: 767px)").matches;

    if (coarsePointer || narrowViewport) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("cursor-none");

    const onMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const magneticEl = target?.closest("[data-magnetic]");

      if (magneticEl instanceof HTMLElement) {
        const rect = magneticEl.getBoundingClientRect();
        magneticTarget.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        setMagnetic(true);
        cursorX.set(magneticTarget.current.x);
        cursorY.set(magneticTarget.current.y);
      } else {
        setMagnetic(false);
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      setHovering(
        Boolean(
          target.closest(
            "a, button, input, textarea, select, [data-cursor-hover], [data-magnetic]",
          ),
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
  }, [cursorX, cursorY]);

  useEffect(() => {
    size.set(hovering ? (magnetic ? 52 : 40) : 12);
  }, [hovering, magnetic, size]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`h-full w-full rounded-full border transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            hovering
              ? magnetic
                ? "border-purple-300/60 bg-purple-500/15 shadow-[0_0_24px_rgba(192,132,252,0.35)]"
                : "border-purple-200/40 bg-purple-400/10 shadow-[0_0_16px_rgba(167,139,250,0.25)]"
              : "border-text/30 bg-text/90"
          }`}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          width: 4,
          height: 4,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="h-full w-full rounded-full bg-purple-400/80" />
      </motion.div>
    </>
  );
}
