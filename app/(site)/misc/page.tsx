import type { Metadata } from "next";
import { Misc } from "@/components/Misc";

export const metadata: Metadata = {
  title: "misc — dona",
  description: "Art, music, languages, and personal gallery — a glimpse into life outside work.",
};

export default function MiscPage() {
  return (
    <main data-ether-theme="misc">
      <Misc mode="full" />
    </main>
  );
}
