import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionFooterProps = {
  children: ReactNode;
  className?: string;
};

export function SectionFooter({ children, className = "" }: SectionFooterProps) {
  return (
    <FadeIn
      blur={false}
      className={`mt-10 flex justify-end border-t border-divider pt-8 md:mt-12 md:pt-10 ${className}`.trim()}
    >
      {children}
    </FadeIn>
  );
}
