"use client";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = { text: string; className?: string; as?: keyof JSX.IntrinsicElements };

export function WordReveal({ text, className }: Props) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span data-word key={i}>{w}{i < words.length - 1 ? " " : ""}</span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          data-word
          key={i}
          initial={{ opacity: 0.12, color: "var(--text)" }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
