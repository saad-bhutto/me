"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = { text: string; className?: string; tone?: "bright" | "muted" };

const SETTLE: Record<NonNullable<Props["tone"]>, string> = {
  bright: "#ffffff",
  muted: "rgba(255,255,255,0.42)",
};

// Scroll-triggered, word-by-word reveal: each word fades up and pulses through
// the accent color before settling — the signature motion of the site.
export function WordReveal({ text, className, tone = "bright" }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const words = text.split(" ");
  const settle = SETTLE[tone];

  if (reduced) {
    return (
      <span ref={ref} className={className} style={{ color: settle }}>
        {words.map((w, i) => (
          <span data-word key={i}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <motion.span
          data-word
          key={i}
          initial={{ opacity: 0.1, y: "0.16em", color: settle }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: "0em",
                  // Hold on the accent so the color flash is clearly visible.
                  color: [settle, "var(--accent)", "var(--accent)", settle],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: i * 0.09,
            ease: [0.22, 1, 0.36, 1],
            color: { duration: 1.4, delay: i * 0.09, times: [0, 0.28, 0.5, 1] },
          }}
          style={{ display: "inline-block", marginRight: "0.26em", color: settle }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
