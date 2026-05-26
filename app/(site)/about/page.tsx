import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "about",
  description:
    "About Edona S. Mulaj — Founder & CEO @ Cyphera, Software Engineer, and ICT & Network Engineering Student @ University of Prishtina.",
};

export default function AboutPage() {
  return (
    <main>
      <About mode="full" />
    </main>
  );
}
