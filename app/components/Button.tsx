"use client";

import { motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
  variant?: "filled" | "outline";
  className?: string;
  download?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

const filledClasses =
  "inline-block cursor-pointer bg-foreground text-background px-4 py-2 font-body text-sm font-semibold tracking-normal rounded-full whitespace-nowrap hover:bg-foreground/90 focus:outline-none";

const outlineClasses =
  "inline-block cursor-pointer bg-background border border-accent text-foreground px-4 py-2 font-body text-sm font-medium tracking-normal rounded-full whitespace-nowrap hover:bg-accent/10 focus:outline-none";

export default function Button({
  href,
  type = "button",
  children,
  variant = "filled",
  className = "",
  download,
  onClick,
}: ButtonProps) {
  const baseClasses = variant === "outline" ? outlineClasses : filledClasses;
  const classes = `${baseClasses} ${className}`.trim();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const desktopMotionProps = isDesktop
    ? {
        whileHover: { scale: 1.04, y: -2 },
        whileTap: { scale: 0.98, y: 0 },
      }
    : {};

  if (href != null) {
    return (
      <motion.a
        href={href}
        className={classes}
        download={download}
        onClick={onClick}
        {...desktopMotionProps}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...desktopMotionProps}
    >
      {children}
    </motion.button>
  );
}
