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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills | Rick Imai",
  description:
    "Technical and leadership skills in program management, cybersecurity, cloud platforms, and enterprise architecture.",
};

const skillCategories = [
  {
    title: "Program Management",
    icon: Workflow,
    skills: [
      { name: "Strategic Planning", level: 95 },
      { name: "Portfolio Management", level: 95 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Risk Management", level: 95 },
      { name: "Stakeholder Management", level: 95 },
      { name: "Budget Management", level: 90 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      { name: "Security Architecture", level: 90 },
      { name: "Threat Intelligence", level: 85 },
      { name: "Incident Response", level: 90 },
      { name: "Compliance (SOX, PCI, GDPR)", level: 90 },
      { name: "Zero Trust Architecture", level: 85 },
      { name: "Security Operations", level: 85 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 80 },
      { name: "Cloud Security", level: 90 },
      { name: "Infrastructure as Code", level: 75 },
      { name: "Containerization", level: 75 },
      { name: "DevSecOps", level: 80 },
    ],
  },
  {
    title: "Data Platforms",
    icon: Database,
    skills: [
      { name: "Data Architecture", level: 85 },
      { name: "Data Governance", level: 90 },
      { name: "Analytics & BI", level: 80 },
      { name: "Data Security", level: 90 },
      { name: "ETL/Data Pipelines", level: 75 },
      { name: "Data Lake/Warehouse", level: 80 },
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
  "Waterfall",
  "Kanban",
  "Lean",
  "Six Sigma",
  "ITIL",
  "TOGAF",
];

const tools = [
  { category: "Project Management", items: ["Jira", "Confluence", "Asana", "MS Project", "Smartsheet"] },
  { category: "Collaboration", items: ["Slack", "Teams", "Zoom", "Miro", "Figma"] },
  { category: "Development", items: ["GitHub", "GitLab", "Jenkins", "Terraform", "Docker"] },
  { category: "Analytics", items: ["Tableau", "Power BI", "Splunk", "Datadog", "Grafana"] },
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
              A comprehensive skill set spanning technical program management,
              cybersecurity, cloud platforms, and enterprise architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title} className="card">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="heading-3 text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-600 to-primary-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
              Industry-recognized certifications validating expertise across
              program management and cybersecurity domains.
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
                <h2 className="heading-3 text-white">Methodologies</h2>
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

      {/* Leadership Competencies */}
      <section className="section-padding border-t border-neutral-800">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-white">Leadership Competencies</h2>
            <p className="mt-4 text-neutral-400">
              Core leadership capabilities developed through years of executive
              experience.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Team Building",
                description:
                  "Building and mentoring high-performing teams across diverse functions and geographies.",
              },
              {
                icon: BarChart3,
                title: "Strategic Thinking",
                description:
                  "Developing and executing long-term strategies aligned with business objectives.",
              },
              {
                icon: Target,
                title: "Executive Communication",
                description:
                  "Presenting complex technical concepts to executive leadership and board members.",
              },
              {
                icon: Workflow,
                title: "Change Management",
                description:
                  "Leading organizational transformation and driving adoption of new processes.",
              },
              {
                icon: Shield,
                title: "Crisis Management",
                description:
                  "Managing high-stakes situations with composure and decisive action.",
              },
              {
                icon: Award,
                title: "Vendor Management",
                description:
                  "Negotiating contracts and managing strategic vendor relationships.",
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
