import type { Metadata } from "next";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Edona S. Mulaj — Atheneum, E-Studenti, Polaris, and Drit'.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <Work mode="full" />
    </main>
  );
}
