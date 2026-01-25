"use client";

import { useState } from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline({ experiences }: { experiences: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="heading-3 text-neutral-900">{exp.company}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-primary-600">Current</span>
                    )}
                  </div>
                  <p className="mt-1 font-medium text-neutral-700">{exp.role}</p>
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

              <div className="mt-4">
                <button
                    type="button"
                    aria-expanded={openIndex === index}
                    aria-controls={`exp-${index}-achievements`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    {openIndex === index ? "Hide achievements" : "Show achievements"}
                  </button>
              </div>

              <div className="mt-6">
                {openIndex === index ? (
                  <>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-600">Key Achievements</h4>
                    <ul id={`exp-${index}-achievements`} className="mt-3 space-y-2">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
