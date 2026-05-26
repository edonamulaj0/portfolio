import type { Metadata } from "next";
import { Misc } from "@/components/Misc";

export const metadata: Metadata = {
  title: "misc",
  description: "Redirected to misc — articles and images live here.",
};

/** Legacy /articles route — same content as /misc */
export default function ArticlesPage() {
  return (
    <main>
      <Misc mode="full" />
    </main>
  );
}
