import { contact, EMAIL_HREF } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function FooterCta() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28 md:py-36">
      <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-3xl border border-hair bg-surface/30 px-6 py-20 text-center md:py-28">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(251,65,30,0.16),transparent_70%)]"
        />
        <div className="relative">
          <p className="mb-6 text-xs uppercase tracking-[0.14em] text-muted">Let&apos;s talk</p>
          <h2 className="font-display mx-auto max-w-3xl text-4xl md:text-[3.8rem]">
            <WordReveal text={contact.heading} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">{contact.lede}</p>
          <div className="mt-11 flex justify-center">
            <PillButton href={EMAIL_HREF} variant="accent">
              {contact.email}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
