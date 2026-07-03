import { nav, EMAIL_HREF } from "@/lib/content";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <a href="#top" className="font-display text-lg font-medium tracking-tight-2">SB</a>
      <nav className="hidden items-center gap-1 rounded-full bg-surface/80 px-2 py-1 backdrop-blur md:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="rounded-full px-3 py-1.5 text-sm text-muted hover:text-text">
            {n.label}
          </a>
        ))}
      </nav>
      <a href={EMAIL_HREF} className="rounded-full bg-surface px-4 py-2 text-sm text-text hover:bg-white/10">
        Contact
      </a>
    </header>
  );
}
