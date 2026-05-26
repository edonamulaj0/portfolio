import { About } from "@/components/About";
import { Articles } from "@/components/Articles";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Misc } from "@/components/Misc";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Background />
      <Articles />
      <Misc />
      <Contact />
    </main>
  );
}
