import { Metadata } from "next";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Cost Allocation / Showback | Architecture | Rick Imai",
  description:
    "Generic reference architecture for a cost allocation + showback platform: ingest spend and telemetry, map dimensions and ownership, allocate shared costs, publish reconciled datasets, and report with governance controls.",
};

const flow = [
  {
    title: "Spend + Usage Ingest",
    bullets: [
      "Billing exports + usage metering",
      "Normalize accounts, SKUs, tags, org mapping",
      "Completeness + freshness checks",
    ],
  },
  {
    title: "Dimensions + Ownership",
    bullets: [
      "Team / service catalog (owners)",
      "Cost centers + products + environments",
      "Tag rules + exceptions + fallbacks",
    ],
  },
  {
    title: "Allocation Engine",
    bullets: [
      "Direct mapping + shared pool allocation",
      "Drivers: TB, queries, requests, CPU-min",
      "Versioned methodology + rerunnable runs",
    ],
  },
  {
    title: "Showback Datasets",
    bullets: [
      "Curated tables by org / service / dataset",
      "Time-series rollups + drilldowns",
      "Reconciliation views (bill ↔ model)",
    ],
  },
  {
    title: "Reporting + Governance",
    bullets: [
      "Dashboards + scheduled reports",
      "Anomaly alerts + variance explanations",
      "Audit trail + controls",
    ],
  },
];

const components = [
  {
    title: "Billing + Usage Collector",
    body: "Ingests billing exports and workload usage signals, then standardizes them into a consistent cost and usage schema.",
    examples: "Examples: ETL jobs, serverless ingest, data pipelines",
  },
  {
    title: "Ownership + Dimension Catalog",
    body: "Defines ownership and reporting dimensions (team/product/dataset) with rules for tags, fallbacks, and exceptions.",
    examples: "Examples: service registry, CMDB, governance catalog",
  },
  {
    title: "Allocation Methodology",
    body: "Applies direct mapping and driver-based allocations for shared pools, producing reproducible, versioned outputs.",
    examples: "Examples: rules engine, SQL transforms, batch compute",
  },
  {
    title: "Reconciliation Layer",
    body: "Ties the model back to the bill and explains variance, making exceptions explicit and defensible.",
    examples: "Examples: bridge tables, controls checks, variance reports",
  },
  {
    title: "Showback Data Mart",
    body: "Publishes curated, query-friendly datasets for dashboards, ad-hoc analysis, and finance reviews.",
    examples: "Examples: warehouse tables, lakehouse views, semantic layer",
  },
  {
    title: "Reporting + Controls",
    body: "Delivers dashboards and governance: alerts, approvals, audit logs, and recurring review cadence.",
    examples: "Examples: BI dashboards, ticketing, metrics, alerting",
  },
];

const principles = [
  "Reconcile to the bill (always explain variance)",
  "Separate raw ingest vs modeled outputs (clean contracts)",
  "Versioned methodology (repeatable + auditable)",
  "Default rules + explicit exceptions (no hidden logic)",
  "Driver-based allocations for shared pools (fair + scalable)",
  "Automation by default (repeatable monthly cadence)",
];

const outcomes = [
  {
    title: "Decision-ready explainability",
    text: "Drill down from dollars → cost buckets → drivers → owners without manual investigations.",
  },
  {
    title: "Finance-grade reconciliation",
    text: "Modeled outputs tie back to the bill with explicit variance explanations and controls checks.",
  },
  {
    title: "Scalable allocation mechanics",
    text: "Shared costs are allocated with measurable drivers that scale with growth and org changes.",
  },
  {
    title: "Operational reliability",
    text: "Automated pipelines with retries, DLQs, and data quality checks reduce manual toil and surprises.",
  },
  {
    title: "Governance built in",
    text: "Audit trails and methodology versioning enable repeatable monthly cadence and stakeholder trust.",
  },
  {
    title: "Cloud-agnostic pattern",
    text: "The same architecture works across vendors as long as you have billing exports + usage telemetry.",
  },
];

function FlowCard({ title, bullets }: { title: string; bullets: string[] }) {
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

export default function CostAllocationShowbackArchitecturePage() {
  return (
    <>
      <section className="pt-24 pb-6">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              {
                label: "Cost Allocation / Showback",
                href: "/programs/cost-allocation-showback",
              },
              { label: "Architecture" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom text-center max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
            Architecture
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">
            Cost Allocation / Showback Platform
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A generic pattern to convert cloud bills into reconciled showback datasets: ingest spend
            and telemetry, map ownership and dimensions, allocate shared pools using measurable
            drivers, publish curated outputs, and report with governance controls.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/programs/cost-allocation-showback/model"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View Cost Model
            </Link>
          </div>
        </div>
      </section>

      {/* Diagram + Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="card p-6 lg:p-8">
            <div className="grid gap-6 md:grid-cols-5">
              {flow.map((block, idx) => (
                <div key={block.title} className="relative">
                  <FlowCard title={block.title} bullets={block.bullets} />
                  {idx < flow.length - 1 && (
                    <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-neutral-300 md:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-neutral-900">
                  <span className="flex items-center gap-2">
                    <span>Component details</span>
                    <span className="text-neutral-500">(+ principles)</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-neutral-500 transition-transform group-open:rotate-180" />
                </summary>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {components.map((c) => (
                    <div key={c.title} className="card p-6">
                      <h3 className="text-sm font-semibold text-neutral-900">{c.title}</h3>
                      <p className="mt-3 text-sm text-neutral-700">{c.body}</p>
                      <div className="mt-4 border-t border-neutral-200 pt-3 text-xs text-neutral-500">
                        {c.examples}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 card p-6">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Key architectural principles
                  </h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {principles.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <h2 className="heading-2 text-center text-neutral-900">Outcomes</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="card p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/programs/cost-allocation-showback/model"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
              >
                View Cost Model <span className="ml-2">→</span>
              </Link>
            </div>

            <p className="mt-10 text-center text-xs text-neutral-500">
              Note: This page is intentionally generic (no vendor or internal system names). Swap in
              your platform equivalents as needed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
