import { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Mail, Layers, Building2, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Rick Imai",
  description:
    "Download role-aligned resume views across infrastructure governance & FinOps, technical program leadership, security/compliance, platform engineering, and portfolio leadership.",
};

const resumeArchetypes = [
  {
    title: "Full Profile (General)",
    description:
      "A complete view of experience across data platforms, cost governance, security programs, and technical program leadership.",
    href: "/resumes/Rick_Imai_Resume_Full_Profile.pdf",
  },
  {
    title: "Infrastructure Governance & FinOps",
    description:
      "Best for roles focused on cloud cost governance, capacity planning, and shared platform ownership.",
    href: "/resumes/Rick_Imai_Resume_Infrastructure_Governance_FinOps.pdf",
  },
  {
    title: "Technical Program Leadership",
    description:
      "Best for broad cross-functional program ownership, roadmap delivery, and execution across complex stakeholder environments.",
    href: "/resumes/Rick_Imai_Resume_Technical_Program_Leadership.pdf",
  },
  {
    title: "Security & Compliance Programs",
    description:
      "Best for security operations, governance, audit readiness, and compliance-driven technical programs.",
    href: "/resumes/Rick_Imai_Resume_Security_Compliance_Programs.pdf",
  },
  {
    title: "Platform Engineering & Developer Enablement",
    description:
      "Best for internal platforms, self-service tooling, adoption, and developer experience programs.",
    href: "/resumes/Rick_Imai_Resume_Platform_Engineering_Developer_Enablement.pdf",
  },
  {
    title: "Portfolio & Enterprise Program Leadership",
    description:
      "Best for portfolio planning, prioritization, operating cadences, and executive-level program governance.",
    href: "/resumes/Rick_Imai_Resume_Portfolio_Enterprise_Program_Leadership.pdf",
  },
];

const outcomesByCompany = [
  {
    company: "Amazon / AWS",
    bullets: [
      "Owned cross-org program execution for large-scale data platforms, aligning engineering, finance, and security stakeholders through OP1 planning and executive reviews.",
      "Built governance mechanisms that improved spend visibility and accountability across shared fleets, enabling clearer cost attribution and better decision-making.",
      "Led retention and lifecycle policy efforts to bend the storage cost curve while preserving investigative and operational coverage.",
    ],
  },
  {
    company: "Experian",
    bullets: [
      "Led post-breach security program governance and execution, improving audit readiness and driving measurable maturity uplift across teams.",
      "Established operating cadence, metrics, and ownership models that improved cross-functional execution across security, engineering, and risk partners.",
    ],
  },
  {
    company: "Charles Schwab",
    bullets: [
      "Delivered enterprise cybersecurity reporting and portfolio metrics used by senior leadership to track risk posture and operational performance.",
      "Drove cross-team coordination across security and infrastructure stakeholders under regulated constraints and tight delivery timelines.",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <FileText className="h-4 w-4" />
              Resumes by Role Archetype
            </div>

            <h1 className="heading-1 mt-6 text-neutral-900">Resume</h1>

            <p className="mt-6 text-lg text-neutral-600">
              These resume views highlight the same experience through the lens of different leadership problems — pick the one that best matches the role.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Archetype cards */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-lg bg-neutral-100 p-2 text-primary-600">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900">Download Resume Views</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {resumeArchetypes.map((r) => {
                const isRecommended = r.title === "Full Profile (General)";
                return (
                  <div
                    key={r.title}
                    className={`card bg-white ${
                      isRecommended ? "ring-2 ring-primary-500 shadow-lg transform scale-100" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-neutral-900">{r.title}</h3>
                          {isRecommended && (
                            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-neutral-600">{r.description}</p>
                      </div>
                      <a
                        href={r.href}
                        download
                        className={`btn-primary shrink-0 ${
                          isRecommended ? "bg-primary-600 hover:bg-primary-700 text-white" : ""
                        }`}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              If you&apos;re not sure which view to use, start with <span className="font-medium text-neutral-700">Full Profile (General)</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-2 text-neutral-900">Noteworthy Outcomes Delivered</h2>
              <p className="mt-4 text-neutral-600">
                Selected examples of outcomes delivered. Detailed scope and ownership are tailored per role in the resume views above.
              </p>
            </div>

            <div className="mt-12 grid gap-6">
              {outcomesByCompany.map((c) => (
                <div key={c.company} className="card bg-white">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-neutral-100 p-2 text-primary-600">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">{c.company}</h3>
                  </div>

                  <ul className="space-y-3">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        <span className="text-neutral-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-8 text-center">
              <div className="mx-auto mb-3 inline-flex rounded-lg bg-neutral-100 p-2 text-primary-600">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">Want the complete view?</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Download the Full Profile (General) resume for the full scope across platforms, cost governance, security programs, and program leadership.
              </p>
              <a
                href="/resumes/Rick_Imai_Resume_Full_Profile.pdf"
                download
                className="btn-primary mt-6 inline-flex"
              >
                <Download className="h-4 w-4" />
                Download Full Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
