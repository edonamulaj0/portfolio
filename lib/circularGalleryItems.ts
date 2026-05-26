import { galleryItems } from "./gallery";
import { LANDSCAPE_ASSET, PORTRAIT_ASSET } from "./marqueeCards";

export type CircularGalleryItem = {
  image: string;
  text: string;
};

export function getCircularGalleryItems(limit = 10): CircularGalleryItem[] {
  const featured: CircularGalleryItem[] = [
    { image: LANDSCAPE_ASSET, text: "dona" },
    { image: PORTRAIT_ASSET, text: "portrait" },
  ];

  const fromGallery = galleryItems.slice(0, limit - 2).map((item) => ({
    image: item.aspect === "landscape" ? LANDSCAPE_ASSET : PORTRAIT_ASSET,
    text: item.caption,
  }));

  return [...featured, ...fromGallery];
}
