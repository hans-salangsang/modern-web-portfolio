"use client";

import { useState } from "react";
const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  const [open, setOpen] = useState(false);

  const linkClasses =
    "block font-body text-sm font-normal text-foreground tracking-normal hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 focus:ring-offset-background rounded";

  return (
    <div className="relative flex items-center">
      {/* Desktop nav */}
      <ul className="hidden md:flex flex-wrap items-center gap-6 sm:gap-8">
        {navLinks.map((link) => (
          <li key={link.href + link.label}>
            <a href={link.href} className={linkClasses}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-divider text-foreground md:hidden focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 focus:ring-offset-background"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">
          {open ? "Close navigation" : "Open navigation"}
        </span>
        <span className="flex flex-col items-center justify-center gap-[3px]">
          <span className="h-[2px] w-5 rounded-full bg-foreground" />
          <span className="h-[2px] w-5 rounded-full bg-foreground" />
          <span className="h-[2px] w-5 rounded-full bg-foreground" />
        </span>
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute right-0 top-full mt-3 w-40 md:hidden transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <ul className="rounded-xl border border-divider bg-background/98 shadow-lg py-3 px-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className={linkClasses}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
