import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery";
import { imageVariant } from "@/lib/images";

type GalleryImageProps = {
  item: GalleryItem;
  onOpen: () => void;
};

export function GalleryImage({ item, onOpen }: GalleryImageProps) {
  return (
    <figure className="gallery-card">
      <button
        type="button"
        className="gallery-card__button"
        onClick={onOpen}
        aria-label={`Open photo: ${item.alt}`}
      >
        <span className="gallery-grid__frame image-frame">
          {/* Caption below describes the photo, so the image itself is decorative */}
          <Image
            src={imageVariant(item.src, "sm")}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </span>
      </button>
      <figcaption className="gallery-card__caption">{item.alt}</figcaption>
    </figure>
  );
}
