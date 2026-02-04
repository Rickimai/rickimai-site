import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Activity,
  Clock,
  ShieldCheck,
  GitBranch,
  AlertTriangle,
  Workflow,
} from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "IOC Integration Architecture | Rick Imai",
  description:
    "Reference architecture for IOC ingestion, normalization, enrichment, and publishing with freshness controls, recurring queries, and known platform constraints.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
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
          <Icon className="h-4 w-4" style={{ color: 'var(--accent)' }} />
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

export default function IOCIntegrationArchitecturePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "IOC Integration", href: "/programs/ioc-integration" },
              { label: "Architecture" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-14 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Reference architecture</Pill>
            <Pill>Freshness + governance</Pill>
            <Pill>Recurring queries</Pill>
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">
            IOC Integration Architecture
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A pragmatic architecture for operationalizing IOCs end-to-end—designed
            to balance freshness, governance, and platform constraints while
            delivering detection-ready data to security teams.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs/ioc-integration"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Back to program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {/*
+            Cost model intentionally disabled.
            <Link
              href="/programs/ioc-integration/model"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View cost model{" "}
              <ArrowRight className="ml-2 h-4 w-4 text-neutral-500" />
            </Link>
            */}
          </div>
        </div>
      </section>

      {/* High-level flow */}
      <section className="py-14 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-neutral-900">High-level flow</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Indicators move through a consistent lifecycle from ingestion to
              detection, with freshness and provenance enforced at every step.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              { t: "Ingest", d: "External + internal sources" },
              { t: "Normalize", d: "Canonical schema + dedupe" },
              { t: "Store", d: "Time-series datasets + audit" },
              { t: "Query", d: "Recurring + ad-hoc execution" },
              { t: "Consume", d: "Detection + investigation" },
            ].map((s) => (
              <div key={s.t} className="card p-5">
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
      </section>

      {/* Ingestion + storage */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <SectionCard
            icon={Database}
            title="IOC ingestion and storage"
            text="Indicators are ingested from multiple producers and normalized into a canonical schema. Due to platform constraints, indicators are stored as time-series datasets rather than mutable reference tables."
          >
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>• Each ingest batch is timestamped and immutable</li>
              <li>• Deduplication occurs during normalization, not mutation</li>
              <li>• Expiry is enforced at query/publish time</li>
            </ul>

            <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-neutral-900">
                Why time-series?
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                The underlying analytics platform favors append-only datasets.
                Treating IOCs as time-series preserves provenance and history,
                while avoiding expensive rewrite patterns.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={ShieldCheck}
            title="Freshness + controls"
            text="Freshness is enforced through metadata, not mutation. Every record carries timestamps, source identity, confidence, and TTL."
          >
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>• Source trust and allow/deny lists</li>
              <li>• TTL-based expiry at publish time</li>
              <li>• Full audit history for reviews</li>
            </ul>
          </SectionCard>
        </div>
        </section>

      {/* Recurring queries */}
        <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
            <SectionCard
            icon={Clock}
            title="Self-service recurring query capability (new)"
            text="To operationalize IOCs at scale, the architecture introduces a recurring query mechanism that executes detection logic on a defined cadence."
            >
            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* What it enables */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-neutral-900">
                    What it enables
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    <li>• Self-service scheduling of IOC evaluations without manual execution</li>
                    <li>• Consistent freshness windows enforced across teams and detections</li>
                    <li>• Reproducible, explainable results for audits and reviews</li>
                </ul>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-neutral-900">
                    Operating model impact
                </h3>

                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                    Shifts IOC evaluation from ad-hoc, analyst-driven execution to a
                    standardized, platform-owned operating model.
                </p>
                </div>

                {/* Before / After + Why it matters */}
                <div className="rounded-xl border border-neutral-200 bg-white p-6 md:col-span-2">
                <h3 className="text-sm font-semibold text-neutral-900">
                    Before / After
                </h3>

                <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
                    <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 text-neutral-700">
                        <tr>
                        <th className="px-5 py-3 font-semibold">Metric</th>
                        <th className="px-5 py-3 font-semibold">Before</th>
                        <th className="px-5 py-3 font-semibold">After</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-t border-neutral-200">
                        <td className="px-5 py-3 text-neutral-900">Executions per day</td>
                        <td className="px-5 py-3 text-neutral-600">~24 hourly runs (team-specific)</td>
                        <td className="px-5 py-3 text-neutral-600">1 recurring execution (platform)</td>
                        </tr>
                        <tr className="border-t border-neutral-200">
                        <td className="px-5 py-3 text-neutral-900">Typical execution time</td>
                        <td className="px-5 py-3 text-neutral-600">~10 minutes</td>
                        <td className="px-5 py-3 text-neutral-600">~30 seconds</td>
                        </tr>
                        <tr className="border-t border-neutral-200">
                        <td className="px-5 py-3 text-neutral-900">Freshness consistency</td>
                        <td className="px-5 py-3 text-neutral-600">Varies by team and schedule drift</td>
                        <td className="px-5 py-3 text-neutral-600">Standard freshness window + SLO</td>
                        </tr>
                        <tr className="border-t border-neutral-200">
                        <td className="px-5 py-3 text-neutral-900">Operational overhead</td>
                        <td className="px-5 py-3 text-neutral-600">Manual coordination + repeated runs</td>
                        <td className="px-5 py-3 text-neutral-600">Self-service scheduling + governance</td>
                        </tr>
                        <tr className="border-t border-neutral-200">
                        <td className="px-5 py-3 text-neutral-900">Auditability</td>
                        <td className="px-5 py-3 text-neutral-600">Hard to reproduce consistently</td>
                        <td className="px-5 py-3 text-neutral-600">Reproducible executions + traceability</td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                <p className="mt-3 text-xs text-neutral-500 text-center">
                    Note: Replace approximate values with your measured baselines where possible.
                </p>

                <h4 className="mt-6 text-sm font-semibold text-neutral-900">
                    Why it matters
                </h4>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    Without recurring queries, teams rely on ad-hoc execution.
                    This introduces drift, stale results, and operational risk.
                </p>
                </div>
            </div>
            </SectionCard>
        </div>
        </section>
      {/* Consumption */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <SectionCard
            icon={Workflow}
            title="Consumption paths"
            text="Results are consumed through two primary paths: real-time detection workflows and investigative analysis."
          >
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>• Detection systems consume fresh, non-expired results only</li>
              <li>• Investigative paths can access historical archives</li>
              <li>• Access patterns are explicitly separated for safety</li>
            </ul>
          </SectionCard>

          <SectionCard
            icon={Activity}
            title="Observability"
            text="The architecture exposes metrics that allow teams to reason about quality, freshness, and coverage."
          >
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li>• Freshness SLO compliance</li>
              <li>• Indicator volume and dedupe rates</li>
              <li>• Query success and latency</li>
            </ul>
          </SectionCard>
        </div>
      </section>

      {/* Tech debt */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="card p-10 border border-yellow-300 bg-yellow-50">
            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-yellow-300 bg-yellow-100 p-2">
                <AlertTriangle className="h-4 w-4 text-yellow-900" />
              </div>
              <div>
                <h2 className="heading-2 text-yellow-900">
                  Known limitations / tech debt
                </h2>
                <p className="mt-4 text-sm text-yellow-800 leading-relaxed">
                Design tradeoff: We intentionally optimized for near-term business value to unblock
                detection workflows, while keeping technical debt explicit, bounded, and reversible.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-yellow-900">
                  <li>
                    • IOC mutation is not supported; expiry is enforced via query
                    logic rather than record updates
                  </li>
                  <li>
                    • Time-series modeling increases query complexity for some
                    consumers
                  </li>
                  <li>
                    • Recurring queries introduce additional platform overhead
                    that must be capacity-planned
                  </li>
                  <li>
                    • Results are not queryable in-place, so teams export and re-ingest to enable analysis.</li>   
                </ul>

                <p className="mt-6 text-sm text-yellow-800 leading-relaxed">
                  These tradeoffs were accepted intentionally to unblock delivery,
                  preserve provenance, and avoid high-risk data rewrites. Future
                  iterations could introduce native reference-data support. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="card p-8 text-center">
            <p className="text-sm text-neutral-600">
              This architecture is intentionally generic. Internal system names
              have been abstracted to highlight design decisions rather than
              implementation specifics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
