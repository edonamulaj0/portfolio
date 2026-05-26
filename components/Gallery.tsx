import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { GalleryGrid } from "./GalleryGrid";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { SectionFooter } from "./SectionFooter";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { GALLERY_PREVIEW_COUNT } from "@/lib/gallery";

type GalleryProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

export function Gallery({ mode = "preview", theme = "dark" }: GalleryProps) {
  if (mode === "full") {
    return (
      <HomeSection theme="hologram" className="home-section--page-first">
        <SiteContainer>
          <PageIntro
            label="(04) gallery"
            title="proof of work."
            description="Photos from academics, competitions, research, and shipped projects — evidence behind the résumé."
          />

          <FadeIn delay={0.12} blur={false} className="mt-14 md:mt-16">
            <GalleryGrid />
          </FadeIn>
        </SiteContainer>
      </HomeSection>
    );
  }

  return (
    <HomeSection id="gallery" theme={theme}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <SectionTag index="04" label="gallery" />

          <FadeIn delay={0.06} blur={false}>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Academics, hackathons, research, and project deliveries — visual proof of the work.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} blur={false} className="mt-10 md:mt-14">
            <GalleryGrid limit={GALLERY_PREVIEW_COUNT} />
          </FadeIn>

          <SectionFooter>
            <CircleArrowLink href="/gallery" label="view full gallery" />
          </SectionFooter>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
