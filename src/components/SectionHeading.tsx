import React from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "heading-2 relative pb-2",
        className
      )}
    >
      {children}
      <span
        className="absolute left-0 bottom-0 h-0.5 w-8 bg-accent rounded"
        aria-hidden="true"
      />
    </h2>
  );
}
