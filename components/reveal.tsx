"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Fade-and-rise entrance when scrolled into view. Uses useInView (fires reliably
// even above the fold), degrades to static for reduced motion, and carries a
// data-reveal hook so the <noscript> fallback keeps content visible without JS.
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
