import { projects } from "@/lib/projects";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn, StaggerGroup, StaggerItem } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { WorkPreviewRow } from "./WorkPreviewRow";

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
            description="Core engineering projects across study platforms, learning management, and open-source education."
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
          <SectionTag index="02" label="work" />

          <ul className="project-list mt-10 md:mt-14">
            {visibleProjects.map((project, index) => (
              <WorkPreviewRow
                key={project.name}
                project={project}
                variant={index}
                delay={index * 0.06}
              />
            ))}
          </ul>

          <SectionFooter>
            <CircleArrowLink href="/work" label="view all projects" />
          </SectionFooter>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
