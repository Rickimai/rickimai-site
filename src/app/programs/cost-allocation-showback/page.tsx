import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wallet,
  GitBranch,
  Gauge,
  Activity,
} from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Cost Allocation / Showback | Rick Imai",
  description:
    "Program deep dive: cost allocation + showback to translate raw cloud spend into unit economics, ownership, and decision-ready governance.",
};

const outcomes = [
  {
    title: "Clear ownership",
    text: "Costs are attributable to teams/products/datasets, enabling direct conversations with customers and owners.",
    icon: CheckCircle2,
  },
  {
    title: "Unit economics",
    text: "Tracks efficiency over time (e.g., cost per TB ingested, cost per query minute) instead of only totals.",
    icon: Wallet,
  },
  {
    title: "Faster attribution",
    text: "Spend shifts can be explained via usage changes (telemetry) tied to cost buckets (attribution).",
    icon: Activity,
  },
  {
    title: "Better optimization bets",
    text: "Telemetry + attribution expose the real cost drivers so you build the right optimizations.",
    icon: GitBranch,
  },
];

const problemPoints = [
  {
    title: "No ownership",
    text: "Bills roll up by service/account/region, not by product, dataset, or owning team.",
  },
  {
    title: "No unit economics",
    text: "Totals move with growth, masking whether the platform is becoming more efficient or less.",
  },
  {
    title: "No causal chain",
    text: "Spikes trigger long investigations because behavior can’t be linked to spend.",
  },
];

const principles = [
  "Usage-based drivers first (avoid static splits)",
  "Single source of truth for planning + reporting",
  "Explainable math (dollar → driver → owner)",
  "Automation by default (repeatable monthly cadence)",
];

const unitCosts = [
  "Cost per TB ingested",
  "Cost per TB stored (TB-months)",
  "Cost per query minute",
  "Cost per GB scanned (where scan-based pricing dominates)",
];

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

export default function CostAllocationShowbackPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Cost Allocation / Showback" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pb-14 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Program</Pill>
            <Pill>FinOps Platform</Pill>
            <Pill>Showback</Pill>
            <Pill>Unit Economics</Pill>
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">
            Cost Allocation / Showback
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A reusable program pattern to translate raw cloud spend into
            decision-ready unit economics and assign accountable owners—so teams
            can define what “good” looks like for their platform and prioritize
            the right optimization features.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs/cost-allocation-showback/architecture"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              View Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/programs/cost-allocation-showback/model"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View Cost Model{" "}
              <ArrowRight className="ml-2 h-4 w-4 text-neutral-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 border-b border-neutral-200 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="card p-10 bg-gradient-to-b from-white to-neutral-50">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-2 text-neutral-900">Problem</h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Raw cloud bills are great for reconciliation, but poor for
                decision-making. They show totals by service/account/region—not
                who is doing what, why spend changed, or which optimizations will
                actually solve the cost problem.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {problemPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-neutral-300 bg-neutral-900 p-6 text-center text-neutral-100">
              <span className="font-medium">Result:</span> You can’t credibly
              talk to customers or prioritize the right optimization features,
              because behavior can’t be linked to spend.
            </div>
          </div>
        </div>
      </section>

      {/* Program summary */}
      <section className="py-14">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 card p-8">
              <h2 className="heading-2 text-neutral-900">Program summary</h2>

              <p className="mt-4 text-neutral-700 leading-relaxed">
                This program pairs{" "}
                <span className="font-medium">telemetry data</span> (what happened:
                TB ingested, query minutes, GB scanned) with{" "}
                <span className="font-medium">cost attribution data</span> (what it
                cost: billed spend mapped to dimensions like team/product/dataset).
              </p>

              <p className="mt-4 text-neutral-700 leading-relaxed">
                Without both, you can’t connect behavior to spend. That means you
                don’t know who is driving costs, you can’t have credible customer
                conversations, and you risk building optimizations based on guesses
                instead of real cost drivers.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <LinkCard
                  title="Architecture"
                  text="Ingest → allocate → publish, with drill-down paths from dollars to drivers to owners."
                  href="/programs/cost-allocation-showback/architecture"
                />
                <LinkCard
                  title="Cost model"
                  text="Unit cost definitions + forecasting method to translate volume growth into spend."
                  href="/programs/cost-allocation-showback/model"
                />
              </div>
            </div>

            <div className="grid gap-6">
              <StatCard
                label="Primary goal"
                value="Make cost actionable"
                hint="Explain spend shifts and assign accountable owners."
              />
              <StatCard
                label="Key differentiator"
                value="Unit economics"
                hint="Track efficiency over time, not just totals."
              />
              <StatCard
                label="Required inputs"
                value="Telemetry + Attribution"
                hint="Behavior + cost mapping are both necessary to prioritize optimizations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform approach */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="card p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
                  <GitBranch className="h-4 w-4 text-neutral-900" />
                </div>
                <div>
                  <h2 className="heading-2 text-neutral-900">Platform approach</h2>
                  <p className="mt-4 text-neutral-700 leading-relaxed">
                    The platform converts raw spend into showback-ready views by
                    ingesting billing + usage, allocating costs using measurable
                    drivers, and publishing decision-ready outputs for forecasting,
                    optimization, and leadership reviews.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
                      Design principles
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                      {principles.map((x) => (
                        <li key={x} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
                  <Gauge className="h-4 w-4 text-neutral-900" />
                </div>
                <div>
                  <h2 className="heading-2 text-neutral-900">Unit economics</h2>
                  <p className="mt-4 text-neutral-700 leading-relaxed">
                    Totals are necessary but insufficient. Unit costs normalize
                    growth and make efficiency measurable.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {unitCosts.map((u) => (
                      <Pill key={u}>{u}</Pill>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                    <h3 className="text-sm font-semibold text-neutral-900">
                      Baselines are internal, not universal
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      “Good” varies by architecture, retention, query patterns,
                      and workload mix. The model establishes an internal baseline
                      and tracks trend direction so teams can see whether changes
                      improve or degrade efficiency over time.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/programs/cost-allocation-showback/model"
                      className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      See the unit cost definitions and forecasting method{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 text-neutral-900">Outcomes</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              The goal is improved decision velocity and reduced cost ambiguity—not
              more dashboards.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="card p-6 transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
                      <Icon className="h-4 w-4 text-neutral-900" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">
                        {o.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                        {o.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="card p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <LinkCard
                title="Architecture"
                text="Ingest → allocate → publish, with explainability paths from dollars to drivers to owners."
                href="/programs/cost-allocation-showback/architecture"
              />
              <LinkCard
                title="Cost model"
                text="Unit cost definitions, assumptions, and forecasting approach."
                href="/programs/cost-allocation-showback/model"
              />
            </div>

            <div className="mt-10 text-center text-xs text-neutral-500">
              Note: This page is intentionally generic (no vendor or internal
              system names). Swap in your platform equivalents as needed.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
