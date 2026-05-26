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
      <div data-ether-theme="hero">
        <Hero />
      </div>
      <div data-ether-theme="about">
        <About />
      </div>
      <div data-ether-theme="work">
        <Work />
      </div>
      <div data-ether-theme="background">
        <Background />
      </div>
      <div data-ether-theme="articles">
        <Articles />
      </div>
      <div data-ether-theme="misc">
        <Misc />
      </div>
      <div data-ether-theme="contact">
        <Contact />
      </div>
    </main>
  );
}
