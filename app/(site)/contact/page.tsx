import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "contact",
  description: "Get in touch with Edona S. Mulaj — projects, collaborations, and opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact mode="full" />
    </main>
  );
}
