import { FadeIn } from "./FadeIn";
import { GalleryImage } from "./GalleryImage";
import { galleryItems, getGallerySpan, type GalleryItem } from "@/lib/gallery";

type GalleryGridProps = {
  items?: GalleryItem[];
  limit?: number;
};

export function GalleryGrid({ items = galleryItems, limit }: GalleryGridProps) {
  const visible = limit ? items.slice(0, limit) : items;

  return (
    <div className="gallery-mosaic">
      {visible.map((item, index) => {
        const { cols, rows } = getGallerySpan(item);

        return (
          <FadeIn
            key={`${item.src}-${item.caption}-${index}`}
            delay={0.04 + index * 0.03}
            className="gallery-mosaic-item min-h-0"
            data-cols={cols}
            data-rows={rows}
          >
            <GalleryImage item={item} />
          </FadeIn>
        );
      })}
    </div>
  );
}
