import { type ElementType } from "react";

type SplitHeadlineProps = {
  lead: string;
  accent: string;
  as?: ElementType;
  className?: string;
  size?: "hero" | "contact";
};

export function SplitHeadline({
  lead,
  accent,
  as: Tag = "h2",
  className = "",
  size = "hero",
}: SplitHeadlineProps) {
  const sizeClass = size === "hero" ? "split-headline-hero" : "split-headline-contact";

  return (
    <Tag className={`split-headline ${sizeClass} ${className}`.trim()}>
      <span className="split-headline-lead">{lead}</span>
      <span className="split-headline-accent">{accent}</span>
    </Tag>
  );
}
