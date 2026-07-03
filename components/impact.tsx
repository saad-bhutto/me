import { impact } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Impact() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <SectionHeading id="impact" eyebrow="IMPACT">
        Proof, not promises.
      </SectionHeading>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 md:grid-cols-3">
        {impact.map((m) => (
          <div
            key={m.label}
            className="group relative bg-bg p-8 transition-colors duration-300 hover:bg-surface/40 md:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            <div className="font-display text-6xl text-accent md:text-7xl">{m.value}</div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
