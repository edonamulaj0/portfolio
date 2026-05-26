import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "about — dona",
  description:
    "About Edona Mulaj — software developer, founder of Cyphera, based in Prishtina, Kosovo.",
};

export default function AboutPage() {
  return (
    <main>
      <About mode="full" />
    </main>
  );
}
