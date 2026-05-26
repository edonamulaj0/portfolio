import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "contact — dona",
  description: "Get in touch with Edona Mulaj — projects, research, and collaborations.",
};

export default function ContactPage() {
  return (
    <main data-ether-theme="contact">
      <Contact mode="full" />
    </main>
  );
}
