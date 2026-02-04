import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  GitBranch,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "IOC Integration Program | Rick Imai",
  description:
    "Program overview for an Indicator of Compromise (IOC) integration initiative, covering ingestion, normalization, enrichment, and downstream security consumption.",
};

const outcomes = [
  {
    title: "Centralized IOC ingestion",
    text: "Ingests IOCs from multiple internal and external sources into a single normalized pipeline.",
    icon: ShieldCheck,
  },
  {
    title: "Consistent enrichment & scoring",
    text: "Applies uniform enrichment, confidence scoring, and lifecycle management across all IOC types.",
    icon: Activity,
  },
  {
    title: "Downstream system integration",
    text: "Distributes validated IOCs to detection, response, and investigation systems with clear contracts.",
    icon: GitBranch,
  },
  {
    title: "Operational resilience",
    text: "Built-in validation, deduplication, and failure isolation reduce analyst noise and breakage.",
    icon: AlertTriangle,
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "IOC Integration" },
        ]}
      />

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          IOC Integration
        </h1>
        <p className="mt-3 max-w-3xl text-neutral-600">
          A security platform program that standardizes how Indicators of
          Compromise (IOCs) are ingested, enriched, governed, and distributed
          across detection and response systems.
        </p>
      </header>

      {/* Why this matters */}
      <section className="mb-12">
        <h2 className="text-xl font-medium">Why this program exists</h2>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Security teams often ingest IOCs inconsistently—via ad hoc feeds,
          manual uploads, or tool-specific pipelines. This leads to duplicated
          logic, uneven coverage, and operational risk. This program establishes
          a single, governed IOC integration layer that downstream systems can
          rely on.
        </p>
      </section>

      {/* Outcomes */}
      <section className="mb-14">
        <h2 className="mb-6 text-xl font-medium">Key outcomes</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {outcomes.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="rounded-lg border border-neutral-200 bg-white p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="text-sm text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep dives */}

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Program deep dives</h2>
          <div className="max-w-3xl">
            <Link
              href="/programs/ioc-integration/architecture"
              className="group block cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 transition
                        hover:border-neutral-300 hover:bg-neutral-50
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">
                    Architecture
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Ingestion flows, enrichment stages, and downstream integrations.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" style={{ color: 'var(--accent)' }} />
              </div>
            </Link>
          </div>
          {/*
          Cost model intentionally disabled.
          Restore when the IOC cost model is interview-ready.

          <Link
            href="/programs/ioc-integration/model"
            className="group flex items-center justify-between rounded-lg border p-4 hover:bg-neutral-50"
          >
            <div>
              <h3 className="font-medium">Cost Model</h3>
              <p className="text-sm text-neutral-600">
                Unit economics and forecasting assumptions for IOC processing.
              </p>
            </div>
            <ArrowRight className="h-4 w-4" style={{ color: 'var(--accent)' }} />
          </Link>
          */}
        </section>
    </div>
  );
}
