import type { Metadata } from "next";
import { About } from "@/components/About";
import { Academics } from "@/components/Academics";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Misc } from "@/components/Misc";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "home",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About theme="dark" />
      <Work theme="hologram" />
      <Academics theme="dark" />
      <Gallery theme="hologram" />
      <Misc theme="dark" />
      <Contact theme="hologram" />
    </main>
  );
}
