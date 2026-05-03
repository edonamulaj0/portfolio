type Props = {
  label: string;
};

export function SectionHeading({ label }: Props) {
  return (
    <header className="mb-8 border-y border-[#0a0a0a] py-3 text-center">
      <p className="font-meta text-xs tracking-[0.22em] text-[#1a1a1a] small-caps">{label}</p>
    </header>
  );
}
