type Props = { eyebrow?: string; children: React.ReactNode; id?: string; className?: string };

export function SectionHeading({ eyebrow, children, id, className }: Props) {
  return (
    <div id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.08em] text-muted">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-6xl text-text">{children}</h2>
    </div>
  );
}
