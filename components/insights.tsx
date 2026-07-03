import { insights } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Insights() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <SectionHeading id="insights" eyebrow="INSIGHTS">
        Notes on building with AI.
      </SectionHeading>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {insights.map((p) => (
          <article
            key={p.title}
            className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-hair bg-surface/40 p-7 transition-all duration-300 hover:border-white/20 hover:bg-surface/70"
          >
            <span className="text-xs uppercase tracking-[0.12em] text-accent">{p.category}</span>
            <div>
              <h3 className="text-lg text-text">{p.title}</h3>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                {p.date}
                <span
                  aria-hidden
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  · Read →
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
