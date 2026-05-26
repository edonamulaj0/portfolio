import Image from "next/image";
import { galleryItems } from "@/lib/gallery";

type GalleryGridProps = {
  limit?: number;
  className?: string;
};

export function GalleryGrid({ limit, className = "" }: GalleryGridProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <ul className={`gallery-grid ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.src} className="gallery-grid__item">
          <div className="gallery-grid__frame image-frame">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 639px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
