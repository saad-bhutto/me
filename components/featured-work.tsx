import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { CaseVisual } from "@/components/case-visual";

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
            {/* Concept visual for the project */}
            <div className="relative mb-7">
              <CaseVisual kind={c.visual} />
              <span className="font-display pointer-events-none absolute right-3 top-2 text-3xl leading-none text-white/10">
                {String(i + 1).padStart(2, "0")}
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
