"use client";
import { useEffect, useRef, useState } from "react";

// Shows /portrait.jpg when it exists; falls back to a styled monogram frame
// so the layout never looks broken before the real headshot is added.
export function Portrait() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image can 404 before React hydrates (so onError never fires). Detect an
  // already-failed load on mount, then rely on onError for later failures.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-hair bg-surface">
      {/* Ambient accent glow behind the portrait */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,65,30,0.18),transparent_60%)]"
      />
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/portrait.jpg"
          alt="Saad Bhutto — AI-native tech lead and full-stack engineer"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
          <span className="font-display text-6xl text-white/80">SB</span>
          <span className="rounded-full border border-hair px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
            Headshot goes here
          </span>
        </div>
      )}
    </div>
  );
}
