import { aboutCurrently, aboutExtended, aboutParagraphs } from "@/lib/about";
import { Portrait } from "./Portrait";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { skills, timeline } from "@/lib/background";
import { SkillBars } from "./SkillBars";

type AboutProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

export function About({ mode = "preview", theme = "dark" }: AboutProps) {
  if (mode === "full") {
    return (
      <>
        <HomeSection theme="hologram" className="home-section--page-first">
          <SiteContainer>
            <PageIntro
              label="(01) about"
              title="about me."
              description="Founder & CEO @ Cyphera · Software Engineer · ICT & Network Engineering Student @ University of Prishtina."
            />

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:items-end md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-24">
              <FadeIn delay={0.08} className="order-1 shrink-0 md:order-2 md:justify-self-end">
                <Portrait
                  className="aspect-[4/5] w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px]"
                  sizes="(max-width: 768px) 65vw, 320px"
                  priority
                />
              </FadeIn>

              <div className="order-2 space-y-8 md:order-1 md:space-y-10">
                {[...aboutParagraphs, ...aboutExtended].map((paragraph, index) => (
                  <FadeIn key={index} delay={0.1 + index * 0.06}>
                    <p
                      className={`max-w-2xl text-lg leading-relaxed md:text-xl ${
                        index < aboutParagraphs.length ? "text-text" : "text-muted"
                      }`}
                    >
                      {paragraph}
                    </p>
                  </FadeIn>
                ))}

                <FadeIn delay={0.34}>
                  <p className="max-w-2xl font-mono text-xs leading-relaxed text-muted md:text-sm">
                    {aboutCurrently}
                  </p>
                </FadeIn>
              </div>
            </div>
          </SiteContainer>
        </HomeSection>

        <HomeSection id="background" theme="dark" className="scroll-mt-24">
          <SiteContainer>
            <FadeIn>
              <p className="font-mono text-sm text-accent md:text-base">background</p>
            </FadeIn>

            <ul className="mt-10 space-y-6 border-t border-divider pt-10 md:mt-12 md:space-y-8 md:pt-12">
              {timeline.map((item, index) => (
                <FadeIn key={`${item.year}-${index}`} delay={index * 0.04}>
                  <li className="grid gap-3 md:grid-cols-[4.5rem_1fr] md:gap-10">
                    <span className="font-mono text-sm text-accent">{item.year}</span>
                    <span className="leading-relaxed text-text md:text-lg">{item.text}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={0.2}>
              <SkillBars groups={skills} />
            </FadeIn>
          </SiteContainer>
        </HomeSection>
      </>
    );
  }

  return (
    <HomeSection id="about" theme={theme}>
      <SiteContainer>
        <div className="section-layout">
          <aside className="section-layout__aside">
            <SectionTag index="01" label="about" />
          </aside>

          <div className="section-layout__content flex flex-col gap-10">
            <FadeIn delay={0.06} blur={false} className="shrink-0">
              <Portrait
                className="aspect-[4/5] w-full max-w-[220px] sm:max-w-[260px] md:mx-0 md:ml-auto md:max-w-[300px]"
                sizes="(max-width: 768px) 70vw, 300px"
                priority
              />
            </FadeIn>

            <FadeIn blur={false}>
              <p className="max-w-2xl text-lg leading-relaxed md:text-xl">
                {aboutParagraphs[0]}
              </p>
            </FadeIn>

            <SectionFooter className="!mt-0 !border-t-0 !pt-0 md:!mt-2">
              <CircleArrowLink href="/about" label="more about me" />
            </SectionFooter>
          </div>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
