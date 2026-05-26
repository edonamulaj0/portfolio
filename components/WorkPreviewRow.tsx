"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { revealY, transitionReveal } from "@/lib/motion";
import { IridescentThumb } from "./IridescentThumb";

function ProjectLink({ project }: { project: Project }) {
  if (project.link) {
    return (
      <a
        href={project.link}
        className="project-row__arrow"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name}`}
      >
        →
      </a>
    );
  }

  return (
    <span className="project-row__arrow project-row__arrow--muted" aria-hidden="true">
      →
    </span>
  );
}

type WorkPreviewRowProps = {
  project: Project;
  variant: number;
  delay?: number;
};

export function WorkPreviewRow({ project, variant, delay = 0 }: WorkPreviewRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      className="project-row project-row--preview relative overflow-hidden"
      initial={{ opacity: 0, y: revealY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ ...transitionReveal, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setHovered(false);
        }
      }}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.div
            key="preview"
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[min(42%,18rem)] overflow-hidden"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            <IridescentThumb
              variant={variant}
              className="h-full w-full rounded-none backdrop-blur-md"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="project-row__main relative z-[1]">
        <div className="project-row__heading">
          <motion.h3
            className="project-row__title relative inline-block"
            animate={{ x: hovered ? -8 : 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            {project.name}
            <span
              className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-accent to-purple-neon transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
              aria-hidden="true"
            />
          </motion.h3>
          <span className="project-row__category">{project.category}</span>
        </div>
        <p className="project-row__description">{project.description}</p>
      </div>

      <div className="project-row__meta relative z-[1]">
        <span className="project-row__year">{project.year}</span>
        <ProjectLink project={project} />
      </div>
    </motion.li>
  );
}
