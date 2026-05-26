import { getAllMiscItems, getLatestMiscItems } from "@/lib/misc";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { MiscFeed } from "./MiscFeed";
import { PageIntro } from "./PageIntro";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";

type MiscProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

export function Misc({ mode = "preview", theme = "dark" }: MiscProps) {
  if (mode === "full") {
    const items = getAllMiscItems();

    return (
      <HomeSection theme="hologram" className="home-section--page-first">
        <SiteContainer>
          <PageIntro
            label="(05) misc"
            title="misc."
            description="Writing, notes, and standalone images — technical articles alongside personal posts and photos."
          />

          <div className="mt-14 md:mt-16">
            <MiscFeed items={items} />
          </div>
        </SiteContainer>
      </HomeSection>
    );
  }

  const items = getLatestMiscItems(3);

  return (
    <HomeSection id="misc" theme={theme} curveDivider={theme === "dark"}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <SectionTag index="05" label="misc" />

          <FadeIn delay={0.06} blur={false}>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Articles and standalone images — writing on tech and security, plus personal
              notes and photos.
            </p>
          </FadeIn>

          <div className="mt-10 md:mt-14">
            <MiscFeed items={items} />
          </div>

          <SectionFooter>
            <CircleArrowLink href="/misc" label="view all misc" />
          </SectionFooter>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
