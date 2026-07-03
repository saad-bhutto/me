import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <SectionHeading id="services" eyebrow="WHAT I DO">
        You don&apos;t need a full AI team. You need the right expertise at the right time.
      </SectionHeading>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-hair bg-surface/40 p-7 transition-all duration-300 hover:border-white/20 hover:bg-surface/70 md:p-9"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(90%_90%_at_0%_0%,rgba(251,65,30,0.08),transparent_60%)]" />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span
                aria-hidden
                className="translate-y-1 text-lg text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                ↗
              </span>
            </div>
            <div className="relative">
              <h3 className="text-2xl text-text">{s.title}</h3>
              <p className="mt-3 max-w-md text-muted">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
