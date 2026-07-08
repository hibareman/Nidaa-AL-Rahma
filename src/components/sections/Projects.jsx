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
import p7 from "/assets/p7.jpeg?url";
import p8 from "/assets/p8.jpeg?url";
import p9 from "/assets/p9.jpeg?url";
import p10 from "/assets/p10.jpeg?url";
import p11 from "/assets/p11.jpeg?url";
import p12 from "/assets/p12.jpeg?url";
import p13 from "/assets/p13.jpeg?url";
import {
  MapPin,
  ArrowUpRight,
  Droplets,
  Sparkles,
  Heart,
  ShieldCheck,
  Camera,
  MapPinned,
  Infinity,
  CheckCircle2,
  Ruler,
  UsersRound,
  Coins,
  Circle,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import SectionBackground from "./SectionBackground.jsx";
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
    title: "أسعار ومواصفات  حفر الآبار",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 7,
        type: "بئر متوسط عميق",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p7,
        depth: "40 إلى 60 متر",
        beneficiaries: "500 شخص وعائلة",
        lifespan: "50 سنة أو أكثر",
        cost: "1047 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-emerald-400",
        specifications: [
          { label: "نوع البئر", value: "بئر متوسط مع خزان ماء, 12 حنفية, مضخة يدوية, ماتور كهرباء, سيراميك", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "40 إلى 60 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "500 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "50 سنة أو أكثر", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "1047 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 8,
        type: "بئر عميق",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p8,
        depth: "40 متر",
        beneficiaries: "300 شخص وعائلة",
        lifespan: "35 سنة أو أكثر",
        cost: "703 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-indigo-400",
        specifications: [
          { label: "نوع البئر", value: "بئر مع 4 حنفيات, مضخة يدوية, ماتور كهربائي, خزان ماء", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "40 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "300 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "35 سنة أو أكثر", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "703 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 9,
        type: "بئر سطحي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p9,
        depth: "30 متر",
        beneficiaries: "150 شخص وعائلة",
        lifespan: "25-35 سنة",
        cost: "494 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          { label: "نوع البئر", value: "بئر ماء 3 حنفيات, مضخة يدوية, ماتور كهربائي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "30 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "150 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "25-35 سنة", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "494 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 10,
        type: "بئر سطحي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p10,
        depth: "30 متر",
        beneficiaries: "150 شخص وعائلة",
        lifespan: "25-35 سنة",
        cost: "515 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          { label: "نوع البئر", value: "بئر سطحي مع سيراميك, 2 حنفيات, مضخة يدوية, ماتور كهربائي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "30 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "150 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "25-35 سنة", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "515 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 11,
        type: "بئر يدوي سطحي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p11,
        depth: "20 متر",
        beneficiaries: "30-40 شخص وعائلة",
        lifespan: "15-25 سنة",
        cost: "282 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          { label: "نوع البئر", value: "بئر يدوي سطحي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "20 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "30-40 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "15-25 سنة", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "282 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 12,
        type: "بئر يدوي سطحي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p12,
        depth: "30 متر",
        beneficiaries: "30-40 شخص وعائلة",
        lifespan: "25-35 سنة",
        cost: "282 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          { label: "نوع البئر", value: "بئر يدوي سطحي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "30 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "30-40 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "25-35 سنة", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "282 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
            icon: MapPinned,
            color: "text-indigo-500",
          }           ],
      },
      {
        id: 13,
        type: "بئر يدوي سطحي",
        subtitle: "بئر خير يدوم وينتفع به الكثير",
        image: p13,
        depth: "20 متر",
        beneficiaries: "30-40 شخص وعائلة",
        lifespan: "15-25 سنة",
        cost: "211 دولار",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          { label: "نوع البئر", value: "بئر يدوي سطحي", icon: Droplets, color: "text-water-blue" },
          { label: "العمق", value: "20 متر", icon: Ruler, color: "text-teal-500" },
          { label: "المستفيدين", value: "30-40 شخص وعائلة", icon: UsersRound, color: "text-emerald-500" },
          { label: "العمر", value: "15-25 سنة", icon: Infinity, color: "text-purple-500" },
          { label: "التكلفة", value: "211 دولار", icon: Coins, color: "text-amber-500" },
          {
            label: "GPS للبئر",
            value: "لضمان الشفافية و متابعة التنفيذ",
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
            value: "For transparency and follow-up",
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
            value: "For transparency and follow-up",
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
            value: "For transparency and follow-up",
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
            value: "For transparency and follow-up",
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
            value: "For transparency and follow-up",
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
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 7,
        type: "Medium Deep Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p7,
        depth: "40 to 60 m",
        beneficiaries: "500 people and families",
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
            value: "40 to 60 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "500 people and families",
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
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 8,
        type: "Deep Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p8,
        depth: "40 m",
        beneficiaries: "300 people and families",
        lifespan: "35 years or more",
        cost: "$703",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-indigo-400",
        specifications: [
          {
            label: "Well Type",
            value: "Well with 4 taps, hand pump, electric motor, and water tank",
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
            value: "300 people and families",
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
            value: "$703",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 9,
        type: "Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p9,
        depth: "30 m",
        beneficiaries: "150 people and families",
        lifespan: "25-35 years",
        cost: "$494",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          {
            label: "Well Type",
            value: "Water well with 3 taps, hand pump, and electric motor",
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
            value: "150 people and families",
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
            value: "$494",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 10,
        type: "Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p10,
        depth: "30 m",
        beneficiaries: "150 people and families",
        lifespan: "25-35 years",
        cost: "$515",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-sky-400",
        specifications: [
          {
            label: "Well Type",
            value: "Surface well with ceramic, 2 taps, hand pump, and electric motor",
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
            value: "150 people and families",
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
            value: "$515",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 11,
        type: "Manual Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p11,
        depth: "20 m",
        beneficiaries: "30-40 people and families",
        lifespan: "15-25 years",
        cost: "$282",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          {
            label: "Well Type",
            value: "Manual surface well",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "20 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "30-40 people and families",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "15-25 years",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$282",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 12,
        type: "Manual Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p12,
        depth: "30 m",
        beneficiaries: "30-40 people and families",
        lifespan: "25-35 years",
        cost: "$282",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          {
            label: "Well Type",
            value: "Manual surface well",
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
            value: "30-40 people and families",
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
            value: "$282",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
            icon: MapPinned,
            color: "text-indigo-500",
          },
        ],
      },
      {
        id: 13,
        type: "Manual Surface Well",
        subtitle: "A well of goodness that lasts and benefits many",
        image: p13,
        depth: "20 m",
        beneficiaries: "30-40 people and families",
        lifespan: "15-25 years",
        cost: "$211",
        icon: Droplets,
        iconColor: "text-water-blue",
        iconBg: "bg-water-blue/10",
        borderColor: "border-water-blue/30",
        badgeColor: "from-water-blue to-purple-400",
        specifications: [
          {
            label: "Well Type",
            value: "Manual surface well",
            icon: Droplets,
            color: "text-water-blue",
          },
          {
            label: "Depth",
            value: "20 m",
            icon: Ruler,
            color: "text-teal-500",
          },
          {
            label: "Beneficiaries",
            value: "30-40 people and families",
            icon: UsersRound,
            color: "text-emerald-500",
          },
          {
            label: "Lifespan",
            value: "15-25 years",
            icon: Infinity,
            color: "text-purple-500",
          },
          {
            label: "Cost",
            value: "$211",
            icon: Coins,
            color: "text-amber-500",
          },
          {
            label: "Well GPS",
            value: "For transparency and follow-up",
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
  const isGpsSpec = spec.label.includes("GPS");

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
                : isGpsSpec
                  ? "mt-0.5 whitespace-normal break-words text-[0.68rem] font-black leading-[1.15rem] text-[var(--heading)] sm:text-[0.72rem] sm:leading-5"
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
  const gpsSpec = project.specifications?.find((spec) => spec.label.includes("GPS"));
  const visibleSpecs = gpsSpec
    ? [...project.specifications.slice(0, 4), gpsSpec]
    : project.specifications.slice(0, 4);

  const { count: animatedCost, ref: costRef } = useAnimatedCounter(costNumber, 1500);
  const { count: animatedBeneficiaries, ref: beneficiariesRef } = useAnimatedCounter(beneficiariesNumber, 1500);
  const { count: animatedDepth, ref: depthRef } = useAnimatedCounter(depthNumber, 1500);
  const displayedCost =
    animatedCost > 0
      ? language === "ar"
        ? `${animatedCost} دولار`
        : `$${animatedCost}`
      : project.cost;

  const handleMouseLeave = () => {
    onHover(null);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[1.2rem] border border-white/75 bg-white/[0.82] shadow-[0_14px_34px_rgba(21,155,215,0.075)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-water-blue/22 hover:shadow-[0_18px_44px_rgba(21,155,215,0.11)] dark:border-white/10 dark:bg-night-panel/55 dark:shadow-black/18 dark:hover:border-water-cyan/20 sm:rounded-[1.65rem]"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: "easeOut" }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={handleMouseLeave}
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
      <div className="absolute inset-0 rounded-[1.2rem] bg-gradient-to-br from-white/28 via-white/8 to-transparent backdrop-blur-sm dark:from-white/[0.045] dark:via-water-cyan/[0.018] sm:rounded-[1.65rem]" />

      {/* شريط جانبي */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b ${project.badgeColor} opacity-55 transition-opacity duration-300 group-hover:opacity-90`}
      />

      {/* صورة الباقة - ارتفاع أقل على الجوال */}
      <div className="relative h-44 sm:h-64 overflow-hidden bg-sky-soft/60 dark:bg-night-panel/80">
        <img
          src={project.image}
          alt={project.type}
          className="h-full w-full object-cover object-[center_34%] saturate-[1.04] contrast-[1.02] transition-transform duration-500 group-hover:scale-100"
        />

        {/* تأثير الكشف */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent opacity-32 transition-opacity duration-300 group-hover:opacity-42" />

        <motion.div
          className="absolute left-2 top-2 sm:left-3 sm:top-3 z-10 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-md"
          animate={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.35)",
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={11} className="text-white sm:size-4" />
          <span className="text-[8px] font-bold text-white sm:text-[10px]">بئر</span>
        </motion.div>

        {/* شريط تقدم سفلي */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20 backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-water-blue to-water-cyan"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* معلومات الباقة - تصغير الخطوط والمسافات على الجوال */}
      <div className="relative z-10 p-3 sm:p-4">
        <div className="flex justify-end">
          <div className="flex items-center gap-1 rounded-full border border-emerald-500/12 bg-emerald-500/10 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8px] font-black text-emerald-600 shadow-sm shadow-emerald-500/5 backdrop-blur-sm dark:text-emerald-300 sm:text-[10px]">
            <CheckCircle2 size={10} className="text-green-500 sm:size-3" />
            <span className="hidden sm:inline">{shared.verified}</span>
          </div>
        </div>

        <h3 className="mt-1.5 sm:mt-2 text-base font-black leading-tight text-[var(--heading)] transition-colors duration-500 group-hover:text-water-blue dark:group-hover:text-water-cyan sm:text-[1.55rem]">
          {project.type}
        </h3>

        {/* خط فاصل مع قطرة متحركة - تصغير على الجوال */}
        <div className="my-1.5 sm:my-3 flex items-center gap-2 sm:gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-water-blue/25 to-transparent" />
          <span>
            <Droplets size={14} className="text-water-blue/40 sm:size-[18px]" />
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-water-blue/25 to-transparent" />
        </div>

        {/* الجملة السفلية مع نقطة ذهبية - تصغير على الجوال */}
        <div className="flex items-start gap-1.5 sm:gap-2">
          <Circle size={4} className="mt-1 shrink-0 fill-soft-gold text-soft-gold shadow-lg shadow-soft-gold/8 sm:size-[6px]" />
          <p className="text-[10px] font-semibold leading-relaxed text-[var(--muted)] sm:text-sm">
            {project.subtitle || shared.wellSubtitle}
          </p>
        </div>

        {/* التكلفة - تصغير على الجوال */}
        <div className="mt-2 sm:mt-4 flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-amber-400/10 bg-gradient-to-r from-amber-50/75 via-white/40 to-transparent px-2 py-1 sm:px-3.5 sm:py-2 shadow-sm shadow-amber-500/5 backdrop-blur-sm dark:from-amber-500/10 dark:via-white/[0.025]">
          <Coins size={16} className="text-amber-500 sm:size-[22px]" />
          <span className="text-lg font-black leading-none text-amber-500 sm:text-[1.8rem]" ref={costRef}>
            {displayedCost}
          </span>
          <span className="text-[8px] text-[var(--muted)] sm:text-sm">
            {language === "ar" ? "السعر" : "Price"}
          </span>
        </div>

        {/* المواصفات - تصغير على الجوال */}
        <div className="mt-2 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2.5">
          {visibleSpecs.map((spec, idx) => {
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
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const content = projectsData[language] || projectsData.ar;
  const shared = sharedContent[language] || sharedContent.ar;
  const [hoveredId, setHoveredId] = useState(null);
  const [showMorePackages, setShowMorePackages] = useState(false);
  const visibleProjects = showMorePackages ? content.list : content.list.slice(0, 6);
  const hasMorePackages = visibleProjects.length < content.list.length;

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#f4fbff] py-16 text-[#071d3d] transition-colors duration-300 dark:bg-[#102133] dark:text-slate-50 sm:py-20 lg:py-24"
    >
      <SectionBackground density="medium" />

      <Container>
        {/* رأس القسم - تصغير على الجوال */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 to-water-blue/5 px-4 py-1.5 sm:px-6 sm:py-2.5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Sparkles size={14} className="text-soft-gold sm:size-[18px]" />
            <span className="text-[11px] font-black text-soft-gold tracking-wide sm:text-lg md:text-xl">
              {content.eyebrow}
            </span>
            <Sparkles size={14} className="text-soft-gold sm:size-[18px]" />
          </motion.div>

          <motion.h2
            className="mt-3 sm:mt-5 text-2xl font-black leading-[1.15] text-[var(--heading)] sm:text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {language === "ar" ? (
              <>
                <span className="text-[var(--heading)] dark:text-slate-50">
                   أسعار و مواصفات     حفر الآبار 
                </span>
                <br className="block sm:hidden" />
                      
              </>
            ) : (
              content.title
            )}
          </motion.h2>

          <motion.p
            className="mt-2 sm:mt-4 text-sm font-medium leading-6 text-[var(--muted)] sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="mx-auto mt-3 sm:mt-5 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-soft-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-soft-gold/50" />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-soft-gold/30" />
          </motion.div>
        </motion.div>

        {/* القسم الثابت - معلومات مشتركة (مختصر) */}
        <motion.div
          className="relative mt-10 overflow-hidden rounded-2xl border border-water-blue/10 bg-white/60 shadow-[0_16px_42px_rgba(21,155,215,0.08)] backdrop-blur-md dark:border-water-cyan/10 dark:bg-night-panel/60 dark:shadow-black/16 sm:mt-16 sm:rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-water-blue/5 via-soft-gold/5 to-transparent dark:from-water-cyan/5 dark:via-soft-gold/5" />
          <div className="relative p-4 sm:p-8">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative flex h-14 w-14 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-water-blue/20 to-water-cyan/20 shadow-lg shadow-water-blue/10 dark:from-water-cyan/20 dark:to-water-blue/20">
                    <Droplets size={28} className="text-water-blue dark:text-water-cyan sm:size-[40px]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[var(--heading)] sm:text-2xl">
                      {shared.tagline}
                    </h3>
                  </div>
                </div>
                <div className="relative mt-3 sm:mt-4 rounded-2xl border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 via-water-blue/5 to-transparent p-3 sm:p-4">
                  <Heart size={18} className="absolute -left-2 -top-2 sm:-left-3 sm:-top-3 text-soft-gold sm:size-[24px]" fill="rgba(255, 193, 7, 0.2)" />
                  <p className="text-sm font-medium leading-6 text-[var(--muted)] sm:text-base">
                    {shared.slogan}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {/* بطاقة الشفافية */}
                  <div className="rounded-2xl border border-soft-gold/10 bg-white/50 p-3 sm:p-4 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-soft-gold/10 text-soft-gold">
                        <ShieldCheck size={18} strokeWidth={1.5} className="sm:size-[24px]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--heading)] sm:text-base">{shared.transparencyTitle}</h4>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] sm:text-xs">
                        <span className="text-[var(--muted)]">{shared.progressLabel}</span>
                        <span className="font-bold text-water-blue dark:text-water-cyan">100%</span>
                      </div>
                      <div className="relative h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-water-blue/10 dark:bg-water-cyan/10">
                        <div className="absolute right-0 top-0 h-full w-full rounded-full bg-gradient-to-l from-soft-gold via-water-blue to-soft-gold" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-500">
                        <CheckCircle2 size={12} className="sm:size-[14px]" />
                        <span>{shared.verified}</span>
                      </div>
                    </div>
                  </div>
                  {/* بطاقة التوثيق */}
                  <div className="rounded-2xl border border-water-blue/10 bg-white/50 p-3 sm:p-4 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan">
                        <Camera size={18} strokeWidth={1.5} className="sm:size-[24px]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--heading)] sm:text-base">{shared.documentation}</h4>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-1 rounded-full bg-water-blue/20 dark:bg-water-cyan/20" style={{ width: `${20 + i * 15}%` }} />
                      ))}
                    </div>
                    <div className="mt-1 sm:mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-[var(--muted)]">
                      <span>📸</span>
                      <span>{language === "ar" ? "+50 صورة موثقة" : "+50 documented photos"}</span>
                    </div>
                  </div>
                  {/* بطاقة GPS */}
                  <div className="rounded-2xl border border-indigo-500/10 bg-white/50 p-3 sm:p-4 dark:bg-white/5 sm:col-span-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <MapPinned size={18} strokeWidth={1.5} className="sm:size-[24px]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--heading)] sm:text-base">{shared.gps}</h4>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="relative h-2 w-2 sm:h-3 sm:w-3">
                          <div className="absolute inset-0 rounded-full bg-green-500" />
                          <div className="absolute inset-0 rounded-full bg-green-500/30" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[var(--muted)]">
                          {language === "ar" ? "متابعة لحظية" : "Live tracking"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-indigo-500">
                        <MapPin size={10} className="sm:size-[12px]" />
                        <span>{language === "ar" ? "موقع دقيق" : "Precise location"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* شبكة الباقات - grid-cols-1 على الجوال */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
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

        {/* زر "استكشف الباقات" - تصغير على الجوال */}
        {hasMorePackages && (
        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setShowMorePackages(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-water-blue/20 bg-gradient-to-r from-water-blue/15 to-soft-gold/15 px-5 py-2.5 text-sm font-bold text-water-blue transition-all hover:border-water-blue/45 hover:shadow-[0_14px_34px_rgba(21,155,215,0.12)] dark:border-water-cyan/20 dark:bg-water-cyan/15 dark:text-water-cyan dark:hover:border-water-cyan/45 dark:hover:shadow-[0_14px_34px_rgba(34,199,221,0.1)] sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative text-sm sm:text-base">
              {language === "ar" ? "اكتشف المزيد من الباقات" : "Discover more packages"}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-water-blue to-water-cyan transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-[18px]"
            />
          </motion.button>
        </motion.div>
        )}
      </Container>
    </section>
  );
}
