import { Footer } from "./Footer";
import { MagneticCursor } from "./MagneticCursor";
import { BubbleNavbar } from "./BubbleNavbar";
import { PageTransitionProvider } from "./PageTransition";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <MagneticCursor />
      <BubbleNavbar />
      <div className="relative z-[1]">{children}</div>
      <Footer />
    </PageTransitionProvider>
  );
}
