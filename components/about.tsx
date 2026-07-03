import { about, EMAIL_HREF } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { PillButton } from "@/components/pill-button";
import { Portrait } from "@/components/portrait";

export function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Portrait */}
        <div className="mx-auto w-full max-w-sm md:mx-0">
          <Portrait />
        </div>

        {/* Copy */}
        <div>
          <SectionHeading id="about" eyebrow="ABOUT">
            {about.heading}
          </SectionHeading>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="bg-bg p-5">
                <dt className="text-xs uppercase tracking-[0.12em] text-muted">{f.label}</dt>
                <dd className="mt-1.5 text-text">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <PillButton href={EMAIL_HREF} variant="accent">
              Get in touch
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
