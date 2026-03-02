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
      <span className="font-body text-sm font-normal text-foreground tracking-normal uppercase">
        {label}
      </span>
      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-normal leading-none transition-transform duration-300 group-hover:translate-y-[-1px]">
        {value}
      </span>
      <p className="font-body text-sm text-muted leading-normal mt-1 max-w-[280px] sm:max-w-[320px]">
        {description}
      </p>
    </div>
  );
}
