import type { Metadata } from "next";
import { Misc } from "@/components/Misc";

export const metadata: Metadata = {
  title: "Writing & notes",
  description:
    "Misc — articles on software and security, personal writing, and standalone images.",
};

export default function MiscPage() {
  return (
    <main id="main">
      <Misc mode="full" />
    </main>
  );
}
