"use client";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiShopify,
  SiStripe,
  SiXero,
  SiGoogleanalytics,
  SiAlgolia,
  SiDatadog,
  SiFirebase,
} from "react-icons/si";
import { FaAws, FaSlack } from "react-icons/fa";
import { integrations } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

// Real brand logos where available; the rest fall back to a monogram chip.
const ICONS: Record<string, IconType> = {
  Shopify: SiShopify,
  Stripe: SiStripe,
  Xero: SiXero,
  "Google Analytics": SiGoogleanalytics,
  Algolia: SiAlgolia,
  Datadog: SiDatadog,
  Firebase: SiFirebase,
  "AWS Personalize": FaAws,
  Slack: FaSlack,
};

function monogram(name: string) {
  const words = name.split(/\s+/);
  const letters = words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2);
  return letters.toUpperCase();
}

function Logo({ name }: { name: string }) {
  const Icon = ICONS[name];
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-hair bg-surface-2 text-text">
      {Icon ? (
        <Icon className="h-[22px] w-[22px]" aria-hidden />
      ) : (
        <span className="text-sm font-medium tracking-tight text-accent" aria-hidden>
          {monogram(name)}
        </span>
      )}
    </div>
  );
}

export function IntegrationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto flex max-w-[1200px] items-end justify-between gap-6 px-6">
        <SectionHeading id="integrations" eyebrow="INTEGRATIONS">
          Connected to the tools teams already run on.
        </SectionHeading>
        <div className="hidden shrink-0 gap-2 pb-2 md:flex">
          <button
            type="button"
            aria-label="Scroll integrations left"
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-white/25 hover:text-text"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll integrations right"
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-white/25 hover:text-text"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel stays inside the container; overflows horizontally to scroll. */}
      <div className="mx-auto mt-12 max-w-[1200px] px-6">
        <div className="marquee-mask">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-proximity gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {integrations.map((it) => (
              <article
                key={it.name}
                className="group flex w-[264px] shrink-0 snap-start flex-col rounded-2xl border border-hair bg-surface/40 p-6 transition-all duration-300 hover:border-white/20 hover:bg-surface/70"
              >
                <Logo name={it.name} />
                <h3 className="mt-5 text-base text-text">{it.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
