import type { SocialId } from "@/lib/social";

type SocialIconProps = {
  id: SocialId;
  className?: string;
};

const paths: Record<SocialId, React.ReactNode> = {
  email: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.13 5.42a1.6 1.6 0 0 0 1.74 0L21 7" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10.5V17" />
      <path d="M7.5 7.2v.05" />
      <path d="M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
      <path d="M11.5 10.5V17" />
    </>
  ),
  github: (
    <path d="M9 19.5c-4.2 1.3-4.2-2.2-6-2.7m12 5.2v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 3.9 5.5 4.2 5.5 4.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.6c0 4.6 2.8 5.6 5.5 5.9a2.9 2.9 0 0 0-.8 2.2V22" />
  ),
  cyphera: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
};

export function SocialIcon({ id, className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[id]}
    </svg>
  );
}
