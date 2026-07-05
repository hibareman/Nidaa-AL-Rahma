// src/components/sections/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
// ✅ استيراد جميع الصور
import p1 from "/assets/p1.png?url";
import p2 from "/assets/p2.jpg?url";
import p3 from "/assets/p3.jpg?url";
import p4 from "/assets/p4.jpg?url";
import p5 from "/assets/p5.jpg?url";
import p6 from "/assets/p6.jpg?url";
import {
  MapPin,
  Calendar,
  Users,
  ArrowUpRight,
  Droplets,
  Building2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShieldCheck,
  Camera,
  MapPinned,
  Infinity,
  DollarSign,
  Activity,
  CheckCircle2,
  Star,
  Ruler,
  UsersRound,
  Coins,
  Gift,
  Circle,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

// البيانات الأساسية المشتركة (ثابتة)
const sharedContent = {
  ar: {
    tagline: "كل قطرة صدقة جارية",
    slogan:
      "كل حياة.. وكل قطرة أجر لا ينقطع\nصدقة جارية تنفعك في الدنيا والآخرة",
    transparencyTitle: "شفافية ومصداقية",
    documentation: "توثيق كامل لكل مراحل العمل بالصور",
    gps: "📍 GPS لكل بئر لضمان الشفافية ومتابعة التنفيذ",
    progressLabel: "نسبة الإنجاز",
    verified: "موثق 100%",
    viewAll: "استكشف الباقات",
    wellSubtitle: "بئر خير يدوم وينتفع به الكثير",
  },
  en: {
    tagline: "Every drop is ongoing charity",
    slogan:
      "Every life.. and every drop of reward never ends\nOngoing charity that benefits you in this life and the Hereafter",
    transparencyTitle: "Transparency and Credibility",
    documentation: "Full documentation of all work stages with photos",
    gps: "📍 GPS for each well to ensure transparency and follow-up",
    progressLabel: "Completion Rate",
    verified: "100% Verified",
    viewAll: "Explore Packages",
    wellSubtitle: "A well of goodness that lasts and benefits many",
  },
};

// دالة العداد المتحرك
const useAnimatedCounter = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || targetValue === 0) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return { count, ref };
};

// دالة استخراج الرقم من النص
const extractNumber = (text) => {
  if (!text || typeof text !== 'string') return 0;
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

// بيانات الباقات
const projectsData = {
  ar: {
    eyebrow: "✦ باقات الآبار",
    title: "أسعار ومواصفات حفر الآبار",
    description:
      "نقدم لكم باقات متنوعة لحفر الآبار بمختلف الأعماق والمواصفات، مع توثيق شامل وضمان الجودة.",
    viewAll: "استكشف الباقات",
    list: [
      {
        id: 1,
        type: "بئر ارتوازي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p1,
        depth: "120 إلى 180 متر",
        beneficiaries: "1000 شخص وعائلة",
        lifespan: "مدى الحياة بإذن الله",
        cost: "2820 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-water-cyan",
        specifications: [
          {
            label: "نوع البئر",
            value: "ارتوازي مع 20 مقعداً متواضعاً و20 حنفية وموتور كهربائي وخزان ماء وسيراميك",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "العمق",
            value: "120 إلى 180 متر",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "المستفيدين",
            value: "1000 شخص وعائلة",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "العمر",
            value: "مدى الحياة بإذن الله",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "التكلفة",
            value: "2820 دولار",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 2,
        type: "بئر مع متوضأ ماء",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p2,
        depth: " 40 إلى 60متر",
        lifespan: "50 سنة أو أكثر ",
        cost: "1197 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-teal-400",
        specifications: [
          { label: "نوع البئر", value: "بئر مع متوضأ ماء بجانب مسجد مع 10مقاعد وضوء, 10حنفيات , مضخة يدوية, ماتور كهربائي و خزان ماء", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value:  "40 إلى 60 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "500 شخص", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: " 50سنة أو أكثر", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "1197 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          }        ],
      },
      {
        id: 3,
        type: "بئر متوسط عميق",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p3,
        depth: "إلى 50 متر",
        lifespan: "50 سنة أو أكثر ",
        cost: "1047 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-emerald-400",
        specifications: [
          { label: "نوع البئر", value: "بئر متوسط مع خزان ماء, 12 حنفية, مضخة يدوية, ماتور كهربائي و سيراميك", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "إلى 50 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "500 شخص", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: " 50 سنة أو أكثر", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "1047 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 4,
        type: "بئر عميق",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p4,
        depth: " 40 متر",
        lifespan: "35 سنة أو أكثر ",
        cost: "800 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-indigo-400",
        specifications: [
          { label: "نوع البئر", value: "بئر ماء مع 4 حنفيات , مضخة يدوية, ماتور كهربائي و خزان ماء", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: " 40 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "300 شخص", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "35 سنة أو أكثر ", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "800 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 5,
        type: "بئر سطحي  ",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p5,
        depth: " 30 متر",
        lifespan: "25-35 سنة ",
        cost: "600 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          { label: "نوع البئر", value: " بئر مع 4 حنفيات , سيراميك, مضخة يدوية, ماتور كهرباء", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "إلى 30 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "150 شخص", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "25-35 سنة ", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "600 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 6,
        type: "  بئر يدوي سطي ",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p6,
        depth: "30 متر",
        lifespan: "25-35 سنة ",
        cost: "422 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          { label: "نوع البئر", value: " بئر ماء 2 حنفيات , مضخة يدوية, سيراميك, ماتور كهربائي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "30  متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "150 شخص", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "25-35 سنة ", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "422 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
    ],
  },
  en: {
    eyebrow: "✦ Well Packages",
    title: "Prices and Specifications for Water Wells",
    description:
      "We offer various packages for well drilling with different depths and specifications, with comprehensive documentation and quality assurance.",
    viewAll: "Explore Packages",
    list: [
      {
        id: 1,
        type: "Artesian Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p1,
        depth: "120 to 180 m",
        beneficiaries: "1000 people and families",
        lifespan: "Lifelong, God willing",
        cost: "$2820",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-water-cyan",
        specifications: [
          {
            label: "Well Type",
            value:
              "Artesian with 20 modest seats, 20 taps, electric motor, water tank, and ceramic",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "120 to 180 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "1000 people and families",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "Lifelong, God willing",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$2820",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 2,
        type: "Well with Wudu Area",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p2,
        depth: "40 to 60 m",
        beneficiaries: "500 people",
        lifespan: "50 years or more",
        cost: "$1197",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-teal-400",
        specifications: [
          {
            label: "Well Type",
            value:
              "Well with a wudu area beside a mosque, 10 wudu seats, 10 taps, hand pump, electric motor, and water tank",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "40 to 60 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "500 people",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "50 years or more",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$1197",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 3,
        type: "Medium Deep Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p3,
        depth: "Up to 50 m",
        beneficiaries: "500 people",
        lifespan: "50 years or more",
        cost: "$1047",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-emerald-400",
        specifications: [
          {
            label: "Well Type",
            value:
              "Medium well with water tank, 12 taps, hand pump, electric motor, and ceramic",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "Up to 50 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "500 people",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "50 years or more",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$1047",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 4,
        type: "Deep Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p4,
        depth: "40 m",
        beneficiaries: "300 people",
        lifespan: "35 years or more",
        cost: "$800",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-indigo-400",
        specifications: [
          {
            label: "Well Type",
            value:
              "Water well with 4 taps, hand pump, electric motor, and water tank",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "40 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "300 people",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "35 years or more",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$800",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 5,
        type: "Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p5,
        depth: "30 m",
        beneficiaries: "150 people",
        lifespan: "25-35 years",
        cost: "$600",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          {
            label: "Well Type",
            value: "Well with 4 taps, ceramic, hand pump, and electric motor",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "30 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "150 people",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "25-35 years",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$600",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 6,
        type: "Manual Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p6,
        depth: "30 m",
        beneficiaries: "150 people",
        lifespan: "25-35 years",
        cost: "$422",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          {
            label: "Well Type",
            value: "Water well with 2 taps, hand pump, ceramic, and electric motor",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "30 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "150 people",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "25-35 years",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$422",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
    ],
  },
};

const getTypeIcon = (type) => {
  if (type.includes("بئر") || type.includes("Well")) return Droplets;
  return Droplets;
};

const getSpecColor = (spec) => {
  return spec.color || "text-water-blue";
};

const getProjectSpecValue = (project, labels = []) => {
  const normalizedLabels = Array.isArray(labels) ? labels : [labels];

  return (
    project.specifications?.find((spec) =>
      normalizedLabels.some((label) => spec.label.includes(label))
    )?.value || ""
  );
};

function SpecificationCard({ spec, displayValue, specColor, isMain = false, valueRef }) {
  const SpecIcon = spec.icon;

  return (
    <motion.div
      className={
        isMain
          ? "col-span-2 relative overflow-hidden rounded-2xl border border-water-blue/10 bg-gradient-to-br from-white/75 via-sky-soft/45 to-water-blue/[0.055] px-3.5 py-3 shadow-[0_14px_34px_rgba(21,155,215,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-water-blue/25 hover:shadow-[0_18px_44px_rgba(21,155,215,0.12)] dark:border-water-cyan/12 dark:from-white/[0.075] dark:via-water-cyan/[0.045] dark:to-transparent dark:shadow-black/10 dark:hover:border-water-cyan/24"
          : "relative overflow-hidden rounded-2xl border border-water-blue/7 bg-white/45 px-3 py-2.5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-water-blue/16 hover:bg-white/65 hover:shadow-md dark:border-water-cyan/8 dark:bg-white/[0.035] dark:hover:border-water-cyan/18 dark:hover:bg-white/[0.055]"
      }
      whileHover={{ scale: isMain ? 1.006 : 1.012 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-70 dark:from-white/[0.04]" />

      <div className={isMain ? "relative flex items-start gap-3" : "relative flex items-start gap-2.5"}>
        <span
          className={
            isMain
              ? `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/85 shadow-sm shadow-slate-900/5 ring-1 ring-white/70 dark:bg-white/[0.06] dark:ring-white/10 ${specColor}`
              : `mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/70 shadow-sm shadow-slate-900/[0.04] ring-1 ring-white/60 dark:bg-white/[0.055] dark:ring-white/10 ${specColor}`
          }
        >
          <SpecIcon size={isMain ? 19 : 15} className="shrink-0" />
        </span>

        <div className="min-w-0 flex-1">
          <p
            className={
              isMain
                ? "text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]"
                : "text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]"
            }
          >
            {spec.label}
          </p>

          <p
            ref={valueRef}
            className={
              isMain
                ? "mt-1 whitespace-normal break-words text-[0.84rem] font-black leading-6 text-[var(--heading)]"
                : "mt-0.5 whitespace-normal break-words text-xs font-black leading-5 text-[var(--heading)]"
            }
          >
            {displayValue}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ✅ مكون البطاقة - مع حذف الأيقونات السفلية وتحسين الهوفر
function PackageCardFinal({ project, index, language, shared, isHovered, onHover }) {
  const Icon = getTypeIcon(project.type);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isTilted, setIsTilted] = useState(false);

  const beneficiariesText =
    project.beneficiaries ||
    getProjectSpecValue(project, language === "ar" ? "المستفيدين" : "Beneficiaries");

  const lifespanText =
    project.lifespan ||
    getProjectSpecValue(project, language === "ar" ? "العمر" : "Lifespan");

  const shouldAnimateBottomBeneficiaries =
    beneficiariesText &&
    !beneficiariesText.includes("عائلة") &&
    !beneficiariesText.toLowerCase().includes("famil");

  const costNumber = project.cost ? extractNumber(project.cost) : 0;
  const beneficiariesNumber = beneficiariesText ? extractNumber(beneficiariesText) : 0;
  const depthNumber = project.depth ? extractNumber(project.depth) : 0;

  const { count: animatedCost, ref: costRef } = useAnimatedCounter(costNumber, 1500);
  const { count: animatedBeneficiaries, ref: beneficiariesRef } = useAnimatedCounter(beneficiariesNumber, 1500);
  const { count: animatedDepth, ref: depthRef } = useAnimatedCounter(depthNumber, 1500);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;
    setRotateX(rotateX);
    setRotateY(rotateY);
    setIsTilted(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsTilted(false);
    onHover(null);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/[0.82] shadow-[0_24px_70px_rgba(21,155,215,0.12)] backdrop-blur-xl transition-all duration-700 hover:border-water-blue/20 hover:shadow-[0_24px_80px_rgba(21,155,215,0.16)] dark:border-white/10 dark:bg-night-panel/55 dark:shadow-black/25 dark:hover:border-water-cyan/20"
      style={
        isTilted
          ? {
              transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.1s ease-out",
            }
          : {}
      }
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* خلفية نقطية */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #159bd7 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Glassmorphism */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/38 via-white/10 to-transparent backdrop-blur-sm dark:from-white/[0.055] dark:via-water-cyan/[0.025]" />

      {/* شريط جانبي */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b ${project.badgeColor} opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:w-1.5`}
      />

      {/* فقاعات خلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-water-blue/15 dark:bg-water-cyan/15"
            style={{
              width: Math.random() * 25 + 8,
              height: Math.random() * 25 + 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* صورة الباقة */}
      <div className="relative h-48 overflow-hidden bg-sky-soft/60 dark:bg-night-panel/80">
        <img
          src={project.image}
          alt={project.type}
          className="h-full w-full object-cover saturate-[1.03] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* تأثير اللمعان */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* تأثير الكشف */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md"
          animate={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.35)",
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={14} className="text-white" />
          <span className="text-[10px] font-bold text-white">بئر</span>
        </motion.div>

        {/* شريط تقدم سفلي */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-water-blue to-water-cyan"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* معلومات الباقة */}
      <div className="relative z-10 p-4 sm:p-5">
        <div className="flex justify-end">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/12 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-black text-emerald-600 shadow-sm shadow-emerald-500/5 backdrop-blur-sm dark:text-emerald-300">
            <CheckCircle2 size={12} className="text-green-500" />
            {shared.verified}
          </div>
        </div>

        <h3 className="mt-2 text-[1.55rem] font-black leading-tight text-[var(--heading)] transition-colors duration-500 group-hover:text-water-blue dark:group-hover:text-water-cyan">
          {project.type}
        </h3>

        {/* خط فاصل مع قطرة متحركة */}
        <div className="my-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-water-blue/25 to-transparent" />
          <motion.div
            animate={{
              rotate: [0, 10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Droplets size={18} className="text-water-blue/40" />
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-water-blue/25 to-transparent" />
        </div>

        {/* الجملة السفلية مع نقطة ذهبية */}
        <div className="flex items-start gap-2">
          <Circle size={6} className="mt-1.5 shrink-0 fill-soft-gold text-soft-gold shadow-lg shadow-soft-gold/8" />
          <p className="text-sm font-semibold leading-relaxed text-[var(--muted)]">
            {project.subtitle || shared.wellSubtitle}
          </p>
        </div>

        {/* التكلفة */}
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-amber-400/10 bg-gradient-to-r from-amber-50/75 via-white/40 to-transparent px-3.5 py-2 shadow-sm shadow-amber-500/5 backdrop-blur-sm dark:from-amber-500/10 dark:via-white/[0.025]">
          <Coins size={22} className="text-amber-500" />
          <span className="text-[1.8rem] font-black leading-none text-amber-500" ref={costRef}>
            {animatedCost || project.cost}
          </span>
          <span className="text-sm text-[var(--muted)]">
            {language === "ar" ? "السعر" : "Price"}
          </span>
        </div>

        {/* المواصفات */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {project.specifications.map((spec, idx) => {
            const specColor = getSpecColor(spec);
            const isMainSpec =
              spec.label.includes("نوع البئر") || spec.label.includes("Well Type");

            const isDepth = spec.label.includes("العمق") || spec.label.includes("Depth");
            const isBeneficiaries =
              spec.label.includes("المستفيدين") || spec.label.includes("Beneficiaries");

            const shouldAnimateDepth =
              isDepth &&
              typeof spec.value === "string" &&
              (spec.value.trim().startsWith("إلى") ||
                spec.value.trim().toLowerCase().startsWith("up to"));

            const shouldAnimateBeneficiaries =
              isBeneficiaries &&
              typeof spec.value === "string" &&
              !spec.value.includes("عائلة") &&
              !spec.value.toLowerCase().includes("famil");

            let displayValue = spec.value;

            if (shouldAnimateDepth && animatedDepth > 0) {
              displayValue =
                language === "ar" ? `إلى ${animatedDepth} متر` : `Up to ${animatedDepth} m`;
            } else if (shouldAnimateBeneficiaries && animatedBeneficiaries > 0) {
              displayValue =
                language === "ar"
                  ? `${animatedBeneficiaries} شخص`
                  : `${animatedBeneficiaries} people`;
            }

            return (
              <SpecificationCard
                key={idx}
                spec={spec}
                displayValue={displayValue}
                specColor={specColor}
                isMain={isMainSpec}
                valueRef={isDepth ? depthRef : isBeneficiaries ? beneficiariesRef : undefined}
              />
            );
          })}
        </div>

        {/* ❌ تم حذف صف المستفيدين والعمر (الأيقونتين السفليتين) */}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const content = projectsData[language] || projectsData.ar;
  const shared = sharedContent[language] || sharedContent.ar;
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(content.list.length / itemsPerPage);
  const currentProjects = content.list.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // ✅ أيقونات الخلفية - 25 أيقونة (قطرات + آبار)
  const backgroundIcons = [
    // قطرات الماء (13 أيقونة)
    { Icon: Droplets, size: 55, color: "text-water-blue/18", left: "3%", top: "5%", delay: 0, duration: 14 },
    { Icon: Droplets, size: 35, color: "text-water-blue/14", left: "92%", top: "8%", delay: 1.2, duration: 16 },
    { Icon: Droplets, size: 45, color: "text-water-blue/16", left: "12%", top: "30%", delay: 2.5, duration: 13 },
    { Icon: Droplets, size: 28, color: "text-water-blue/12", left: "85%", top: "35%", delay: 3.8, duration: 17 },
    { Icon: Droplets, size: 50, color: "text-water-blue/17", left: "8%", top: "55%", delay: 4.2, duration: 15 },
    { Icon: Droplets, size: 32, color: "text-water-blue/13", left: "90%", top: "58%", delay: 5.5, duration: 14 },
    { Icon: Droplets, size: 42, color: "text-water-blue/15", left: "20%", top: "75%", delay: 6.8, duration: 18 },
    { Icon: Droplets, size: 25, color: "text-water-blue/11", left: "78%", top: "80%", delay: 7.2, duration: 16 },
    { Icon: Droplets, size: 38, color: "text-water-blue/14", left: "45%", top: "10%", delay: 1.8, duration: 15 },
    { Icon: Droplets, size: 48, color: "text-water-blue/16", left: "55%", top: "45%", delay: 3.2, duration: 17 },
    { Icon: Droplets, size: 30, color: "text-water-blue/12", left: "65%", top: "70%", delay: 4.8, duration: 14 },
    { Icon: Droplets, size: 40, color: "text-water-blue/15", left: "35%", top: "85%", delay: 6.0, duration: 16 },
    { Icon: Droplets, size: 33, color: "text-water-blue/13", left: "70%", top: "25%", delay: 2.2, duration: 15 },
    
    // آبار (12 أيقونة)
    { Icon: Building2, size: 42, color: "text-soft-gold/15", left: "5%", top: "18%", delay: 1.0, duration: 16 },
    { Icon: Building2, size: 30, color: "text-soft-gold/12", left: "88%", top: "20%", delay: 2.8, duration: 14 },
    { Icon: Building2, size: 38, color: "text-soft-gold/14", left: "15%", top: "42%", delay: 3.5, duration: 18 },
    { Icon: Building2, size: 26, color: "text-soft-gold/11", left: "82%", top: "48%", delay: 4.2, duration: 15 },
    { Icon: Building2, size: 45, color: "text-soft-gold/16", left: "10%", top: "65%", delay: 5.0, duration: 17 },
    { Icon: Building2, size: 28, color: "text-soft-gold/12", left: "85%", top: "68%", delay: 6.5, duration: 14 },
    { Icon: Building2, size: 35, color: "text-soft-gold/13", left: "25%", top: "88%", delay: 7.8, duration: 16 },
    { Icon: Building2, size: 32, color: "text-soft-gold/12", left: "72%", top: "90%", delay: 8.2, duration: 18 },
    { Icon: Building2, size: 40, color: "text-soft-gold/15", left: "50%", top: "22%", delay: 1.5, duration: 15 },
    { Icon: Building2, size: 28, color: "text-soft-gold/11", left: "60%", top: "55%", delay: 3.0, duration: 17 },
    { Icon: Building2, size: 35, color: "text-soft-gold/13", left: "30%", top: "65%", delay: 4.5, duration: 14 },
    { Icon: Building2, size: 25, color: "text-soft-gold/10", left: "75%", top: "38%", delay: 5.8, duration: 16 },
  ];

  return (
    <motion.section
      id="projects"
      className="relative isolate overflow-hidden py-20 text-[var(--body)] transition-colors duration-300 sm:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ أيقونات الخلفية المتوزعة - 25 أيقونة */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {backgroundIcons.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color}`}
              style={{
                left: item.left,
                top: item.top,
                width: item.size,
                height: item.size,
              }}
              animate={{
                y: [0, -12, 0, 12, 0],
                x: [0, 8, 0, -8, 0],
                rotate: [0, 4, 0, -4, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon size={item.size} strokeWidth={1.2} className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>

      {/* ✅ خلفية زخرفية مثل قسم Hero */}
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
        {/* رأس القسم */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 to-water-blue/5 px-6 py-2.5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Sparkles size={20} className="text-soft-gold" />
            <span className="text-lg font-black text-soft-gold tracking-wide md:text-xl">
              {content.eyebrow}
            </span>
            <Sparkles size={20} className="text-soft-gold" />
          </motion.div>

          <motion.h2
            className="mt-5 text-4xl font-black leading-[1.15] text-[var(--heading)] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {content.title}
          </motion.h2>

          <motion.p
            className="mt-4 text-lg font-medium leading-7 text-[var(--muted)] sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="mx-auto mt-5 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-soft-gold/40 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-soft-gold to-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-soft-gold/40 to-transparent" />
          </motion.div>
        </motion.div>

        {/* القسم الثابت - معلومات مشتركة (مختصر) */}
        <motion.div
          className="relative mt-16 overflow-hidden rounded-3xl border border-water-blue/10 bg-white/60 shadow-2xl shadow-water-blue/5 backdrop-blur-md dark:border-water-cyan/10 dark:bg-night-panel/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-water-blue/5 via-soft-gold/5 to-transparent dark:from-water-cyan/5 dark:via-soft-gold/5" />
          <div className="relative p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-water-blue/20 to-water-cyan/20 shadow-lg shadow-water-blue/10 dark:from-water-cyan/20 dark:to-water-blue/20">
                    <Droplets size={40} className="text-water-blue dark:text-water-cyan" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--heading)]">
                      {shared.tagline}
                    </h3>
                  </div>
                </div>
                <div className="relative mt-4 rounded-2xl border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 via-water-blue/5 to-transparent p-4">
                  <Heart size={24} className="absolute -left-3 -top-3 text-soft-gold" fill="rgba(255, 193, 7, 0.2)" />
                  <p className="whitespace-pre-line text-base font-medium leading-7 text-[var(--muted)]">
                    {shared.slogan}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* بطاقة الشفافية */}
                  <div className="rounded-2xl border border-soft-gold/10 bg-white/50 p-4 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft-gold/10 text-soft-gold">
                        <ShieldCheck size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--heading)]">{shared.transparencyTitle}</h4>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[var(--muted)]">{shared.progressLabel}</span>
                        <span className="font-bold text-water-blue dark:text-water-cyan">100%</span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-water-blue/10 dark:bg-water-cyan/10">
                        <div className="absolute right-0 top-0 h-full w-full rounded-full bg-gradient-to-l from-soft-gold via-water-blue to-soft-gold" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-green-500">
                        <CheckCircle2 size={14} />
                        <span>{shared.verified}</span>
                      </div>
                    </div>
                  </div>
                  {/* بطاقة التوثيق */}
                  <div className="rounded-2xl border border-water-blue/10 bg-white/50 p-4 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan">
                        <Camera size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--heading)]">{shared.documentation}</h4>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-1 rounded-full bg-water-blue/20 dark:bg-water-cyan/20" style={{ width: `${20 + i * 15}%` }} />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-[var(--muted)]">
                      <span>📸</span>
                      <span>{language === "ar" ? "+50 صورة موثقة" : "+50 documented photos"}</span>
                    </div>
                  </div>
                  {/* بطاقة GPS */}
                  <div className="rounded-2xl border border-indigo-500/10 bg-white/50 p-4 dark:bg-white/5 sm:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <MapPinned size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--heading)]">{shared.gps}</h4>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="relative h-3 w-3">
                          <div className="absolute inset-0 rounded-full bg-green-500" />
                          <div className="absolute inset-0 animate-ping rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-[var(--muted)]">
                          {language === "ar" ? "متابعة لحظية" : "Live tracking"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-indigo-500">
                        <MapPin size={12} />
                        <span>{language === "ar" ? "موقع دقيق" : "Precise location"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* شبكة الباقات */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[200px]">
          {currentProjects.map((project, index) => (
            <PackageCardFinal
              key={project.id}
              project={project}
              index={index}
              language={language}
              shared={shared}
              isHovered={hoveredId === project.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* التنقل بين الصفحات */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:shadow-water-blue/30 dark:bg-night-panel/80 dark:hover:bg-night-panel"
            >
              <ChevronLeft size={20} className="text-water-blue dark:text-water-cyan" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-8 bg-gradient-to-r from-water-blue to-water-cyan shadow-lg shadow-water-blue/40"
                      : "w-2.5 bg-water-blue/30 hover:bg-water-blue/50 dark:bg-water-cyan/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:shadow-water-blue/30 dark:bg-night-panel/80 dark:hover:bg-night-panel"
            >
              <ChevronRight size={20} className="text-water-blue dark:text-water-cyan" />
            </button>
          </div>
        )}

        {/* زر "استكشف الباقات" */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 rounded-full border border-water-blue/20 bg-gradient-to-r from-water-blue/15 to-soft-gold/15 px-8 py-4 font-bold text-water-blue transition-all hover:border-water-blue/50 hover:shadow-2xl hover:shadow-water-blue/30 dark:border-water-cyan/20 dark:bg-water-cyan/15 dark:text-water-cyan dark:hover:border-water-cyan/50 dark:hover:shadow-water-cyan/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative">
              {content.viewAll}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-water-blue to-water-cyan transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.button>
        </motion.div>
      </Container>
    </motion.section>
  );
}