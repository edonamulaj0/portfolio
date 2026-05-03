import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { InViewBlock } from "@/components/InViewBlock";

export function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-[#0a0a0a] py-14">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <SectionHeading label="Section D — Front Page" />
        <InViewBlock>
          <h2
            id="projects-heading"
            className="font-display mb-4 text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none text-[#0a0a0a]"
          >
            Late Edition
          </h2>
          <p className="font-meta mb-10 max-w-2xl text-xs tracking-[0.18em] text-[#1a1a1a]">
            Dispatches from shipped work — expand any lead to read the full column. All links respect your
            tab; external pages open in a new window.
          </p>
        </InViewBlock>

        <LayoutGroup id="projects-layout">
          <div className="grid gap-0 border-t border-[#0a0a0a] lg:grid-cols-2">
            {projects.map((p, idx) => {
              const open = openId === p.id;
              const rightRule = !open && idx % 2 === 0;
              return (
                <motion.article
                  layout
                  key={p.id}
                  className={`border-b border-[#0a0a0a] bg-[#f5f0e8] ${rightRule ? "lg:border-r lg:border-[#0a0a0a]" : ""} ${open ? "lg:col-span-2" : ""}`}
                  transition={{ layout: { type: "spring", stiffness: 320, damping: 34 } }}
                >
                  <motion.button
                    type="button"
                    layout="position"
                    aria-expanded={open}
                    aria-controls={`project-${p.id}-details`}
                    id={`project-${p.id}-trigger`}
                    onClick={() => setOpenId(open ? null : p.id)}
                    className="w-full cursor-pointer border-0 bg-transparent p-6 text-left"
                    whileHover={{ y: -2, boxShadow: "0 6px 0 rgba(10,10,10,0.06)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <h3 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-black leading-tight text-[#0a0a0a]">
                      {p.headline}
                    </h3>
                    <p className="font-meta mt-2 text-[0.7rem] tracking-[0.16em] text-[#1a1a1a]">
                      By Edona Mulaj · {p.year}
                    </p>
                    <p className="font-body mt-4 text-[1.05rem] leading-relaxed text-[#1a1a1a]">{p.lede}</p>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        layout
                        key="body"
                        id={`project-${p.id}-details`}
                        role="region"
                        aria-labelledby={`project-${p.id}-trigger`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-[#0a0a0a] px-6 pb-6"
                      >
                        <div className="mt-4 space-y-4">
                          <div>
                            <p className="font-subhead text-sm font-bold italic">The Build</p>
                            <div className="mt-1 border-t border-[#0a0a0a]" />
                            <p className="font-body mt-2 text-[1.02rem] leading-relaxed text-[#1a1a1a]">
                              {p.build}
                            </p>
                          </div>
                          <div>
                            <p className="font-subhead text-sm font-bold italic">The Good, The Bad</p>
                            <div className="mt-1 border-t border-[#0a0a0a]" />
                            <p className="font-body mt-2 text-[1.02rem] leading-relaxed text-[#1a1a1a]">
                              <span className="font-semibold">Good:</span> {p.good}
                            </p>
                            <p className="font-body mt-2 text-[1.02rem] leading-relaxed text-[#1a1a1a]">
                              <span className="font-semibold">Bad:</span> {p.bad}
                            </p>
                          </div>
                          <div>
                            <p className="font-subhead text-sm font-bold italic">Status</p>
                            <div className="mt-1 border-t border-[#0a0a0a]" />
                            <p className="font-body mt-2 text-[1.02rem] leading-relaxed text-[#1a1a1a]">
                              {p.status}
                            </p>
                          </div>
                          <p className="font-meta text-[0.68rem] tracking-[0.2em] small-caps text-[#1a1a1a]">
                            {p.datelines.join(" · ")}
                          </p>
                          {p.href ? (
                            <p className="font-body mt-2">
                              <a
                                href={p.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="newspaper-link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Read more
                              </a>
                            </p>
                          ) : (
                            <p className="font-meta mt-2 text-[0.7rem] tracking-[0.14em]">
                              <span className="font-bold">Read more</span> — link forthcoming; inquire via
                              classifieds.
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
