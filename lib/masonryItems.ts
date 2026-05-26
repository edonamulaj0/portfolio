import { galleryItems, type GalleryItem } from "./gallery";
import { LANDSCAPE_ASSET, PORTRAIT_ASSET } from "./marqueeCards";

export type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
};

function resolveImage(item: GalleryItem): string {
  return item.aspect === "landscape" ? LANDSCAPE_ASSET : PORTRAIT_ASSET;
}

function resolveHeight(item: GalleryItem): number {
  switch (item.aspect) {
    case "landscape":
      return 300;
    case "portrait":
      return 480;
    default:
      return 380;
  }
}

export function galleryToMasonryItems(
  items: GalleryItem[] = galleryItems,
  limit?: number,
): MasonryItem[] {
  const sliced = limit ? items.slice(0, limit) : items;

  return sliced.map((item, index) => ({
    id: `masonry-${index}-${item.caption}`,
    img: resolveImage(item),
    url: "/misc",
    height: resolveHeight(item),
  }));
}
