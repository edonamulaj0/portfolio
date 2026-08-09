import { getAllMiscItems, getLatestMiscItems } from "@/lib/misc";
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
      title="notes and images."
      intro="Writing on tech and security, plus personal notes and photos."
    >
      <MiscFeed items={getLatestMiscItems(3)} />

      <div className="section-foot">
        <CircleArrowLink href="/misc" label="view all misc" />
      </div>
    </Section>
  );
}
