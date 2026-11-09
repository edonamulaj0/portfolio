import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Edona S. Mulaj — experience, education, awards, publications, certifications, and the technologies she builds with.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <About mode="full" />
    </main>
  );
}
