import Image from "next/image";

type PortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Portrait({
  className = "aspect-[3/4] w-full max-w-xs",
  priority = false,
  sizes = "(max-width: 768px) 40vw, 280px",
}: PortraitProps) {
  return (
    <div className={`image-frame relative overflow-hidden ${className}`}>
      <Image
        src="/dona.png"
        alt="Edona Mulaj"
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />
    </div>
  );
}
