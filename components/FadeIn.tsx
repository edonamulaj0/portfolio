"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium, revealY, transitionReveal } from "@/lib/motion";
import { type ElementType, type ReactNode, useEffect, useState } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  blur?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  immediate = false,
  blur = true,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={
        immediate
          ? false
          : {
              opacity: 0,
              y: revealY,
              filter: blur ? "blur(10px)" : "blur(0px)",
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ ...transitionReveal, delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: ElementType;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const MotionTag = motion.create(as);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const MotionTag = motion.create(as);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: revealY, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: transitionReveal,
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
