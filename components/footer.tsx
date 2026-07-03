import { SiNextdotjs } from "react-icons/si";
import { nav, contact, footer, socials } from "@/lib/content";
import { TimeZones } from "@/components/time-zones";

const explore = [...nav, { label: "Contact", href: "#contact" }];

export function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <a href="#top" className="font-display text-3xl tracking-tight-2 transition-colors hover:text-accent">
              SB
            </a>
            <p className="mt-6 text-lg text-text">{footer.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{footer.blurb}</p>
            <div className="mt-8">
              <TimeZones />
            </div>
          </div>

          {/* Explore column */}
          <nav aria-label="Site">
            <p className="text-sm text-white/45">Explore</p>
            <ul className="mt-5 space-y-3">
              {explore.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted transition-colors hover:text-text">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect column */}
          <nav aria-label="Elsewhere">
            <p className="text-sm text-white/45">Connect</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-hair pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Saad Bhutto — {contact.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <SiNextdotjs className="h-3.5 w-3.5" aria-hidden />
            Built with Next.js on Cloudflare
          </span>
        </div>
      </div>
    </footer>
  );
}
