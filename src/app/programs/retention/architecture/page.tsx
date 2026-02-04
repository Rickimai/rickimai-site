import { Metadata } from "next";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Data Retention Service | Rick Imai",
  description:
    "Generic reference architecture for an automated data retention service: detection, event bus, workers, and storage/metadata updates.",
};

const flow = [
  {
    title: "Detection",
    bullets: [
      "Scheduler (hourly / daily / monthly)",
      "Policy evaluation + eligibility checks",
      "Catalog scan + partition selection",
    ],
  },
  {
    title: "Queue / Event Bus",
    bullets: ["Event publishing", "Routing + fanout", "Backpressure, retries, DLQ"],
  },
  {
    title: "Workers",
    bullets: ["Partition cleanup", "Data deletion (parallel + rate limited)", "Idempotent execution"],
  },
  {
    title: "Storage + Metadata",
    bullets: ["Metadata catalog updates", "Object storage deletion", "Audit trail + reporting"],
  },
];

const components = [
  {
    title: "Event Dispatcher",
    body: "Evaluates retention rules, selects eligible partitions/files, and publishes cleanup events.",
    examples: "Examples: scheduled job, serverless function, microservice",
  },
  {
    title: "Queue / Event Bus",
    body: "Decouples detection from execution and enables scalable, reliable processing with retries.",
    examples: "Examples: Kafka, RabbitMQ, managed queue, event bus",
  },
  {
    title: "Retention Workers",
    body: "Consume events and perform cleanup in parallel across metadata and storage layers.",
    examples: "Examples: containers, serverless workers, batch jobs",
  },
  {
    title: "Metadata Catalog",
    body: "Stores schemas and partition state. Workers update catalog state during cleanup.",
    examples: "Examples: metastore, data catalog, governance catalog",
  },
  {
    title: "Object Storage",
    body: "Data files reside here. Workers delete files based on retention policy decisions.",
    examples: "Examples: object storage, HDFS-compatible storage",
  },
  {
    title: "Audit + Controls",
    body: "Captures what was deleted, when, and why—supporting compliance and investigations.",
    examples: "Examples: immutable logs, metrics, dashboards, ticketing",
  },
];

const principles = [
  "Event-driven and loosely coupled for scale",
  "Idempotent operations for safe retries",
  "Audit trail for governance and compliance",
  "Parallel execution with guardrails (rate limits, throttling, backpressure)",
  "Separation of detection vs execution",
  "Cloud-agnostic design (portable)",
];

const outcomes = [
  {
    title: "Automated enforcement",
    text: "Retention policies execute automatically with no manual cleanup or operational overhead.",
  },
  {
    title: "Lower storage costs",
    text: "Reduces total storage footprint and cloud spend by continuously removing expired data.",
  },
  {
    title: "Compliance ready",
    text: "Creates a full audit trail of what was deleted, when, and why for governance needs.",
  },
  {
    title: "Horizontally scalable",
    text: "Event-driven workers scale out to handle growth without re-architecting the system.",
  },
  {
    title: "Reliable execution",
    text: "Idempotent operations allow safe retries and fault tolerance during failures.",
  },
  {
    title: "Built-in guardrails",
    text: "Rate limits, batching, and backpressure protect storage systems and prevent runaway deletes or production impact.",
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

export default function RetentionArchitecturePage() {
  return (
    <>
      <section className="pt-24 pb-6">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Retention", href: "/programs/retention" },
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

          <h1 className="heading-1 mt-6 text-neutral-900">Data Retention Service</h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A generic, event-driven pattern to enforce retention policies: detect expired data,
            publish cleanup events, run idempotent workers, then update metadata and storage with
            a complete audit trail.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/programs/retention/model"
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
            <div className="grid gap-6 md:grid-cols-4">
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
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" style={{ color: 'var(--accent)' }} />
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
