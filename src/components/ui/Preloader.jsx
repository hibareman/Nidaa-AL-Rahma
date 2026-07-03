import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const copy = {
  ar: {
    name: "نداء الرحمة",
    subtitle: "لحفر آبار المياه وبناء المساجد",
    tagline: "ماءٌ يصل... وأثرٌ يبقى",
  },
  en: {
    name: "Nidaa Al Rahma",
    subtitle: "Water Wells & Mosque Construction",
    tagline: "Water reaches... impact remains",
  },
};

const timing = {
  full: 5200,
  reduced: 1200,
};

const draw = (delay, reducedMotion, duration = 0.5) => ({
  delay: reducedMotion ? 0.06 : delay,
  duration: reducedMotion ? 0.12 : duration,
  ease: "easeOut",
});

export default function Preloader({
  onComplete,
  language: languageProp,
  direction: directionProp,
  text = copy,
}) {
  const { language, direction } = useLanguage();
  const reducedMotion = useReducedMotion();
  const activeLanguage = text[languageProp] ? languageProp : language;
  const activeDirection = directionProp || direction;
  const content = text[activeLanguage] || text.ar;
  const totalDuration = reducedMotion ? timing.reduced : timing.full;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete?.();
    }, totalDuration);
    return () => window.clearTimeout(timer);
  }, [onComplete, totalDuration]);

  const drawInitial = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, pathLength: 0 };
  const drawAnimate = reducedMotion
    ? { opacity: 1 }
    : { opacity: 1, pathLength: 1 };

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label={content.tagline}
      dir={activeDirection}
      exit={{ opacity: 0, scale: 1.015 }}
      transition={{ duration: reducedMotion ? 0.16 : 0.32, ease: "easeInOut" }}
    >
      {/* خلفية مطابقة لـ Hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_45%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.22),transparent_66%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(207,237,252,0.66)_100%)]" />
        <svg
          className="absolute inset-x-0 bottom-0 h-64 w-full"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 130C220 72 330 184 548 128C763 73 880 116 1058 155C1222 190 1323 119 1440 132V260H0Z"
            fill="rgba(255,255,255,0.62)"
          />
          <path
            d="M0 173C180 134 310 192 475 162C690 122 855 166 1018 187C1190 210 1290 151 1440 169"
            fill="none"
            stroke="rgba(21,155,215,0.18)"
            strokeWidth="2"
          />
          <path
            d="M0 207C190 179 330 213 520 191C720 168 850 194 1030 218C1210 240 1330 195 1440 203"
            fill="none"
            stroke="rgba(214,168,79,0.35)"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* المحتوى الأصلي للـ Preloader */}
      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-4 py-8">
        <motion.div
          className="flex w-full max-w-md flex-col items-center text-center"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.12 : 0.4, ease: "easeOut" }}
        >
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <motion.div
              className="absolute inset-4 rounded-full bg-water-blue/10 blur-xl dark:bg-water-cyan/10"
              initial={{ opacity: 0.35, scale: 0.86 }}
              animate={
                reducedMotion
                  ? { opacity: 0.35, scale: 1 }
                  : { opacity: [0.25, 0.45, 0.25], scale: [0.9, 1.06, 0.9] }
              }
              transition={{
                duration: reducedMotion ? 0.12 : 2.2,
                repeat: reducedMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.svg
              className="relative h-full w-full overflow-visible"
              viewBox="0 0 240 240"
              fill="none"
              initial={{ scale: reducedMotion ? 1 : 0.96 }}
              animate={{ scale: 1 }}
              transition={{ duration: reducedMotion ? 0.12 : 0.55, ease: "easeOut" }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="nidaaSealDrop" x1="86" y1="50" x2="145" y2="140">
                  <stop offset="0%" stopColor="#b8f3ff" />
                  <stop offset="48%" stopColor="#22c7dd" />
                  <stop offset="100%" stopColor="#159bd7" />
                </linearGradient>
                <radialGradient id="nidaaSealShine" cx="38%" cy="28%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.88" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="nidaaSealRing" x1="42" y1="42" x2="198" y2="198">
                  <stop offset="0%" stopColor="#22c7dd" />
                  <stop offset="54%" stopColor="#0f766e" />
                  <stop offset="100%" stopColor="#d6a84f" />
                </linearGradient>
              </defs>

              <motion.circle
                cx="120"
                cy="120"
                r="88"
                stroke="url(#nidaaSealRing)"
                strokeLinecap="round"
                strokeWidth="3"
                initial={drawInitial}
                animate={drawAnimate}
                transition={draw(0.1, reducedMotion, 0.85)}
              />
              <motion.path
                d="M45 120a75 75 0 0 1 150 0"
                stroke="#d6a84f"
                strokeLinecap="round"
                strokeOpacity="0.7"
                strokeWidth="3"
                initial={drawInitial}
                animate={drawAnimate}
                transition={draw(0.36, reducedMotion, 0.62)}
              />

              <motion.circle
                cx="120"
                cy="150"
                r="26"
                stroke="#22c7dd"
                strokeOpacity="0.38"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.45 }}
                animate={
                  reducedMotion
                    ? { opacity: 0.22, scale: 1 }
                    : { opacity: [0, 0.36, 0], scale: [0.45, 1.45, 2.05] }
                }
                transition={{
                  delay: reducedMotion ? 0.06 : 0.78,
                  duration: reducedMotion ? 0.12 : 0.85,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "120px 150px" }}
              />

              <motion.g
                initial={{ opacity: 0, y: reducedMotion ? 0 : -14, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: reducedMotion ? 0.06 : 0.42, duration: reducedMotion ? 0.14 : 0.55 }}
              >
                <path
                  d="M120 52C108 70 91 89 91 110c0 22 13 37 29 37s29-15 29-37c0-21-17-40-29-58Z"
                  fill="url(#nidaaSealDrop)"
                  stroke="#c9f7ff"
                  strokeWidth="1.5"
                />
                <path
                  d="M109 80c-6 8-10 17-10 27 0 14 6 24 16 29"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeOpacity="0.34"
                  strokeWidth="4"
                />
                <ellipse
                  cx="112"
                  cy="88"
                  rx="10"
                  ry="14"
                  fill="url(#nidaaSealShine)"
                  transform="rotate(18 112 88)"
                />
              </motion.g>

              <motion.g
                className="text-deep-teal dark:text-water-cyan"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M56 138h76"
                  stroke="#d6a84f"
                  strokeWidth="5"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.02, reducedMotion, 0.48)}
                />
                <motion.path
                  d="M64 146h60"
                  stroke="#d6a84f"
                  strokeWidth="4"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.1, reducedMotion, 0.32)}
                />
                <motion.circle
                  cx="94"
                  cy="141"
                  r="7"
                  fill="rgba(214, 168, 79, 0.08)"
                  stroke="#d6a84f"
                  strokeWidth="3"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.12, reducedMotion, 0.34)}
                />
                <motion.path
                  d="M68 140v34M120 140v34"
                  strokeWidth="5"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.16, reducedMotion, 0.42)}
                />
                <motion.path
                  d="M94 148v14"
                  stroke="#a9853f"
                  strokeWidth="2.5"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.26, reducedMotion, 0.34)}
                />
                <motion.path
                  d="M85 161h18l-3 17H88l-3-17Z"
                  fill="rgba(21, 155, 215, 0.08)"
                  strokeWidth="3"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.36, reducedMotion, 0.4)}
                />
                <motion.path
                  d="M56 174c0-10 17-18 38-18s38 8 38 18v14c0 10-17 18-38 18s-38-8-38-18v-14Z"
                  fill="rgba(255, 255, 255, 0.08)"
                  strokeWidth="4"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.48, reducedMotion, 0.48)}
                />
                <motion.ellipse
                  cx="94"
                  cy="174"
                  rx="40"
                  ry="18"
                  fill="rgba(34, 199, 221, 0.1)"
                  strokeWidth="4"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.62, reducedMotion, 0.42)}
                />
                <motion.path
                  d="M66 174c15-8 31 8 47 0"
                  stroke="#22c7dd"
                  strokeWidth="3.5"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.74, reducedMotion, 0.32)}
                />
                <motion.path
                  d="M150 176h44v30h-44v-30Z"
                  fill="rgba(214, 168, 79, 0.06)"
                  strokeWidth="3.2"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.02, reducedMotion, 0.36)}
                />
                <motion.path
                  d="M150 176c5-18 14-28 22-28s17 10 22 28"
                  stroke="#d6a84f"
                  strokeWidth="3.2"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.14, reducedMotion, 0.42)}
                />
                <motion.path
                  d="M200 158v48M195 158h10M199 150h5"
                  stroke="#d6a84f"
                  strokeWidth="3"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.26, reducedMotion, 0.34)}
                />
                <motion.path
                  d="M202 143c-6 1-10-2-10-7s4-9 10-8"
                  stroke="#d6a84f"
                  strokeWidth="2.6"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.38, reducedMotion, 0.32)}
                />
                <motion.path
                  d="M165 206v-12c0-5 3-9 7-9s7 4 7 9v12"
                  strokeWidth="2.8"
                  initial={drawInitial}
                  animate={drawAnimate}
                  transition={draw(1.5, reducedMotion, 0.36)}
                />
              </motion.g>
            </motion.svg>
          </div>

          <motion.div
            className="mt-3"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reducedMotion ? 0.12 : 2.2, duration: reducedMotion ? 0.14 : 0.42 }}
          >
            <h1 className="text-3xl font-bold leading-tight text-[var(--heading)] sm:text-4xl">
              {content.name}
            </h1>
            <p className="mt-3 text-sm font-semibold text-water-blue sm:text-base">
              {content.tagline}
            </p>
            <p className="mt-2 text-xs font-medium text-[var(--muted)] sm:text-sm">
              {content.subtitle}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}