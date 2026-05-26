type IridescentThumbProps = {
  className?: string;
  variant?: number;
};

const VARIANTS = [
  "from-violet-500/40 via-fuchsia-400/30 to-cyan-400/35",
  "from-purple-600/35 via-pink-400/25 to-blue-400/30",
  "from-indigo-500/30 via-violet-400/35 to-rose-400/25",
];

export function IridescentThumb({ className = "", variant = 0 }: IridescentThumbProps) {
  const gradient = VARIANTS[variant % VARIANTS.length];

  return (
    <div
      className={`iridescent-thumb bg-gradient-to-br ${gradient} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
