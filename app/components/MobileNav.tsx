"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { navLinks } from "./NavLinks";

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const linkClasses =
    "block font-body text-sm font-normal text-foreground tracking-normal hover:text-muted focus:outline-none rounded";

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        className="fixed bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-divider bg-background/95 text-accent shadow-lg focus:outline-none z-[70]"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">
          {open ? "Close navigation" : "Open navigation"}
        </span>
        <motion.svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          initial={false}
          animate={open ? "open" : "closed"}
        >
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </motion.svg>
      </button>

      <div
        className={`fixed bottom-20 right-4 w-44 rounded-xl border border-divider bg-background/98 shadow-lg transition-all duration-150 origin-bottom-right z-[70] ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-1 pointer-events-none"
        }`}
      >
        <ul className="py-3 px-3 flex flex-col gap-1 items-end text-right">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className={linkClasses}
                onClick={() => setOpen(false)}
              >
                <span className="block py-1">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

