import { impact } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Impact() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="impact" eyebrow="IMPACT">Proof, not promises.</SectionHeading>
      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-hair bg-hair sm:grid-cols-2 md:grid-cols-3">
        {impact.map((m) => (
          <div key={m.label} className="bg-bg p-8">
            <div className="font-display text-5xl text-accent">{m.value}</div>
            <p className="mt-3 text-sm text-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
