import KpiCard from "./components/KpiCard";
import Button from "./components/Button";
import CvDownloadLink from "./components/CvDownloadLink";

const skills: Record<string, string[]> = {
  Frontend: [
    "React",
    "NextJS",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
  ],
  Backend: [
    "Node.js",
    "PHP",
    "Laravel",
    "Java",
    "C#",
    "Python",
  ],
  Database: ["MySQL", "Microsoft SQL Server"],
  DevOps: ["Git", "GitHub", "GitLab", "Vercel"],
};

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const techMeta: Record<string, { icon: string; color: string }> = {
  React: { icon: "react", color: "#61DAFB" },
  NextJS: { icon: "nextjs", color: "#000000" },
  Angular: { icon: "angular", color: "#DD0031" },
  JavaScript: { icon: "javascript", color: "#F7DF1E" },
  TypeScript: { icon: "typescript", color: "#3178C6" },
  "Tailwind CSS": { icon: "tailwindcss", color: "#06B6D4" },
  Bootstrap: { icon: "bootstrap", color: "#7952B3" },
  "Material UI": { icon: "materialui", color: "#007FFF" },
  "Node.js": { icon: "nodejs", color: "#339933" },
  PHP: { icon: "php", color: "#777BB4" },
  Laravel: { icon: "laravel", color: "#FF2D20" },
  Java: { icon: "java", color: "#ED8B00" },
  "C#": { icon: "csharp", color: "#239120" },
  Python: { icon: "python", color: "#3776AB" },
  MySQL: { icon: "mysql", color: "#4479A1" },
  "Microsoft SQL Server": { icon: "microsoftsqlserver", color: "#CC2927" },
  Git: { icon: "git", color: "#F05032" },
  GitHub: { icon: "github", color: "#24292e" },
  GitLab: { icon: "gitlab", color: "#FC6D26" },
  Vercel: { icon: "vercel", color: "#000000" },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
      {/* Hero: full-screen, asymmetric */}
      <section
        id="hero"
        className="relative w-full flex flex-col"
      >
        {/* Hero: 3 columns — name (2 cols), role + description (1 col) */}
        <div className="grid grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-10 w-full pt-44 sm:pt-52 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 items-stretch">
          <div className="col-span-2 min-w-0">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.05em] leading-[0.98] capitalize">
              <span className="block">Hans</span>
              <span className="block -mt-1 sm:-mt-2 ml-0.5">Salangsang</span>
            </h1>
          </div>
          <div className="col-span-1 min-w-0 text-right flex flex-col items-end">
            <div>
              <p className="font-body text-sm font-normal text-foreground tracking-normal uppercase whitespace-nowrap">
                Full Stack Developer
              </p>
              <p className="font-body text-sm text-foreground/60 leading-normal mt-1 max-w-[280px] sm:max-w-[320px]">
                I build maintainable solutions and solve problems relentlessly
                — so much,
                <br />
                I even debug in my dreams.
              </p>
            </div>
            <div className="flex-1 min-h-[1rem]" aria-hidden />
            <div className="flex flex-row items-center gap-3 mt-6 mb-4">
              <Button href="#contact">Contact me</Button>
              <CvDownloadLink />
            </div>
          </div>
        </div>

        {/* KPI block */}
        <div className="grid grid-cols-3 gap-x-10 sm:gap-x-16 lg:gap-x-20 gap-y-14 sm:gap-y-20 pt-52 pb-8 sm:pb-10 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12">
          <KpiCard
            className="col-start-1"
            label="Years of experience"
            value="3+"
            description="I have been building full-stack applications, dashboards, and analytical tools across different industries."
          />
          <KpiCard
            className="col-start-2"
            label="KPI label"
            value="0"
            description="Short description or metric summary goes here."
          />
          <KpiCard
            className="col-start-1"
            label="KPI label"
            value="0"
            description="Short description or metric summary goes here."
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="grid grid-cols-2 gap-x-0 w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 items-start">
          <p className="col-start-1 text-sm max-w-[320px] sm:max-w-[380px] text-foreground/60 text-left">
            Add your skills and technologies here.
          </p>
          <h2 className="col-start-2 font-heading text-3xl">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-0 w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 mt-8 items-start">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="col-start-2 py-8 text-left overflow-x-auto border-b border-foreground/15 last:border-b-0"
            >
              <span className="font-body text-sm font-normal text-foreground tracking-normal uppercase block mb-5">
                {category}
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-2 min-w-0 items-center leading-loose">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center rounded-full px-2.5 py-1 font-body text-sm font-normal text-foreground/60 bg-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience — table-like layout */}
      <section id="experience" className="py-20">
        <div className="flex flex-wrap items-start justify-between gap-6 w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12">
          <h2 className="font-heading text-3xl">Experience</h2>
          <p className="text-sm max-w-[320px] sm:max-w-[380px] text-foreground/60 text-right">
            My technical journey and growth so far
          </p>
        </div>
        <div className="w-full pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 overflow-x-auto mt-8">
          {/* Experience rows */}
          {[
            {
              company: "Infor PSSC, Inc.",
              dates: "Jun 2025 – Mar 2026",
              title: "Software Engineer",
              keywords: "Analytics, Automation, Data Modeling",
              type: "Full-time",
            },
            {
              company: "Infor PSSC, Inc.",
              dates: "Aug 2023 – May 2025",
              title: "Technical Consultant",
              keywords: "Integration, Development, Support",
              type: "Full-time",
            },
            {
              company: "LexMeet, Inc.",
              dates: "Mar 2023 – Jun 2023",
              title: "Web Developer Intern",
              keywords: "Full Stack, Leadership, Collaboration",
              type: "Internship",
            },
          ].map((entry, i) => (
            <div
              key={i}
              className="grid min-w-[560px] grid-cols-[11rem_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,7rem)] py-8 text-left items-start [column-gap:0] border-b border-foreground/15 last:border-b-0"
            >
              <span className="font-body text-xs text-foreground/60 uppercase pr-4">
                {entry.dates}
              </span>
              <span className="font-body text-base font-normal text-foreground pl-16 pr-0">
                {entry.company}
              </span>
              <div className="font-body text-foreground -ml-24">
                <span className="block text-base">{entry.title}</span>
                <div className="text-sm text-foreground/60 mt-0.5 leading-normal">
                  {entry.keywords.split(", ").map((kw, j) => (
                    <span key={j} className="block">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-body text-xs text-foreground/60 text-right pl-4 uppercase">
                {entry.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl ml-6 sm:ml-12 lg:ml-16">
          <h2 className="font-heading text-3xl">Projects</h2>
          <p className="mt-4 text-base max-w-[600px]">
            Add your project cards and links here.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl ml-6 sm:ml-12 lg:ml-16">
          <h2 className="font-heading text-3xl">Contact</h2>
          <p className="mt-4 text-base max-w-[600px]">
            Add your contact form or social links here.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
