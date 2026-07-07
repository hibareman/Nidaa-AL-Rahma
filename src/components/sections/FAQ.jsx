import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Camera,
  ChevronDown,
  Clock,
  Droplets,
  HandHeart,
  HelpCircle,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqContent = {
  ar: {
    badge: "إجابات تهمك",
    title: "الأسئلة الشائعة",
    description:
      "نوضح لك أهم التفاصيل حول آلية تنفيذ المشاريع، التوثيق، المتابعة، وطرق التواصل.",
    supportTitle: "لم تجد إجابتك؟",
    supportText:
      "نسعد بالرد على استفسارك ومساعدتك في اختيار المشروع المناسب أو متابعة تفاصيل التوثيق.",
    supportCta: "تواصل معنا",
    items: [
      {
        question: "كيف يتم توثيق المشاريع؟",
        answer:
          "يتم توثيق مراحل المشروع بالصور من بداية التنفيذ وحتى التسليم، مع إظهار تفاصيل المشروع لضمان الشفافية والاطمئنان.",
        Icon: Camera,
      },
      {
        question: "هل يتم إرسال صور المشروع بعد التنفيذ؟",
        answer:
          "نعم، يتم توفير صور توثيقية للمشروع بعد التنفيذ، ويمكن أن تشمل صوراً قبل التنفيذ وأثناء التنفيذ وبعد اكتماله.",
        Icon: ShieldCheck,
      },
      {
        question: "هل يمكنني تنفيذ بئر صدقة جارية باسم شخص معين؟",
        answer:
          "نعم، يمكن تنفيذ المشروع كصدقة جارية باسم الشخص الذي تختاره، مع كتابة الاسم ضمن توثيق المشروع حسب التفاصيل المتفق عليها.",
        Icon: HandHeart,
      },
      {
        question: "هل يظهر موقع المشروع؟",
        answer:
          "نعم، عند توفر إحداثيات المشروع يمكن عرض موقعه عبر رابط Google Maps لضمان الشفافية والمتابعة.",
        Icon: MapPinned,
      },
      {
        question: "كم يستغرق تنفيذ المشروع؟",
        answer:
          "تختلف مدة التنفيذ حسب نوع المشروع وموقعه والظروف الميدانية، ويتم توضيح التفاصيل عند اختيار الباقة أو المشروع.",
        Icon: Clock,
      },
      {
        question: "هل يمكن متابعة مراحل التنفيذ؟",
        answer:
          "نعم، يمكن مشاركة تحديثات وصور توثيقية أثناء مراحل التنفيذ عند توفرها.",
        Icon: Camera,
      },
      {
        question: "ما أنواع المشاريع التي تنفذونها؟",
        answer:
          "ننفذ مشاريع حفر الآبار، مشاريع المياه، وبناء أو دعم المساجد في المجتمعات المحتاجة، حسب الإمكانيات والمواقع المتاحة.",
        Icon: Droplets,
      },
      {
        question: "كيف يمكنني التواصل لطلب مشروع؟",
        answer:
          "يمكنك التواصل معنا من خلال قسم تواصل معنا عبر واتساب أو منصات التواصل أو نموذج التواصل في الموقع.",
        Icon: MessageCircle,
      },
    ],
  },
  en: {
    badge: "Helpful Answers",
    title: "Frequently Asked Questions",
    description:
      "Clear answers about project delivery, documentation, follow-up, and ways to contact us.",
    supportTitle: "Still Have a Question?",
    supportText:
      "We are happy to answer your questions and help you choose the right project or follow documentation details.",
    supportCta: "Contact Us",
    items: [
      {
        question: "How are projects documented?",
        answer:
          "Project stages are documented with photos from the start of implementation through handover, with project details shown for transparency and reassurance.",
        Icon: Camera,
      },
      {
        question: "Are project photos sent after completion?",
        answer:
          "Yes, documentation photos are provided after implementation, and they may include photos before, during, and after completion.",
        Icon: ShieldCheck,
      },
      {
        question: "Can I dedicate a well as ongoing charity for someone?",
        answer:
          "Yes, the project can be carried out as ongoing charity for the person you choose, with the name included in the project documentation according to the agreed details.",
        Icon: HandHeart,
      },
      {
        question: "Is the project location shown?",
        answer:
          "Yes, when coordinates are available, the location can be shown through a Google Maps link for transparency and follow-up.",
        Icon: MapPinned,
      },
      {
        question: "How long does implementation take?",
        answer:
          "Implementation time varies by project type, location, and field conditions. Details are clarified when choosing the package or project.",
        Icon: Clock,
      },
      {
        question: "Can implementation stages be followed?",
        answer:
          "Yes, updates and documentation photos can be shared during implementation stages when available.",
        Icon: Camera,
      },
      {
        question: "What project types do you implement?",
        answer:
          "We implement water well projects, water initiatives, and mosque building or support projects in communities in need, depending on available capacity and locations.",
        Icon: Droplets,
      },
      {
        question: "How can I contact you to request a project?",
        answer:
          "You can contact us through the Contact section via WhatsApp, social platforms, or the contact form on the website.",
        Icon: MessageCircle,
      },
    ],
  },
};

function FAQItem({ item, isOpen, onToggle, index }) {
  const Icon = item.Icon;
  const answerId = `faq-answer-${index}`;

  return (
    <motion.div
      className="overflow-hidden rounded-3xl border border-water-blue/10 bg-white/72 shadow-[0_18px_48px_rgba(21,155,215,0.08)] backdrop-blur-xl transition-colors dark:border-water-cyan/10 dark:bg-night-panel/58"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, delay: index * 0.035, ease: "easeOut" }}
    >
      <button
        type="button"
        className="flex w-full items-center gap-3 px-4 py-4 text-start sm:px-5"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan">
          <Icon size={21} />
        </span>
        <span className="min-w-0 flex-1 text-sm font-black leading-6 text-[var(--heading)] sm:text-base">
          {item.question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-soft text-water-blue transition duration-300 dark:bg-white/7 dark:text-water-cyan ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={19} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <p className="px-4 pb-5 pe-16 text-sm font-medium leading-7 text-[var(--muted)] sm:px-5 sm:pe-20">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { language } = useLanguage();
  const content = faqContent[language] || faqContent.ar;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden py-12 text-[var(--body)] sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#edf9ff_48%,#fbfaf7_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#17293d_54%,#0f766e_140%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(34,199,221,0.13),transparent)] dark:bg-[linear-gradient(180deg,rgba(34,199,221,0.09),transparent)]" />
      </div>

      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/20 bg-white/72 px-4 py-2 text-xs font-black text-soft-gold shadow-lg shadow-soft-gold/8 backdrop-blur-xl dark:border-soft-gold/18 dark:bg-white/8">
            <Sparkles size={15} />
            {content.badge}
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.12] text-[var(--heading)] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <div className="grid gap-3">
            {content.items.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          <motion.aside
            className="rounded-[2rem] border border-water-blue/10 bg-white/72 p-5 shadow-[0_14px_36px_rgba(21,155,215,0.08)] backdrop-blur-xl dark:border-water-cyan/10 dark:bg-night-panel/62"
            initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-gold/12 text-soft-gold">
              <HelpCircle size={28} />
            </div>
            <h3 className="mt-4 text-xl font-black text-[var(--heading)]">
              {content.supportTitle}
            </h3>
            <p className="mt-3 text-sm font-medium leading-7 text-[var(--muted)]">
              {content.supportText}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-water-blue to-water-cyan px-5 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(21,155,215,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(21,155,215,0.22)]"
            >
              <MessageCircle size={17} />
              {content.supportCta}
              <ArrowUpRight size={16} />
            </a>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
