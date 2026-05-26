import { CustomCursor } from "./CustomCursor";
import { IridescentFluidBackground } from "./IridescentFluidBackground";
import { Navbar } from "./Navbar";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <IridescentFluidBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="relative z-[1]">{children}</div>
    </SmoothScroll>
  );
}
