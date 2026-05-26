"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  formatMiscDate,
  getAllMiscImages,
  type MiscArticle,
  type MiscImage,
  type MiscItem,
} from "@/lib/misc";
import { FadeIn } from "./FadeIn";
import { IridescentThumb } from "./IridescentThumb";
import { Lightbox } from "./Lightbox";

type MiscFeedProps = {
  items: MiscItem[];
};

export function MiscFeed({ items }: MiscFeedProps) {
  const images = useMemo(() => getAllMiscImages(), []);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems = images.map((img) => ({ src: img.src, alt: img.alt }));

  const openImage = (image: MiscImage) => {
    const index = images.findIndex((img) => img.id === image.id);
    if (index >= 0) setLightboxIndex(index);
  };

  return (
    <>
      <ul className="article-list border-t border-divider">
        {items.map((item, index) => {
          if (item.type === "article") {
            return (
              <ArticleRow key={item.slug} article={item} index={index} />
            );
          }

          return (
            <ImageRow
              key={item.id}
              image={item}
              index={index}
              onOpen={() => openImage(item)}
            />
          );
        })}
      </ul>

      <Lightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

function ArticleRow({ article, index }: { article: MiscArticle; index: number }) {
  return (
    <FadeIn delay={index * 0.06} blur={false}>
      <li className="article-row">
        <Link href={`/misc/${article.slug}`} className="article-row__link group">
          {article.coverImage ? (
            <div className="article-row__thumb image-frame relative overflow-hidden">
              <Image
                src={article.coverImage}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <IridescentThumb className="article-row__thumb" variant={index + 1} />
          )}
          <div className="article-row__body">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              article
            </p>
            <h2 className="article-row__title">{article.title}</h2>
            <p className="article-row__excerpt">{article.excerpt}</p>
          </div>
          <time dateTime={article.date} className="article-row__date">
            {formatMiscDate(article.date).toUpperCase()}
          </time>
        </Link>
      </li>
    </FadeIn>
  );
}

function ImageRow({
  image,
  index,
  onOpen,
}: {
  image: MiscImage;
  index: number;
  onOpen: () => void;
}) {
  return (
    <FadeIn delay={index * 0.06} blur={false}>
      <li className="article-row">
        <button
          type="button"
          className="article-row__link group w-full cursor-pointer text-left"
          onClick={onOpen}
        >
          <div className="article-row__thumb image-frame relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="article-row__body">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              image
            </p>
            <h2 className="article-row__title">{image.alt}</h2>
          </div>
          <time dateTime={image.date} className="article-row__date">
            {formatMiscDate(image.date).toUpperCase()}
          </time>
        </button>
      </li>
    </FadeIn>
  );
}
