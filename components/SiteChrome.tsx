import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="relative z-[1]">{children}</div>
      <Footer />
    </>
  );
}
