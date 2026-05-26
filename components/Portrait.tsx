import { ParallaxMedia } from "./ParallaxMedia";

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
    <ParallaxMedia
      className={className}
      imageProps={{
        src: "/dona.png",
        alt: "Edona Mulaj",
        fill: true,
        priority,
        sizes,
      }}
    />
  );
}
