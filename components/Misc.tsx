import { getAllMiscArticles, getAllMiscItems } from "@/lib/misc";
import { CircleArrowLink } from "./CircleArrowLink";
import { MiscFeed } from "./MiscFeed";
import { PageIntro } from "./PageIntro";
import { Section } from "./Section";
import { SiteContainer } from "./SiteContainer";

type MiscProps = {
  mode?: "preview" | "full";
};

export function Misc({ mode = "preview" }: MiscProps) {
  if (mode === "full") {
    return (
      <>
        <section className="section" aria-label="Introduction">
          <SiteContainer>
            <PageIntro
              label="(05) misc"
              title="misc."
              description="Writing, notes, and standalone images — technical articles alongside personal posts and photos."
            />
          </SiteContainer>
        </section>

        <Section label="feed" index="05" tone="raised">
          <MiscFeed items={getAllMiscItems()} />
        </Section>
      </>
    );
  }

  return (
    <Section
      id="misc"
      index="05"
      label="misc"
      title="writing."
      intro="Notes on tech, security, and the things I build. Photos live on the misc page."
    >
      <MiscFeed items={getAllMiscArticles().slice(0, 3)} />

      <div className="section-foot">
        <CircleArrowLink href="/misc" label="view all misc" />
      </div>
    </Section>
  );
}
