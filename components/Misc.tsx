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
              label="(05) writing"
              title="Writing & notes"
              description="Articles on projects, security, and competitions, alongside photos from events."
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
      label="writing"
      title="Writing"
      intro="Articles on the projects I build, security, and competitions."
    >
      <MiscFeed items={getAllMiscArticles().slice(0, 3)} />

      <div className="section-foot">
        <CircleArrowLink href="/misc" label="All writing" />
      </div>
    </Section>
  );
}
