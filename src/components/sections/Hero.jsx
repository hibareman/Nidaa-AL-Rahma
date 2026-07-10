import { motion } from "motion/react";
import {
  Droplet,
  HandHeart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const heroCopy = {
  ar: {
    badgeTitle: "نداء الرحمة",
    badgeText: "ماء يصل... وأثر يبقى",
    title: {
      firstPrefix: "نبني ",
      firstHighlight: "الأثر",
      firstSuffix: "",
      secondPrefix: "حيث تصل ",
      secondHighlight: "الرحمة",
      secondSuffix: "",
    },
    description:
      "نحفر آبار المياه ونبني المساجد في المجتمعات المسلمة النائية، لنصنع أثرا دائما يروي العطش، ويعمر القلوب.",
    primaryCta: "اطلب مشروعا",
    secondaryCta: "تواصل معنا",
    floating: [
      { value: "+1000", label: "مشاريع قيد التنفيذ", icon: Droplet, tone: "blue" },
      { value: "مشاريع", label: "موثقة", icon: ShieldCheck, tone: "teal" },
      { value: "صدقة", label: "جارية", icon: HandHeart, tone: "gold" },
    ],
    trust: [
      { label: "توثيق المشاريع", icon: ShieldCheck },
      { label: "تنفيذ في مناطق نائية", icon: MapPin },
      { label: "متابعة عبر التسليم", icon: UsersRound },
    ],
  },
  en: {
    badgeTitle: "Nidaa Al Rahma",
    badgeText: "Water reaches... impact remains",
    title: {
      firstPrefix: "We build ",
      firstHighlight: "impact",
      firstSuffix: "",
      secondPrefix: "where ",
      secondHighlight: "mercy",
      secondSuffix: " reaches",
    },
    description:
      "We drill water wells and build mosques in remote Muslim communities, creating lasting impact that quenches thirst and uplifts hearts.",
    primaryCta: "Request a project",
    secondaryCta: "Contact us",
    floating: [
      { value: "+1000", label: "wells delivered", icon: Droplet, tone: "blue" },
      { value: "Verified", label: "projects", icon: ShieldCheck, tone: "teal" },
      { value: "Ongoing", label: "charity", icon: HandHeart, tone: "gold" },
    ],
    trust: [
      { label: "Project documentation", icon: ShieldCheck },
      { label: "Remote field delivery", icon: MapPin },
      { label: "Follow-up to handover", icon: UsersRound },
    ],
  },
};

const toneClasses = {
  blue: "text-water-blue dark:text-water-cyan",
  teal: "text-deep-teal dark:text-teal-300",
  gold: "text-soft-gold",
};

const heroViewport = { once: true, amount: 0.25 };

function DecorativeDrop() {
  return (
    <motion.svg
      className="absolute -end-4 top-10 z-0 hidden h-40 w-40 drop-shadow-[0_18px_28px_rgba(21,155,215,0.22)] lg:block"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.65, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="hero-drop" x1="70" x2="70" y1="18" y2="111">
          <stop stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#72ddf2" />
          <stop offset="0.7" stopColor="#159bd7" />
          <stop offset="1" stopColor="#1769d5" />
        </linearGradient>
        <linearGradient id="hero-drop-stroke" x1="42" x2="98" y1="25" y2="119">
          <stop stopColor="#effdff" />
          <stop offset="0.55" stopColor="#159bd7" />
          <stop offset="1" stopColor="#0b63c7" />
        </linearGradient>
      </defs>
      <path
        d="M70 18c20 27 34 48 34 69 0 22-15 36-34 36S36 109 36 87c0-21 14-42 34-69Z"
        fill="url(#hero-drop)"
        stroke="url(#hero-drop-stroke)"
        strokeWidth="3"
      />
      <path d="M49 82c7-16 22-25 41-24" stroke="white" strokeWidth="5.5" strokeLinecap="round" opacity="0.86" />
      <path d="M59 39c7-7 14-7 23 0" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
      <path d="M17 103c25 16 81 16 106 0" stroke="#159bd7" strokeWidth="4" strokeLinecap="round" opacity="0.42" />
      <path d="M29 116c21 9 61 9 82 0" stroke="#159bd7" strokeWidth="3.5" strokeLinecap="round" opacity="0.34" />
      <circle cx="112" cy="50" r="3.6" fill="#159bd7" opacity="0.68" />
      <circle cx="119" cy="73" r="2.5" fill="#159bd7" opacity="0.52" />
      <circle cx="27" cy="78" r="3" fill="#159bd7" opacity="0.5" />
    </motion.svg>
  );
}

function HeroImagePanel({ copy }) {
  return (
    <motion.div
      className="relative order-2 mx-auto w-full max-w-[35rem] lg:order-none lg:col-start-1 lg:row-start-1"
      initial={{ opacity: 0, x: -34, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={heroViewport}
      transition={{ delay: 0.12, duration: 0.72, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 translate-y-5 rounded-[2rem] bg-water-blue/12 blur-2xl dark:bg-water-cyan/14" />
      <div className="absolute -inset-4 -z-20 rounded-[2.4rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.72),transparent_38%),radial-gradient(circle_at_50%_78%,rgba(34,199,221,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_50%_18%,rgba(34,199,221,0.12),transparent_40%),radial-gradient(circle_at_50%_82%,rgba(214,168,79,0.08),transparent_45%)]" />

      <div className="relative overflow-visible rounded-[2rem] border border-white/80 bg-white/68 p-1.5 shadow-[0_18px_48px_rgba(21,155,215,0.11)] backdrop-blur-md dark:border-water-cyan/22 dark:bg-white/8 dark:shadow-black/20">
        <div className="relative aspect-square min-h-[17rem] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(145deg,#f5fcff_0%,#dff4ff_42%,#f9fdff_100%)] ring-1 ring-inset ring-water-blue/22 dark:bg-[linear-gradient(145deg,#18344f_0%,#102133_46%,#0d2c40_100%)] dark:ring-water-cyan/18 sm:min-h-[25rem] lg:min-h-[26.5rem] xl:min-h-[28.5rem]">
          <img
            src={siteConfig.logoPath}
            alt={copy.badgeTitle}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-100 saturate-110 brightness-105 contrast-105 dark:opacity-86 dark:saturate-105 dark:brightness-90 dark:contrast-110"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.22),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_48%,rgba(255,255,255,0.22)_100%)] dark:bg-[linear-gradient(180deg,rgba(16,33,51,0.04)_0%,rgba(16,33,51,0.16)_52%,rgba(16,33,51,0.5)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(34,199,221,0.26),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(34,199,221,0.18),transparent_65%)]" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/26 to-transparent dark:from-white/6" />
        </div>
        <div className="pointer-events-none absolute inset-y-10 -start-5 hidden w-44 flex-col justify-center gap-5 lg:flex xl:-start-8">
          {copy.floating.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="pointer-events-auto"
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={heroViewport}
                transition={{ delay: 0.45 + index * 0.12, duration: 0.52, ease: "easeOut" }}
              >
                <motion.div
                  className="flex min-h-24 items-center gap-4 rounded-[1.35rem] border border-white/85 bg-white/84 p-4 shadow-[0_14px_34px_rgba(15,35,66,0.08)] backdrop-blur-xl dark:border-white/12 dark:bg-night-panel/84 dark:shadow-black/20"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center ${toneClasses[item.tone]}`}>
                    <Icon size={38} strokeWidth={1.8} />
                  </span>
                  <span className="grid gap-1">
                    <span className={`text-2xl font-bold leading-none ${toneClasses[item.tone]}`}>{item.value}</span>
                    <span className="text-base font-bold leading-6 text-[#0f2342] dark:text-slate-100">{item.label}</span>
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3 lg:hidden">
        {copy.floating.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-white/80 bg-white/80 p-2.5 text-center shadow-lg shadow-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-night-panel/78 dark:shadow-black/20 sm:p-3.5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={heroViewport}
              transition={{ delay: 0.35 + index * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <Icon className={`mx-auto h-6 w-6 ${toneClasses[item.tone]}`} size={26} />
              <p className={`mt-2 text-base font-bold sm:text-lg ${toneClasses[item.tone]}`}>{item.value}</p>
              <p className="text-xs font-bold leading-5 text-[#0f2342] dark:text-slate-100 sm:text-xs">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function HeroContent({ copy, direction }) {
  return (
    <motion.div
      dir={direction}
      className="relative order-1 text-center lg:order-none lg:col-start-2 lg:row-start-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={heroViewport}
      transition={{ delay: 0.08, duration: 0.66, ease: "easeOut" }}
    >
      {/* <DecorativeDrop /> */}

      <motion.div
        className="relative mx-auto inline-flex w-full max-w-[21rem] justify-center overflow-hidden rounded-[1.45rem] border border-white/85 bg-white/78 px-5 py-3.5 shadow-[0_18px_48px_rgba(21,155,215,0.11)] backdrop-blur-xl dark:border-white/10 dark:bg-night-panel/76 dark:shadow-black/20 sm:max-w-[25rem] sm:px-8 sm:py-4"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={heroViewport}
        transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
      >
        <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-water-blue/45 to-transparent dark:via-water-cyan/35" />
        <span className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-soft-gold/50 to-transparent" />
        <span className="relative block text-center">
          <span className="block text-2xl font-black leading-tight text-[#1769d5] drop-shadow-[0_8px_18px_rgba(23,105,213,0.12)] dark:text-water-cyan sm:text-3xl">
            {copy.badgeTitle}
          </span>
          <span className="mx-auto mt-2 block h-px w-28 bg-gradient-to-r from-transparent via-soft-gold/70 to-transparent sm:w-36" />
          <span className="mt-2 block text-sm font-bold leading-6 text-soft-gold sm:text-lg">{copy.badgeText}</span>
        </span>
      </motion.div>

      <motion.h1
        className="relative mx-auto mt-5 max-w-[42rem] text-4xl font-black leading-[1.12] tracking-normal text-[#071d3d] dark:text-slate-50 sm:mt-6 sm:text-6xl lg:text-6xl xl:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={heroViewport}
        transition={{ delay: 0.28, duration: 0.58, ease: "easeOut" }}
      >
        <span className="block">
          {copy.title.firstPrefix}
          <span className="text-[#1769d5] dark:text-water-cyan">{copy.title.firstHighlight}</span>
          {copy.title.firstSuffix}
        </span>
        <span className="mt-2 block">
          {copy.title.secondPrefix}
          <span className="text-soft-gold">{copy.title.secondHighlight}</span>
          {copy.title.secondSuffix}
        </span>
      </motion.h1>

      <motion.p
        className="mx-auto mt-5 max-w-[41rem] text-base font-medium leading-8 text-[#48566d] dark:text-slate-300 sm:text-lg"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={heroViewport}
        transition={{ delay: 0.38, duration: 0.5, ease: "easeOut" }}
      >
        {copy.description}
      </motion.p>

      <motion.div
        className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={heroViewport}
        transition={{ delay: 0.48, duration: 0.5, ease: "easeOut" }}
      >
        <a
          href="#projects"
          className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#1769d5] px-9 text-lg font-bold !text-white shadow-[0_18px_42px_rgba(23,105,213,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#135fc1] dark:bg-[#0f766e] dark:!text-white dark:shadow-[0_18px_42px_rgba(20,184,166,0.14)] dark:hover:bg-[#12857c] sm:w-auto"
        >
          {copy.primaryCta}
          <Droplet size={30} strokeWidth={1.8} className="text-white/80" />
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl border border-soft-gold/55 bg-white/76 px-9 text-lg font-bold !text-[#071d3d] shadow-lg shadow-slate-900/5 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:border-soft-gold/80 dark:border-soft-gold/40 dark:bg-white/8 dark:!text-white dark:shadow-black/10 sm:w-auto "
        >
          {copy.secondaryCta}
          <MessageCircle size={26} strokeWidth={1.8} />
        </a>
      </motion.div>

      <motion.div
        className="mx-auto mt-8 grid max-w-[46rem] gap-3 rounded-3xl border border-white/70 bg-white/52 px-3 py-3 shadow-lg shadow-water-blue/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/6 dark:shadow-black/10 sm:grid-cols-3 sm:gap-0 sm:px-4 sm:py-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={heroViewport}
        transition={{ delay: 0.58, duration: 0.5, ease: "easeOut" }}
      >
        {copy.trust.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-white/38 px-3 text-sm font-bold text-[#17233c] dark:bg-white/0 dark:text-slate-100 sm:rounded-none sm:bg-transparent sm:text-base sm:border-e sm:border-water-blue/16 sm:last:border-e-0 dark:sm:border-water-cyan/15"
            >
              <Icon
                className={
                  index === 0
                    ? "text-[#1769d5] dark:text-water-cyan"
                    : index === 1
                      ? "text-water-cyan dark:text-teal-300"
                      : "text-soft-gold"
                }
                size={28}
                strokeWidth={1.8}
              />
              <span>{item.label}</span>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { language, direction } = useLanguage();
  const copy = heroCopy[language] || heroCopy.ar;

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#f4fbff] pt-[6.75rem] pb-10 text-[#071d3d] transition-colors duration-300 dark:bg-night-navy dark:text-slate-50 sm:pt-[7.75rem] lg:flex lg:items-center lg:pt-28 xl:pt-[7.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_45%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#152b42_52%,#0d2f43_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.22),transparent_66%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.16),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(207,237,252,0.66)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(34,199,221,0.08)_100%)]" />
        <svg className="absolute inset-x-0 bottom-0 h-64 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
          <path className="fill-white/60 dark:fill-water-cyan/6" d="M0 130C220 72 330 184 548 128C763 73 880 116 1058 155C1222 190 1323 119 1440 132V260H0Z" />
          <path d="M0 173C180 134 310 192 475 162C690 122 855 166 1018 187C1190 210 1290 151 1440 169" fill="none" stroke="currentColor" className="text-water-blue/18 dark:text-water-cyan/16" strokeWidth="2" />
          <path d="M0 207C190 179 330 213 520 191C720 168 850 194 1030 218C1210 240 1330 195 1440 203" fill="none" stroke="currentColor" className="text-soft-gold/35 dark:text-soft-gold/25" strokeWidth="3" />
        </svg>
      </div>

      <Container>
        <div
          dir="ltr"
          className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-14 xl:gap-16"
        >
          <HeroImagePanel copy={copy} />
          <HeroContent copy={copy} direction={direction} />
        </div>
      </Container>
    </section>
  );
}
