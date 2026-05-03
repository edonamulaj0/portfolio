import { motion } from "framer-motion";
import type { SectionId } from "@/hooks/useActiveSection";

const ITEMS: { id: SectionId }[] = [
  { id: "masthead" },
  { id: "about" },
  { id: "experience" },
  { id: "stack" },
  { id: "projects" },
  { id: "hobbies" },
  { id: "contact" },
];

const LABELS: Record<SectionId, string> = {
  masthead: "Front Page",
  about: "Profile",
  experience: "Chronicle",
  stack: "Market Report",
  projects: "Features",
  hobbies: "Leisure",
  contact: "Classifieds",
};

type Props = {
  active: SectionId;
  onSelect: (id: SectionId) => void;
};

export function BookmarkSidebar({ active, onSelect }: Props) {
  return (
    <nav
      aria-label="Section bookmarks"
      className="pointer-events-none fixed left-0 top-1/2 z-[var(--z-bookmarks)] hidden -translate-y-1/2 lg:pointer-events-auto lg:block"
    >
      <ul className="flex flex-col gap-[2px] pl-0">
        {ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="list-none">
              <motion.button
                type="button"
                aria-current={isActive ? "true" : undefined}
                aria-label={`Go to ${LABELS[item.id]}`}
                onClick={() => onSelect(item.id)}
                className="font-meta pointer-events-auto relative flex h-[4.5rem] w-9 cursor-pointer items-center justify-center border border-[#0a0a0a] bg-[#d4cfc5] text-[0.65rem] font-bold uppercase tracking-widest text-[#0a0a0a] shadow-[inset_0_0_0_1px_#f5f0e8]"
                style={{
                  clipPath:
                    "polygon(0 0,100% 0,100% calc(100% - 10px),92% 100%,84% calc(100% - 6px),72% 100%,60% calc(100% - 5px),48% 100%,36% calc(100% - 6px),24% 100%,12% calc(100% - 8px),0 100%)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  zIndex: isActive ? 2 : 1,
                }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                {isActive && (
                  <span
                    className="absolute left-1 top-2 h-2 w-2 bg-[#0a0a0a]"
                    aria-hidden
                  />
                )}
                <span className="pl-0.5">{LABELS[item.id]}</span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
