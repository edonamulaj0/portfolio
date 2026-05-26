import { Footer } from "./Footer";
import { MagneticCursor } from "./MagneticCursor";
import { Navbar } from "./Navbar";
import { PageTransitionProvider } from "./PageTransition";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      <MagneticCursor />
      <Navbar />
      <div className="relative z-[1]">{children}</div>
      <Footer />
    </PageTransitionProvider>
  );
}
