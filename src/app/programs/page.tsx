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
  companyLabel: string; // keep generic + flexible
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
  // Add more as you publish:
  // {
  //   title: "…",
  //   description: "…",
  //   href: "/programs/…",
  //   companyLabel: "Amazon",
  //   typeLabel: "Platform Engineering",
  //   tags: ["…"],
  // },
];

function ProgramCard({ p }: { p: Program }) {
  return (
    <Link
      href={p.href}
      className="card group block overflow-hidden transition hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
            {p.companyLabel}
          </span>
          <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
            {p.typeLabel}
          </span>
        </div>

        <h2 className="mt-4 text-base font-semibold text-neutral-900">
          {p.title}
        </h2>

        <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
          {p.description}
        </p>

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

        <div className="mt-6 inline-flex items-center text-sm font-medium text-primary-600">
          View program <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <section className="pt-28 pb-16">
        <div className="container-custom">
          <h1 className="heading-1 text-neutral-900">Selected Work</h1>
          <p className="mt-4 max-w-3xl text-neutral-600 leading-relaxed">
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
    </>
  );
}
