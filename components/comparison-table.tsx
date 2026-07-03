import { comparison } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";

export function ComparisonTable() {
  const [you, agency, hire] = comparison.columns;
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <h2 className="font-display max-w-3xl text-3xl md:text-5xl">
        <WordReveal text="Skip the hiring queue. Ship AI now." />
      </h2>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-sm text-muted">
              <th className="py-4 pr-4 font-normal" />
              <th className="rounded-t-xl bg-surface px-4 py-4 font-medium text-text">{you}</th>
              <th className="px-4 py-4 font-normal">{agency}</th>
              <th className="px-4 py-4 font-normal">{hire}</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, i) => (
              <tr key={row.dimension} className="border-t border-hair align-top">
                <td className="py-4 pr-4 text-muted">{row.dimension}</td>
                <td className={`bg-surface px-4 py-4 text-text ${i === comparison.rows.length - 1 ? "rounded-b-xl" : ""}`}>{row.values[0]}</td>
                <td className="px-4 py-4 text-muted">{row.values[1]}</td>
                <td className="px-4 py-4 text-muted">{row.values[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
