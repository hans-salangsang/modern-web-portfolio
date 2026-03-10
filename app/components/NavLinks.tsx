"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const linkClasses =
    "block font-body text-sm font-normal text-foreground tracking-normal hover:text-accent focus:outline-none rounded";

  const desktopHoverProps = isDesktop
    ? {
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.97, y: 0 },
      }
    : {};

  return (
    <ul className="hidden md:flex flex-wrap items-center gap-6 sm:gap-8">
      {navLinks.map((link) => (
        <li key={link.href + link.label}>
          <motion.a
            href={link.href}
            className={linkClasses}
            {...desktopHoverProps}
          >
            {link.label}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

