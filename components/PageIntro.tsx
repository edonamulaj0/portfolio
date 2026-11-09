import Link from "next/link";
import { FadeIn } from "./FadeIn";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <div>
      <FadeIn immediate blur={false}>
        <Link href="/" className="page-intro__back link-slide">
          ← Home
        </Link>
        <p className="page-intro__label">{label}</p>
      </FadeIn>

      <h1 className="page-intro__title">{title}</h1>

      {description ? (
        <FadeIn blur={false} delay={0.14}>
          <p className="page-intro__description">{description}</p>
        </FadeIn>
      ) : null}
    </div>
  );
}
