import { companies } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Companies() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <SectionHeading id="experience" eyebrow="EXPERIENCE">
        Teams &amp; brands I&apos;ve built for.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
        {companies.map((c, i) => (
          <Reveal key={c.name} delay={(i % 4) * 0.06}>
            <figure className="group">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-hair bg-white p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] md:p-9">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${base}/logos/${c.logo}`}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">{c.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
