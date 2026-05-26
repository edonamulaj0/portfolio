import { BubbleNavbar } from "./BubbleNavbar";
import { CustomCursor } from "./CustomCursor";
import { LiquidEtherBackground } from "./LiquidEtherBackground";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <LiquidEtherBackground />
      <ScrollProgress />
      <CustomCursor />
      <BubbleNavbar />
      <div className="relative z-[1]">{children}</div>
    </SmoothScroll>
  );
}
