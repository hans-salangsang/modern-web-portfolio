"use client";

import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
};

export default function Pill({ children, className }: PillProps) {
  const base =
    "inline-flex items-center rounded-md px-2.5 py-0.5 font-body text-xs font-medium tracking-[0.06em] uppercase";

  return <span className={className ? `${base} ${className}` : base}>{children}</span>;
}

