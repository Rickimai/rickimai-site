import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Gauge,
  Activity,
  ShieldCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "IOC Integration Cost Model | Rick Imai",
  description:
    "Sizing and cost model for IOC integration: volume drivers, enrichment cost, publishing cadence, and operational overhead assumptions.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-neutral-900">{value}</div>
      {hint && <div className="mt-2 text-sm text-neutral-600">{hint}</div>}
    </div>
  );
}

function LinkCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="card group block p-6 transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{text}</p>
        </div>
        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-700" />
      </div>
    </Link>
  );
}

function SectionCard({
  icon: Icon,
  title,
  text,
  children,
}: {
  icon: any;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="card p-8">
      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
          <Icon className="h-4 w-4 text-neutral-900" />
        </div>
        <div>
          <h2 className="heading-2 text-neutral-900">{title}</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">{text}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

const drivers = [
  {
    title: "Indicators ingested (per day)",
    text: "Total raw IOC rows ingested across all sources before dedupe.",
  },
  {
    title: "Dedupe + normalization rate",
    text: "How many raw rows collapse into unique canonical indicators.",
  },
  {
    title: "Enrichment calls (per indicator)",
    text: "Reputation/context lookups (and any paid API costs).",
  },
  {
    title: "Publish cadence",
    text: "How often you publish/fan-out to consumers (streaming vs batch).",
  },
  {
    title: "Consumers",
    text: "Number of downstream systems and adapter complexity per system.",
  },
];

const costAreas = [
  {
    title: "Ingestion + validation",
    bullets: [
      "Parsing and schema validation",
      "Backpressure and retry handling",
      "Quarantine path for malformed inputs",
    ],
  },
  {
    title: "Normalization + storage",
    bullets: [
      "Canonical record store",
      "Provenance + audit history",
      "Indexes for lookup and dedupe",
    ],
  },
  {
    title: "Enrichment",
    bullets: [
      "Lookup compute (cache-friendly)",
      "External API or reputation costs (if any)",
      "Batch re-enrichment policy (optional)",
    ],
  },
  {
    title: "Publishing + fan-out",
    bullets: [
      "Batch exports or streaming topics",
      "Per-consumer adapter mapping",
      "Delivery tracking and replays",
    ],
  },
  {
    title: "Operations",
    bullets: [
      "Freshness + expiry monitoring",
      "Error budgets and alerting",
      "Runbooks + rollback",
    ],
  },
];

const exampleAssumptions = [
  { k: "Ingested IOCs / day", v: "N (replace)" },
  { k: "Unique after dedupe", v: "N × (1 - dedupe%)" },
  { k: "Avg enrichment calls / IOC", v: "E" },
  { k: "Consumers", v: "C" },
  { k: "Publish cadence", v: "Batch hourly / near-real-time" },
  { k: "Retention for audit history", v: "90–365 days (policy)" },
];

export default function IOCIntegrationCostModelPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "IOC Integration", href: "/programs/ioc-integration" },
              { label: "Cost Model" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-14 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Cost model</Pill>
            <Pill>Sizing inputs</Pill>
            <Pill>Unit economics</Pill>
            <Pill>Ops overhead</Pill>
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">
            IOC Integration Cost Model
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A practical sizing framework to estimate cost drivers for IOC ingest,
            enrichment, and publishing. The model focuses on what moves cost:
            volume, enrichment policy, fan-out, and operational SLOs.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs/ioc-integration"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Back to program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/programs/ioc-integration/architecture"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View architecture{" "}
              <ArrowRight className="ml-2 h-4 w-4 text-neutral-500" />
            </Link>
          </div>
        </div>
      </section>
      {/* What is an IOC */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
            <SectionCard
            icon={ShieldCheck}
            title="What is an Indicator of Compromise (IOC)?"
            text="An Indicator of Compromise (IOC) is a data point that signals potential malicious activity."
            >
            <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                Common examples include IP addresses, domains, URLs, file hashes, or identities
                associated with known threats. IOCs help security systems and analysts detect,
                investigate, and respond to attacks.
            </p>

            <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                On their own, IOCs are only effective if they are fresh, trustworthy, and
                consistently applied. Stale or poorly governed indicators can create noise,
                false positives, or missed detections.
            </p>

            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-sm font-semibold text-neutral-900">
                Common IOC types
                </h3>
                <ul className="mt-3 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
                <li>• IP addresses and CIDR ranges</li>
                <li>• Domains and URLs</li>
                <li>• File hashes (e.g., SHA-256)</li>
                <li>• Certificates or sender identities</li>
                </ul>
            </div>
            </SectionCard>
        </div>
        </section>

      {/* Summary stats */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard
              label="Primary cost driver"
              value="Enrichment policy"
              hint="Most variability comes from enrichment calls and re-enrichment cadence."
            />
            <StatCard
              label="Second-order driver"
              value="Fan-out"
              hint="More consumers increases adapter cost + delivery tracking overhead."
            />
            <StatCard
              label="Operational driver"
              value="Freshness SLO"
              hint="Tighter SLOs drive more monitoring, retries, and higher availability design."
            />
          </div>
        </div>
      </section>

      {/* Cost model framing */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="card p-10 bg-gradient-to-b from-white to-neutral-50">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 inline-flex rounded-xl border border-neutral-200 bg-white p-3">
                <Calculator className="h-5 w-5 text-neutral-900" />
              </div>
              <h2 className="heading-2 text-neutral-900">Model overview</h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Think of IOC integration as a pipeline with four recurring
                “meters”: ingest, normalize/store, enrich, and publish. Each
                meter scales differently depending on your policy choices.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-5">
              {[
                { t: "Ingest", d: "rows/day, schema validation" },
                { t: "Normalize", d: "dedupe rate, canonical writes" },
                { t: "Enrich", d: "calls/IOC, cache hit rate" },
                { t: "Publish", d: "cadence, consumers, replay" },
                { t: "Operate", d: "SLOs, alerts, oncall" },
              ].map((s) => (
                <div key={s.t} className="rounded-xl border border-neutral-200 bg-white p-5">
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {s.t}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-neutral-900">
                    {s.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key drivers */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-neutral-900">Key drivers</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              If you only measure a few inputs, measure these. They explain most
              of the cost.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {drivers.map((d) => (
              <div key={d.title} className="card p-6">
                <h3 className="text-sm font-semibold text-neutral-900">{d.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost areas */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-neutral-900">Cost areas</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              What you pay for depends on platform choices, but these buckets show
              where effort and spend typically land.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {costAreas.map((c) => (
              <div key={c.title} className="card p-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
                    <ShieldCheck className="h-4 w-4 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{c.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-neutral-300 bg-neutral-900 p-6 text-center text-neutral-100">
            <span className="font-medium">Rule of thumb:</span> If enrichment is
            expensive, prioritize caching + dedupe early. If fan-out is expensive,
            standardize adapters and reduce publish frequency where safe.
          </div>
        </div>
      </section>

      {/* Assumptions table */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="card p-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 inline-flex rounded-xl border border-neutral-200 bg-white p-3">
                <Gauge className="h-5 w-5 text-neutral-900" />
              </div>
              <h2 className="heading-2 text-neutral-900">Example assumptions</h2>
              <p className="mt-5 text-neutral-600 leading-relaxed">
                Replace the placeholders with your environment’s data. Keep the
                assumptions explicit so reviews focus on inputs, not guesses.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-700">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Assumption</th>
                    <th className="px-5 py-3 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {exampleAssumptions.map((row) => (
                    <tr key={row.k} className="border-t border-neutral-200">
                      <td className="px-5 py-3 text-neutral-900">{row.k}</td>
                      <td className="px-5 py-3 text-neutral-600">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-200 bg-white p-2">
                  <Activity className="h-4 w-4 text-neutral-900" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    What to validate first
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    Validate dedupe rate and enrichment policy early. Those two
                    inputs swing the model the most and are easy to misunderstand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="card p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <LinkCard
                title="IOC Integration"
                text="Program overview with problem framing, principles, and outcomes."
                href="/programs/ioc-integration"
              />
              <LinkCard
                title="Architecture"
                text="Pipeline flow with controls for freshness, policy, and auditability."
                href="/programs/ioc-integration/architecture"
              />
            </div>

            <div className="mt-10 text-center text-xs text-neutral-500">
              Note: This model is intentionally generic (no internal pricing or vendor details).
              Plug in your platform equivalents and cost rates.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
