"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ElementType, useEffect, useState } from "react";

type RevealTextProps = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  immediate?: boolean;
};

export function RevealText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
  immediate = false,
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
            className="inline-block will-change-transform"
            initial={immediate ? false : { y: "108%", opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
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
