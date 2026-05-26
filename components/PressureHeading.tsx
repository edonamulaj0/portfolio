"use client";

import { useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import TextPressure from "./TextPressure";

type PressureHeadingProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  variant?: "hero" | "page";
};

const variantConfig = {
  hero: {
    height: "clamp(4.5rem, 11vw, 9.5rem)",
    minFontSize: 52,
  },
  page: {
    height: "clamp(3rem, 8vw, 6rem)",
    minFontSize: 36,
  },
} as const;

export function PressureHeading({
  text,
  className = "",
  as: Tag = "h1",
  variant = "page",
}: PressureHeadingProps) {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion();
  const { height, minFontSize } = variantConfig[variant];

  if (!mounted || prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <div
      className={`relative m-0 w-full ${className}`}
      style={{ height, minHeight: minFontSize }}
    >
      <TextPressure
        text={text}
        as={Tag}
        flex={false}
        alpha={false}
        stroke={false}
        width
        weight
        italic={false}
        uppercase={false}
        textColor="#ebe7f0"
        strokeColor="#7C3AED"
        minFontSize={minFontSize}
      />
    </div>
  );
}
