import { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Rick Imai",
  description:
    "Download Rick Imai's resume - Senior Technical Program Manager with 15+ years of experience in enterprise security and data platforms.",
};

export default function ResumePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/30 px-4 py-1.5 text-sm font-medium text-primary-400">
              <FileText className="h-4 w-4" />
              Professional Resume
            </div>
            <h1 className="heading-1 mt-6 text-white">Resume</h1>
            <p className="mt-6 text-lg text-neutral-400">
              A summary of my professional experience, education, and
              certifications.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/rick-imai-resume.pdf"
                download
                className="btn-primary"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <Link href="/contact" className="btn-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Resume Card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 sm:p-10 lg:p-12">
              {/* Header */}
              <div className="border-b border-neutral-800 pb-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Rick Imai
                </h2>
                <p className="mt-2 text-xl text-primary-400">
                  Senior Technical Program Manager
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Seattle, WA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    rick@rickimai.com
                  </span>
                  <a
                    href="https://linkedin.com/in/rickimai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors hover:text-primary-400"
                  >
                    <Linkedin className="h-4 w-4" />
                    linkedin.com/in/rickimai
                  </a>
                </div>

                <p className="mt-6 text-neutral-300">
                  Senior Technical Program Manager with 15+ years of experience
                  leading enterprise security, cybersecurity, and data platform
                  initiatives. Proven track record of managing $80M+ budgets,
                  building high-performing teams, and delivering complex
                  programs at scale.
                </p>
              </div>

              {/* Experience */}
              <div className="mt-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Professional Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* AWS */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-white">
                          Senior Technical Program Manager
                        </h4>
                        <p className="text-primary-400">
                          Amazon Web Services (AWS)
                        </p>
                      </div>
                      <span className="text-sm text-neutral-500">
                        2022 - Present
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Lead security data platforms with $80M annual budget
                        oversight
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Drive end-to-end program delivery for enterprise security
                        initiatives
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Implement program governance frameworks improving
                        delivery predictability by 40%
                      </li>
                    </ul>
                  </div>

                  {/* Charles Schwab */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-white">
                          Managing Director, Cybersecurity Portfolio
                        </h4>
                        <p className="text-primary-400">Charles Schwab</p>
                      </div>
                      <span className="text-sm text-neutral-500">
                        2018 - 2022
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Managed portfolio of 20+ cybersecurity programs with $50M+
                        combined budget
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Led threat intelligence and incident response initiatives
                        protecting $7T+ in client assets
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Built and mentored team of 25+ security professionals
                      </li>
                    </ul>
                  </div>

                  {/* Experian */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-white">
                          Senior Director, Cybersecurity PMO
                        </h4>
                        <p className="text-primary-400">Experian</p>
                      </div>
                      <span className="text-sm text-neutral-500">
                        2015 - 2018
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Led data breach remediation program with enterprise-wide
                        security improvements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Established enterprise cybersecurity PMO with
                        standardized governance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Drove security transformation reducing incident response
                        time by 60%
                      </li>
                    </ul>
                  </div>

                  {/* Bank of America */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-white">
                          Director, Technology Program Management
                        </h4>
                        <p className="text-primary-400">Bank of America</p>
                      </div>
                      <span className="text-sm text-neutral-500">
                        2012 - 2015
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Managed $30M+ portfolio of technology infrastructure
                        programs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Led enterprise identity and access management
                        modernization
                      </li>
                    </ul>
                  </div>

                  {/* Deloitte */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-white">
                          Senior Consultant, Technology Strategy
                        </h4>
                        <p className="text-primary-400">Deloitte Consulting</p>
                      </div>
                      <span className="text-sm text-neutral-500">
                        2009 - 2012
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Led technology transformation engagements for Fortune 500
                        clients
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        Specialized in security and risk management advisory
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mt-10 border-t border-neutral-800 pt-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white">
                      MBA, Technology Management
                    </h4>
                    <p className="text-primary-400">
                      University of California, Irvine
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Concentration in IT and Strategy
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      BS, Computer Science
                    </h4>
                    <p className="text-primary-400">
                      University of California, Los Angeles
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Minor in Business Economics
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-10 border-t border-neutral-800 pt-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-900/30 p-2 text-primary-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Certifications
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "PMP (Project Management Professional)",
                    "CISSP (Certified Information Systems Security Professional)",
                    "AWS Solutions Architect Associate",
                    "CISM (Certified Information Security Manager)",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="rounded-lg border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm text-neutral-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-10 border-t border-neutral-800 pt-8">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Strategic Planning",
                    "Portfolio Management",
                    "Cybersecurity",
                    "Cloud Platforms (AWS, Azure)",
                    "Data Platforms",
                    "Risk Management",
                    "Stakeholder Management",
                    "Team Leadership",
                    "Agile/Scrum",
                    "Vendor Management",
                    "Budget Management",
                    "Executive Communication",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="mt-8 text-center">
              <p className="mb-4 text-neutral-400">
                Download the full resume for more details
              </p>
              <a
                href="/rick-imai-resume.pdf"
                download
                className="btn-primary inline-flex"
              >
                <Download className="h-4 w-4" />
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
