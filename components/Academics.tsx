import { academics } from "@/lib/academics";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";

type AcademicsProps = {
  theme?: HomeSectionTheme;
};

export function Academics({ theme = "dark" }: AcademicsProps) {
  return (
    <HomeSection id="academics" theme={theme} curveDivider={theme === "dark"}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <SectionTag index="03" label="academics" />

          <ul className="experience-list mt-10 border-t border-divider md:mt-14">
            {academics.map((item, index) => (
              <FadeIn key={`${item.year}-${item.title}`} delay={index * 0.05} blur={false}>
                <li className="experience-row">
                  <span className="experience-row__year">{item.year}</span>
                  <div className="experience-row__body">
                    <p className="experience-row__title">
                      {item.title}
                      <span className="experience-row__sep"> — </span>
                      {item.institution}
                    </p>
                    <p className="experience-row__description">{item.description}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>

          <SectionFooter>
            <CircleArrowLink href="/about#background" label="view full background" />
          </SectionFooter>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
