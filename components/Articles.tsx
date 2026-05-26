import Link from "next/link";
import { formatArticleDate, getLatestArticles } from "@/lib/articles";
import { FadeIn } from "./FadeIn";
import { SeeMoreLink } from "./SeeMoreLink";
import { SiteContainer } from "./SiteContainer";

type ArticlesProps = {
  mode?: "preview" | "full";
  limit?: number;
};

export function Articles({ mode = "preview", limit = 2 }: ArticlesProps) {
  const articles =
    mode === "preview" ? getLatestArticles(limit) : getLatestArticles(100);

  if (mode === "full") {
    return null;
  }

  return (
    <section id="writing" className="section-shell scroll-mt-20">
      <SiteContainer className="flex min-h-[calc(100dvh-10rem)] flex-col justify-center">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="font-mono text-sm text-accent md:text-base">(04) writing</p>
            <SeeMoreLink href="/articles" label="all articles" />
          </div>
        </FadeIn>

        <ul className="mt-12 border-t border-divider md:mt-16">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.06}>
              <li className="premium-row border-b border-divider py-8 md:py-10">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block"
                  data-cursor-hover
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="project-name font-normal transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-purple-200">
                      {article.title}
                    </h3>
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
    </section>
  );
}
