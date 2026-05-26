import { CustomCursor } from "./CustomCursor";
import { GradientBackground } from "./GradientBackground";
import { Navbar } from "./Navbar";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <GradientBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      {children}
    </SmoothScroll>
  );
}
