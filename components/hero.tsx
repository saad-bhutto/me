import { hero } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center px-6 pt-28">
      <h1 className="font-display max-w-5xl text-4xl leading-[1.05] md:text-7xl">
        <WordReveal text={hero.line1} className="text-muted" />{" "}
        <WordReveal text={hero.line2} className="text-text" />
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted">{hero.subtext}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <PillButton href={hero.ctaPrimary.href} variant="accent">{hero.ctaPrimary.label}</PillButton>
        <PillButton href={hero.ctaSecondary.href} variant="dark">{hero.ctaSecondary.label}</PillButton>
      </div>
    </section>
  );
}
