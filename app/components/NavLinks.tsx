const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
      {navLinks.map((link) => (
        <li key={link.href + link.label}>
          <a
            href={link.href}
            className="font-body text-sm font-normal text-foreground tracking-normal hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 focus:ring-offset-background rounded"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
