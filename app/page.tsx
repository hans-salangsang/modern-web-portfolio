"use client";

import { motion } from "framer-motion";
import KpiCard from "./components/KpiCard";
import Button from "./components/Button";
import CvDownloadLink from "./components/CvDownloadLink";
import ContactForm from "./components/ContactForm";
import EmailLink from "./components/EmailLink";
import HoverRevealText from "./components/HoverRevealText";
import Pill from "./components/Pill";
import SkillsBento from "./components/SkillsBento";
import ScrollLinked from "./components/ScrollLinked";
import TypewriterText from "./components/TypewriterText";
import { experience, projects } from "./data";

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function isLight(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.116 * b;
  return luminance > 0.5;
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body">
      <ScrollLinked withContent={false} />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
      {/* Hero: full-screen, asymmetric */}
      <motion.section
        id="hero"
        className="relative w-full flex flex-col pb-16 sm:pb-20"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero: 3 columns — name (2 cols), role + description (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-x-6 sm:gap-x-8 lg:gap-x-10 w-full pt-32 sm:pt-40 md:pt-44 md:sm:pt-52 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 items-start md:items-center md:justify-items-center">
          <div className="min-w-0 text-left md:text-center">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.05em] leading-[0.98] capitalize">
              <span className="block text-foreground -mt-1 sm:-mt-2 -ml-0.5">
                Hans Salangsang
              </span>
            </h1>
          </div>
          <div className="min-w-0 text-left md:text-center flex flex-col items-start md:items-center mt-6 sm:mt-6 md:mt-6">
            <div className="flex flex-col gap-3">
              <p className="font-body text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground tracking-tight whitespace-nowrap">
                Full Stack Developer
              </p>
              <p className="font-body text-sm text-muted leading-normal max-w-[280px] sm:max-w-[320px] text-left md:text-center md:mx-auto">
                <span className="block whitespace-nowrap">
                  I build maintainable solutions and solve
                </span>
                <span className="block whitespace-nowrap">
                  problems relentlessly — so much,
                </span>
                <span className="block whitespace-nowrap">
                  I even debug in my dreams.
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 mt-6 md:mt-7 mb-4 justify-start md:justify-center">
              <Button href="#contact">Contact me</Button>
              <CvDownloadLink />
            </div>
          </div>
        </div>

      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="py-20 scroll-mt-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 flex flex-col items-start text-left md:items-center md:text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
            <HoverRevealText>About Me</HoverRevealText>
          </h2>
          <p className="text-sm max-w-[460px] sm:max-w-[560px] md:max-w-2xl text-muted-subtle mt-3">
            I&apos;m Hans Salangsang, a full stack developer with a strong
            foundation in enterprise systems, data, and automation. I enjoy
            designing and building end-to-end solutions that are clean,
            reliable, and make work more efficient and decisions easier.
          </p>
        </div>
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3 lg:gap-4">
          <div className="font-body text-foreground text-left py-6 px-5 sm:px-6 rounded-xl bg-accent/6 h-full">
            <span className="font-body text-base font-normal text-foreground">
              How I work
            </span>
            <p className="mt-3 font-body text-sm text-muted leading-normal">
              I like{" "}
              <span className="text-accent">
                breaking big problems into small, testable pieces
              </span>{" "}
              and leaving code in a better state than I found it. I care about{" "}
              <span className="text-accent">
                reliability, maintainability, and clear communication
              </span>{" "}
              with the people I work with so we stay aligned.
            </p>
          </div>
          <div className="font-body text-foreground text-left py-6 px-5 sm:px-6 rounded-xl bg-accent/6 h-full">
            <span className="font-body text-base font-normal text-foreground">
              What I enjoy building
            </span>
            <p className="mt-3 font-body text-sm text-muted leading-normal">
              I gravitate toward{" "}
              <span className="text-accent">
                dashboards, admin panels, ERP extensions, and automation tools
                that remove manual work
              </span>
              . I like owning features end-to-end and{" "}
              <span className="text-accent">
                making systems easier to use, understand, and maintain
              </span>
              .
            </p>
          </div>
          <div className="font-body text-foreground text-left py-6 px-5 sm:px-6 rounded-xl bg-accent/6 h-full">
            <span className="font-body text-base font-normal text-foreground">
              Outside of code
            </span>
            <p className="mt-3 font-body text-sm text-muted leading-normal">
              I&apos;m{" "}
              <span className="text-accent">
                motivated by growth and continuous learning
              </span>
              , so even outside of work I spend a lot of time exploring new
              technologies and how AI can level up development workflows. I
              also enjoy{" "}
              <span className="text-accent">
                arts, creative work, and unwinding with games and good music
              </span>
              .
            </p>
          </div>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="py-20 scroll-mt-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 flex flex-col items-start text-left md:items-center md:text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
            <HoverRevealText>Tech Stack</HoverRevealText>
          </h2>
          <p className="text-sm max-w-[320px] sm:max-w-[380px] md:max-w-none text-muted-subtle mt-3">
            Tools and tech I know. Still learning more.
          </p>
        </div>
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-12">
          <SkillsBento />
        </div>
      </motion.section>

      {/* Experience — table-like layout */}
      <motion.section
        id="experience"
        className="py-20 scroll-mt-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 flex flex-col items-start text-left md:items-center md:text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
            <HoverRevealText>Career Journey</HoverRevealText>
          </h2>
          <p className="text-sm max-w-[320px] sm:max-w-[380px] md:max-w-none text-muted-subtle mt-3">
            Where I've been and what I've learned along the way.
          </p>
        </div>
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-12">
          {/* Experience rows */}
          {experience.map((entry, i) => (
            <motion.div
              key={i}
              className="py-8 text-left border-b border-divider last:border-b-0"
              variants={itemFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.04 * i }}
            >
              {/* Mobile / stacked layout */}
              <div className="flex flex-col gap-1 md:hidden">
                <div className="font-body text-sm text-foreground">
                  <span className="font-normal">
                    {entry.title}, {entry.company}
                  </span>
                </div>
                <div className="font-body text-sm text-muted mt-1 leading-normal">
                  {entry.keywords.split(", ").join(" · ")}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Pill
                    className={
                      i === 0
                        ? "bg-accent text-background"
                        : "bg-accent/20 text-muted-subtle"
                    }
                  >
                    {entry.dates}
                  </Pill>
                  <span className="font-body text-sm text-muted-subtle">
                    {entry.type}
                  </span>
                </div>
              </div>

              {/* Desktop / table layout */}
              <div className="hidden md:grid md:grid-cols-4 md:gap-x-4 lg:gap-x-6 items-start">
                <div className="flex items-start">
                  <Pill
                    className={
                      i === 0
                        ? "bg-accent text-background"
                        : "bg-accent/20 text-muted-subtle"
                    }
                  >
                    {entry.dates}
                  </Pill>
                </div>
                <span className="font-body text-base font-normal text-foreground">
                  {entry.company}
                </span>
                <div className="font-body text-foreground">
                  <span className="block text-base">{entry.title}</span>
                  <div className="text-sm text-muted mt-0.5 leading-normal">
                    {entry.keywords.split(", ").map((kw, j) => (
                      <span key={j} className="block">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <span className="font-body text-sm text-muted-subtle">
                    {entry.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects — table-like layout */}
      <motion.section
        id="projects"
        className="py-20 scroll-mt-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 flex flex-col items-start text-left md:items-center md:text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
            <HoverRevealText>Featured Projects</HoverRevealText>
          </h2>
          <p className="text-sm max-w-[320px] sm:max-w-[380px] md:max-w-none text-muted-subtle mt-3">
            Some things I've built. Take a look and see what's possible.
          </p>
        </div>
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3 lg:gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="font-body text-foreground text-left py-6 px-5 sm:px-6 rounded-xl bg-accent/6 h-full"
                variants={itemFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 * i }}
              >
                <span className="block text-base font-normal">
                  {project.name}
                </span>
                <p className="text-sm text-muted mt-1 leading-normal">
                  {project.summary}
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                  {project.tech
                    .split(/[,·]/)
                    .map((token) => token.trim())
                    .filter(Boolean)
                    .map((techLabel, j) => (
                      <Pill key={j} className="bg-accent/20 text-accent">
                        {techLabel}
                      </Pill>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="pt-20 pb-32 sm:pb-40 scroll-mt-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 flex flex-col items-start text-left md:items-center md:text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em]">
            <HoverRevealText>Let's Connect</HoverRevealText>
          </h2>
          <p className="text-sm max-w-[320px] sm:max-w-[380px] md:max-w-none text-muted-subtle mt-3">
            I'm open to opportunities and collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-12 items-start">
          {/* Left: contact information */}
          <motion.div
            className="flex flex-col w-full"
            variants={itemFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex flex-col w-full">
              <div className="flex items-start gap-4 py-6 border-b border-divider">
                <span className="text-foreground mt-0.5 shrink-0" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <EmailLink email="hans.salangsang@gmail.com" className="font-body text-sm text-foreground hover:underline underline-offset-4 cursor-pointer">hans.salangsang@gmail.com</EmailLink>
              </div>
              <div className="flex items-start gap-4 py-6 border-b border-divider">
                <span className="text-foreground mt-0.5 shrink-0" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </span>
                <span className="font-body text-sm text-foreground">+63 945 976 5721</span>
              </div>
              <div className="flex items-start gap-4 py-6 border-b border-divider">
                <span className="text-foreground mt-0.5 shrink-0" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <a href="https://www.linkedin.com/in/hans-wilhelm-salangsang/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent hover:underline underline-offset-4">linkedin.com/in/hans-wilhelm-salangsang</a>
              </div>
              <div className="flex items-start gap-4 py-6 border-b border-divider">
                <span className="text-foreground mt-0.5 shrink-0" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <a href="https://github.com/hans-salangsang" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent hover:underline underline-offset-4">github.com/hans-salangsang</a>
              </div>
              <div className="flex items-start gap-4 py-6">
                <span className="text-foreground mt-0.5 shrink-0" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <span className="font-body text-sm text-foreground">Bulacan, Philippines</span>
              </div>
            </div>
          </motion.div>
          {/* Right: Send Message form */}
          <motion.div
            className="w-full rounded-xl p-6 sm:p-8 bg-accent/6"
            variants={itemFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
      </div>
    </div>
  );
}
