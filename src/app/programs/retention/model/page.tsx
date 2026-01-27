import { Metadata } from "next";
import { CheckCircle2, Calculator, ChevronDown } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Retention Cost Model | Rick Imai",
  description:
    "Generic retention cost model methodology with formulas + worked example. Forecast volumes, estimate unit cost, and compare retention scenarios.",
};

type MonthPoint = {
  month: string;
  totalGb: number;      // total storage volume (all datasets)
  chronicleGb: number;  // target dataset volume (example)
  imrCostUsd: number;   // storage cost for the month (or broader IMR bucket if you want)
};

const inputs: MonthPoint[] = [
  // Replace with your real numbers (these are placeholders)
  { month: "2025-01", totalGb: 831_640_814.1, chronicleGb: 7_472_975, imrCostUsd: 1_514_802 },
  { month: "2025-02", totalGb: 847_841_295.0, chronicleGb: 6_950_684, imrCostUsd: 1_560_000 },
  { month: "2025-03", totalGb: 867_477_568.0, chronicleGb: 8_101_004, imrCostUsd: 1_590_000 },
  { month: "2025-04", totalGb: 885_610_182.0, chronicleGb: 8_181_687, imrCostUsd: 1_620_000 },
];

const assumptions = {
  baselineStartMonth: "2025-01",
  calibrationMonths: ["2025-01", "2025-02", "2025-03", "2025-04"],
  horizon: { start: "2025-05", end: "2026-12" },
  // retention options expressed as months of rolling window
  retentionOptionsMonths: [3, 6, 12],
  // IMPORTANT: your earlier method used “avg MoM delta / Jan total” as a growth rate.
  // This is slightly different than averaging MoM % changes. Keep if you like it.
};

const outcomes = [
  {
    title: "Forecast baseline growth",
    text: "Projects total volumes forward using a short, post-optimization calibration window to avoid mixing eras.",
  },
  {
    title: "Isolate target dataset",
    text: "Models the retained dataset separately so retention can be applied without double-counting total growth.",
  },
  {
    title: "Estimate unit cost",
    text: "Derives an average $/GB from the calibration window and applies it consistently across scenarios.",
  },
  {
    title: "Compare retention scenarios",
    text: "Computes adjusted total volumes and costs under rolling retention windows (e.g., 3/6/12 months).",
  },
  {
    title: "Explain the ‘so what’",
    text: "Makes it clear why some retention choices produce small deltas when the target dataset becomes a small % of total.",
  },
];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium text-neutral-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-neutral-900">{value}</div>
    </div>
  );
}

function Formula({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Calculator className="h-4 w-4 text-neutral-900" />
        <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      </div>
      <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-800">
{lines.join("\n")}
      </pre>
    </div>
  );
}

function Card({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="card p-6">
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-neutral-400">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RetentionCostModelPage() {
  return (
    <>
      <section className="pt-24 pb-6">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Retention", href: "/programs/retention" },
              { label: "Model" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pt-28 pb-14 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom text-center max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
            Model
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">Retention Cost Model</h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            Generic methodology to forecast storage volume and cost, then evaluate
            rolling retention options for a large dataset without double-counting growth.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/programs/retention/architecture"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              View Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Summary stats (fill in after you compute, or leave as placeholders) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-3">
            <StatPill label="Calibration window" value="4 months (post-optimization)" />
            <StatPill label="Total MoM growth (illustrative)" value="~2.2% (avg Δ / baseline)" />
            <StatPill label="Target dataset MoM growth (illustrative)" value="~3.3% (avg Δ / baseline)" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-900">
                What this model answers
              </h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {outcomes.map((o) => (
                  <div key={o.title} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                    <div>
                      <div className="font-medium text-neutral-900">{o.title}</div>
                      <div className="mt-0.5 text-neutral-600">{o.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-neutral-900">Guardrails</h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                In production, retention execution should include throttling and safety controls
                to avoid overwhelming the storage layer and downstream systems.
              </p>

              <div className="mt-4 grid gap-3">
                {[
                  "Backpressure + rate limits per dataset/partition",
                  "Concurrency caps for deletes / metadata updates",
                  "Dead-letter queue for poison messages",
                  "Idempotent execution (safe retries)",
                  "Audit logs + metrics for completeness and drift",
                ].map((g) => (
                  <div key={g} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Method steps */}
          <div className="mt-12">
            <h2 className="heading-2 text-neutral-900 text-center">Method</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card
                title="Step 1 — Estimate baseline total growth (no retention)"
                bullets={[
                  "Use a short, recent calibration window (post-optimization) to avoid mixing eras.",
                  "Compute average month-over-month (MoM) delta in total volume.",
                  "Convert that average delta to a MoM growth rate relative to the baseline month.",
                ]}
              />
              <Card
                title="Step 2 — Forecast future total volumes"
                bullets={[
                  "Apply the baseline MoM growth rate forward to forecast monthly total volumes.",
                  "This produces the baseline projection (no retention applied).",
                ]}
              />
              <Card
                title="Step 3 — Model the target dataset separately"
                bullets={[
                  "Compute average MoM delta and MoM growth rate for the target dataset (e.g., Chronicle).",
                  "Forecast both (a) target dataset monthly increments and (b) cumulative target dataset total volume.",
                  "This isolates the dataset so retention can be applied cleanly.",
                ]}
              />
              <Card
                title="Step 4 — Estimate unit cost ($/GB) and baseline cost"
                bullets={[
                  "Derive a per-GB unit cost from the same calibration window.",
                  "Use the average unit cost and multiply by forecasted total volumes to estimate baseline monthly cost.",
                ]}
              />
              <Card
                title="Step 5 — Apply rolling retention to the target dataset"
                bullets={[
                  "For a retention window (e.g., 3/6/12 months), sum only the last N months of target dataset incremental volumes.",
                  "This yields target dataset ‘with retention’ volume per month.",
                ]}
              />
              <Card
                title="Step 6 — Compute adjusted totals and costs"
                bullets={[
                  "Adjusted Total Volume = Total (baseline) − Target Total (baseline) + Target (with retention).",
                  "Adjusted Cost = Adjusted Total Volume × Avg Unit Cost.",
                  "Compare baseline vs scenarios to quantify savings and explain sensitivity.",
                ]}
              />
            </div>
          </div>

          {/* Formulas + copy/paste section */}
          <div className="mt-14">
            <details className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-neutral-900">
                <span>Formulas (copy/paste)</span>
                <ChevronDown className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Formula
                  title="Avg MoM delta (total volume)"
                  lines={[
                    "Inputs: TotalVol[m] for each month m in calibration window",
                    "",
                    "ΔTotal[m] = TotalVol[m] - TotalVol[m-1]",
                    "AvgΔTotal = average( ΔTotal[m] ) over calibration months excluding baseline month",
                  ]}
                />
                <Formula
                  title="MoM growth rate (total volume)"
                  lines={[
                    "Baseline month: b (e.g., first month in window)",
                    "",
                    "MoMGrowthTotal = AvgΔTotal / TotalVol[b]",
                  ]}
                />
                <Formula
                  title="Forecast total volume (baseline, no retention)"
                  lines={[
                    "For forecast month t (t = b+1, b+2, ...):",
                    "",
                    "TotalVolForecast[t] = TotalVolForecast[t-1] * (1 + MoMGrowthTotal)",
                  ]}
                />
                <Formula
                  title="Avg unit cost ($/GB)"
                  lines={[
                    "UnitCost[m] = Cost[m] / TotalVol[m]",
                    "AvgUnitCost = average( UnitCost[m] ) over calibration months",
                  ]}
                />
                <Formula
                  title="Baseline monthly cost (no retention)"
                  lines={[
                    "CostBaseline[t] = TotalVolForecast[t] * AvgUnitCost",
                  ]}
                />
                <Formula
                  title="Target dataset rolling retention volume"
                  lines={[
                    "Retention window: N months",
                    "TargetInc[t] = forecasted monthly incremental volume for target dataset",
                    "",
                    "TargetWithRetention[t] = sum( TargetInc[t - k] ) for k = 0..(N-1)",
                  ]}
                />
                <Formula
                  title="Adjusted total volume (retention scenario)"
                  lines={[
                    "TargetTotalBaseline[t] = forecasted cumulative target dataset volume (no retention)",
                    "",
                    "AdjustedTotal[t] = TotalVolForecast[t] - TargetTotalBaseline[t] + TargetWithRetention[t]",
                  ]}
                />
                <Formula
                  title="Adjusted cost (retention scenario)"
                  lines={[
                    "CostScenario[t] = AdjustedTotal[t] * AvgUnitCost",
                  ]}
                />
              </div>
            </details>
          </div>

          {/* Appendix */}
          <div className="mt-14">
            <details className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-neutral-900">
                <span>Appendix A — Calibration inputs (edit these)</span>
                <ChevronDown className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border border-neutral-200 text-sm">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="border-b border-neutral-200 px-4 py-2 text-left font-semibold text-neutral-900">
                        Month
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-2 text-right font-semibold text-neutral-900">
                        Total Volume (GB)
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-2 text-right font-semibold text-neutral-900">
                        Target Dataset (GB)
                      </th>
                      <th className="border-b border-neutral-200 px-4 py-2 text-right font-semibold text-neutral-900">
                        Cost (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inputs.map((r) => (
                      <tr key={r.month} className="odd:bg-white even:bg-neutral-50">
                        <td className="border-b border-neutral-200 px-4 py-2 text-neutral-900">
                          {r.month}
                        </td>
                        <td className="border-b border-neutral-200 px-4 py-2 text-right text-neutral-700">
                          {r.totalGb.toLocaleString()}
                        </td>
                        <td className="border-b border-neutral-200 px-4 py-2 text-right text-neutral-700">
                          {r.chronicleGb.toLocaleString()}
                        </td>
                        <td className="border-b border-neutral-200 px-4 py-2 text-right text-neutral-700">
                          {r.imrCostUsd.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="mt-4 text-xs text-neutral-500">
                  Tip: keep this appendix generic by labeling the target dataset as “Target Dataset”
                  if you don’t want to expose internal dataset names.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
