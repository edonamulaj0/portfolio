import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of academics, hackathons, research, and project work by Edona S. Mulaj.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <Gallery mode="full" />
    </main>
  );
}
