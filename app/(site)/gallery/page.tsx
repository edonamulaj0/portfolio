import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "gallery",
  description:
    "Photo gallery of academics, hackathons, research, and project work by Edona S. Mulaj.",
};

export default function GalleryPage() {
  return (
    <main>
      <Gallery mode="full" />
    </main>
  );
}
