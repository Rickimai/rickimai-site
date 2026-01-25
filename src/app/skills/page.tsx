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
      "Showback/chargeback models, cost attribution across shared platforms, forecasting, and cost-as-a-design-input tradeoffs.",
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
    title: "Executive Communication",
    description:
      "Decision-ready narratives for senior leaders: crisp options, tradeoffs, and clear asks tied to measurable outcomes.",
    icon: Target,
  },
  {
    title: "Cross-Org Program Leadership",
    description:
      "Alignment across product, engineering, finance, and ops — especially when ownership, funding, or priorities are unclear.",
    icon: Workflow,
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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/30 px-4 py-1.5 text-sm font-medium text-primary-400">
              <Layers className="h-4 w-4" />
              Expertise & Capabilities
            </div>
            <h1 className="heading-1 mt-6 text-white">Skills</h1>
            <p className="mt-6 text-lg text-neutral-400">
              The capabilities I’m known for — spanning data platforms, security,
              cost governance, and executive program leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Strengths */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-white">Signature Strengths</h2>
            <p className="mt-4 text-neutral-400">
              Practical strengths built through delivery — focused on outcomes,
              tradeoffs, and mechanisms that scale.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureStrengths.map((item) => (
              <div key={item.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-primary-900/30 p-2 text-primary-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Buckets */}
      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-white">Capability Areas</h2>
            <p className="mt-4 text-neutral-400">
              A structured view of domains where I can step in as an owner and
              drive delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {capabilityBuckets.map((bucket) => (
              <div key={bucket.title} className="card">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                    <bucket.icon className="h-5 w-5" />
                  </div>
                  <h3 className="heading-3 text-white">{bucket.title}</h3>
                </div>

                <ul className="space-y-3">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-white">Certifications</h2>
            <p className="mt-4 text-neutral-400">
              Industry-recognized certifications supporting program leadership
              and security domains.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="card text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary-900/30 p-3 text-primary-400">
                  <cert.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                <p className="mt-1 text-sm text-neutral-300">{cert.fullName}</p>
                <p className="mt-2 text-xs text-neutral-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies & Tools */}
      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Methodologies */}
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h2 className="heading-3 text-white">Operating Models</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {methodologies.map((method) => (
                  <span
                    key={method}
                    className="rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm text-neutral-300"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                  <Server className="h-5 w-5" />
                </div>
                <h2 className="heading-3 text-white">Tools & Platforms</h2>
              </div>
              <div className="mt-6 space-y-4">
                {tools.map((toolGroup) => (
                  <div key={toolGroup.category}>
                    <h4 className="mb-2 text-sm font-medium text-neutral-400">
                      {toolGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {toolGroup.items.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-neutral-800/50 px-3 py-1 text-sm text-neutral-300"
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
      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-white">Leadership</h2>
            <p className="mt-4 text-neutral-400">
              How I operate when the problem is ambiguous, cross-org, and high
              stakes.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={competency.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-primary-900/30 p-2 text-primary-400">
                  <competency.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">{competency.title}</h3>
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
