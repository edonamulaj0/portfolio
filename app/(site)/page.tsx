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
      <div data-scroll-theme="#07050e">
        <Hero />
      </div>
      <div data-scroll-theme="#0a0614">
        <About />
      </div>
      <div data-scroll-theme="#0e0820">
        <Work />
      </div>
      <div data-scroll-theme="#120a2a">
        <Background />
      </div>
      <div data-scroll-theme="#160e34">
        <Articles />
      </div>
      <div data-scroll-theme="#1a0e3a">
        <Misc />
      </div>
      <div data-scroll-theme="#0d0818">
        <Contact />
      </div>
    </main>
  );
}
