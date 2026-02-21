import { type ReactNode } from "react";

type KpiCardProps = {
  label: string;
  value: ReactNode;
  description: string;
  className?: string;
};

export default function KpiCard({
  label,
  value,
  description,
  className = "",
}: KpiCardProps) {
  return (
    <div
      className={`group flex flex-col items-start text-left gap-3 min-w-0 ${className}`.trim()}
    >
      <span className="font-body text-sm font-medium text-foreground tracking-[0.08em] uppercase">
        {label}
      </span>
      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter leading-none transition-transform duration-300 group-hover:translate-y-[-1px]">
        {value}
      </span>
      <p className="font-body text-sm text-foreground/75 leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
}
