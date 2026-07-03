type Props = { eyebrow?: string; children: React.ReactNode; id?: string; className?: string };

export function SectionHeading({ eyebrow, children, id, className }: Props) {
  return (
    <div id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      {eyebrow && (
        <p className="mb-5 flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display max-w-4xl text-3xl text-text sm:text-4xl md:text-[3.4rem]">
        {children}
      </h2>
    </div>
  );
}
