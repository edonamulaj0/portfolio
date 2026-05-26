import type { Metadata } from "next";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "work",
  description:
    "Selected projects by Edona S. Mulaj — Atheneum, Literas, and E-Studenti.",
};

export default function WorkPage() {
  return (
    <main>
      <Work mode="full" />
    </main>
  );
}
