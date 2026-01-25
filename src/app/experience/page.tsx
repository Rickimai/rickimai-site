import { Metadata } from "next";
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

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
      "Led security data platforms with $80M annual budget oversight, ensuring efficient resource allocation and cost governance",
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
      "Led threat intelligence and incident response initiatives supporting protection of client assets",
      "Drove regulatory and audit readiness programs across security and technology stakeholders",
      "Built mechanisms for portfolio visibility, prioritization, and executive reporting",
      "Mentored and led multi-disciplinary teams across security program areas",
      "Advanced enterprise security architecture initiatives with measurable risk reduction outcomes",
    ],
  },
  {
    company: "Experian",
    role: "Senior Director, Cybersecurity PMO",
    period: "2015 - 2019",
    location: "Costa Mesa, CA",
    current: false,
    description:
      "Directed cybersecurity PMO during a period of security transformation and breach remediation, establishing enterprise governance mechanisms.",
    achievements: [
      "Led breach remediation efforts and coordinated cross-functional execution across security, legal, and communications",
      "Established governance and delivery mechanisms to standardize execution across security initiatives",
      "Built executive reporting and metrics to drive prioritization and accountability",
      "Improved incident response effectiveness through operational mechanisms and process modernization",
      "Coordinated compliance and regulatory workstreams to support audit readiness",
      "Drove enterprise security transformation initiatives across identity, threat, and risk programs",
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

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-4 border-neutral-100 bg-primary-500 md:left-1/2 md:block md:-translate-x-1/2" />

                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <div className="card">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="heading-3 text-neutral-900">
                              {exp.company}
                            </h3>
                            {exp.current && (
                                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-primary-600">
                                Current
                              </span>
                            )}
                          </div>
                            <p className="mt-1 font-medium text-neutral-700">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="mt-4 text-neutral-600">{exp.description}</p>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
                          Key Achievements
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-neutral-600"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
