import type { Metadata } from "next";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "work — dona",
  description: "Selected projects by Edona Mulaj — Atheneum, H4ck&Stack, E-Studenti, and Cyphera.",
};

export default function WorkPage() {
  return (
    <main>
      <Work mode="full" />
    </main>
  );
}
