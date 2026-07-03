"use client";
import { useEffect, useState } from "react";

const ZONES = [
  { label: "Melbourne", tz: "Australia/Melbourne" },
  { label: "London", tz: "Europe/London" },
  { label: "San Francisco", tz: "America/Los_Angeles" },
];

function timeIn(tz: string, now: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(now)
    .toLowerCase();
}

// Live local clocks — signals timezone flexibility for remote work.
// Renders a placeholder until mounted so the static export never bakes a stale time.
export function TimeZones() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted" aria-label="Local times">
      {ZONES.map((z) => (
        <span key={z.label} className="tabular-nums">
          {z.label} <span className="mx-1 text-white/25">•</span>{" "}
          {now ? timeIn(z.tz, now) : "—"}
        </span>
      ))}
    </div>
  );
}
