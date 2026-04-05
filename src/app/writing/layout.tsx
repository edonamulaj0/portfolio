export default function WritingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#f5f3ff] pt-[4.75rem] text-violet-950">
      {children}
    </div>
  );
}
