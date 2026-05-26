import { projects, type Project } from "@/lib/projects";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { Magnetic } from "./Magnetic";
import { PageIntro } from "./PageIntro";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

function ProjectLink({ project }: { project: Project }) {
  if (project.link) {
    return (
      <Magnetic strength={0.2} className="inline-block">
        <a
          href={project.link}
          className="link-slide inline-flex items-center gap-2 font-mono text-xs text-accent md:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>→</span>
          <span>{project.linkLabel}</span>
        </a>
      </Magnetic>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted md:text-sm">
      <span>→</span>
      <span>{project.linkLabel}</span>
    </span>
  );
}

type WorkProps = {
  mode?: "preview" | "full";
};

export function Work({ mode = "preview" }: WorkProps) {
  const visibleProjects = mode === "preview" ? projects.slice(0, 3) : projects;

  if (mode === "full") {
    return (
      <section className="section-shell pt-28 md:pt-32">
        <SiteContainer>
          <PageIntro
            label="(02) work"
            title="selected work."
            description="Projects across AI, community platforms, open source, and client work through Cyphera."
          />

          <StaggerGroup
            as="ul"
            className="mt-14 list-none border-t border-divider p-0 md:mt-16"
            stagger={0.08}
          >
            {projects.map((project) => (
              <StaggerItem
                as="li"
                key={project.name}
                className="premium-row border-b border-divider py-8 md:py-10"
              >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                    <h2 className="project-name font-normal">{project.name}</h2>
                    <span className="shrink-0 font-mono text-xs text-muted md:text-sm">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>
                  {project.stack ? (
                    <p className="mt-4 font-mono text-xs text-purple-300/70">{project.stack}</p>
                  ) : null}
                  <div className="mt-4">
                    <ProjectLink project={project} />
                  </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section id="work" className="section-shell scroll-mt-20">
      <SiteContainer>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="font-mono text-sm text-accent md:text-base">(02) work</p>
            <SeeMoreLink href="/work" label="view all work" />
          </div>
        </FadeIn>

        <StaggerGroup
          as="ul"
          className="mt-12 list-none border-t border-divider p-0 md:mt-16"
          stagger={0.07}
        >
          {visibleProjects.map((project) => (
            <StaggerItem
              as="li"
              key={project.name}
              className="premium-row group border-b border-divider py-8 md:py-10"
            >
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="project-name font-normal">{project.name}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted md:text-sm">
                    {project.period}
                  </span>
                </div>

                <div className="project-reveal">
                  <div className="project-reveal-inner">
                    <div className="project-reveal-content pt-4 md:pt-5">
                      <p className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <ProjectLink project={project} />
                      </div>
                    </div>
                  </div>
                </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SiteContainer>
    </section>
  );
}
