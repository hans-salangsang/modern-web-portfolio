import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
};

const filledClasses =
  "inline-block cursor-pointer bg-foreground text-background px-4 py-2 font-body text-sm font-semibold tracking-normal rounded-full transition-all duration-200 hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-background";

const outlineClasses =
  "inline-block cursor-pointer bg-transparent border border-foreground/30 text-foreground px-4 py-2 font-body text-sm font-medium tracking-normal rounded-full transition-all duration-200 hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 focus:ring-offset-background";

export default function Button({
  href,
  type = "button",
  children,
  variant = "filled",
  className = "",
}: ButtonProps) {
  const baseClasses = variant === "outline" ? outlineClasses : filledClasses;
  const classes = `${baseClasses} ${className}`.trim();

  if (href != null) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
