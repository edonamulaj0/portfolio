import { FadeIn } from "./FadeIn";

export function SectionRule() {
  return (
    <FadeIn className="w-full">
      <div className="section-rule" aria-hidden="true" />
    </FadeIn>
  );
}
