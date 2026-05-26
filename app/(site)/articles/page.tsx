import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageIntro } from "@/components/PageIntro";
import { SiteContainer } from "@/components/SiteContainer";
import { formatArticleDate, getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "writing — dona",
  description: "Articles and notes on software, security, and building products.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="section-shell pt-28 md:pt-32">
      <SiteContainer>
        <PageIntro
          label="(04) writing"
          title="writing."
          description="Notes on building software, security, and running a studio."
        />

        <ul className="mt-14 border-t border-divider md:mt-16">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <li className="border-b border-divider py-8 md:py-10">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block"
                  data-cursor-hover
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                    <h2 className="text-2xl font-normal tracking-tight transition-colors group-hover:text-purple-200 md:text-3xl">
                      {article.title}
                    </h2>
                    <time
                      dateTime={article.date}
                      className="shrink-0 font-mono text-xs text-muted md:text-sm"
                    >
                      {formatArticleDate(article.date)}
                    </time>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                    {article.excerpt}
                  </p>
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
      </SiteContainer>
    </main>
  );
}
