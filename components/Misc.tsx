import Image from "next/image";
import { galleryItems } from "@/lib/gallery";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { GalleryMasonry } from "./GalleryMasonry";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { PageIntro } from "./PageIntro";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";
import { hobbies } from "@/lib/gallery";

type MiscProps = {
  mode?: "preview" | "full";
  theme?: HomeSectionTheme;
};

function MomentsStrip() {
  const items = galleryItems.slice(0, 5);

  return (
    <ul className="moments-strip">
      {items.map((item, index) => (
        <li key={`${item.src}-${index}`} className="moments-strip__item">
          <div className="moments-strip__frame">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 40vw, 180px"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Misc({ mode = "preview", theme = "dark" }: MiscProps) {
  if (mode === "full") {
    return (
      <>
        <HomeSection theme="hologram" className="home-section--page-first">
          <SiteContainer>
            <PageIntro
              label="(05) misc"
              title="off the clock."
              description="Art, music, languages, and the people around me — the informal side of things."
            />

            <FadeIn delay={0.08}>
              <ul className="mt-14 grid gap-5 border-t border-divider pt-10 sm:grid-cols-2 md:mt-16 md:gap-6 md:pt-12 lg:grid-cols-4">
                {hobbies.map((hobby) => (
                  <li key={hobby.label} className="space-y-2">
                    <p className="font-mono text-xs text-accent md:text-sm">{hobby.label}</p>
                    <p className="text-sm leading-relaxed text-muted md:text-base">{hobby.detail}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </SiteContainer>
        </HomeSection>

        <HomeSection theme="dark">
          <SiteContainer>
            <FadeIn delay={0.14} blur={false}>
              <div>
                <p className="font-mono text-xs text-muted md:text-sm">gallery</p>
                <p className="mt-3 max-w-xl text-sm text-muted/80">
                  drawings, paintings, and moments with friends.
                </p>
              </div>
            </FadeIn>
          </SiteContainer>

          <div className="relative z-20 mt-10 md:mt-14">
            <GalleryMasonry />
          </div>
        </HomeSection>
      </>
    );
  }

  return (
    <HomeSection id="misc" theme={theme}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTag index="05" label="misc" />
            <FadeIn blur={false}>
              <CircleArrowLink href="/misc" label="see full gallery" />
            </FadeIn>
          </div>

          <FadeIn delay={0.1} blur={false} className="mt-10 md:mt-14">
            <MomentsStrip />
          </FadeIn>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
