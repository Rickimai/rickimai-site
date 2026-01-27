import { Metadata } from "next";
import { Building2, Briefcase } from "lucide-react";
import ExperienceTimeline from "../../components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Rick Imai",
  description:
    "Professional experience spanning 20+ years in technical program management at AWS, Amazon Stores FinTech, Charles Schwab, and Experian.",
};

const experiences = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Senior Technical Program Manager",
    period: "2024 - Present",
    location: "San Diego, CA",
    current: true,
    description:
      "Leading security data platforms and enterprise-wide initiatives with significant budget oversight and cross-functional program delivery.",
    achievements: [
      "Led security data platforms with $50M annual budget oversight, ensuring efficient resource allocation and cost governance",
      "Drove end-to-end program delivery for enterprise security initiatives spanning multiple organizations",
      "Built operating mechanisms and executive-ready narratives to align stakeholders and unblock decisions",
      "Developed multi-year roadmaps aligning platform investments with business objectives",
      "Improved delivery predictability through clear ownership, milestones, and review cadences",
      "Enabled data-driven decision-making through metrics, reporting, and planning inputs",
    ],
  },
  {
    company: "Amazon Stores (FinTech)",
    role: "Senior Technical Program Manager",
    period: "2021 - 2024",
    location: "Irvine, CA",
    current: false,
    description:
      "Led cross-functional FinTech programs supporting large-scale data, planning, and reporting platforms, partnering with Finance, Engineering, and Product to deliver automation, governance, and executive-ready mechanisms.",
    achievements: [
      "Led cross-functional program delivery for a 200+ engineer organization across data engineering, ML, finance, and product teams",
      "Authored a 3-year organizational strategy influencing VP-level roadmap and investment decisions through data-driven planning",
      "Delivered platform automation improving end-to-end efficiency by 99% (3 weeks → 10 minutes)",
      "Owned annual budgeting and planning cycles, aligning funding, headcount, and initiative prioritization with Finance and Engineering leadership",
      "Established operational excellence frameworks across 150+ production systems, achieving 90% automation coverage and sustained YoY improvement",
      "Built executive reporting, metrics, and governance mechanisms to improve delivery predictability and decision velocity",
    ],
  },
  {
    company: "Charles Schwab",
    role: "Managing Director, Cybersecurity Portfolio",
    period: "2019 - 2021",
    location: "Westlake,TX",
    current: false,
    description:
      "Directed a cybersecurity portfolio spanning threat intelligence, incident response, and security operations in a regulated environment.",
    achievements: [
      "Managed a portfolio of 20+ cybersecurity programs with $50M+ combined budget",
      "Led threat intelligence, incident response, IAM, data protection, and appsec initiatives supporting protection of client assets",
      "Drove regulatory and audit readiness programs across security and technology stakeholders",
      "Built mechanisms for portfolio visibility, prioritization, and executive reporting",
      "Mentored and led multi-disciplinary teams across security program areas",
      "Advanced enterprise security architecture initiatives with measurable risk reduction outcomes",
    ],
  },
  {
    company: "Experian PLC",
    role: "Senior Director, Cybersecurity PMO",
    period: "2015 - 2019",
    location: "Allen, TX",
    current: false,
    description:
      "Directed cybersecurity PMO consisting of 20+ TPMs during a period of security transformation and breach remediation, establishing enterprise governance mechanisms.",
    achievements: [
      "Led breach remediation efforts and coordinated cross-functional execution across security, legal, and communications",
      "Established governance and delivery mechanisms to standardize execution across security initiatives",
      "Built executive reporting and metrics to drive prioritization and accountability",
      "Improved incident response effectiveness through operational mechanisms and process modernization",
      "Coordinated compliance and regulatory workstreams to support audit readiness",
      "Drove enterprise security transformation initiatives across identity, threat, and risk programs",
    ],
  },
  {
    company: "Experian PLC",
    role: "IT Director, Global Corporate Systems",
    period: "2011 - 2014",
    location: "Allen, TX",
    current: false,
    description:
      "Led a small engineering team to build enterprise platforms for portfolio management, resource planning, and organizational coordination across a global IT organization. Implemented global standards to ensure consistent executive reporting.",
    achievements: [
      "Led a 6-person development team delivering portfolio and resource planning platforms",
      "Implemented global reporting standards and templates for executive audiences",
      "Improved cross-organizational coordination through shared platforms and governance",
    ],
  },
  {
    company: "Experian PLC",
    role: "Sr. Manager, Head of IT PMO, North America",
    period: "2007 - 2011",
    location: "Costa Mesa, CA",
    current: false,
    description:
      "Led the North America IT PMO managing delivery across infrastructure, security, and business systems. Established governance standards and improved portfolio visibility across global programs.",
    achievements: [
      "Managed a 20-person TPM organization delivering 75+ global programs annually",
      "Established PMO governance standards and portfolio visibility mechanisms",
      "Improved prioritization and executive reporting across multiple domains",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <Briefcase className="h-4 w-4" />
              Professional Journey
            </div>
            <h1 className="heading-1 mt-6 text-neutral-900">Experience</h1>
            <p className="mt-6 text-lg text-neutral-400">
              15+ years of progressive leadership in technical program
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
            <div className="absolute left-0 top-0 hidden h-full w-px bg-neutral-200 md:left-1/2 md:block md:-translate-x-1/2" />

            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="heading-2 text-center text-neutral-900">
            Education
          </h2>

          <div className="mx-auto mt-12 max-w-md">
            <div className="card text-center">
              <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-3 text-primary-600">
                <Building2 className="h-6 w-6" />
              </div>

              <h3 className="heading-3 text-neutral-900">
                BA, Social Sciences
              </h3>

              <p className="mt-1 text-neutral-700">
                University of California, Irvine
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Concentration in Information Technology and Business Economics
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
