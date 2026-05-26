import type { GalleryItem } from "./gallery";

export const PORTRAIT_ASSET = "/dona.png";
export const LANDSCAPE_ASSET = "/donahero.jpg";

export type MarqueeOrientation = "portrait" | "landscape";

export type MarqueeCardData = {
  orientation: MarqueeOrientation;
  src: string;
  caption: string;
  alt: string;
};

export function resolveMarqueeSrc(orientation: MarqueeOrientation): string {
  return orientation === "landscape" ? LANDSCAPE_ASSET : PORTRAIT_ASSET;
}

export function galleryItemToMarqueeCard(item: GalleryItem): MarqueeCardData {
  const orientation: MarqueeOrientation =
    item.aspect === "landscape" ? "landscape" : "portrait";

  return {
    orientation,
    src: resolveMarqueeSrc(orientation),
    caption: item.caption,
    alt: item.alt,
  };
}

function duplicateRow<T>(row: T[]): T[] {
  return [...row, ...row];
}

/** Split cards into two offset rows with alternating portrait / landscape rhythm. */
export function buildMarqueeRows(
  items: GalleryItem[],
  limit?: number,
): { rowOne: MarqueeCardData[]; rowTwo: MarqueeCardData[] } {
  const sliced = limit ? items.slice(0, limit) : items;
  const cards = sliced.map(galleryItemToMarqueeCard);

  const rowOneSeed: MarqueeCardData[] = [];
  const rowTwoSeed: MarqueeCardData[] = [];

  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      rowOneSeed.push(card);
    } else {
      rowTwoSeed.push(card);
    }
  });

  if (rowTwoSeed.length === 0 && rowOneSeed.length > 1) {
    const mid = Math.ceil(rowOneSeed.length / 2);
    return {
      rowOne: duplicateRow(rowOneSeed.slice(0, mid)),
      rowTwo: duplicateRow(rowOneSeed.slice(mid)),
    };
  }

  return {
    rowOne: duplicateRow(rowOneSeed),
    rowTwo: duplicateRow(rowTwoSeed.length > 0 ? rowTwoSeed : rowOneSeed),
  };
}
