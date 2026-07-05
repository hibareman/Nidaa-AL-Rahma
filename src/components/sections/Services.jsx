// src/components/sections/Services.jsx
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Droplets,
  Building2,
  Camera,
  ShieldCheck,
  Sparkles,
  Heart,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const servicesData = {
  ar: {
    eyebrow: "خدماتنا",
    title: "نحفر الأمل... ونبني السعادة",
    description:
      "نقدّم حلولاً مستدامة للمجتمعات المسلمة النائية، تجمع بين مياه الشرب النظيفة وبيوت العبادة، مع توثيق شفاف من البداية حتى التسليم.",
    list: [
      {
        id: 0,
        icon: Droplets,
        title: "حفر الآبار",
        description:
          "ننفذ آباراً ارتوازية وسطحية وبئراً يدوية بمتوسط عمق يناسب الطبقات المائية، لضمان وصول الماء العذب للأهالي.",
        stat: "أكثر من 120 بئراً",
        color: "text-water-blue",
        borderColor: "border-water-blue",
        bgColor: "bg-water-blue",
      },
      {
        id: 1,
        icon: Building2,
        title: "بناء المساجد",
        description:
          "نُشيد مساجد جديدة ونُرمّم القديمة، مع تجهيزها بكل ما تحتاجه من فرش ومكبرات ودورات مياه، لتكون منارة للخير.",
        stat: "أكثر من 30 مسجداً",
        color: "text-soft-gold",
        borderColor: "border-soft-gold",
        bgColor: "bg-soft-gold",
      },
      {
        id: 2,
        icon: Camera,
        title: "التوثيق الشامل",
        description:
          "نُوثّق كل مشروع بالصور والفيديو من لحظة تجهيز اللوحة التذكارية حتى حفر الأساسات والافتتاح النهائي، لضمان الشفافية الكاملة.",
        stat: "شفافية 100%",
        color: "text-teal-500",
        borderColor: "border-teal-500",
        bgColor: "bg-teal-500",
      },
      {
        id: 3,
        icon: ShieldCheck,
        title: "الجودة والضمان",
        description:
          "نلتزم بأعلى معايير الجودة في التنفيذ، مع متابعة دورية لضمان استدامة الأثر واستمرارية الخدمة للأجيال القادمة.",
        stat: "مستدام للأجيال",
        color: "text-indigo-500",
        borderColor: "border-indigo-500",
        bgColor: "bg-indigo-500",
      },
    ],
  },
  en: {
    eyebrow: "Our Services",
    title: "We dig hope... and build happiness",
    description:
      "We provide sustainable solutions for remote Muslim communities, combining clean drinking water and places of worship, with transparent documentation from start to delivery.",
    list: [
      {
        id: 0,
        icon: Droplets,
        title: "Well Drilling",
        description:
          "We implement artesian, surface, and manual wells at suitable depths to ensure fresh water reaches the locals.",
        stat: "120+ Wells",
        color: "text-water-blue",
        borderColor: "border-water-blue",
        bgColor: "bg-water-blue",
      },
      {
        id: 1,
        icon: Building2,
        title: "Mosque Construction",
        description:
          "We build new mosques and renovate old ones, equipping them with carpets, speakers, and restrooms to be beacons of goodness.",
        stat: "30+ Mosques",
        color: "text-soft-gold",
        borderColor: "border-soft-gold",
        bgColor: "bg-soft-gold",
      },
      {
        id: 2,
        icon: Camera,
        title: "Comprehensive Documentation",
        description:
          "We document every project with photos and videos from preparation to final opening, ensuring full transparency.",
        stat: "100% Transparency",
        color: "text-teal-500",
        borderColor: "border-teal-500",
        bgColor: "bg-teal-500",
      },
      {
        id: 3,
        icon: ShieldCheck,
        title: "Quality & Guarantee",
        description:
          "We adhere to the highest quality standards, with regular follow-ups to ensure the sustainability and longevity of the service.",
        stat: "Sustainable",
        color: "text-indigo-500",
        borderColor: "border-indigo-500",
        bgColor: "bg-indigo-500",
      },
    ],
  },
};

function TimelineItem({ service, index, isLast, language }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  const heroLikeIconColor =
    index === 0
      ? "text-white dark:text-water-cyan"
      : index === 1
        ? "text-white dark:text-soft-gold"
        : index === 2
          ? "text-white dark:text-teal-300"
          : "text-white dark:text-water-cyan";

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* الخط العمودي */}
      {!isLast && (
        <div className="absolute left-[23px] top-12 h-full w-0.5 bg-water-blue/20 dark:bg-water-cyan/20" />
      )}

      {/* النقطة */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-water-blue shadow-lg shadow-water-blue/20 dark:border-white/10 dark:bg-night-panel/84 dark:shadow-black/20">
        <Icon size={23} className={heroLikeIconColor} strokeWidth={1.8} />
      </div>

      {/* المحتوى */}
      <div className="flex-1 pb-9">
        <div className="rounded-2xl bg-white/70 p-5 shadow-lg backdrop-blur-sm dark:bg-night-panel/70">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-black text-[var(--heading)] sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-1 text-sm font-bold text-water-blue dark:text-water-cyan">
                {service.stat}
              </p>
            </div>
            <span className="text-sm font-bold text-[var(--muted)]">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { language } = useLanguage();
  const content = servicesData[language] || servicesData.ar;

  return (
    <motion.section
      id="services"
      className="relative isolate overflow-hidden bg-[#f4fbff] py-16 text-[#071d3d] transition-colors duration-300 dark:bg-night-navy dark:text-slate-50 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* خلفية مطابقة تماماً لخلفية Hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_45%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#152b42_52%,#0d2f43_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.22),transparent_66%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.16),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(207,237,252,0.66)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(34,199,221,0.08)_100%)]" />
      </div>

      <Container>
        {/* رأس القسم المُحسّن */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* كلمة "خدماتنا" بتصميم جديد مع نجمة ذهبية */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 to-water-blue/5 px-6 py-2.5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Sparkles size={18} className="text-soft-gold" />
            <span className="bg-gradient-to-r from-soft-gold to-amber-400 bg-clip-text text-sm font-black text-transparent">
              {content.eyebrow}
            </span>
            <Sparkles size={18} className="text-soft-gold" />
          </motion.div>

          {/* العنوان الرئيسي - الألوان الأساسية */}
          <motion.h2
            className="mt-5 text-3xl font-black leading-[1.15] text-[var(--heading)] sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {/* نحفر الأمل - باللون الأساسي */}
            <span className="text-[var(--heading)] dark:text-slate-50">
              نحفر الأمل
            </span>
            {/* النقاط الثلاث - باللون الذهبي */}
            <span className="text-soft-gold">...</span>
            {/* ونبني السعادة - باللون الأساسي */}
            <span className="text-[var(--heading)] dark:text-slate-50">
              {" "}
              ونبني السعادة
            </span>
          </motion.h2>

          {/* النص الوصفي - اللون الأساسي */}
          <motion.p
            className="mt-4 text-base font-medium leading-7 text-[var(--muted)] sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {content.description}
          </motion.p>

          {/* خط فاصل زخرفي ذهبي */}
          <motion.div
            className="mx-auto mt-5 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-soft-gold/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-soft-gold/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-soft-gold/30" />
          </motion.div>
        </motion.div>

        {/* الخط الزمني - محتفظ بالتصميم الأصلي */}
        <div className="mx-auto mt-10 max-w-3xl">
          {content.list.map((service, index) => (
            <TimelineItem
              key={service.id}
              service={service}
              index={index}
              isLast={index === content.list.length - 1}
              language={language}
            />
          ))}
        </div>

        {/* الجملة الختامية بنفس لون "خدماتنا" */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-soft-gold/20 bg-gradient-to-r from-soft-gold/5 to-water-blue/5 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-soft-gold/30 hover:shadow-lg hover:shadow-soft-gold/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Heart
              size={16}
              className="text-soft-gold animate-pulse"
              strokeWidth={2.5}
            />
            <span className="bg-gradient-to-r from-soft-gold to-amber-400 bg-clip-text text-sm font-bold text-transparent">
              {language === "ar"
                ? "رحلة العطاء تبدأ هنا... وتبقى للأبد"
                : "The journey of giving starts here... and lasts forever"}
            </span>
            <Heart
              size={16}
              className="text-soft-gold animate-pulse"
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}