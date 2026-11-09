import { projects, type Project } from "@/lib/projects";
import { AtheneumFeature } from "./AtheneumFeature";
import { CircleArrowLink } from "./CircleArrowLink";
import { StaggerGroup, StaggerItem } from "./FadeIn";
import { PageIntro } from "./PageIntro";
import { Section } from "./Section";
import { SiteContainer } from "./SiteContainer";

/** Atheneum gets the featured block; everything else is the archive */
const archive = projects.filter((project) => project.name !== "Atheneum");

type WorkProps = {
  mode?: "preview" | "full";
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <div className="project-card__top">
        <span className="project-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-card__period">{project.period}</span>
      </div>

      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__category">{project.category}</p>
      <p className="project-card__description">{project.description}</p>

      <div className="project-card__foot">
        {project.stack?.length ? (
          <ul className="chip-row">
            {project.stack.slice(0, 4).map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <span />
        )}

        {project.link ? (
          <span className="project-card__cta">
            {project.linkLabel ?? "visit"}
            <span aria-hidden="true">↗</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (!project.link) {
    return <article className="project-card">{body}</article>;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`${project.name} — ${project.category} (opens in a new tab)`}
    >
      {body}
    </a>
  );
}

export function Work({ mode = "preview" }: WorkProps) {
  if (mode === "full") {
    return (
      <>
        <section className="section" aria-label="Introduction">
          <SiteContainer>
            <PageIntro
              label="(02) work"
              title="selected work."
              description="Atheneum is what I'm building now. Below it, the platforms that came before: open-source education, civic intelligence, and public health."
            />
          </SiteContainer>
        </section>

        <Section label="now building" index="02" tone="raised">
          <AtheneumFeature />
        </Section>

        <Section label="archive" index="02">
          <StaggerGroup as="ul" className="work-list" stagger={0.08}>
            {archive.map((project) => (
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
                  ) : (
                    <span />
                  )}

                  <div className="work-card__links">
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
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card__link link-slide"
                        aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
                      >
                        source
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Section>
      </>
    );
  }

  return (
    <Section
      id="work"
      index="02"
      label="work"
      title="what I'm building."
      intro="Atheneum is my main project, live and in active development. Before it: open-source education, civic intelligence, and a hackathon-winning child health record."
    >
      <AtheneumFeature />

      <StaggerGroup as="ul" className="project-grid" stagger={0.08}>
        {archive.map((project, index) => (
          <StaggerItem as="li" key={project.name}>
            <ProjectCard project={project} index={index + 1} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="section-foot">
        <CircleArrowLink href="/work" label="view all projects" />
      </div>
    </Section>
  );
}
