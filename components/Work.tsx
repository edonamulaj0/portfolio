import { projects, type Project } from "@/lib/projects";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { IridescentThumb } from "./IridescentThumb";
import { PageIntro } from "./PageIntro";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";

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

type WorkProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

export function Work({ mode = "preview", theme = "dark" }: WorkProps) {
  const visibleProjects = mode === "preview" ? projects.slice(0, 3) : projects;

  if (mode === "full") {
    return (
      <HomeSection theme="hologram" className="home-section--page-first">
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
                  <p className="mt-4 font-mono text-xs text-muted">{project.stack}</p>
                ) : null}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </SiteContainer>
      </HomeSection>
    );
  }

  return (
    <HomeSection id="work" theme={theme}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTag index="02" label="work" />
            <FadeIn blur={false}>
              <CircleArrowLink href="/work" label="view all projects" />
            </FadeIn>
          </div>

          <ul className="project-list mt-10 md:mt-14">
            {visibleProjects.map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.06} blur={false}>
                <li className="project-row">
                  <div className="project-row__main">
                    <div className="project-row__heading">
                      <h3 className="project-row__title">{project.name}</h3>
                      <span className="project-row__category">{project.category}</span>
                    </div>
                    <p className="project-row__description">{project.description}</p>
                  </div>

                  <div className="project-row__meta">
                    <span className="project-row__year">{project.year}</span>
                    <IridescentThumb className="project-row__thumb" variant={index} />
                    <ProjectLink project={project} />
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
