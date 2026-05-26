import Link from "next/link";
import { formatArticleDate, getLatestArticles } from "@/lib/articles";
import { CircleArrowLink } from "./CircleArrowLink";
import { FadeIn } from "./FadeIn";
import { HomeSection, type HomeSectionTheme } from "./HomeSection";
import { IridescentThumb } from "./IridescentThumb";
import { SectionTag } from "./SectionTag";
import { SiteContainer } from "./SiteContainer";

type ArticlesProps = {
  mode?: "preview" | "full";
  limit?: number;
  theme?: HomeSectionTheme;
};

export function Articles({ mode = "preview", limit = 2, theme = "dark" }: ArticlesProps) {
  const articles =
    mode === "preview" ? getLatestArticles(limit) : getLatestArticles(100);

  if (mode === "full") {
    return null;
  }

  return (
    <HomeSection id="writing" theme={theme}>
      <SiteContainer>
        <div className="section-layout section-layout--stacked">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTag index="04" label="writing" />
            <FadeIn blur={false}>
              <CircleArrowLink href="/articles" label="view all articles" />
            </FadeIn>
          </div>

          <ul className="article-list mt-10 border-t border-divider md:mt-14">
            {articles.map((article, index) => (
              <FadeIn key={article.slug} delay={index * 0.06} blur={false}>
                <li className="article-row">
                  <Link href={`/articles/${article.slug}`} className="article-row__link group">
                    <IridescentThumb className="article-row__thumb" variant={index + 1} />
                    <div className="article-row__body">
                      <h3 className="article-row__title">{article.title}</h3>
                      <p className="article-row__excerpt">{article.excerpt}</p>
                    </div>
                    <time dateTime={article.date} className="article-row__date">
                      {formatArticleDate(article.date).toUpperCase()}
                    </time>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </HomeSection>
  );
}
