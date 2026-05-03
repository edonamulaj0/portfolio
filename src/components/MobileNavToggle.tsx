import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export function MobileNavToggle({ open, onToggle }: Props) {
  return (
    <motion.button
      type="button"
      aria-expanded={open}
      aria-controls="mobile-drawer"
      aria-label={open ? "Close sections menu" : "Open sections menu"}
      onClick={onToggle}
      className="font-meta fixed bottom-5 right-4 z-[var(--z-mobile-toggle)] border-2 border-[#0a0a0a] bg-[#d4cfc5] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0a0a0a] shadow-[inset_0_0_0_1px_#f5f0e8] lg:hidden"
      style={{
        clipPath:
          "polygon(0 0,100% 0,100% 72%,88% 100%,0 88%,0 0)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {open ? "Close" : "Sections"}
    </motion.button>
  );
}
