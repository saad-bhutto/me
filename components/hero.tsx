import { hero } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-[1200px] scroll-mt-24 flex-col justify-center px-6 pt-32 pb-20"
    >
      <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Saad Bhutto · AI-Native Tech Lead · Melbourne, open to remote
      </div>

      <h1 className="font-display max-w-[16ch] text-[2.6rem] leading-[1.02] sm:text-6xl md:max-w-5xl md:text-[5.2rem]">
        <WordReveal text={hero.line1} tone="muted" className="text-muted" />{" "}
        <WordReveal text={hero.line2} tone="bright" className="text-text" />
      </h1>

      <p className="mt-9 max-w-2xl text-lg leading-relaxed text-muted">{hero.subtext}</p>

      <div className="mt-11 flex flex-wrap items-center gap-3">
        <PillButton href={hero.ctaPrimary.href} variant="accent">
          {hero.ctaPrimary.label}
        </PillButton>
        <PillButton href={hero.ctaSecondary.href} variant="dark">
          {hero.ctaSecondary.label}
        </PillButton>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-text md:flex"
      >
        <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </a>
    </section>
  );
}
