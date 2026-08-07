import { aboutCurrently, aboutExtended, aboutParagraphs } from "@/lib/about";
import { experience } from "@/lib/experience";
import { education } from "@/lib/education";
import { awards, certifications, publications } from "@/lib/credentials";
import { techStack } from "@/lib/background";
import { Portrait } from "./Portrait";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { ResumeRow } from "./ResumeRow";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { SocialLinks } from "./SocialLinks";
import { TechStack } from "./TechStack";

type AboutProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

type ResumeBlockProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function ResumeBlock({ id, title, children }: ResumeBlockProps) {
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

export function About({ mode = "preview", theme = "dark" }: AboutProps) {
  if (mode === "full") {
    return (
      <>
        <HomeSection theme="hologram" className="home-section--page-first">
          <SiteContainer>
            <PageIntro
              label="(01) about"
              title="about me."
              description="Founder & CEO @ Cyphera · Software Engineer · ICT @ University of Prishtina."
            />

            <div className="about-intro">
              <FadeIn delay={0.08} className="about-intro__portrait">
                <Portrait
                  className="aspect-[4/5] w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px]"
                  sizes="(max-width: 768px) 65vw, 320px"
                  priority
                />
              </FadeIn>

              <div className="about-intro__copy">
                {[...aboutParagraphs, ...aboutExtended].map((paragraph, index) => (
                  <FadeIn key={index} delay={0.1 + index * 0.06}>
                    <p
                      className={
                        index < aboutParagraphs.length
                          ? "about-intro__lead"
                          : "about-intro__paragraph"
                      }
                    >
                      {paragraph}
                    </p>
                  </FadeIn>
                ))}

                <FadeIn delay={0.34}>
                  <p className="about-intro__currently">{aboutCurrently}</p>
                  <SocialLinks variant="labelled" className="about-intro__socials" />
                </FadeIn>
              </div>
            </div>
          </SiteContainer>
        </HomeSection>

        <HomeSection id="background" theme="dark" className="scroll-mt-24">
          <SiteContainer>
            <FadeIn blur={false}>
              <p className="resume-eyebrow">background</p>
            </FadeIn>

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

            <SectionFooter>
              <CircleArrowLink href="/work" label="see the work" />
            </SectionFooter>
          </SiteContainer>
        </HomeSection>
      </>
    );
  }

  return (
    <HomeSection
      id="about"
      theme={theme}
      curveDivider={theme === "dark"}
      heading="About"
    >
      <SiteContainer>
        <div className="section-layout">
          <aside className="section-layout__aside">
            <SectionTag index="01" label="about" />
          </aside>

          <div className="section-layout__content">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12 lg:gap-16">
              <div className="order-2 flex min-w-0 flex-1 flex-col gap-8 md:order-1 md:max-w-2xl">
                <FadeIn blur={false}>
                  <p className="text-balance text-lg leading-relaxed md:text-xl">
                    {aboutParagraphs[0]}
                  </p>
                </FadeIn>

                <SectionFooter>
                  <CircleArrowLink href="/about" label="more about me" />
                </SectionFooter>
              </div>

              <FadeIn
                delay={0.06}
                blur={false}
                className="order-1 w-full max-w-[220px] shrink-0 sm:max-w-[260px] md:order-2 md:max-w-[300px]"
              >
                <Portrait
                  className="aspect-[4/5] w-full"
                  sizes="(max-width: 768px) 70vw, 300px"
                  priority
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
