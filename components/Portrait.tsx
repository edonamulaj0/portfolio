import Image from "next/image";

type PortraitProps = {
  className?: string;
};

export function Portrait({ className = "aspect-[3/4] w-full max-w-xs" }: PortraitProps) {
  return (
    <div className={`image-frame relative w-full overflow-hidden ${className}`}>
      <Image
        src="/img/portrait.webp"
        alt="Edona S. Mulaj"
        fill
        sizes="(max-width: 900px) 80vw, 384px"
        className="object-cover object-center"
      />
    </div>
  );
}
