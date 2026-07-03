import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function Services() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="services" eyebrow="WHAT I DO">
        You don't need a full AI team. You need the right expertise at the right time.
      </SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} className="min-h-[220px]">
            <h3 className="text-xl text-text">{s.title}</h3>
            <p className="mt-3 text-muted">{s.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
