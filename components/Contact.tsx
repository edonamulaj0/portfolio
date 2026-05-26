import { contactExtended, contactIntro } from "@/lib/contact";
import { FadeIn } from "./FadeIn";
import { ContactFlowingMenu } from "./ContactFlowingMenu";
import { PressureHeading } from "./PressureHeading";
import { PageIntro } from "./PageIntro";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

type ContactProps = {
  mode?: "preview" | "full";
};

export function Contact({ mode = "preview" }: ContactProps) {
  if (mode === "full") {
    return (
      <section className="section-shell pt-28 md:pt-32">
        <SiteContainer className="flex min-h-[calc(100dvh-10rem)] flex-col justify-between">
          <div>
            <PageIntro label="(06) contact" title="let's talk." description={contactIntro} />

            <FadeIn delay={0.12}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {contactExtended}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <ContactFlowingMenu className="mt-12 md:mt-16" />
            </FadeIn>
          </div>

          <FadeIn delay={0.28}>
            <p className="mt-20 font-mono text-[10px] text-muted md:mt-24 md:text-xs">
              © 2026 Edona Mulaj · edonamulaj.com
            </p>
          </FadeIn>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section id="contact" className="section-shell scroll-mt-20">
      <SiteContainer>
        <FadeIn blur={false}>
          <p className="font-mono text-sm text-accent md:text-base">(06) contact</p>
        </FadeIn>

        <PressureHeading
          as="h2"
          text="let's talk."
          variant="page"
          className="contact-headline mt-10 font-normal tracking-tight md:mt-12"
        />

        <FadeIn delay={0.16}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:mt-10 md:text-lg">
            {contactIntro}
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <ContactFlowingMenu className="mt-10 md:mt-12" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8">
            <SeeMoreLink href="/contact" label="get in touch" />
          </div>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
