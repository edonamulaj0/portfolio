import { projects } from "@/lib/projects";
import { CircleArrowLink } from "./CircleArrowLink";
import { StaggerGroup, StaggerItem } from "./FadeIn";
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
            description="Platforms in production — study tooling, learning management, open-source education, and public health."
          />

          <StaggerGroup as="ul" className="work-list" stagger={0.08}>
            {projects.map((project) => (
              <StaggerItem as="li" key={project.name} className="work-card">
                <div className="work-card__header">
                  <div className="work-card__heading">
                    <h2 className="work-card__title">{project.name}</h2>
                    <span className="work-card__category">{project.category}</span>
                  </div>
                  <span className="work-card__period">{project.period}</span>
                </div>

                <ul className="work-card__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="work-card__footer">
                  {project.stack?.length ? (
                    <ul className="chip-row" aria-label={`${project.name} tech stack`}>
                      {project.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card__link link-slide"
                      aria-label={`Visit ${project.name} (opens in a new tab)`}
                    >
                      {project.linkLabel ?? project.link}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </SiteContainer>
      </HomeSection>
    );
  }

  return (
    <HomeSection id="work" theme={theme} heading="Selected work">
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
