import { Metadata } from "next";
import { Building2, Briefcase } from "lucide-react";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import ExperienceTimelineExpandable from "../../components/ExperienceTimelineExpandable";


export const metadata: Metadata = {
  title: "Experience | Rick Imai",
  description:
    "Professional experience spanning 20+ years in technical program management at AWS, Amazon Stores FinTech, Charles Schwab, and Experian.",
};

const certifications = [
  {
    name: "Project Management Professional (PMP)",
    issuer: "PMI",
  },
  {
    name: "ITIL Foundation",
    issuer: "AXELOS",
  },
  {
    name: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
  },
  {
    name: "AWS Certified Cloud Practitioner (ACCP)",
    issuer: "AWS",
  },
];


const experiences = [
  {
    company: "Amazon Web Services (AWS)",
    badges: ["$50M spend", "Security data lake", "Platform governance"],
    role: "Senior Technical Program Manager",
    period: "2024 - Present",
    location: "San Diego, CA",
    current: true,
    description:
      "Leading security data platforms and enterprise-wide initiatives with significant budget oversight and cross-functional program delivery.",
    achievements: [
      "Owned governance for a ~$50M annual security data platform spend, improving cost visibility and allocation decisions",
      "Delivered cross-org security platform initiatives end-to-end, aligning engineering and security stakeholders on scope, milestones, and launch readiness",
      "Built operating mechanisms (metrics, reviews, decision logs) that unblocked priority calls and improved execution cadence",
      "Defined multi-year platform roadmap and investment narrative to align leadership on sequencing and tradeoffs",
      "Improved delivery predictability through clear ownership, milestone tracking, and regular risk/issue reviews",
      "Produced exec-ready updates and planning inputs to support budgeting, prioritization, and quarterly commitments",
    ],
  },
  {
    company: "Amazon Stores (FinTech)",
    badges: ["200+ engineers", "3w → 10m", "150+ systems"],
    role: "Senior Technical Program Manager",
    period: "2021 - 2024",
    location: "Irvine, CA",
    current: false,
    description:
      "Led cross-functional FinTech programs supporting large-scale data, planning, and reporting platforms, partnering with Finance, Engineering, and Product to deliver automation, governance, and executive-ready mechanisms.",
    achievements: [
      "Led cross-functional delivery across a 200+ engineer FinTech org spanning DE, ML, Finance, and Product",
      "Authored a 3-year engineering strategy used in VP-level planning and investment decisions",
      "Delivered platform automation reducing cycle time from ~3 weeks to ~10 minutes while improving reliability",
      "Owned annual planning/budget cycles, aligning funding, headcount, and initiative priorities with senior leaders",
      "Established OE standards across 150+ production systems, driving ~90% automation coverage and sustained YoY improvement",
      "Built exec reporting and governance mechanisms that improved decision velocity and delivery predictability",
    ],
  },
  {
    company: "Charles Schwab",
    badges: ["$50M+ portfolio", "20+ programs", "Cybersecurity"],
    role: "Managing Director, Cybersecurity Portfolio",
    period: "2019 - 2021",
    location: "Westlake, TX",
    current: false,
    description:
      "Directed a cybersecurity portfolio spanning threat intelligence, incident response, and security operations in a regulated environment.",
    achievements: [
      "Owned a $50M+ cybersecurity portfolio across 20+ programs, balancing risk, regulatory priorities, and delivery capacity",
      "Drove delivery across threat intel, incident response, IAM, data protection, and appsec workstreams",
      "Led audit/regulatory readiness execution by aligning evidence, owners, timelines, and remediation tracking",
      "Built portfolio mechanisms for prioritization, dependency management, and executive reporting",
      "Mentored leaders across security domains and strengthened cross-team execution cadence",
      "Advanced security architecture initiatives and translated risk into funded, executable roadmaps",
    ],
  },
  {
    company: "Experian PLC",
    badges: ["20+ TPMs", "Breach remediation", "Governance"],
    role: "Senior Director, Cybersecurity PMO",
    period: "2015 - 2019",
    location: "Allen, TX",
    current: false,
    description:
      "Directed cybersecurity PMO consisting of 20+ TPMs during a period of security transformation and breach remediation, establishing enterprise governance mechanisms.",
    achievements: [
      "Led breach remediation execution across security, legal, and communications with clear ownership and critical-path tracking",
      "Built governance mechanisms (portfolio reviews, metrics, reporting) to standardize execution across security programs",
      "Established executive reporting that improved prioritization, accountability, and decision-making speed",
      "Modernized incident response operations through process uplift and operating cadences",
      "Coordinated compliance and regulatory workstreams to support audit readiness",
      "Drove enterprise security transformation across identity, threat, and risk initiatives",
    ],
  },
  {
    company: "Experian PLC",
    badges: ["6-person eng team", "Portfolio platforms", "Exec reporting"],
    role: "IT Director, Global Corporate Systems",
    period: "2011 - 2014",
    location: "Allen, TX",
    current: false,
    description:
      "Led a small engineering team to build enterprise platforms for portfolio management, resource planning, and organizational coordination across a global IT organization. Implemented global standards to ensure consistent executive reporting.",
    achievements: [
      "Led a 6-person engineering team delivering portfolio management and resource planning platforms for global IT",
      "Implemented global reporting standards and templates to improve consistency for executive audiences",
      "Improved cross-org coordination through shared platforms, governance, and standardized planning workflows",
    ],
  },
  {
    company: "Experian PLC",
    badges: ["20-person PMO", "75+ programs/yr", "Governance"],
    role: "Sr. Manager, Head of IT PMO, North America",
    period: "2007 - 2011",
    location: "Costa Mesa, CA",
    current: false,
    description:
      "Led the North America IT PMO managing delivery across infrastructure, security, and business systems. Established governance standards and improved portfolio visibility across global programs.",
    achievements: [
       "Managed a 20-person PMO delivering 75+ programs annually across infrastructure, security, and business systems",
      "Established governance standards and portfolio visibility mechanisms used across North America IT",
      "Improved prioritization and executive reporting across multiple domains and stakeholder groups",
    ],
  },
];
function CertificationsSection() {
  if (!certifications.length) return null;
  return (
    <section className="section-padding border-t border-neutral-200">
      <div className="container-custom">
        <h2 className="heading-2 text-center text-neutral-900">
          Certifications
        </h2>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={`${c.name}-${c.issuer}`}
              className="card flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-medium text-neutral-900">
                  {c.name}
                </div>
                <div className="text-xs text-neutral-500">{c.issuer}</div>
              </div>

              <div className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs font-medium text-neutral-700">
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-10 lg:pt-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </div>
            <h1 className="heading-1 mt-6 text-neutral-900">Experience</h1>
            <p className="mt-6 text-lg text-neutral-600">
              20+ years of progressive leadership in technical program
              management, cybersecurity, and enterprise transformation at
              industry-leading organizations.
            </p>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline line */}
              {/* spine */}
              <div className="absolute left-0 top-0 hidden h-[calc(100%-4rem)] w-px bg-neutral-200 md:left-1/2 md:block md:-translate-x-1/2" />
            <ExperienceTimelineExpandable experiences={experiences} initialCount={3} />
          </div>
        </div>
      </section>
      {/* Credentials Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Certifications */}
            <div className="card">
              <h2 className="text-lg font-semibold text-neutral-900">
                Certifications
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Current certifications and credentials.
              </p>

              <div className="mt-6 grid gap-3">
                {certifications.map((c) => (
                  <div
                    key={`${c.name}-${c.issuer}`}
                    className="flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-neutral-900">
                        {c.name}
                      </div>
                      <div className="text-xs text-neutral-500">{c.issuer}</div>
                    </div>
                    <span className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-700">
                      Certified
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className="card">
              <h2 className="text-lg font-semibold text-neutral-900">Education</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Formal education and concentration.
              </p>

              <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-sm font-medium text-neutral-900">
                  BA, Social Sciences
                </div>
                <div className="mt-1 text-sm text-neutral-700">
                  University of California, Irvine
                </div>
                <div className="mt-2 text-xs text-neutral-500">
                  Concentration in Information Technology and Business Economics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

