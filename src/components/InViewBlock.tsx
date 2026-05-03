import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function InViewBlock({ children, className = "" }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
