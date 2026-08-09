import { Aurora } from "./Aurora";
import { Footer } from "./Footer";
import { MagneticCursor } from "./MagneticCursor";
import { BubbleNavbar } from "./BubbleNavbar";
import { PageTransitionProvider } from "./PageTransition";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <PageTransitionProvider>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Aurora />
        <ScrollProgress />
        <MagneticCursor />
        <BubbleNavbar />
        <div className="relative z-[1]">{children}</div>
        <Footer />
      </PageTransitionProvider>
    </SmoothScroll>
  );
}
