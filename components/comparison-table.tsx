import { comparison } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";

export function ComparisonTable() {
  const [you, agency, hire] = comparison.columns;
  const rows = comparison.rows;

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-36">
      <p className="mb-5 flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        THE COMBINATION
      </p>
      <h2 className="font-display max-w-3xl text-3xl sm:text-4xl md:text-[3.4rem]">
        <WordReveal text="Most engineers pick a lane. I work across all three." />
      </h2>

      <div className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
          <thead>
            <tr className="align-bottom">
              <th className="w-[28%] py-5 pr-4 font-normal" />
              <th className="relative rounded-t-2xl border border-b-0 border-accent/30 bg-accent/[0.07] px-5 py-5 align-bottom">
                <span className="absolute right-4 top-4 rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-black">
                  Me
                </span>
                <span className="text-base font-medium text-text">{you}</span>
              </th>
              <th className="px-5 py-5 text-base font-normal text-muted">{agency}</th>
              <th className="px-5 py-5 text-base font-normal text-muted">{hire}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const last = i === rows.length - 1;
              return (
                <tr key={row.dimension} className="group">
                  <td className="border-t border-hair py-5 pr-4 text-sm text-muted">
                    {row.dimension}
                  </td>
                  <td
                    className={`border-x border-accent/30 bg-accent/[0.07] px-5 py-5 text-text ${
                      last ? "rounded-b-2xl border-b" : ""
                    }`}
                  >
                    {row.values[0]}
                  </td>
                  <td className="border-t border-hair px-5 py-5 text-muted">{row.values[1]}</td>
                  <td className="border-t border-hair px-5 py-5 text-muted">{row.values[2]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
