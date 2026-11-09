import type { Metadata } from "next";
import { About } from "@/components/About";
import { Academics } from "@/components/Academics";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Misc } from "@/components/Misc";
import { SiteContainer } from "@/components/SiteContainer";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: {
    absolute: "Edona Mulaj | Security project manager, building Atheneum",
  },
};

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <section className="section section--tight" aria-label="By the numbers">
        <SiteContainer>
          <Stats />
        </SiteContainer>
      </section>

      <About />
      <Work />
      <Academics />
      <Gallery />
      <Misc />
      <Contact mode="preview" />
    </main>
  );
}
