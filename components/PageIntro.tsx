import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { RevealText } from "./RevealText";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <div>
      <FadeIn immediate blur={false}>
        <Link
          href="/"
          className="link-slide font-mono text-xs text-muted md:text-sm"
          data-cursor-hover
        >
          ← home
        </Link>
        <p className="mt-10 font-mono text-sm text-accent md:text-base">{label}</p>
      </FadeIn>

      <RevealText
        as="h1"
        text={title}
        className="contact-headline mt-6 font-normal tracking-tight"
        delay={0.08}
        gradient
      />

      {description ? (
        <FadeIn delay={0.18}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}
