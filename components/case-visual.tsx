type Kind = "rag" | "reco" | "agents" | "mcp";

// Minimal, on-brand concept diagrams (not fabricated screenshots) that hint at
// what each project actually does. Muted line-art with a single accent highlight.
const STROKE = "rgba(255,255,255,0.34)";
const DIM = "rgba(255,255,255,0.14)";
const ACCENT = "#fb411e";

function Rag() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      {/* query → retriever(vectors) → LLM → answer */}
      <rect x="14" y="74" width="52" height="32" rx="6" stroke={STROKE} />
      <text x="40" y="94" textAnchor="middle" fill={STROKE} fontSize="9" fontFamily="monospace">query</text>
      <path d="M66 90 H104" stroke={STROKE} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle
            key={`${r}-${c}`}
            cx={116 + c * 16}
            cy={74 + r * 16}
            r="4"
            fill={r === 1 && c === 1 ? ACCENT : DIM}
          />
        )),
      )}
      <path d="M164 90 H196" stroke={STROKE} />
      <rect x="196" y="70" width="40" height="40" rx="8" stroke={ACCENT} />
      <text x="216" y="94" textAnchor="middle" fill={ACCENT} fontSize="9" fontFamily="monospace">LLM</text>
      <path d="M236 90 H262" stroke={STROKE} />
      <rect x="262" y="74" width="44" height="32" rx="6" stroke={STROKE} />
      <path d="M270 90 H298 M270 98 H292" stroke={STROKE} />
    </svg>
  );
}

function Reco() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 52} y="36" width="40" height="52" rx="6" stroke={i === 2 ? ACCENT : DIM} />
          <rect x={26 + i * 52} y="42" width="28" height="20" rx="3" fill={i === 2 ? ACCENT : DIM} opacity={i === 2 ? 0.9 : 0.5} />
          <path d={`M26 ${72} H${54}`} transform={`translate(${i * 52} 0)`} stroke={STROKE} />
        </g>
      ))}
      {/* uplift trend */}
      <path d="M24 150 L96 132 L168 120 L240 96 L296 70" stroke={ACCENT} strokeWidth="1.5" />
      <path d="M280 70 H296 V86" stroke={ACCENT} strokeWidth="1.5" />
      <text x="24" y="120" fill={ACCENT} fontSize="13" fontFamily="monospace">+30%</text>
    </svg>
  );
}

function Agents() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      {/* hub + agents + scanned sources */}
      <circle cx="160" cy="90" r="18" stroke={ACCENT} />
      <text x="160" y="93" textAnchor="middle" fill={ACCENT} fontSize="8" fontFamily="monospace">hub</text>
      {[
        [70, 44],
        [70, 136],
        [250, 44],
        [250, 136],
      ].map(([x, y], i) => (
        <g key={i}>
          <path d={`M160 90 L${x} ${y}`} stroke={DIM} />
          <circle cx={x} cy={y} r="12" stroke={STROKE} />
        </g>
      ))}
      {[40, 76, 112].map((y) => (
        <rect key={y} x="292" y={y} width="14" height="4" rx="2" fill={DIM} />
      ))}
      <circle cx="160" cy="90" r="30" stroke={DIM} strokeDasharray="3 5" />
    </svg>
  );
}

function Mcp() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full">
      {/* terminal window wiring tools via MCP connectors */}
      <rect x="20" y="30" width="200" height="120" rx="8" stroke={STROKE} />
      <path d="M20 50 H220" stroke={DIM} />
      <circle cx="34" cy="40" r="3" fill={ACCENT} />
      <circle cx="46" cy="40" r="3" fill={DIM} />
      <circle cx="58" cy="40" r="3" fill={DIM} />
      <path d="M36 70 H70 M80 70 H120 M36 86 H60 M70 86 H150 M36 102 H100" stroke={STROKE} />
      <text x="36" y="128" fill={ACCENT} fontSize="9" fontFamily="monospace">mcp://tools</text>
      {[52, 90, 128].map((y) => (
        <g key={y}>
          <path d={`M220 ${y} H262`} stroke={DIM} />
          <rect x="262" y={y - 10} width="40" height="20" rx="5" stroke={STROKE} />
        </g>
      ))}
    </svg>
  );
}

const VISUALS: Record<Kind, () => React.JSX.Element> = {
  rag: Rag,
  reco: Reco,
  agents: Agents,
  mcp: Mcp,
};

export function CaseVisual({ kind }: { kind: Kind }) {
  const V = VISUALS[kind];
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-hair bg-surface-2 p-4">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(251,65,30,0.12),transparent_55%)]"
      />
      <div className="relative w-full transition-transform duration-500 group-hover:scale-[1.03]">
        <V />
      </div>
    </div>
  );
}
