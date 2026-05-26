import { BubbleNavbar } from "./BubbleNavbar";
import { LiquidEtherBackground } from "./LiquidEtherBackground";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LiquidEtherBackground />
      <BubbleNavbar />
      <div className="relative z-[1]">{children}</div>
    </>
  );
}
