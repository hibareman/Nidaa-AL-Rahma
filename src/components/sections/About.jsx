import { motion } from "motion/react";
import {
  BadgeCheck,
  Camera,
  CheckCircle2,
  Droplets,
  FileCheck2,
  HandHeart,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { aboutContent } from "../../data/about.js";

const workflowIcons = {
  map: MapPin,
  water: Droplets,
  media: Camera,
  badge: BadgeCheck,
};

const valueIcons = [HandHeart, ShieldCheck, FileCheck2, CheckCircle2];

function BackgroundDrop({ className = "", delay = 0 }) {
  return (
    <motion.svg
      className={`absolute text-water-blue/10 dark:text-water-cyan/10 ${className}`}
      viewBox="0 0 96 120"
      fill="none"
      aria-hidden="true"
      animate={{ y: [0, -5, 0], opacity: [0.28, 0.46, 0.28] }}
      transition={{ delay, duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M48 8c24 33 39 58 39 81 0 16-12 27-39 27S9 105 9 89C9 66 24 41 48 8Z"
        fill="currentColor"
      />
      <path
        d="M32 78c8-14 22-22 40-22"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </motion.svg>
  );
}

function BackgroundWell({ className = "", delay = 0 }) {
  return (
    <motion.svg
      className={`absolute text-deep-teal/10 dark:text-water-cyan/10 ${className}`}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      animate={{ y: [0, 6, 0], rotate: [0, 0.7, 0] }}
      transition={{ delay, duration: 22, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M35 54h70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M44 54v34M96 54v34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 56v30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <path d="M59 84h22l-4 21H63l-4-21Z" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
      <path
        d="M31 96c0-13 17-23 39-23s39 10 39 23v13c0 12-17 21-39 21s-39-9-39-21V96Z"
        stroke="currentColor"
        strokeWidth="5"
      />
      <ellipse cx="70" cy="96" rx="39" ry="20" stroke="currentColor" strokeWidth="5" />
      <path d="M49 96c14-8 28 8 42 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </motion.svg>
  );
}

function AboutBackgroundIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <BackgroundDrop className="left-[4%] top-14 h-10 w-8 sm:h-12 sm:w-10" />
      <BackgroundDrop className="right-[10%] top-20 h-8 w-7 rotate-12 sm:h-10 sm:w-8" delay={1.3} />
      <BackgroundWell className="right-[4%] top-[24%] h-16 w-16 rotate-3 sm:h-20 sm:w-20" delay={0.8} />
      <BackgroundDrop className="left-[18%] top-[36%] hidden h-9 w-8 -rotate-12 md:block" delay={2.2} />
      <BackgroundWell className="left-[3%] top-[50%] h-14 w-14 -rotate-3 sm:h-16 sm:w-16" delay={2.7} />
      <BackgroundDrop className="right-[7%] top-[55%] h-9 w-8 rotate-6 sm:h-11 sm:w-9" delay={3.1} />
      <BackgroundDrop className="left-[10%] bottom-[17%] hidden h-11 w-9 rotate-12 lg:block" delay={4.2} />
      <BackgroundWell className="right-[15%] bottom-[12%] hidden h-14 w-14 rotate-6 opacity-80 md:block" delay={4.7} />
      <BackgroundDrop className="right-[36%] bottom-[7%] hidden h-8 w-7 -rotate-6 xl:block" delay={5.4} />
    </div>
  );
}

function ReachCard({ copy }) {
  return (
    <motion.div
      className="rounded-[1.4rem] border border-white/80 bg-white/72 p-4 shadow-xl shadow-water-blue/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/7 dark:shadow-black/15 sm:rounded-[1.7rem] sm:p-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-water-blue text-white shadow-lg shadow-water-blue/20 dark:bg-water-cyan dark:text-night-navy sm:h-12 sm:w-12">
            <MapPin size={21} />
          </span>
          <div>
            <p className="text-base font-black text-[var(--heading)] sm:text-lg">{copy.reachTitle}</p>
            <p className="mt-1 text-xs font-bold leading-5 text-[var(--muted)] sm:text-sm">{copy.reachNote}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {copy.countries.map((country) => (
            <span
              key={country}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-water-blue/12 bg-sky-soft/60 px-3 py-2 text-xs font-black text-[var(--heading)] shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-white/6 dark:text-slate-100 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-water-blue dark:bg-water-cyan" />
              {country}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AboutVisual({ copy }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl"
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 translate-y-5 rounded-[2rem] bg-water-blue/10 blur-2xl dark:bg-water-cyan/10" />

      <div className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/80 p-3 shadow-2xl shadow-water-blue/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-black/25">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-water-blue/12 bg-sky-soft/58 px-4 py-3 dark:border-water-cyan/12 dark:bg-night-panel/58">
          <span className="inline-flex items-center gap-2 text-sm font-black text-[var(--heading)]">
            <FileCheck2 size={18} className="text-water-blue dark:text-water-cyan" />
            {copy.proofBadge}
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-deep-teal shadow-sm shadow-slate-900/5 dark:bg-white/8 dark:text-water-cyan">
            {copy.stats[2]?.value}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[1.35rem] bg-white dark:bg-night-panel">
          <img
            src={copy.imagePath}
            alt={copy.imageLabel}
            className="block w-full rounded-[1.1rem] bg-white object-contain"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] ring-1 ring-inset ring-water-blue/10 dark:ring-water-cyan/10" />
        </div>

        <div className="mt-4 rounded-2xl border border-water-blue/15 bg-sky-soft/70 p-4 dark:border-water-cyan/15 dark:bg-night-panel/70">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-water-blue shadow-lg shadow-water-blue/12 dark:bg-white/8 dark:text-water-cyan">
              <Camera size={22} />
            </span>
            <div>
              <p className="text-base font-bold text-[var(--heading)]">{copy.imageLabel}</p>
              <p className="mt-2 text-sm font-medium leading-7 text-[var(--muted)]">{copy.imageCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const copy = aboutContent[language] || aboutContent.ar;

  return (
    <motion.section
      id="about"
      className="relative isolate overflow-hidden bg-[#f4fbff] py-20 text-[var(--body)] transition-colors duration-300 dark:bg-night-navy dark:text-slate-50 sm:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_45%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#152b42_52%,#0d2f43_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.22),transparent_66%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.16),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(207,237,252,0.66)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(34,199,221,0.08)_100%)]" />
        <AboutBackgroundIcons />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="inline-flex rounded-full border border-soft-gold/25 bg-soft-gold/10 px-4 py-2 text-sm font-bold text-soft-gold">
                {copy.eyebrow}
              </span>

              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[1.25] text-[var(--heading)] sm:text-4xl lg:text-5xl">
                {copy.title}
              </h2>

              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-[var(--muted)] sm:text-lg">
                {copy.description}
              </p>

              <div className="mt-6 rounded-3xl border border-water-blue/15 bg-white/60 p-5 shadow-lg shadow-water-blue/5 backdrop-blur-md dark:border-water-cyan/12 dark:bg-white/6 dark:shadow-black/10">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-deep-teal text-white dark:bg-water-cyan dark:text-night-navy">
                    <HandHeart size={23} />
                  </span>
                  <div>
                    <p className="text-base font-bold text-[var(--heading)]">{copy.highlight}</p>
                    <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
                      {copy.supervisorLabel}: <span className="text-deep-teal dark:text-water-cyan">{copy.supervisorName}</span>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {copy.assurance.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-water-blue/12 bg-white/70 px-3 py-1.5 text-xs font-black text-[var(--heading)] shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-white/6 dark:text-slate-100"
                        >
                          <CheckCircle2 size={14} className="text-water-blue dark:text-water-cyan" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 xl:grid-cols-4">
              {copy.stats.map((item) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-white/80 bg-white/72 p-3.5 shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-black/10 sm:rounded-3xl sm:p-5"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <p className="text-2xl font-black leading-none text-water-blue dark:text-water-cyan sm:text-3xl">{item.value}</p>
                  <p className="mt-2 text-xs font-bold leading-5 text-[var(--muted)] sm:text-sm sm:leading-6">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <ReachCard copy={copy} />
            <AboutVisual copy={copy} />
          </div>
        </div>

        <div className="mt-14 rounded-[1.7rem] border border-white/70 bg-white/42 p-4 shadow-xl shadow-water-blue/6 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-water-blue/15 bg-water-blue/10 px-3 py-1.5 text-xs font-black text-water-blue dark:border-water-cyan/15 dark:bg-water-cyan/10 dark:text-water-cyan">
                <Droplets size={15} />
                {copy.workflowBadge}
              </span>
              <h3 className="mt-3 text-2xl font-black text-[var(--heading)] sm:text-3xl">{copy.workflowTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[var(--muted)] sm:text-base">
                {copy.workflowIntro}
              </p>
            </div>

            <div className="hidden rounded-2xl border border-water-blue/12 bg-white/58 px-4 py-3 text-center shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-white/6 lg:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-water-blue dark:text-water-cyan">
                01 - 04
              </p>
              <p className="mt-1 text-xs font-bold text-[var(--muted)]">{copy.proofBadge}</p>
            </div>
          </div>

          <div className="relative mt-6">
            <div className="pointer-events-none absolute inset-x-8 top-7 hidden h-px bg-gradient-to-r from-water-blue/0 via-water-blue/22 to-soft-gold/25 xl:block dark:via-water-cyan/18" />

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {copy.workflow.map((item, index) => {
                const Icon = workflowIcons[item.icon] || CheckCircle2;

                return (
                  <motion.article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[1.35rem] border border-white/75 bg-white/82 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-colors duration-300 hover:border-water-blue/25 dark:border-white/10 dark:bg-white/6 dark:shadow-black/10 dark:hover:border-water-cyan/25 sm:rounded-3xl sm:p-5"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-water-blue/0 via-water-blue/35 to-soft-gold/25 opacity-70 dark:via-water-cyan/28" />

                    <div dir="ltr" className="flex items-center justify-between gap-3">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-water-blue/15 bg-water-blue/10 text-sm font-black text-water-blue shadow-sm shadow-water-blue/5 dark:border-water-cyan/15 dark:bg-water-cyan/10 dark:text-water-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-soft text-deep-teal transition-colors duration-300 group-hover:bg-water-blue group-hover:text-white dark:bg-night-panel dark:text-water-cyan dark:group-hover:bg-water-cyan dark:group-hover:text-night-navy">
                        <Icon size={21} />
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-black leading-7 text-[var(--heading)] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.7rem] border border-water-blue/15 bg-white/54 p-5 shadow-lg shadow-water-blue/5 backdrop-blur-md dark:border-water-cyan/12 dark:bg-white/6 dark:shadow-black/10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex shrink-0 items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-deep-teal text-white shadow-lg shadow-deep-teal/15 dark:bg-water-cyan dark:text-night-navy">
                <HandHeart size={20} />
              </span>
              <h3 className="text-lg font-black text-[var(--heading)]">{copy.valuesTitle}</h3>
            </div>

            <div className="hidden h-10 w-px bg-water-blue/15 dark:bg-water-cyan/15 lg:block" />

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {copy.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];

              return (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--heading)] shadow-sm shadow-slate-900/5 dark:bg-white/6"
                >
                  <Icon size={16} className={index % 2 === 0 ? "text-water-blue dark:text-water-cyan" : "text-soft-gold"} />
                  {value}
                </span>
              );
            })}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
