import { AnimatePresence, motion } from "framer-motion";
import type { SectionId } from "@/hooks/useActiveSection";

const SECTIONS: { id: SectionId; title: string; num: string }[] = [
  { id: "masthead", title: "Front Page", num: "01" },
  { id: "about", title: "Profile", num: "02" },
  { id: "experience", title: "Chronicle", num: "03" },
  { id: "stack", title: "Market Report", num: "04" },
  { id: "projects", title: "Features", num: "05" },
  { id: "hobbies", title: "Leisure", num: "06" },
  { id: "contact", title: "Classifieds", num: "07" },
];

type Props = {
  open: boolean;
  onClose: () => void;
  onPick: (id: SectionId) => void;
};

export function MobileNavDrawer({ open, onClose, onPick }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-[var(--z-drawer-backdrop)] bg-[#0a0a0a]/55 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />
          <motion.nav
            id="mobile-drawer"
            aria-label="Sections"
            className="fixed left-0 top-0 z-[var(--z-drawer)] h-full w-[75vw] max-w-[320px] border-r-2 border-[#0a0a0a] bg-[#f5f0e8] lg:hidden"
            initial={{ x: "-102%" }}
            animate={{ x: 0 }}
            exit={{ x: "-102%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-10">
              <p className="font-meta mb-6 text-xs tracking-[0.28em] text-[#1a1a1a] small-caps">
                The Cyphera Chronicle
              </p>
              <ul className="flex flex-1 flex-col gap-0 overflow-y-auto">
                {SECTIONS.map((s) => (
                  <li
                    key={s.id}
                    className="border-b border-[#0a0a0a] py-4 first:border-t first:border-[#0a0a0a]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-baseline gap-4 text-left"
                      onClick={() => onPick(s.id)}
                    >
                      <span className="font-display text-4xl font-black leading-none text-[#0a0a0a]">
                        {s.num}
                      </span>
                      <span className="font-subhead text-lg font-bold italic text-[#1a1a1a]">
                        {s.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
