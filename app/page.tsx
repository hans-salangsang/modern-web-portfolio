import KpiCard from "./components/KpiCard";
import Button from "./components/Button";
import CvDownloadLink from "./components/CvDownloadLink";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
      {/* Hero: full-screen, asymmetric */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col"
      >
        {/* Hero: 3 columns — name (2 cols), role + description (1 col) */}
        <div className="grid grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-10 w-full pt-44 sm:pt-52 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12 items-start">
          <div className="col-span-2 min-w-0">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.05em] leading-[0.98] uppercase">
              <span className="block">Hans</span>
              <span className="block -mt-1 sm:-mt-2 ml-0.5">Salangsang</span>
            </h1>
          </div>
          <div className="col-span-1 min-w-0 text-right flex flex-col items-end">
            <p className="font-body text-sm font-medium text-foreground tracking-[0.08em] uppercase whitespace-nowrap">
              Full Stack Developer
            </p>
            <p className="font-body text-sm text-foreground/75 leading-relaxed mt-3 max-w-[280px] sm:max-w-[320px]">
              I build maintainable solutions and solve problems relentlessly
              — so much,
              <br />
              I even debug in my dreams.
            </p>
          </div>
        </div>

        {/* KPI block */}
        <div className="grid grid-cols-3 gap-x-10 sm:gap-x-16 lg:gap-x-20 gap-y-14 sm:gap-y-20 pt-40 pb-8 sm:pb-10 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12">
          <div className="col-start-1 row-span-2 flex flex-col items-start gap-5">
            <Button href="#contact">Contact Me</Button>
            <CvDownloadLink />
          </div>
          <KpiCard
            className="col-start-2"
            label="Years of experience"
            value="3+"
            description="I have been building full-stack applications, dashboards, and analytical tools across different industries."
          />
          <KpiCard
            className="col-start-3"
            label="KPI label"
            value="0"
            description="Short description or metric summary goes here."
          />
          <KpiCard
            className="col-start-2"
            label="KPI label"
            value="0"
            description="Short description or metric summary goes here."
          />
          <KpiCard
            className="col-start-3"
            label="KPI label"
            value="0"
            description="Short description or metric summary goes here."
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl ml-6 sm:ml-12 lg:ml-16">
          <h2 className="font-heading text-3xl">Skills</h2>
          <p className="mt-4 text-base max-w-[600px]">
            Add your skills and technologies here.
          </p>
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
