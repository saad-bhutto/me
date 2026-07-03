type Props = { href: string; children: React.ReactNode; variant?: "accent" | "dark" };

export function PillButton({ href, children, variant = "accent" }: Props) {
  const base = "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "accent"
      ? "accent bg-accent text-black hover:opacity-90"
      : "bg-surface text-text hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
