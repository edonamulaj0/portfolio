import Link from "next/link";
import { ArticleBody } from "./ArticleBody";
import { FadeIn } from "./FadeIn";
import { HomeSection } from "./HomeSection";
import { SiteContainer } from "./SiteContainer";
import { formatMiscDate, type MiscArticle } from "@/lib/misc";

type MiscArticleViewProps = {
  article: MiscArticle;
};

export function MiscArticleView({ article }: MiscArticleViewProps) {
  return (
    <main>
      <HomeSection theme="hologram" className="home-section--page-first">
        <SiteContainer>
          <article>
            <FadeIn immediate>
              <Link
                href="/misc"
                className="link-slide font-mono text-xs text-muted md:text-sm"
              >
                ← misc
              </Link>

              <header className="mt-10 max-w-3xl border-b border-divider pb-10 md:mt-12 md:pb-12">
                <time dateTime={article.date} className="font-mono text-xs text-accent md:text-sm">
                  {formatMiscDate(article.date)}
                </time>
                <h1 className="mt-4 text-3xl font-normal tracking-tight md:text-5xl md:leading-tight">
                  {article.title}
                </h1>
                {article.tags.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {article.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider text-muted md:text-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </header>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="max-w-3xl pt-10 md:pt-12">
                <ArticleBody content={article.content} />
              </div>
            </FadeIn>
          </article>
        </SiteContainer>
      </HomeSection>
    </main>
  );
}
