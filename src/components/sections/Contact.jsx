import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  Sparkles,
  UserRound,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import SectionBackground from "./SectionBackground.jsx";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "../ui/BrandIcons.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { createWhatsappUrl } from "../../constants/whatsapp.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const contactLinks = {
  whatsapp: createWhatsappUrl(),
  email: `mailto:${siteConfig.contact.email}`,
  facebook: "https://www.facebook.com/share/1Fy9zVYZan/",
  instagram: "https://www.instagram.com/nedaa_alrahmawater?igsh=cnRiMjh4YXdhc3h0",
  youtube: "https://www.youtube.com/@nidaaalrahma",
};

const contactContent = {
  ar: {
    badge: "نحن هنا لمساعدتك",
    title: "تواصل معنا",
    description:
      "يسعدنا استقبال استفساراتكم وطلباتكم حول مشاريع الآبار والمساجد والتوثيق.",
    status: " متاحون للتواصل دائماً  ",
    infoTitle: "معلومات التواصل",
    infoText: "اختر الطريقة الأنسب لك للتواصل معنا حول مشروعك أو استفسارك.",
    socialTitle: "روابط التواصل",
    socialText: "تابعنا أو تواصل معنا مباشرة عبر القنوات المتاحة.",
    whatsappTitle: "تواصل مباشر عبر واتساب",
    whatsappText: "+44 7411 572266",
    whatsappCta: "ابدأ المحادثة",
    formTitle: "أرسل استفسارك",
    formText: "اكتب تفاصيل طلبك، وسيتم تجهيز رسالة بريد إلكتروني موجهة إلى بريدنا مباشرة.",
    submit: "إرسال الرسالة",
    success:
      "تم تجهيز رسالتك لإرسالها إلى بريدنا الإلكتروني.",
    fields: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف أو واتساب",
      email: "البريد الإلكتروني",
      projectType: "نوع المشروع",
      message: "الرسالة",
      namePlaceholder: "اكتب اسمك الكامل",
      phonePlaceholder: "مثال: +44 7XXXXXXXXX",
      emailPlaceholder: "name@email.com",
      messagePlaceholder: "اكتب رسالتك أو تفاصيل المشروع المطلوب",
    },
    projectTypes: ["حفر بئر", "بناء مسجد", "توثيق مشروع", "استفسار عام"],
    contactItems: [
      { label: "واتساب", value: "+44 7411 572266", Icon: WhatsAppIcon, href: contactLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "البريد الإلكتروني", value: siteConfig.contact.email, Icon: EmailIcon, href: contactLinks.email, iconClassName: "text-water-blue dark:text-water-cyan" },
      { label: "نطاق العمل", value: "مشاريع خيرية وإنسانية", Icon: MapPin },
      { label: "التوثيق", value: "صور وتفاصيل مراحل التنفيذ", Icon: Camera },
    ],
    socialLinks: [
      { label: "WhatsApp", Icon: WhatsAppIcon, href: contactLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "Facebook", Icon: FacebookIcon, href: contactLinks.facebook, iconClassName: "text-[#1877F2]" },
      { label: "Instagram", Icon: InstagramIcon, href: contactLinks.instagram, iconClassName: "text-[#E4405F]" },
      { label: "YouTube", Icon: YouTubeIcon, href: contactLinks.youtube, iconClassName: "text-[#FF0000]" },
      { label: "Email", Icon: EmailIcon, href: contactLinks.email, iconClassName: "text-water-blue dark:text-water-cyan" },
    ],
  },
  en: {
    badge: "We Are Here to Help",
    title: "Contact Us",
    description:
      "We welcome your questions and requests about wells, mosques, and project documentation.",
    status: "Available for Contact",
    infoTitle: "Contact Information",
    infoText: "Choose the most suitable way to contact us about your project or question.",
    socialTitle: "Social Links",
    socialText: "Follow us or contact us directly through the available channels.",
    whatsappTitle: "Direct WhatsApp Contact",
    whatsappText: "+44 7411 572266",
    whatsappCta: "Start Chat",
    formTitle: "Send Your Inquiry",
    formText: "Write your request details, and we will prepare an email message addressed directly to us.",
    submit: "Send Message",
    success:
      "Your message has been prepared to send to our email.",
    fields: {
      name: "Full Name",
      phone: "Phone or WhatsApp",
      email: "Email",
      projectType: "Project Type",
      message: "Message",
      namePlaceholder: "Write your full name",
      phonePlaceholder: "Example: +44 7XXXXXXXXX",
      emailPlaceholder: "name@email.com",
      messagePlaceholder: "Write your message or project details",
    },
    projectTypes: ["Well Drilling", "Mosque Building", "Project Documentation", "General Inquiry"],
    contactItems: [
      { label: "WhatsApp", value: "+44 7411 572266", Icon: WhatsAppIcon, href: contactLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "Email", value: siteConfig.contact.email, Icon: EmailIcon, href: contactLinks.email, iconClassName: "text-water-blue dark:text-water-cyan" },
      { label: "Scope", value: "Charitable and humanitarian projects", Icon: MapPin },
      { label: "Documentation", value: "Photos and implementation details", Icon: Camera },
    ],
    socialLinks: [
      { label: "WhatsApp", Icon: WhatsAppIcon, href: contactLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "Facebook", Icon: FacebookIcon, href: contactLinks.facebook, iconClassName: "text-[#1877F2]" },
      { label: "Instagram", Icon: InstagramIcon, href: contactLinks.instagram, iconClassName: "text-[#E4405F]" },
      { label: "YouTube", Icon: YouTubeIcon, href: contactLinks.youtube, iconClassName: "text-[#FF0000]" },
      { label: "Email", Icon: EmailIcon, href: contactLinks.email, iconClassName: "text-water-blue dark:text-water-cyan" },
    ],
  },
};

function ExternalLink({ href, children, className = "", ariaLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const content = contactContent[language] || contactContent.ar;
  const [isPrepared, setIsPrepared] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: content.projectTypes[0],
    message: "",
  });

  const preparedEmailUrl = useMemo(() => {
    const buildLine = (label, value) => {
      const trimmedValue = (value || "").trim();
      return trimmedValue ? `${label}: ${trimmedValue}` : "";
    };

    const message = [
      buildLine(content.fields.name, formValues.name),
      buildLine(content.fields.phone, formValues.phone),
      buildLine(content.fields.email, formValues.email),
      buildLine(content.fields.projectType, formValues.projectType),
      buildLine(content.fields.message, formValues.message),
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `${content.formTitle} - ${siteConfig.name[language] || siteConfig.name.ar}`;

    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }, [content, formValues, language]);

  const updateField = (field, value) => {
    setIsPrepared(false);
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPrepared(true);
    window.location.href = preparedEmailUrl;
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f4fbff] py-12 text-[#071d3d] transition-colors duration-300 dark:bg-[#102133] dark:text-slate-50 sm:py-20"
    >
      <SectionBackground density="low" />

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

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-5">
            <motion.div
              className="rounded-[2rem] border border-water-blue/10 bg-white/72 p-5 shadow-[0_14px_36px_rgba(21,155,215,0.08)] backdrop-blur-xl dark:border-water-cyan/10 dark:bg-night-panel/62"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-[var(--heading)]">
                    {content.infoTitle}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-7 text-[var(--muted)]">
                    {content.infoText}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-black text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 size={15} />
                  {content.status}
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {content.contactItems.map(({ label, value, Icon, href, iconClassName }) => {
                  const body = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan">
                        <Icon size={21} className={iconClassName} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-black text-[var(--muted)]">
                          {label}
                        </span>
                        <span className="mt-0.5 block break-words text-sm font-black leading-5 text-[var(--heading)]">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  const className =
                    "flex items-start gap-3 rounded-3xl border border-water-blue/8 bg-white/58 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-water-blue/22 hover:shadow-md dark:border-water-cyan/9 dark:bg-white/[0.045]";

                  return href ? (
                    <ExternalLink key={label} href={href} className={className} ariaLabel={label}>
                      {body}
                    </ExternalLink>
                  ) : (
                    <div key={label} className={className}>
                      {body}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-water-blue/10 bg-white/72 p-5 shadow-[0_14px_36px_rgba(21,155,215,0.08)] backdrop-blur-xl dark:border-water-cyan/10 dark:bg-night-panel/62"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-gold/12 text-soft-gold">
                  <Share2 size={23} />
                </span>
                <div>
                  <h3 className="text-lg font-black text-[var(--heading)]">
                    {content.socialTitle}
                  </h3>
                  <p className="text-sm font-medium text-[var(--muted)]">
                    {content.socialText}
                  </p>
                </div>
              </div>

              <ExternalLink
                href={contactLinks.whatsapp}
                ariaLabel="WhatsApp"
                className="group relative mt-5 flex overflow-hidden rounded-[1.6rem] border border-emerald-500/14 bg-gradient-to-br from-emerald-500/12 via-white/70 to-water-cyan/12 p-4 shadow-[0_12px_30px_rgba(16,185,129,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(16,185,129,0.12)] dark:via-white/[0.045]"
              >
                <span className="absolute inset-y-0 end-0 w-28 bg-[radial-gradient(circle_at_center,rgba(34,199,221,0.22),transparent_68%)]" />
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-300">
                  <WhatsAppIcon size={24} />
                </span>
                <span className="relative min-w-0 px-3">
                  <span className="block text-sm font-black text-[var(--heading)]">
                    {content.whatsappTitle}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-[var(--muted)]">
                    {content.whatsappText}
                  </span>
                </span>
                <span className="relative ms-auto hidden items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-black text-emerald-600 shadow-sm backdrop-blur-md sm:inline-flex">
                  {content.whatsappCta}
                  <ArrowUpRight size={13} />
                </span>
              </ExternalLink>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {content.socialLinks.map(({ label, Icon, href, iconClassName }) => (
                  <ExternalLink
                    key={label}
                    href={href}
                    ariaLabel={label}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-water-blue/10 bg-white/62 px-3 py-3 text-sm font-black text-water-blue shadow-sm transition hover:-translate-y-0.5 hover:border-water-blue/30 hover:bg-water-blue/8 dark:border-water-cyan/10 dark:bg-white/[0.045] dark:text-water-cyan"
                  >
                    <Icon size={17} className={iconClassName} />
                    <span>{label}</span>
                  </ExternalLink>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-water-blue/10 bg-white/78 p-5 shadow-[0_16px_42px_rgba(21,155,215,0.1)] backdrop-blur-xl dark:border-water-cyan/10 dark:bg-night-panel/66 sm:p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan">
                <Send size={24} />
              </span>
              <div>
                <h3 className="text-xl font-black text-[var(--heading)]">
                  {content.formTitle}
                </h3>
                <p className="mt-1 text-sm font-medium leading-7 text-[var(--muted)]">
                  {content.formText}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-black text-[var(--heading)]">
                  {content.fields.name}
                </span>
                <span className="relative">
                  <UserRound className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-water-blue" size={18} />
                  <input
                    value={formValues.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder={content.fields.namePlaceholder}
                    className="min-h-12 w-full rounded-2xl border border-water-blue/12 bg-white/74 px-4 py-3 ps-10 text-sm font-bold text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)]/70 focus:border-water-blue dark:border-water-cyan/12 dark:bg-white/[0.055]"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-[var(--heading)]">
                  {content.fields.phone}
                </span>
                <span className="relative">
                  <Phone className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-water-blue" size={18} />
                  <input
                    value={formValues.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder={content.fields.phonePlaceholder}
                    className="min-h-12 w-full rounded-2xl border border-water-blue/12 bg-white/74 px-4 py-3 ps-10 text-sm font-bold text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)]/70 focus:border-water-blue dark:border-water-cyan/12 dark:bg-white/[0.055]"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-[var(--heading)]">
                  {content.fields.email}
                </span>
                <span className="relative">
                  <Mail className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-water-blue" size={18} />
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder={content.fields.emailPlaceholder}
                    className="min-h-12 w-full rounded-2xl border border-water-blue/12 bg-white/74 px-4 py-3 ps-10 text-sm font-bold text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)]/70 focus:border-water-blue dark:border-water-cyan/12 dark:bg-white/[0.055]"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-[var(--heading)]">
                  {content.fields.projectType}
                </span>
                <span className="relative">
                  <Building2 className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-water-blue" size={18} />
                  <select
                    value={formValues.projectType}
                    onChange={(event) => updateField("projectType", event.target.value)}
                    className="min-h-12 w-full rounded-2xl border border-water-blue/12 bg-white/74 px-4 py-3 ps-10 text-sm font-black text-[var(--heading)] outline-none transition focus:border-water-blue dark:border-water-cyan/12 dark:bg-night-panel"
                  >
                    {content.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </span>
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-black text-[var(--heading)]">
                  {content.fields.message}
                </span>
                <textarea
                  value={formValues.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder={content.fields.messagePlaceholder}
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-water-blue/12 bg-white/74 px-4 py-3 text-sm font-bold leading-7 text-[var(--heading)] outline-none transition placeholder:text-[var(--muted)]/70 focus:border-water-blue dark:border-water-cyan/12 dark:bg-white/[0.055]"
                />
              </label>
            </div>

            {isPrepared ? (
              <div className="mt-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4 text-sm font-bold leading-7 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="me-2 inline-block" size={18} />
                {content.success}
                <ExternalLink
                  href={preparedEmailUrl}
                  className="ms-2 inline-flex items-center gap-1 text-water-blue underline decoration-water-blue/30 underline-offset-4 dark:text-water-cyan"
                  ariaLabel="Email"
                >
                  {siteConfig.contact.email}
                  <ArrowUpRight size={14} />
                </ExternalLink>
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-water-blue to-water-cyan px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-water-blue/24 transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Send size={18} />
              {content.submit}
              <ArrowUpRight size={16} />
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
