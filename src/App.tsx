import { motion, useReducedMotion } from "framer-motion";
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
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 32 },
  },
} as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.05 },
  },
} as const;

export default function App() {
  const reduceMotion = useReducedMotion();
  const { active } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ready, setReady] = useState(reduceMotion ?? false);
  const [revealBlocks, setRevealBlocks] = useState(reduceMotion ?? false);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      setRevealBlocks(true);
      return;
    }
    const reveal = window.setTimeout(() => {
      setReady(true);
      setRevealBlocks(true);
    }, 380);
    return () => {
      window.clearTimeout(reveal);
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
      <div
        aria-hidden
        className="fixed inset-0 z-[80] bg-[#0a0a0a] transition-opacity duration-[350ms] ease-out"
        style={{
          opacity: ready ? 0 : 1,
          pointerEvents: ready ? "none" : "auto",
        }}
      />

      <div className="flex min-h-dvh bg-[#f5f0e8]">
        <div className="relative min-h-dvh min-w-0 flex-1">
          <MastheadSection ready={ready} />

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

        <aside
          aria-label="Desktop section index"
          className="relative z-[var(--z-bookmarks)] hidden w-[5.5rem] shrink-0 overflow-visible border-l border-[#0a0a0a] bg-[#f5f0e8] lg:block"
        >
          <div className="sticky top-1/2 flex -translate-y-1/2 justify-center py-6">
            <BookmarkSidebar active={active} onSelect={goTo} />
          </div>
        </aside>
      </div>

      <MobileNavToggle open={mobileOpen} onToggle={() => setMobileOpen((v) => !v)} />
      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} onPick={goTo} />
    </>
  );
}
