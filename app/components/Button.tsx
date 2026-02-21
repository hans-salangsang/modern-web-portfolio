import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
};

const filledClasses =
  "inline-block bg-foreground text-background px-6 py-3 font-body text-sm font-bold tracking-[0.08em] uppercase rounded-md transition-all duration-200 hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background";

const outlineClasses =
  "inline-block border-2 border-foreground text-foreground bg-transparent px-6 py-3 font-body text-sm font-bold tracking-[0.08em] uppercase rounded-md transition-all duration-200 hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background";

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
