"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { nav, EMAIL_HREF } from "@/lib/content";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/saadbhutto", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/saad-bhutto", Icon: FaGithub },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="font-display text-lg tracking-tight-2 hover:text-accent">
          SB
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-hair bg-surface/70 px-2 py-1 backdrop-blur md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-text"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-white/25 hover:text-text"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
          <a
            href={EMAIL_HREF}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hair text-text md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hair bg-black/90 px-6 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base text-muted hover:bg-white/5 hover:text-text"
              >
                {n.label}
              </a>
            ))}
            <a
              href={EMAIL_HREF}
              className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-black"
            >
              Contact
            </a>
            <div className="mt-3 flex items-center gap-2 border-t border-hair pt-4">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted hover:text-text"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
