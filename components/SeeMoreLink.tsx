import Link from "next/link";

type SeeMoreLinkProps = {
  href: string;
  label?: string;
};

export function SeeMoreLink({ href, label = "see more" }: SeeMoreLinkProps) {
  return (
    <Link
      href={href}
      className="link-slide group inline-flex items-center gap-2 font-mono text-xs text-accent md:text-sm"
    >
      <span>{label}</span>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
