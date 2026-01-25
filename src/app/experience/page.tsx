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
    "Professional experience spanning 15+ years in technical program management at AWS, Charles Schwab, and Experian.",
};

const experiences = [
  {
    company: "Amazon Web Services (AWS)",
    role: "Senior Technical Program Manager",
    period: "2022 - Present",
    location: "Seattle, WA",
    current: true,
    description:
      "Leading security data platforms and enterprise-wide security initiatives with significant budget oversight and cross-functional program delivery.",
    achievements: [
      "Lead security data platforms with $80M annual budget oversight, ensuring efficient resource allocation and ROI tracking",
      "Drive end-to-end program delivery for enterprise security initiatives spanning multiple AWS organizations",
      "Establish and maintain strategic partnerships with engineering, security, and business stakeholders",
      "Develop and execute multi-year roadmaps aligning security investments with business objectives",
      "Implement program governance frameworks improving delivery predictability by 40%",
      "Champion data-driven decision making through comprehensive metrics and reporting systems",
    ],
  },
  {
    company: "Charles Schwab",
    role: "Managing Director, Cybersecurity Portfolio",
    period: "2018 - 2022",
    location: "San Francisco, CA",
    current: false,
    description:
      "Directed comprehensive cybersecurity portfolio encompassing threat intelligence, incident response, and security operations for one of the largest financial services firms.",
    achievements: [
      "Managed portfolio of 20+ cybersecurity programs with combined budget exceeding $50M",
      "Led threat intelligence and incident response initiatives protecting $7T+ in client assets",
      "Established security operations center (SOC) modernization program improving detection capabilities",
      "Drove regulatory compliance programs ensuring adherence to SEC, FINRA, and state requirements",
      "Built and mentored team of 25+ security professionals across multiple disciplines",
      "Implemented zero-trust architecture initiatives across enterprise infrastructure",
    ],
  },
  {
    company: "Experian",
    role: "Senior Director, Cybersecurity PMO",
    period: "2015 - 2018",
    location: "Costa Mesa, CA",
    current: false,
    description:
      "Directed cybersecurity PMO during a critical period of security transformation and data breach remediation, establishing enterprise-wide security frameworks.",
    achievements: [
      "Led data breach remediation program ensuring comprehensive security improvements",
      "Established enterprise cybersecurity PMO with standardized governance and delivery frameworks",
      "Managed portfolio of security initiatives across identity protection, threat management, and compliance",
      "Drove security transformation reducing incident response time by 60%",
      "Implemented security metrics and reporting frameworks for executive leadership",
      "Coordinated with legal, communications, and regulatory teams on incident response",
    ],
  },
  {
    company: "Bank of America",
    role: "Director, Technology Program Management",
    period: "2012 - 2015",
    location: "Charlotte, NC",
    current: false,
    description:
      "Directed technology program management for enterprise infrastructure and security initiatives supporting global banking operations.",
    achievements: [
      "Managed $30M+ portfolio of technology infrastructure programs",
      "Led enterprise identity and access management modernization initiative",
      "Drove cloud adoption strategy and implementation programs",
      "Established program management standards adopted across technology organization",
      "Coordinated cross-functional delivery across 10+ technology teams",
    ],
  },
  {
    company: "Deloitte Consulting",
    role: "Senior Consultant, Technology Strategy",
    period: "2009 - 2012",
    location: "Los Angeles, CA",
    current: false,
    description:
      "Delivered technology strategy and program management consulting services to Fortune 500 clients across financial services and technology sectors.",
    achievements: [
      "Led technology transformation engagements for financial services clients",
      "Developed program management methodologies adopted firm-wide",
      "Managed client relationships and delivery teams of 15+ consultants",
      "Drove business development resulting in $5M+ in new engagements",
      "Specialized in security and risk management advisory services",
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
          <h2 className="heading-2 text-center text-neutral-900">Education</h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-3 text-primary-600">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="heading-3 text-neutral-900">MBA, Technology Management</h3>
              <p className="mt-1 text-neutral-700">University of California, Irvine</p>
              <p className="mt-2 text-sm text-neutral-500">
                Concentration in Information Technology and Strategy
              </p>
            </div>

            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-3 text-primary-600">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="heading-3 text-neutral-900">
                BS, Computer Science
              </h3>
              <p className="mt-1 text-neutral-700">
                University of California, Los Angeles
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Minor in Business Economics
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
