import Link from "next/link";

type SeeMoreLinkProps = {
  href: string;
  label?: string;
};

export function SeeMoreLink({ href, label = "see more" }: SeeMoreLinkProps) {
  return (
    <Link
      href={href}
      className="link-slide inline-flex items-center gap-2 font-mono text-xs text-accent md:text-sm"
      data-cursor-hover
    >
      <span>{label}</span>
      <span>→</span>
    </Link>
  );
}
