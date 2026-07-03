import { insights } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function Insights() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="insights" eyebrow="INSIGHTS">Good reads</SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {insights.map((p) => (
          <Card key={p.title}>
            <span className="text-xs uppercase tracking-[0.08em] text-accent">{p.category}</span>
            <h3 className="mt-3 text-lg text-text">{p.title}</h3>
            <p className="mt-4 text-sm text-muted">{p.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
