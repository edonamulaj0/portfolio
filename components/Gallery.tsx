import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { GalleryGrid } from "./GalleryGrid";
import { PageIntro } from "./PageIntro";
import { Section } from "./Section";
import { SiteContainer } from "./SiteContainer";
import { GALLERY_PREVIEW_COUNT } from "@/lib/gallery";

type GalleryProps = {
  mode?: "preview" | "full";
};

export function Gallery({ mode = "preview" }: GalleryProps) {
  if (mode === "full") {
    return (
      <>
        <section className="section" aria-label="Introduction">
          <SiteContainer>
            <PageIntro
              label="(04) gallery"
              title="proof of work."
              description="Photos from academics, competitions, research, and shipped projects — the evidence behind the résumé."
            />
          </SiteContainer>
        </section>

        <Section label="photos" index="04" tone="raised">
          <FadeIn blur={false}>
            <GalleryGrid />
          </FadeIn>
        </Section>
      </>
    );
  }

  return (
    <Section
      id="gallery"
      index="04"
      label="gallery"
      title="proof of work."
      intro="Conferences, hackathons, research trips, and award ceremonies."
    >
      <FadeIn blur={false}>
        <GalleryGrid limit={GALLERY_PREVIEW_COUNT} />
      </FadeIn>

      <div className="section-foot">
        <CircleArrowLink href="/gallery" label="view full gallery" />
      </div>
    </Section>
  );
}
