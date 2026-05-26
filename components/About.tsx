import { aboutCurrently, aboutExtended, aboutParagraphs } from "@/lib/about";
import { skills, timeline } from "@/lib/background";
import { Portrait } from "./Portrait";
import { FadeIn } from "./FadeIn";
import { PageIntro } from "./PageIntro";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

type AboutProps = {
  mode?: "preview" | "full";
};

export function About({ mode = "preview" }: AboutProps) {
  if (mode === "full") {
    return (
      <section className="section-shell pt-28 md:pt-32">
        <SiteContainer>
          <PageIntro
            label="(01) about"
            title="about me."
            description="Software developer, founder, and student — based in Prishtina, Kosovo."
          />

          <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16 lg:gap-24">
            <FadeIn delay={0.08}>
              <Portrait
                className="aspect-[3/4] w-full max-w-sm"
                sizes="(max-width: 768px) 60vw, 320px"
              />
            </FadeIn>

            <div className="space-y-8 md:space-y-10">
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

          <div id="background" className="mt-20 scroll-mt-28 border-t border-divider pt-16 md:mt-28 md:pt-20">
            <FadeIn>
              <p className="font-mono text-sm text-accent md:text-base">background</p>
            </FadeIn>

            <ul className="mt-10 space-y-6 md:mt-12 md:space-y-8">
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
              <dl className="mt-16 grid gap-6 border-t border-divider pt-10 font-mono text-xs md:mt-20 md:grid-cols-2 md:gap-x-16 md:gap-y-5 md:pt-12 md:text-sm">
                {skills.map((group) => (
                  <div key={group.label} className="grid gap-2 md:grid-cols-[8.5rem_1fr] md:gap-6">
                    <dt className="text-muted">{group.label}</dt>
                    <dd className="text-text">{group.items}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SiteContainer className="flex min-h-[calc(100dvh-10rem)] flex-col justify-center">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] md:gap-16 lg:gap-24">
          <FadeIn>
            <div className="space-y-8">
              <p className="font-mono text-sm text-accent md:text-base">(01) about</p>
              <Portrait className="aspect-[4/5] w-full max-w-[220px] md:max-w-none" />
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.08}>
              <p className="max-w-2xl text-lg leading-relaxed text-text md:text-xl">
                {aboutParagraphs[0]}
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <SeeMoreLink href="/about" label="read full about" />
            </FadeIn>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
