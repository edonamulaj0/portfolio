"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium, transitionReveal } from "@/lib/motion";
import { type ElementType, useEffect, useState } from "react";

type RevealTextProps = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  immediate?: boolean;
  gradient?: boolean;
};

export function RevealText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
  immediate = false,
  gradient = false,
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${gradient ? "text-gradient-purple" : ""}`}
            initial={immediate ? false : { y: "108%", opacity: 0.35 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
              ...transitionReveal,
              delay: delay + index * 0.055,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
