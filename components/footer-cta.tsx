import { contact, EMAIL_HREF } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function FooterCta() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-[1200px] px-6 py-32 text-center">
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">READY TO START?</p>
      <h2 className="font-display mx-auto max-w-3xl text-4xl md:text-6xl">
        <WordReveal text={contact.heading} />
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-muted">{contact.lede}</p>
      <div className="mt-10 flex justify-center">
        <PillButton href={EMAIL_HREF} variant="accent">{contact.email}</PillButton>
      </div>
    </section>
  );
}
