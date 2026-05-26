import { Footer } from "./Footer";
import { MagneticCursor } from "./MagneticCursor";
import { BubbleNavbar } from "./BubbleNavbar";
import { PageTransitionProvider } from "./PageTransition";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      <MagneticCursor />
      <BubbleNavbar />
      <div className="relative z-[1]">{children}</div>
      <Footer />
    </PageTransitionProvider>
  );
}
