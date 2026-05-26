import { About } from "@/components/About";
import { Academics } from "@/components/Academics";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Misc } from "@/components/Misc";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About theme="dark" />
      <Work theme="hologram" />
      <Academics theme="dark" />
      <Articles theme="hologram" />
      <Misc theme="dark" />
      <Contact theme="hologram" />
    </main>
  );
}
