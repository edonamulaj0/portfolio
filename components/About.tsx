import {
  aboutCurrently,
  aboutExtended,
  aboutParagraphs,
  aboutStatement,
} from "@/lib/about";
import { experience } from "@/lib/experience";
import { education } from "@/lib/education";
import { awards, certifications, publications } from "@/lib/credentials";
import { techStack } from "@/lib/background";
import { security } from "@/lib/security";
import { Portrait } from "./Portrait";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { PageIntro } from "./PageIntro";
import { ResumeRow } from "./ResumeRow";
import { Section } from "./Section";
import { SiteContainer } from "./SiteContainer";
import { SocialLinks } from "./SocialLinks";
import { TechStack } from "./TechStack";

type AboutProps = {
  mode?: "preview" | "full";
};

function ResumeBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-block" aria-labelledby={id}>
      <FadeIn blur={false}>
        <h2 id={id} className="resume-block__title">
          {title}
        </h2>
      </FadeIn>
      {children}
    </section>
  );
}

export function About({ mode = "preview" }: AboutProps) {
  if (mode === "full") {
    return (
      <>
        <section className="section" aria-label="Introduction">
          <SiteContainer>
            <PageIntro
              label="(01) about"
              title="About"
              description="Associate Project Manager, Certus Cybersecurity · Co-developer, Atheneum · MSc ICT, University of Prishtina"
            />

            <div className="about-grid mt-16 md:mt-20">
              <div>
                <div className="about-body !mt-0">
                  {[...aboutParagraphs, ...aboutExtended].map((paragraph, index) => (
                    <FadeIn key={index} blur={false} delay={0.06 + index * 0.05}>
                      <p>{paragraph}</p>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn blur={false} delay={0.3}>
                  <p className="about-currently">{aboutCurrently}</p>
                  <SocialLinks variant="labelled" className="mt-4" />
                </FadeIn>
              </div>

              <FadeIn delay={0.1} className="about-portrait">
                <Portrait className="aspect-[4/5] w-full" />
              </FadeIn>
            </div>
          </SiteContainer>
        </section>

        <Section
          id="background"
          index="01"
          label="background"
          title="Background"
          tone="raised"
        >
          <div className="resume-stack">
            <ResumeBlock id="resume-experience" title="Experience">
              <ul className="resume-list">
                {experience.map((item, index) => (
                  <ResumeRow
                    key={`${item.company}-${item.role}`}
                    meta={item.period}
                    location={item.location}
                    title={item.role}
                    subtitle={item.company}
                    description={item.summary}
                    bullets={item.highlights}
                    href={item.href}
                    delay={index * 0.04}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-security" title="Security & community">
              <ul className="resume-list">
                {security.map((item, index) => (
                  <ResumeRow
                    key={`${item.org}-${item.title}`}
                    meta={item.period}
                    title={item.title}
                    subtitle={item.org}
                    description={item.description}
                    delay={index * 0.04}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-education" title="Education">
              <ul className="resume-list">
                {education.map((item, index) => (
                  <ResumeRow
                    key={`${item.institution}-${item.degree}`}
                    meta={item.period}
                    location={item.location}
                    title={item.degree}
                    subtitle={item.institution}
                    description={item.description}
                    bullets={item.highlights}
                    delay={index * 0.04}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-awards" title="Awards & achievements">
              <ul className="resume-list">
                {awards.map((item, index) => (
                  <ResumeRow
                    key={item.title}
                    meta={item.date}
                    title={item.title}
                    subtitle={item.event}
                    bullets={item.highlights}
                    href={item.href}
                    delay={index * 0.04}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-publications" title="Publications">
              <ul className="resume-list">
                {publications.map((item, index) => (
                  <ResumeRow
                    key={item.title}
                    meta={item.date}
                    title={item.title}
                    subtitle={item.venue}
                    href={item.doi ? `https://doi.org/${item.doi}` : undefined}
                    hrefLabel={item.doi ? `doi: ${item.doi}` : undefined}
                    delay={index * 0.04}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-certifications" title="Certifications & training">
              <ul className="resume-list resume-list--compact">
                {certifications.map((item, index) => (
                  <ResumeRow
                    key={`${item.title}-${item.issuer}`}
                    meta={item.period}
                    title={item.title}
                    subtitle={item.issuer}
                    description={item.description}
                    delay={index * 0.03}
                  />
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock id="resume-technologies" title="Technologies">
              <TechStack groups={techStack} />
            </ResumeBlock>
          </div>

          <div className="section-foot">
            <CircleArrowLink href="/work" label="View my work" />
          </div>
        </Section>
      </>
    );
  }

  return (
    <Section id="about" index="01" label="about">
      <div className="about-grid">
        <div>
          <FadeIn blur={false}>
            <p className="about-statement">{aboutStatement}</p>
          </FadeIn>

          <div className="about-body">
            {aboutParagraphs.map((paragraph, index) => (
              <FadeIn key={index} blur={false} delay={0.06 + index * 0.05}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn blur={false} delay={0.2}>
            <p className="about-currently">{aboutCurrently}</p>
          </FadeIn>

          <div className="section-foot !justify-start">
            <CircleArrowLink href="/about" label="More about me" />
          </div>
        </div>

        <FadeIn delay={0.08} className="about-portrait">
          <Portrait className="aspect-[4/5] w-full" />
        </FadeIn>
      </div>
    </Section>
  );
}
