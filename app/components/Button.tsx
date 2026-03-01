import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
};

const filledClasses =
  "inline-block bg-white text-neutral-900 px-4 py-2 font-body text-sm font-medium tracking-normal rounded-full transition-all duration-200 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background";

const outlineClasses =
  "inline-block bg-neutral-800 text-white px-4 py-2 font-body text-sm font-medium tracking-normal rounded-full transition-all duration-200 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-background";

export default function Button({
  href,
  children,
  variant = "filled",
  className = "",
}: ButtonProps) {
  const baseClasses = variant === "outline" ? outlineClasses : filledClasses;
  return (
    <a href={href} className={`${baseClasses} ${className}`.trim()}>
      {children}
    </a>
  );
}
