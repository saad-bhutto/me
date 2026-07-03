type Props = { href: string; children: React.ReactNode; variant?: "accent" | "dark" };

export function PillButton({ href, children, variant = "accent" }: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const styles =
    variant === "accent"
      ? "bg-accent text-black shadow-[0_0_0_0_rgba(251,65,30,0.5)] hover:shadow-[0_8px_30px_-6px_rgba(251,65,30,0.55)] hover:-translate-y-0.5"
      : "border border-hair bg-surface/60 text-text hover:bg-white/10 hover:-translate-y-0.5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span
        aria-hidden
        className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
