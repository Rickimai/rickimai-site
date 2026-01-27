import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  ChevronDown,
  Sigma,
} from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Showback Cost Model | Rick Imai",
  description:
    "Generic showback cost model: define unit costs, derive baselines, and translate telemetry volumes into spend forecasts with scenario overlays.",
};

type UnitMetric = {
  name: string;
  definition: string;
  notes: string;
};

const unitMetrics: UnitMetric[] = [
  {
    name: "Cost per TB ingested",
    definition: "Ingestion spend ÷ TB ingested",
    notes: "Use for ingestion efficiency + growth-to-spend translation.",
  },
  {
    name: "Cost per TB stored",
    definition: "Storage spend ÷ TB-months (avg retained TB in month)",
    notes: "Use for retention/tiering impacts and storage footprint control.",
  },
  {
    name: "Cost per query minute",
    definition: "Query spend ÷ total query runtime minutes",
    notes: "Use for engine efficiency and workload mix changes.",
  },
  {
    name: "Cost per GB scanned",
    definition: "Scan spend ÷ GB scanned",
    notes: "Useful when scan-based pricing dominates query costs.",
  },
];

const outcomes = [
  {
    title: "Translate growth → spend",
    text: "If you can forecast volumes (telemetry), you can forecast spend using stable unit costs.",
  },
  {
    title: "Separate growth from efficiency",
    text: "Totals can rise with adoption. Unit costs reveal whether the platform is getting better or worse.",
  },
  {
    title: "Prioritize the right optimizations",
    text: "Changes should target the real driver (scan, runtime, retention footprint), not guesswork.",
  },
  {
    title: "Make conversations actionable",
    text: "Allocation dimensions + unit costs support credible customer discussions and accountability.",
  },
];

const assumptions = [
  "Unit costs are directional. Use trend direction and stability, not one-month precision.",
  "Re-baseline after step-changes (pricing model shifts, engine migration, major architecture changes).",
  "Keep cost buckets explainable and consistently mapped to allocation dimensions.",
  "Use a rolling window (e.g., last 2–3 months) to smooth noise while staying current.",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
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

export default function ShowbackCostModelPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-24 pb-6">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              {
                label: "Cost Allocation / Showback",
                href: "/programs/cost-allocation-showback",
              },
              { label: "Model" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-14 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom text-center max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Model</Pill>
            <Pill>Unit economics</Pill>
            <Pill>Forecasting</Pill>
            <Pill>Explainable math</Pill>
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">Showback Cost Model</h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            Generic methodology to define unit costs and translate telemetry
            volumes into spend forecasts—with scenario overlays to evaluate
            optimizations and governance decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs/cost-allocation-showback"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Back to Program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/programs/cost-allocation-showback/architecture"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View Architecture{" "}
              <ArrowRight className="ml-2 h-4 w-4 text-neutral-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-14">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <h2 className="heading-2 text-neutral-900">What this model answers</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {outcomes.map((o) => (
                  <div key={o.title} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                    <div>
                      <div className="font-medium text-neutral-900">{o.title}</div>
                      <div className="mt-0.5 text-neutral-600">{o.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h2 className="heading-2 text-neutral-900">
                Telemetry + cost attribution
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Telemetry provides the denominators (TB ingested, query minutes,
                GB scanned). Cost attribution provides the numerators (spend
                mapped to buckets and allocation dimensions).
              </p>
              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="flex items-start gap-2 text-sm text-neutral-700">
                  <Sigma className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                  <p>
                    Without both, you can’t link behavior to spend—so you can’t
                    credibly talk to customers, and you risk building the wrong
                    optimizations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Method */}
          <div className="mt-12">
            <h2 className="heading-2 text-neutral-900 text-center">Method</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card
                title="Step 1 — Define cost buckets and drivers"
                bullets={[
                  "Choose a small set of explainable buckets: ingestion, storage, query, shared overhead.",
                  "Choose measurable telemetry drivers: TB ingested, TB-months, query minutes, GB scanned.",
                  "Confirm bucket-to-driver mapping is stable and reviewable.",
                ]}
              />
              <Card
                title="Step 2 — Compute baseline unit costs"
                bullets={[
                  "Use recent history in a rolling window (e.g., last 2–3 months).",
                  "UnitCost = SpendBucket ÷ DriverVolume.",
                  "Treat early variance as expected; trend stability matters more than one month.",
                ]}
              />
              <Card
                title="Step 3 — Forecast volumes from telemetry"
                bullets={[
                  "Forecast driver volumes using trend + known step-changes (new tenants, new regions).",
                  "Forecast each driver separately (ingestion vs query behave differently).",
                ]}
              />
              <Card
                title="Step 4 — Forecast spend (do-nothing scenario)"
                bullets={[
                  "SpendForecast = ForecastVolume × UnitCost (per bucket).",
                  "Add shared overhead separately if it does not scale linearly with drivers.",
                ]}
              />
              <Card
                title="Step 5 — Apply scenario overlays"
                bullets={[
                  "Retention reduces TB-months (storage driver).",
                  "Indexing and query tuning reduce GB scanned and/or query minutes.",
                  "Compaction can improve both storage footprint and query efficiency.",
                ]}
              />
              <Card
                title="Step 6 — Publish showback views"
                bullets={[
                  "Allocate spend across dimensions (team/product/dataset) using consistent mappings.",
                  "Ensure drill-down paths exist from owner → driver → raw usage → cost bucket.",
                ]}
              />
            </div>
          </div>

          {/* Unit metrics table */}
          <div className="mt-14">
            <h2 className="heading-2 text-neutral-900 text-center">
              Unit cost definitions
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="grid grid-cols-12 border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-xs font-semibold text-neutral-700">
                <div className="col-span-4">Metric</div>
                <div className="col-span-5">Definition</div>
                <div className="col-span-3">Notes</div>
              </div>

              {unitMetrics.map((m, idx) => (
                <div
                  key={m.name}
                  className={`grid grid-cols-12 gap-0 px-4 py-4 text-sm ${
                    idx === 0 ? "" : "border-t border-neutral-200"
                  }`}
                >
                  <div className="col-span-4 font-medium text-neutral-900">
                    {m.name}
                  </div>
                  <div className="col-span-5 text-neutral-700">
                    {m.definition}
                  </div>
                  <div className="col-span-3 text-neutral-600">{m.notes}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Assumptions */}
          <div className="mt-14">
            <div className="card p-8">
              <h2 className="heading-2 text-neutral-900">Assumptions and constraints</h2>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                {assumptions.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulas */}
          <div className="mt-14">
            <details className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-neutral-900">
                <span>Formulas (copy/paste)</span>
                <ChevronDown className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Formula
                  title="Baseline unit costs"
                  lines={[
                    "For each bucket b and driver d:",
                    "  UnitCost[b] = Spend[b] / Volume[d]",
                    "",
                    "Examples:",
                    "  UnitIngest = IngestSpend / TBIgnested",
                    "  UnitStore  = StorageSpend / TBMonths",
                    "  UnitQuery  = QuerySpend / QueryMinutes",
                    "  UnitScan   = ScanSpend / GBScanned",
                  ]}
                />
                <Formula
                  title="Do-nothing spend forecast"
                  lines={[
                    "For forecast month t:",
                    "  SpendForecast[b,t] = VolumeForecast[d,t] * UnitCost[b]",
                    "",
                    "TotalForecast[t] = sum_b( SpendForecast[b,t] ) + SharedOverhead[t]",
                  ]}
                />
                <Formula
                  title="Scenario overlay (illustrative)"
                  lines={[
                    "Retention:",
                    "  TBMonthsScenario[t] = TBMonthsBaseline[t] * (1 - retention_reduction_pct)",
                    "",
                    "Indexing / tuning:",
                    "  GBScannedScenario[t] = GBScannedBaseline[t] * (1 - scan_reduction_pct)",
                    "  QueryMinutesScenario[t] = QueryMinutesBaseline[t] * (1 - runtime_reduction_pct)",
                  ]}
                />
                <Formula
                  title="Scenario total"
                  lines={[
                    "Replace baseline volumes with scenario volumes:",
                    "  TotalScenario[t] = sum_b( VolumeScenario[d,t] * UnitCost[b] ) + SharedOverhead[t]",
                    "",
                    "Savings[t] = TotalBaseline[t] - TotalScenario[t]",
                  ]}
                />
              </div>
            </details>
          </div>

          {/* Footer nav */}
          <div className="mt-14">
            <div className="card p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/programs/cost-allocation-showback"
                  className="card group block p-6 transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        Program overview
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                        Why showback matters, the platform approach, governance, and outcomes.
                      </p>
                    </div>
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-700" />
                  </div>
                </Link>

                <Link
                  href="/programs/cost-allocation-showback/architecture"
                  className="card group block p-6 transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        Architecture
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                        Ingest → allocate → publish flow and explainability paths.
                      </p>
                    </div>
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-700" />
                  </div>
                </Link>
              </div>

              <div className="mt-10 text-center text-xs text-neutral-500">
                Note: This page is intentionally generic (no vendor or internal
                system names). Swap in your platform equivalents as needed.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
