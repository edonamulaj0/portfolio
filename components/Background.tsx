import { timeline } from "@/lib/background";
import { FadeIn } from "./FadeIn";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

export function Background() {
  const previewItems = timeline.slice(0, 4);

  return (
    <section className="section-shell">
      <SiteContainer className="flex min-h-[calc(100dvh-10rem)] flex-col justify-center">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="font-mono text-sm text-accent md:text-base">(03) background</p>
            <SeeMoreLink href="/about#background" label="full background" />
          </div>
        </FadeIn>

        <ul className="mt-12 space-y-6 border-t border-divider pt-10 md:mt-16 md:space-y-8 md:pt-12">
          {previewItems.map((item, index) => (
            <FadeIn key={`${item.year}-${index}`} delay={index * 0.05}>
              <li className="grid gap-3 md:grid-cols-[4.5rem_1fr] md:gap-10">
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <span className="leading-relaxed text-text md:text-lg">{item.text}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
