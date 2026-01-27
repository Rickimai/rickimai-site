import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GitBranch, ShieldCheck, Wallet } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Data Retention Program | Rick Imai",
  description:
    "Program overview for a generic data retention initiative: why it matters, outcomes, governance, and links to the architecture and cost model.",
};

const outcomes = [
  {
    title: "Automated enforcement",
    text: "Retention policies execute automatically with no manual cleanup or operational overhead.",
    icon: CheckCircle2,
  },
  {
    title: "Lower storage footprint + spend",
    text: "Continuously removes expired data to reduce storage footprint and bend the cost curve.",
    icon: Wallet,
  },
  {
    title: "Compliance + auditability",
    text: "Creates an auditable trail of what was deleted, when, and why—supporting governance and investigations.",
    icon: ShieldCheck,
  },
  {
    title: "Scales with growth",
    text: "Event-driven workers scale horizontally to handle dataset growth without re-architecting.",
    icon: GitBranch,
  },
];

const guardrails = [
  "Throttling/backpressure to protect downstream systems (catalog, object store, APIs)",
  "Idempotent operations for safe retries and failure recovery",
  "DLQ + replay workflows for controlled reprocessing",
  "Rate limits and concurrency caps per dataset / table / partition family",
  "Audit logging and metrics to prove compliance and detect anomalies",
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
      className="card group block p-6 transition hover:shadow-md"
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

export default function RetentionProgramPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-24 pb-6">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Programs", href: "/programs" },
              { label: "Retention" },
            ]}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-neutral-200 bg-neutral-50">
        <div className="container-custom max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Program</Pill>
            <Pill>Data Platform</Pill>
            <Pill>Governance</Pill>
            <Pill>FinOps</Pill>
          </div>

          <h1 className="heading-1 mt-6 text-neutral-900">Data Retention Program</h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            A program pattern for controlling storage growth by enforcing retention
            policies at scale. Combines an event-driven retention service with a
            forecasting model to quantify cost impact and guide policy decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/programs/retention/architecture"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              View Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/programs/retention/model"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View Cost Model <ArrowRight className="ml-2 h-4 w-4 text-neutral-500" />
            </Link>
          </div>
        </div>
      </section>
    {/* Problem Statement */}
    <section className="py-16 border-b border-neutral-200 bg-white">
    <div className="container-custom max-w-5xl">
        <div className="card p-10">
        <h2 className="heading-2 text-neutral-900 text-center">
            Problem
        </h2>

        <p className="mt-6 text-center text-lg text-neutral-600 leading-relaxed">
            Without lifecycle management, data platforms accumulate historical data indefinitely.
            Storage footprint grows every month, cloud costs compound, and manual cleanup becomes
            reactive and unreliable.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-sm font-semibold text-neutral-900">
                No automated retention
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
                Data is rarely deleted consistently. Cleanup depends on ad-hoc scripts or tickets.
            </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-sm font-semibold text-neutral-900">
                Storage + cost grow unchecked
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
                Data volume increases monthly, driving linear or exponential growth in storage and query spend.
            </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-sm font-semibold text-neutral-900">
                Operational + compliance risk
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
                Inconsistent deletion creates audit gaps and increases exposure to governance and regulatory risk.
            </p>
            </div>
        </div>

        <div className="mt-10 rounded-xl border border-neutral-300 bg-neutral-900 p-6 text-center text-neutral-100">
            <span className="font-medium">
            Result:
            </span>{" "}
            Growth outpaces budget. Manual cleanup doesn’t scale. The model is not sustainable.
        </div>
        </div>
    </div>
    </section>

      {/* Summary */}
      <section className="py-14">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 card p-8">
              <h2 className="heading-2 text-neutral-900">Program summary</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Data platforms naturally accumulate historical data, and without
                enforced retention, storage footprint and spend trend upward over
                time. This program pairs (1) a retention service that detects and
                deletes expired partitions/files with (2) a forecasting model that
                estimates future volume and cost under baseline vs retention scenarios.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                The result is a repeatable approach to cost control and governance:
                policies are enforced automatically, execution is safe and auditable,
                and leadership gets a clear view of cost impact and tradeoffs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <LinkCard
                  title="Architecture"
                  text="Event-driven pattern: detection → event bus → workers → storage/metadata + audit trail."
                  href="/programs/retention/architecture"
                />
                <LinkCard
                  title="Model"
                  text="Forecasting and scenario math to quantify baseline growth vs retention savings."
                  href="/programs/retention/model"
                />
              </div>
            </div>

            <div className="grid gap-6">
              <StatCard
                label="Primary goal"
                value="Bend the cost curve"
                hint="Control storage growth without reducing platform utility."
              />
              <StatCard
                label="Secondary goal"
                value="Governance at scale"
                hint="Automated enforcement with auditability and safe retries."
              />
              <StatCard
                label="Program artifacts"
                value="Architecture + Model"
                hint="System design and cost model published as reusable references."
              />
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
              Designed to be vendor-agnostic. Swap in your platform equivalents
              (catalog, object store, schedulers, queues, compute).
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="card p-6">
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

      {/* Guardrails */}
      <section className="py-14 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="card p-8">
              <h2 className="heading-2 text-neutral-900">Why retention needs guardrails</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Large-scale deletion touches shared infrastructure (metadata catalogs,
                object stores, APIs). Without guardrails, cleanup jobs can create
                bursts that degrade query performance or overwhelm downstream services.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                This program includes explicit throttling and retry controls so
                retention is safe to run continuously in production.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <Pill>Backpressure</Pill>
                <Pill>Concurrency caps</Pill>
                <Pill>DLQ + replay</Pill>
                <Pill>Idempotency</Pill>
                <Pill>Audit trail</Pill>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
                Operational guardrails
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-700">
                {guardrails.map((g) => (
                  <li key={g} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-900" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/programs/retention/architecture"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline"
                >
                  See how guardrails map to the architecture <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-14 border-t border-neutral-200 bg-white">
        <div className="container-custom">
          <div className="card p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <LinkCard
                title="Retention Architecture"
                text="Diagram + component details for an event-driven retention service."
                href="/programs/retention/architecture"
              />
              <LinkCard
                title="Retention Cost Model"
                text="Forecasting method and scenario math (baseline vs retention)."
                href="/programs/retention/model"
              />
            </div>

            <div className="mt-10 text-center text-xs text-neutral-500">
              Note: This page is intentionally generic (no vendor or internal system names).
              Swap in your platform equivalents as needed.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
