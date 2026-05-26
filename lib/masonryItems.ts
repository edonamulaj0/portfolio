import { galleryItems, type GalleryItem } from "./gallery";

export type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
};

function resolveImage(item: GalleryItem): string {
  return item.src;
}

function resolveHeight(): number {
  return 300;
}

export function galleryToMasonryItems(
  items: GalleryItem[] = galleryItems,
  limit?: number,
): MasonryItem[] {
  const sliced = limit ? items.slice(0, limit) : items;

  return sliced.map((item, index) => ({
    id: `masonry-${index}-${item.alt}`,
    img: resolveImage(item),
    url: "/misc",
    height: resolveHeight(),
  }));
}
