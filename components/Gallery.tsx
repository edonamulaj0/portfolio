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
              title="Gallery"
              description="Conferences, competitions, research exchanges, and project launches."
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
      title="Gallery"
      intro="Conferences, competitions, research exchanges, and project launches."
    >
      <FadeIn blur={false}>
        <GalleryGrid limit={GALLERY_PREVIEW_COUNT} />
      </FadeIn>

      <div className="section-foot">
        <CircleArrowLink href="/gallery" label="Full gallery" />
      </div>
    </Section>
  );
}
