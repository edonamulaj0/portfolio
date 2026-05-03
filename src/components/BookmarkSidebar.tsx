import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import type { SectionId } from "@/hooks/useActiveSection";

const SECTIONS: { id: SectionId; label: string; roman: string }[] = [
  { id: "masthead", label: "Front Page", roman: "I" },
  { id: "about", label: "Profile", roman: "II" },
  { id: "experience", label: "Chronicle", roman: "III" },
  { id: "stack", label: "Market Report", roman: "IV" },
  { id: "projects", label: "Features", roman: "V" },
  { id: "hobbies", label: "Leisure", roman: "VI" },
  { id: "contact", label: "Classifieds", roman: "VII" },
];

type Props = {
  active: SectionId;
  onSelect: (id: SectionId) => void;
};

export function BookmarkSidebar({ active, onSelect }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      aria-label="Section bookmarks"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30, delay: 0.1 }}
      className="relative block w-full shrink-0 pointer-events-auto"
      style={{ isolation: "isolate" }}
    >
      <div className="relative pr-1">
        {/* Binding / composing-stick spine */}
        <div
          aria-hidden
          className="absolute -left-1 bottom-[8%] top-[8%] w-3 border-2 border-[#0a0a0a] bg-[#d4cfc5] shadow-[inset_2px_0_0_0_#f5f0e8,inset_-2px_0_0_0_rgba(10,10,10,0.12)]"
        />
        <div
          aria-hidden
          className="absolute bottom-[6%] left-[10px] top-[6%] w-px bg-[#0a0a0a] opacity-40"
        />

        <div
          className="font-meta relative ml-4 w-[4.25rem] border-2 border-[#0a0a0a] bg-[#f5f0e8] px-1.5 py-3 shadow-[6px_6px_0_0_#0a0a0a]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 11px,
              rgba(10,10,10,0.03) 11px,
              rgba(10,10,10,0.03) 12px
            )`,
          }}
        >
          <p className="font-meta mb-3 border-b border-[#0a0a0a] pb-2 text-center text-[0.45rem] font-bold leading-none tracking-[0.45em] text-[#1a1a1a]">
            INDEX
          </p>

          <ul className="relative m-0 flex flex-col gap-3 p-0">
            {SECTIONS.map((sec, idx) => (
              <li key={sec.id} className="list-none">
                <TypeSort
                  sec={sec}
                  index={idx}
                  isActive={active === sec.id}
                  onSelect={onSelect}
                  reduceMotion={!!reduceMotion}
                />
              </li>
            ))}
          </ul>

          <p
            aria-hidden
            className="font-display pointer-events-none mt-3 select-none text-center text-lg leading-none text-[#0a0a0a]/25"
          >
            &#10087;
          </p>
        </div>
      </div>
    </motion.nav>
  );
}

function TypeSort({
  sec,
  index,
  isActive,
  onSelect,
  reduceMotion,
}: {
  sec: (typeof SECTIONS)[number];
  index: number;
  isActive: boolean;
  onSelect: (id: SectionId) => void;
  reduceMotion: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const showLabel = hovered || isActive;
  const tilt = reduceMotion ? 0 : index % 2 === 0 ? -2.2 : 2.2;
  const staggerX = reduceMotion ? 0 : (index % 3) * -2;

  const onEnter = useCallback(() => setHovered(true), []);
  const onLeave = useCallback(() => setHovered(false), []);

  return (
    <motion.div
      className="relative flex items-center justify-end"
      style={{ marginRight: staggerX }}
      initial={false}
      animate={
        reduceMotion
          ? {}
          : {
              rotate: isActive ? 0 : tilt,
            }
      }
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {/* Sliding slug / label — erupts left from the type block */}
      <motion.div
        aria-hidden
        className="font-meta pointer-events-none absolute right-full top-1/2 z-0 mr-1 flex -translate-y-1/2 items-center overflow-hidden border border-[#0a0a0a] bg-[#f5f0e8] whitespace-nowrap text-[0.55rem] font-bold tracking-[0.18em] small-caps text-[#0a0a0a]"
        initial={false}
        animate={{
          width: showLabel ? "auto" : 0,
          opacity: showLabel ? 1 : 0,
          paddingLeft: showLabel ? 10 : 0,
          paddingRight: showLabel ? 10 : 0,
          paddingTop: showLabel ? 6 : 0,
          paddingBottom: showLabel ? 6 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 34 }}
      >
        {sec.label}
      </motion.div>

      <motion.button
        type="button"
        aria-current={isActive ? "true" : undefined}
        aria-label={`Jump to ${sec.label}`}
        className="relative z-10 h-9 w-full cursor-pointer border-2 border-[#0a0a0a] focus:outline-none"
        onClick={() => onSelect(sec.id)}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        whileHover={reduceMotion ? undefined : { x: -10, rotate: 0, scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        style={{
          backgroundColor: isActive ? "#0a0a0a" : "#d4cfc5",
          color: isActive ? "#f5f0e8" : "#0a0a0a",
          boxShadow: isActive ? "4px 4px 0 0 #1a1a1a" : "2px 2px 0 0 rgba(10,10,10,0.35)",
        }}
      >
        <span className="font-display pointer-events-none flex h-full items-center justify-center text-lg font-black leading-none tracking-tight">
          {sec.roman}
        </span>
      </motion.button>
    </motion.div>
  );
}
