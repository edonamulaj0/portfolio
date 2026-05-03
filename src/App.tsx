import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BookmarkSidebar } from "@/components/BookmarkSidebar";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HobbiesSection } from "@/components/HobbiesSection";
import { MastheadSection } from "@/components/MastheadSection";
import { MobileNavDrawer } from "@/components/MobileNavDrawer";
import { MobileNavToggle } from "@/components/MobileNavToggle";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkipLink } from "@/components/SkipLink";
import { StackSection } from "@/components/StackSection";
import { useActiveSection, type SectionId } from "@/hooks/useActiveSection";
import { scrollToSectionElement } from "@/lib/scrollSpring";

const sectionVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 28 },
  },
} as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
} as const;

export default function App() {
  const reduceMotion = useReducedMotion();
  const { active } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [introInk, setIntroInk] = useState(reduceMotion ?? false);
  const [curtain, setCurtain] = useState(!reduceMotion);
  const [scanOn, setScanOn] = useState(false);
  const [scanGrow, setScanGrow] = useState(reduceMotion ?? false);
  const [revealBlocks, setRevealBlocks] = useState(reduceMotion ?? false);

  useEffect(() => {
    if (reduceMotion) {
      setIntroInk(true);
      setCurtain(false);
      setScanGrow(true);
      setRevealBlocks(true);
      return;
    }
    const ink = window.setTimeout(() => setIntroInk(true), 420);
    const scan = window.setTimeout(() => {
      setScanOn(true);
      setScanGrow(true);
    }, 520);
    const curtainOff = window.setTimeout(() => setCurtain(false), 640);
    const reveal = window.setTimeout(() => setRevealBlocks(true), 600);
    const scanEnd = window.setTimeout(() => setScanOn(false), 1480);
    return () => {
      window.clearTimeout(ink);
      window.clearTimeout(scan);
      window.clearTimeout(curtainOff);
      window.clearTimeout(reveal);
      window.clearTimeout(scanEnd);
    };
  }, [reduceMotion]);

  const goTo = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    void scrollToSectionElement(el);
    setMobileOpen(false);
  }, []);

  return (
    <>
      <SkipLink />
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[80] bg-[#0a0a0a]"
        initial={{ opacity: 1 }}
        animate={{ opacity: curtain ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: curtain ? "auto" : "none" }}
      />

      <AnimatePresence>
        {scanOn && (
          <motion.div
            key="scan"
            aria-hidden
            className="pointer-events-none fixed left-0 right-0 z-[91] h-[4px] bg-[#0a0a0a]/40"
            initial={{ top: "-4px" }}
            animate={{ top: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.88, ease: "linear" }}
          />
        )}
      </AnimatePresence>

      <BookmarkSidebar active={active} onSelect={goTo} />
      <MobileNavToggle open={mobileOpen} onToggle={() => setMobileOpen((v) => !v)} />
      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} onPick={goTo} />

      <div className="min-h-dvh bg-[#f5f0e8] lg:pl-[52px]">
        <MastheadSection introInk={introInk} scanActive={scanGrow} />

        <motion.main
          id="main"
          role="main"
          variants={containerVariants}
          initial="hidden"
          animate={revealBlocks ? "show" : "hidden"}
        >
          <motion.div variants={sectionVariants}>
            <AboutSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ExperienceSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <StackSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ProjectsSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <HobbiesSection />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ContactSection />
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}
