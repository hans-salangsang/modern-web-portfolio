"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills } from "../data";
import Pill from "./Pill";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techMeta: Record<string, { icon: string }> = {
  React: { icon: "react" },
  NextJS: { icon: "nextjs" },
  Angular: { icon: "angular" },
  JavaScript: { icon: "javascript" },
  TypeScript: { icon: "typescript" },
  "Tailwind CSS": { icon: "tailwindcss" },
  Bootstrap: { icon: "bootstrap" },
  "Material UI": { icon: "materialui" },
  "Node.js": { icon: "nodejs" },
  PHP: { icon: "php" },
  Laravel: { icon: "laravel" },
  Java: { icon: "java" },
  "C#": { icon: "csharp" },
  Python: { icon: "python" },
  MySQL: { icon: "mysql" },
  "Microsoft SQL Server": { icon: "microsoftsqlserver" },
  Git: { icon: "git" },
  GitHub: { icon: "github" },
  GitLab: { icon: "gitlab" },
  Vercel: { icon: "vercel" },
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

  useEffect(() => {
    if (items.length <= 1) return;

    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % items.length);
    }, 2600);

    return () => clearInterval(id);
  }, [items.length]);

  const tech = items[current];
  const meta = techMeta[tech] as { icon: string } | undefined;
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
      className={`relative flex flex-col justify-between rounded-2xl bg-accent/6 px-5 py-4 sm:px-6 sm:py-5 ${sizeClass}`}
      variants={itemFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.04 * index }}
    >
      <div className="flex items-start justify-between">
        <Pill className="bg-accent/20 text-accent">{category}</Pill>
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden">
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
              <div
                aria-hidden
                className="h-10 w-10 sm:h-12 sm:w-12 bg-foreground"
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
            ) : (
              <span className="font-heading text-3xl sm:text-4xl text-foreground">
                {tech.charAt(0)}
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="flex-1 min-h-[2.4rem] flex items-end">
          <span className="font-body text-base text-foreground leading-snug">
            {tech}
          </span>
        </div>
        {items.length > 1 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-accent/50 bg-background/40 hover:bg-background/60 transition-colors"
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
              className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-accent/50 bg-background/40 hover:bg-background/60 transition-colors"
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
    </motion.div>
  );
}

export default function SkillsBento() {
  const skillEntries = Object.entries(skills);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[200px] gap-2 sm:gap-3 lg:gap-4 w-full">
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

