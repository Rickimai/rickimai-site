"use client";

import { useState } from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface Experience {
  company: string;
  role?: string;
  period?: string;
  location?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  badges?: string[];
}

export default function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const DEFAULT_VISIBLE = 2;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => {
        const achievements: string[] = Array.isArray(exp.achievements)
          ? exp.achievements
          : [];

        const isOpen = openIndex === index;
        const alwaysVisible = achievements.slice(0, DEFAULT_VISIBLE);
        const hidden = achievements.slice(DEFAULT_VISIBLE);

        const hasHidden = hidden.length > 0;
        const visibleList = isOpen ? achievements : alwaysVisible;

        return (
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

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                    {exp.location}
                  </span>
                </div>
                {Array.isArray(exp.badges) && exp.badges.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.badges.map((badge: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                {/* debug removed */}

                <p className="mt-4 text-neutral-600">{exp.description}</p>

                {/* Achievements (top 3 always visible) */}
                {visibleList.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
                      Key Achievements
                    </h4>

                    <ul
                      id={`exp-${index}-achievements`}
                      className="mt-3 space-y-2"
                    >
                      {visibleList.map((achievement: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-neutral-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Toggle only if there are more than DEFAULT_VISIBLE */}
                    {hasHidden && (
                      <div className="mt-4">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`exp-${index}-achievements`}
                          onClick={() =>
                            setOpenIndex(isOpen ? null : index)
                          }
                          className="text-sm text-primary-600 hover:text-primary-700"
                        >
                          {isOpen
                            ? "Show less"
                            : `Show all (${hidden.length} more)`}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
