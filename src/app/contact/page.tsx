"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rick.imai@gmail.com",
    href: "mailto:rick.imai@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rick-imai",
    href: "https://linkedin.com/in/rick-imai",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rickimai",
    href: "https://github.com/rickimai",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Irvine, CA",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        setStatus("error");
        setIsSubmitting(false);
        return;
      }

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-primary-600">
              <MessageSquare className="h-4 w-4" />
              Let&apos;s Connect
            </div>
            <h1 className="heading-1 mt-6 text-neutral-900">Contact</h1>
            <p className="mt-6 text-lg text-neutral-400">
              Interested in working together or just want to say hello? I&apos;d
              love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="heading-3 text-neutral-900">Get in Touch</h2>
                <p className="mt-4 text-neutral-400">
                  Whether you have a question, want to discuss an opportunity,
                  or just want to connect, feel free to reach out through any of
                  the channels below.
                </p>

                <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <h3 className="font-semibold text-neutral-900">I&apos;m currently exploring Staff TPM and Director-level opportunities.</h3>
                  <div className="mt-3 text-sm text-neutral-700 space-y-1">
                    <div>📧 Email: rick.imai@gmail.com</div>
                    <div>💼 LinkedIn: linkedin.com/in/rick-imai</div>
                    <div>📍 Location: Irvine, CA (open to remote)</div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-primary-600">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-600">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-neutral-900 transition-colors hover:text-primary-600"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                    Availability
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    I typically respond within 24-48 hours. For urgent matters,
                    LinkedIn is often the quickest way to reach me.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="card">
                  <h2 className="heading-3 text-neutral-900">Send a Message</h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </p>

                  {status === "success" && (
                    <div className="mt-6 flex items-center gap-3 rounded-lg border border-green-600 bg-green-50 p-4 text-green-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        Thanks for your message! I&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-6 flex items-center gap-3 rounded-lg border border-red-600 bg-red-50 p-4 text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        Something went wrong. Please try again or reach out
                        directly via email.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-neutral-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-neutral-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-neutral-600"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="What&apos;s this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-neutral-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding border-t border-neutral-200">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-2 text-center text-neutral-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: "Are you open to new opportunities?",
                  a: <>
                    I&apos;m always interested in hearing about interesting opportunities, particularly in senior technical program management, security leadership, or executive roles at innovative companies.
                  </>,
                },
                {
                  q: "Do you do consulting or advisory work?",
                  a: "Yes, I occasionally take on advisory roles and consulting engagements, particularly in cybersecurity program strategy and enterprise transformation.",
                },
                {
                  q: "Are you available for speaking engagements?",
                  a: "I enjoy sharing knowledge at conferences and events on topics including cybersecurity program management, technical leadership, and enterprise security transformation.",
                },
                {
                  q: <>What&apos;s the best way to reach you?</>,
                  a: "For professional inquiries, LinkedIn is the best channel. For everything else, the contact form above or email works great.",
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="font-semibold text-neutral-900">{faq.q}</h3>
                  <p className="mt-2 text-neutral-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
