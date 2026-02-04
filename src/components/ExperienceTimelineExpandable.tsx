"use client";

import { useMemo, useState } from "react";
import ExperienceTimeline from "./ExperienceTimeline";

type Experience = {
  company: string;
  role?: string;
  period?: string;
  location?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  badges?: string[];
};

export default function ExperienceTimelineExpandable({
  experiences,
  initialCount = 3,
}: {
  experiences: Experience[];
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(() => {
    if (expanded) return experiences;
    return experiences.slice(0, initialCount);
  }, [expanded, experiences, initialCount]);

  const hiddenCount = Math.max(0, experiences.length - visible.length);

  return (
    <div>
      <ExperienceTimeline experiences={visible} />

      {experiences.length > initialCount && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
          >
            {expanded ? "Show less" : `Show full timeline (${hiddenCount} more)`}
          </button>
        </div>
      )}
    </div>
  );
}
