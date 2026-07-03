import { hero } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-[1200px] scroll-mt-24 flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
    >
      <div className="mb-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Saad Bhutto · AI-Native Tech Lead · Melbourne, open to remote
      </div>

      <h1 className="font-display mx-auto max-w-4xl text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
        <WordReveal text={hero.line1} tone="muted" className="text-muted" />{" "}
        <WordReveal text={hero.line2} tone="bright" className="text-text" />
      </h1>

      <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-muted">{hero.subtext}</p>

      <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
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
