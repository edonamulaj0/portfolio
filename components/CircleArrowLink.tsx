import Link from "next/link";

type CircleArrowLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  uppercase?: boolean;
};

export function CircleArrowLink({
  href,
  label,
  external = false,
  uppercase = false,
}: CircleArrowLinkProps) {
  const className = `arrow-link group ${uppercase ? "uppercase tracking-[0.12em]" : ""}`;

  const content = (
    <>
      <span>{label}</span>
      <span className="arrow-link__arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
