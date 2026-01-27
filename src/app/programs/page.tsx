import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs | Rick Imai",
  description:
    "Selected programs and deep dives: platform engineering, cost optimization, cybersecurity, and governance reference architectures.",
};

type Program = {
  title: string;
  description: string;
  href: string;
  companyLabel: string;
  typeLabel: string;
  tags: string[];
};

const programs: Program[] = [
  {
    title: "Data Retention Program",
    description:
      "A reusable program pattern to control storage growth with automated retention, safe deletion guardrails, and a cost forecasting model.",
    href: "/programs/retention",
    companyLabel: "Amazon",
    typeLabel: "Cost Optimization",
    tags: ["FinOps", "Governance", "Event-driven"],
  },
  {
    title: "Cost Allocation / Showback",
    description:
      "A FinOps platform capability to allocate infrastructure costs to owners and express unit economics (e.g., cost per TB ingested, cost per query minute) so teams can define what “good” looks like for their platform.",
    href: "/programs/cost-allocation-showback",
    companyLabel: "Amazon",
    typeLabel: "FinOps Platform",
    tags: ["Unit Costs", "Showback", "Forecasting"],
  },
  {
    title: "IOC Integration Program",
    description:
      "A security enablement program to ingest, normalize, and distribute Indicators of Compromise (IOCs) into detection and investigation workflows with clear ownership, guardrails, and measurable operational impact.",
    href: "/programs/ioc-integration",
    companyLabel: "Amazon",
    typeLabel: "Security Platform",
    tags: ["Threat Intel", "Pipelines", "Governance"],
  },
];

function ProgramCard({ p }: { p: Program }) {
  return (
    <Link
      href={p.href}
      className="card group block overflow-hidden bg-white transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="p-6">
        {/* Labels */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-white">
            {p.companyLabel}
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
            {p.typeLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-base font-semibold text-neutral-900">
          {p.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {p.description}
        </p>

        {/* Tags */}
        {p.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 inline-flex items-center text-sm font-medium text-primary-600">
          View program <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

export default function ProgramsPage() {
  return (
    <section className="pt-28 pb-16">
      <div className="container-custom">
        <h1 className="heading-1 text-neutral-900">Selected Work</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">
          Deep dives into major programs I&apos;ve led—focused on platform
          governance, cost control, and security-oriented infrastructure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.href} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
