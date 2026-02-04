import React from "react";
import clsx from "clsx";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Callout({ children, className }: CalloutProps) {
  return (
    <div
      className={clsx(
        "pl-4 border-l-4 border-accent bg-neutral-50 text-neutral-900 py-2 my-4 text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
