"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap/register";

type SectionTagProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionTag({ index, label, className = "" }: SectionTagProps) {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLParagraphElement>(null);
  const paddedTarget = index.padStart(2, "0");
  const target = Number.parseInt(index, 10);
  const [displayIndex, setDisplayIndex] = useState(
    prefersReducedMotion ? paddedTarget : "00",
  );
  const [labelVisible, setLabelVisible] = useState(!!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    registerGsapPlugins();
    const el = rootRef.current;
    if (!el) return;

    let tween: gsap.core.Tween | null = null;
    let triggered = false;

    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          if (triggered) return;
          triggered = true;

          const counter = { value: 0 };
          tween = gsap.to(counter, {
            value: target,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: () => {
              setDisplayIndex(
                String(Math.round(counter.value)).padStart(2, "0"),
              );
            },
            onComplete: () => {
              setDisplayIndex(paddedTarget);
              window.setTimeout(() => setLabelVisible(true), 100);
            },
          });
        },
      },
    });

    return () => {
      tween?.kill();
      trigger.kill();
    };
  }, [target, paddedTarget, prefersReducedMotion]);

  return (
    <p
      ref={rootRef}
      className={`section-tag font-mono text-sm text-muted md:text-base ${className}`.trim()}
    >
      <span className="tabular-nums">({displayIndex})</span>{" "}
      <span
        className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: labelVisible ? "translateX(0)" : "translateX(20px)",
          opacity: labelVisible ? 1 : 0,
        }}
      >
        {label}
      </span>
    </p>
  );
}
