import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Edona S. Mulaj about security, product, education technology, and speaking or community events.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <Contact mode="full" />
    </main>
  );
}
