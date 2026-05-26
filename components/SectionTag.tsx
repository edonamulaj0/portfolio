type SectionTagProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionTag({ index, label, className = "" }: SectionTagProps) {
  return (
    <p className={`section-tag font-mono text-sm text-muted md:text-base ${className}`.trim()}>
      ({index}) {label}
    </p>
  );
}
