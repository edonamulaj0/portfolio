"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/lib/background";

type SkillBarsProps = {
  groups: SkillGroup[];
};

export function SkillBars({ groups }: SkillBarsProps) {
  return (
    <dl className="mt-16 grid gap-8 border-t border-divider pt-10 font-mono text-xs md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-8 md:pt-12 md:text-sm">
      {groups.map((group) => (
        <div key={group.label} className="grid gap-3">
          <div className="grid gap-2 md:grid-cols-[8.5rem_1fr] md:gap-6">
            <dt className="text-muted">{group.label}</dt>
            <dd className="text-text">{group.items}</dd>
          </div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-divider/80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-purple-neon"
              initial={{ width: 0 }}
              whileInView={{ width: `${group.level}%` }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            />
          </div>
        </div>
      ))}
    </dl>
  );
}
