import { GalleryGrid } from "./GalleryGrid";
import { FadeIn } from "./FadeIn";
import { PageIntro } from "./PageIntro";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";
import { hobbies } from "@/lib/gallery";

type MiscProps = {
  mode?: "preview" | "full";
};

export function Misc({ mode = "preview" }: MiscProps) {
  if (mode === "full") {
    return (
      <section className="section-shell pt-28 md:pt-32">
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
                  <p className="font-mono text-xs text-purple-300/80 md:text-sm">{hobby.label}</p>
                  <p className="text-sm leading-relaxed text-muted md:text-base">{hobby.detail}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-14 border-t border-divider pt-10 md:mt-16 md:pt-12">
              <p className="font-mono text-xs text-muted md:text-sm">gallery</p>
              <p className="mt-3 max-w-xl text-sm text-muted/80">
                drawings, paintings, and moments with friends.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 md:mt-10">
            <GalleryGrid />
          </div>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section id="misc" className="section-shell scroll-mt-20">
      <SiteContainer>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-accent md:text-base">(05) misc</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                art, music, languages, and friends — a small glimpse into life outside work.
              </p>
            </div>
            <SeeMoreLink href="/misc" label="see full gallery" />
          </div>
        </FadeIn>

        <div className="mt-10 md:mt-12">
          <GalleryGrid limit={6} />
        </div>
      </SiteContainer>
    </section>
  );
}
