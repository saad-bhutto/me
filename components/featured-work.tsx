import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading id="work" eyebrow="SELECTED WORK">
          Systems I&apos;ve shipped to production.
        </SectionHeading>
        <span className="hidden shrink-0 pb-2 text-sm text-muted md:inline">
          {caseStudies.length} case studies
        </span>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {caseStudies.map((c, i) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border border-hair bg-surface/40 p-6 transition-all duration-300 hover:border-white/20 hover:bg-surface/70 md:p-8"
          >
            {/* Visual band: layered gradient with a faint accent glow + ghost index */}
            <div className="relative mb-7 flex aspect-[16/9] items-end overflow-hidden rounded-xl border border-hair bg-surface-2">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(251,65,30,0.16),transparent_55%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4))]" />
              <span className="font-display pointer-events-none absolute -right-2 -top-6 text-[7rem] leading-none text-white/[0.05] transition-transform duration-500 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative m-5 rounded-full border border-hair bg-black/40 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
                {c.tags[0]}
              </span>
            </div>

            <h3 className="text-xl text-text">{c.title}</h3>
            <p className="mt-2 text-muted">{c.outcome}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hair px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
