import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="work" eyebrow="FEATURED WORK">What I've shipped</SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Card key={c.title}>
            <div className="mb-6 aspect-[16/9] rounded-lg bg-surface-2" aria-hidden />
            <h3 className="text-xl text-text">{c.title}</h3>
            <p className="mt-2 text-muted">{c.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-hair px-2.5 py-1 text-xs text-muted">{t}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
