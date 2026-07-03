type Props = { children: React.ReactNode; className?: string };

export function Card({ children, className }: Props) {
  return (
    <div className={`rounded-xl bg-surface p-6 md:p-8 ${className ?? ""}`}>{children}</div>
  );
}
