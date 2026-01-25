import { Metadata } from "next";
import Link from "next/link";
import {
  User,
  MapPin,
  Briefcase,
  Heart,
  Coffee,
  CookingPot,
  Dog,
  Music,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Rick Imai",
  description:
    "Learn more about Rick Imai - Senior Technical Program Manager with a passion for building secure, scalable enterprise platforms.",
};

const values = [
  {
    title: "Integrity",
    description:
      "Building trust through transparent communication and ethical decision-making in every interaction.",
  },
  {
    title: "Excellence",
    description:
      "Pursuing the highest standards in program delivery while continuously learning and improving.",
  },
  {
    title: "Collaboration",
    description:
      "Fostering inclusive environments where diverse perspectives drive better outcomes.",
  },
  {
    title: "Impact",
    description:
      "Focusing on meaningful results that create lasting value for organizations and teams.",
  },
];

const interests = [
  { icon: CookingPot, label: "Cooking" },
  { icon: Coffee, label: "Coffee Enthusiast" },
  { icon: Music, label: "Hip-Hop & Reggae" },
  { icon: BookOpen, label: "Leadership, Technology and Personal DevelopmentBooks" },
  { icon: Dog, Label: "My English Bulldog"}
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <User className="h-4 w-4" />
              Get to Know Me
            </div>
            <h1 className="heading-1 mt-6 text-neutral-900">About</h1>
            <p className="mt-6 text-lg text-neutral-400">
              A passionate leader dedicated to building secure, scalable
              platforms that protect and empower organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Photo placeholder */}
              <div className="lg:col-span-2">
                <div className="aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
                        <User className="h-12 w-12 text-primary-600" />
                      </div>
                      <p className="text-sm text-neutral-500">
                        Photo placeholder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-neutral-400">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span>Seattle, WA</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Briefcase className="h-5 w-5 text-primary-500" />
                    <span>AWS - Senior TPM</span>
                  </div>
                </div>
              </div>

              {/* Bio content */}
              <div className="lg:col-span-3">
                <h2 className="heading-2 text-neutral-900">Hello, I&apos;m Rick</h2>

                <div className="mt-6 space-y-4 text-neutral-400">
                  <p>
                    I&apos;m a Senior Technical Program Manager focused on security data platforms and cost governance. Most recently at Amazon Web Services, I’ve led platform-scale programs with ~$80M annual budget oversight—driving predictable delivery, operational rigor, and measurable efficiency gains across high-stakes security workloads.
                  </p>

                  <p>
                    Before AWS, I ran the cybersecurity portfolio at Charles Schwab as a Managing Director, coordinating 20+ programs and protecting trillions of dollars in client assets. Earlier, I built and led a cybersecurity PMO at Experian during a major security transformation, including breach remediation and enterprise governance.
                  </p>

                  <p>
                    My work sits at the intersection of security, data platforms, and business outcomes. I specialize in turning ambiguous problems into clear execution plans, aligning executive stakeholders, and building durable mechanisms—metrics, operating rhythms, and automation—that enable systems to scale sustainably while maintaining cost discipline.
                  </p>

                  <p>
                    Outside of work, I&apos;m usually with my wife and two daughters, hanging out with my English Bulldog, experimenting with BBQ, or building homelab projects and automations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Core Values</h2>
            <p className="mt-4 text-neutral-600">
              The principles that guide my work and leadership approach.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3 className="heading-3 text-neutral-900">{value.title}</h3>
                <p className="mt-2 text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Beyond Work</h2>
            <p className="mt-4 text-neutral-600">
              A few things that keep me balanced and inspired outside of work.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-3"
              >
                <interest.icon className="h-5 w-5 text-primary-600" />
                <span className="text-neutral-700">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-12">
              <div className="mb-6 inline-flex rounded-lg bg-neutral-100 p-3 text-primary-600">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="heading-2 text-neutral-900">My Leadership Philosophy</h2>
              <blockquote className="mt-6 border-l-2 border-primary-500 pl-6">
                <p className="text-lg italic text-neutral-600">
                  &quot;Great program management isn&apos;t about controlling
                  every detail—it&apos;s about creating clarity, removing
                  obstacles, and empowering teams to do their best work. The
                  most successful programs I&apos;ve led were ones where the
                  team felt ownership over the outcomes.&quot;
                </p>
              </blockquote>
              <p className="mt-6 text-neutral-600">
                I approach every program with a focus on people first. Technical
                challenges can always be solved, but building a culture of
                trust, accountability, and continuous improvement is what
                separates good programs from great ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-neutral-900">Let&apos;s Connect</h2>
            <p className="mt-4 text-neutral-600">
              I&apos;m always interested in discussing new opportunities,
              sharing insights, or simply connecting with fellow professionals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/experience" className="btn-secondary">
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
