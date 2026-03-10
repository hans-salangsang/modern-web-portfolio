"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../data";
import Pill from "./Pill";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type TechMeta = {
  icon: string;
  glow?: string; // customizable glow color per technology
};

const techMeta: Record<string, TechMeta> = {
  React: { icon: "react", glow: "#61DAFB" },
  NextJS: { icon: "nextjs", glow: "#FFFFFF" },
  Angular: { icon: "angular", glow: "#DD0031" },
  JavaScript: { icon: "javascript", glow: "#FACC15" },
  TypeScript: { icon: "typescript", glow: "#3B82F6" },
  "Tailwind CSS": { icon: "tailwindcss", glow: "#22D3EE" },
  Bootstrap: { icon: "bootstrap", glow: "#A855F7" },
  "Material UI": { icon: "materialui", glow: "#0EA5E9" },
  "Node.js": { icon: "nodejs", glow: "#22C55E" },
  PHP: { icon: "php", glow: "#8B5CF6" },
  Laravel: { icon: "laravel", glow: "#F97316" },
  Java: { icon: "java", glow: "#EF4444" },
  "C#": { icon: "csharp", glow: "#8B5CF6" },
  Python: { icon: "python", glow: "#EAB308" },
  MySQL: { icon: "mysql", glow: "#0EA5E9" },
  "Microsoft SQL Server": { icon: "microsoftsqlserver", glow: "#EF4444" },
  Git: { icon: "git", glow: "#F97316" },
  GitHub: { icon: "github", glow: "#FFFFFF" },
  GitLab: { icon: "gitlab", glow: "#F97316" },
  Vercel: { icon: "vercel", glow: "#FFFFFF" },
};

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const logoVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: 24 * direction,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: -24 * direction,
  }),
};

type SkillCategoryCardProps = {
  category: string;
  items: string[];
  index: number;
};

function SkillCategoryCard({ category, items, index }: SkillCategoryCardProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (items.length <= 1 || !isDesktop) return;

    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % items.length);
    }, 2600);

    return () => clearInterval(id);
  }, [items.length, isDesktop]);

  const tech = items[current];
  const meta = techMeta[tech] as TechMeta | undefined;
  const iconVariant =
    meta &&
    ["nextjs", "javascript", "typescript", "csharp", "php", "bootstrap", "nodejs"].includes(
      meta.icon,
    )
      ? "plain"
      : "original";
  const iconSrc = meta
    ? `${DEVICON_BASE}/${meta.icon}/${meta.icon}-${iconVariant}.svg`
    : null;
  const iconColorSrc = meta
    ? `${DEVICON_BASE}/${meta.icon}/${meta.icon}-original.svg`
    : null;
  const glowColor = meta?.glow;

  const sizeClass =
    index === 0
      ? "lg:col-span-2 lg:row-span-2"
      : index === 1
      ? "lg:col-span-2"
      : "";

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <motion.div
      className={`group relative flex flex-col rounded-2xl bg-accent/6 py-6 px-5 sm:px-6 ${sizeClass}`}
      variants={itemFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.04 * index }}
    >
      <div className="flex items-start justify-between gap-2 md:min-h-[2rem] lg:min-h-0">
        <span className="font-body text-base font-normal text-foreground">
          {category}
        </span>
        {items.length > 1 && (
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-accent/50 bg-background/40 hover:bg-background/60 transition-colors cursor-pointer"
              aria-label="Previous technology"
            >
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15.5 5.5 9 12l6.5 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-accent/50 bg-background/40 hover:bg-background/60 transition-colors cursor-pointer"
              aria-label="Next technology"
            >
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.5 5.5 15 12l-6.5 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {/* Desktop: show carousel icon + glow */}
      <div className="mt-4 hidden md:flex items-center justify-center h-20 md:h-24 lg:h-auto lg:flex-1 lg:min-h-[7rem]">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={tech}
            custom={direction}
            variants={logoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {iconSrc ? (
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                {glowColor && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl sm:blur-2xl saturate-150 brightness-125 mix-blend-screen transition-transform transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-150"
                    style={{ backgroundColor: glowColor }}
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-foreground transition-opacity duration-200 group-hover:opacity-0"
                  style={{
                    WebkitMaskImage: `url(${iconSrc})`,
                    maskImage: `url(${iconSrc})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
                <img
                  src={iconColorSrc ?? iconSrc}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-contain opacity-0 saturate-150 brightness-110 contrast-110 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
            ) : (
              <span className="font-heading text-3xl sm:text-4xl text-foreground">
                {tech.charAt(0)}
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 lg:mt-auto lg:justify-start">
        {items.map((item, idx) => {
          const isActive = item === tech;
          const pillClasses = isActive
            ? "bg-accent text-background"
            : "bg-accent/20 text-accent";

          const handleClick = () => {
            if (idx === current) return;
            setDirection(idx > current ? 1 : -1);
            setCurrent(idx);
          };

          return (
            <button
              key={item}
              type="button"
              onClick={handleClick}
              className="focus:outline-none cursor-pointer"
            >
              <Pill className={pillClasses}>{item}</Pill>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function SkillsBentoPills() {
  const skillEntries = Object.entries(skills);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-3 sm:gap-3 lg:gap-4 w-full">
      {skillEntries.map(([category, items], index) => (
        <SkillCategoryCard
          key={category}
          category={category}
          items={items}
          index={index}
        />
      ))}
    </div>
  );
}


