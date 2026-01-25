import { Metadata } from "next";
import {
  Shield,
  Database,
  Cloud,
  Users,
  BarChart3,
  Workflow,
  Lock,
  Server,
  GitBranch,
  Layers,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills | Rick Imai",
  description:
    "Capabilities across technical program leadership, security, large-scale data platforms, and cost governance.",
};

const signatureStrengths = [
  {
    title: "FinOps & Cost Governance",
    description:
      "Showback and chargeback models, cost attribution across shared platforms, forecasting, and treating cost as a first-class design constraint.",
    icon: BarChart3,
  },
  {
    title: "Large-Scale Data Platforms",
    description:
      "Data lakes, telemetry pipelines, retention policy design, lifecycle automation, and query platform optimization.",
    icon: Database,
  },
  {
    title: "Security & Risk Programs",
    description:
      "Insider risk telemetry, detection and response workflows, governance controls, and security program execution.",
    icon: Shield,
  },
  {
    title: "Cross-Org Program Leadership",
    description:
      "Alignment across product, engineering, finance, and ops — especially when ownership, funding, or priorities are unclear.",
    icon: Workflow,
  },
  {
    title: "Executive Communication",
    description:
      "Decision-ready narratives for senior leaders: crisp options, tradeoffs, and clear asks tied to measurable outcomes.",
    icon: Target,
  },
  {
    title: "Operational Excellence",
    description:
      "Metrics, reviews, alerting, and mechanisms that drive predictable delivery and measurable quality improvements.",
    icon: Sparkles,
  },
];


const capabilityBuckets = [
  {
    title: "Platform & Data Systems",
    icon: Database,
    items: [
      "Data lakes and telemetry platforms",
      "Retention, lifecycle, and storage optimization",
      "Query platforms and cost-aware access patterns",
      "Metadata, catalogs, and governance controls",
    ],
  },
  {
    title: "FinOps & Cost Management",
    icon: BarChart3,
    items: [
      "Cost modeling, forecasting, and variance analysis",
      "Showback / chargeback mechanisms",
      "Business case framing and ROI narratives",
      "Budget governance and operating cadences",
    ],
  },
  {
    title: "Program & Stakeholder Leadership",
    icon: Users,
    items: [
      "Cross-org planning and execution",
      "Dependency, risk, and escalation management",
      "Prioritization and tradeoff facilitation",
      "Executive reviews and narrative reporting",
    ],
  },
  {
    title: "Security, Compliance & Governance",
    icon: Shield,
    items: [
      "Risk programs and control mechanisms",
      "Data access governance and policy design",
      "Audit readiness and control automation",
      "Incident response coordination and learnings",
    ],
  },
];

const certifications = [
  {
    name: "PMP",
    fullName: "Project Management Professional",
    issuer: "PMI",
    icon: Target,
  },
  {
    name: "CISSP",
    fullName: "Certified Information Systems Security Professional",
    issuer: "ISC²",
    icon: Lock,
  },
  {
    name: "AWS SAA",
    fullName: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    icon: Cloud,
  },
  {
    name: "CISM",
    fullName: "Certified Information Security Manager",
    issuer: "ISACA",
    icon: Shield,
  },
];

const methodologies = [
  "Agile/Scrum",
  "SAFe",
  "Kanban",
  "Lean",
  "ITIL",
  "TOGAF",
  "Waterfall",
  "Six Sigma",
];

const tools = [
  {
    category: "Program & Delivery",
    items: ["Jira", "Confluence", "MS Project", "Smartsheet", "Asana"],
  },
  { category: "Collaboration", items: ["Slack", "Teams", "Zoom", "Miro"] },
  {
    category: "Platform & Engineering",
    items: ["AWS", "Docker", "Terraform", "GitHub", "Jenkins"],
  },
  {
    category: "Analytics & Observability",
    items: ["SQL", "Tableau", "QuickSight", "Datadog", "Grafana", "Splunk"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen" aria-label="Skills page">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <Layers className="h-4 w-4" />
              Expertise & Capabilities
            </div>
            <h1 className="heading-1 mt-6 text-neutral-900">Skills</h1>
            <p className="mt-6 text-lg text-neutral-400">
              The capabilities I’m trusted with — spanning data platforms, security, cost governance, and
              executive program leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Strengths */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Signature Strengths</h2>
            <p className="mt-4 text-neutral-400">
              Practical strengths built through delivery — focused on outcomes,
              tradeoffs, and mechanisms that scale.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Delivered and operated platforms supporting PB-scale data, multi-million-dollar budgets, and executive decision-making.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Signature strengths">
            {signatureStrengths.map((item) => (
              <div key={item.title} role="listitem" className="card">
                <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-2 text-primary-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Buckets */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Capability Areas</h2>
            <p className="mt-4 text-neutral-400">
              A structured view of domains where I can step in as an owner and
              drive delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {capabilityBuckets.map((bucket) => (
              <div key={bucket.title} className="card">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-neutral-100 p-2 text-primary-600">
                      <bucket.icon className="h-5 w-5" />
                    </div>
                    <h3 className="heading-3 text-neutral-900">{bucket.title}</h3>
                  </div>

                <ul className="space-y-3" aria-label={bucket.title + " capabilities"}>
                  {bucket.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm" role="listitem">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Certifications</h2>
            <p className="mt-4 text-neutral-400">
              Industry-recognized certifications supporting program leadership
              and security domains.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Certifications">
            {certifications.map((cert) => (
              <div key={cert.name} role="listitem" className="card text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-neutral-100 p-3 text-primary-600">
                  <cert.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{cert.name}</h3>
                <p className="mt-1 text-sm text-neutral-700">{cert.fullName}</p>
                <p className="mt-2 text-xs text-neutral-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies & Tools */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Methodologies */}
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2 text-primary-600">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h2 className="heading-3 text-neutral-900">Operating Models</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Operating models">
                {methodologies.map((method) => (
                  <span
                    key={method}
                    role="listitem"
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2 text-primary-600">
                  <Server className="h-5 w-5" />
                </div>
                <h2 className="heading-3 text-neutral-900">Tools & Platforms</h2>
              </div>
              <div className="mt-6 space-y-4">
                {tools.map((toolGroup) => (
                    <div key={toolGroup.category}>
                    <h4 id={`tools-${toolGroup.category.replace(/\s+/g, '-')}`} className="mb-2 text-sm font-medium text-neutral-600">
                      {toolGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2" role="list" aria-labelledby={`tools-${toolGroup.category.replace(/\s+/g, '-')}`}>
                      {toolGroup.items.map((tool) => (
                        <span
                          key={tool}
                          role="listitem"
                          className="rounded-md bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Leadership</h2>
            <p className="mt-4 text-neutral-400">
              How I operate when the problem is ambiguous, cross-org, and high
              stakes.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Leadership competencies">
            {[
              {
                icon: Users,
                title: "Alignment & Influence",
                description:
                  "Bring teams together around shared goals, clear ownership, and decision-ready plans.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Tradeoffs",
                description:
                  "Use engineering-owned data to frame cost, risk, and performance tradeoffs early in design.",
              },
              {
                icon: Target,
                title: "Executive Readouts",
                description:
                  "Crisp narratives and artifacts that help leaders make fast, confident decisions.",
              },
              {
                icon: Workflow,
                title: "Mechanisms & Cadence",
                description:
                  "Operating rhythms that create predictable delivery and fast feedback loops.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Triage, escalation, and mitigation plans that reduce surprises and protect outcomes.",
              },
              {
                icon: Award,
                title: "Partners & Vendors",
                description:
                  "Structured evaluation, contract clarity, and ongoing performance management.",
              },
            ].map((competency) => (
              <div key={competency.title} role="listitem" className="card">
                <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-2 text-primary-600">
                  <competency.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-neutral-900">{competency.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
