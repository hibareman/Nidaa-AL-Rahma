import { motion } from "motion/react";
import {
  ArrowUpRight,
  Droplets,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Container from "../ui/Container.jsx";
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

const footerLinks = {
  whatsapp: createWhatsappUrl(),
  email: `mailto:${siteConfig.contact.email}`,
  facebook: "https://www.facebook.com/share/1Fy9zVYZan/",
  instagram: "https://www.instagram.com/nedaa_alrahmawater?igsh=cnRiMjh4YXdhc3h0",
  youtube: "https://www.youtube.com/@nidaaalrahma",
};

const footerHeroImage = `${import.meta.env.BASE_URL}assets/hero/hero-water.png`;

const footerContent = {
  ar: {
    badge: "كل حياة.. و كل قطرة ماء أجر لا ينقطع صدقة جارية تنفعك في الدنيا و الاخرة",
    description:
      "مبادرة إنسانية تسعى لإيصال الماء وبناء الأثر في المجتمعات المحتاجة، مع توثيق شفاف لكل مشروع.",
    quickLinksTitle: "روابط سريعة",
    contactTitle: "تواصل معنا",
    projectCta: "اطلب مشروعك",
    whatsappTitle: "واتساب مباشر",
    whatsappText: "+44 7411 572266",
    imageNote: "أثر الماء يبدأ من لحظة وصوله",
    copyright: "© 2026 نداء الرحمة. جميع الحقوق محفوظة.",
    careLine: "صُمم بعناية لخدمة مشاريع الخير والصدقة الجارية.",
    quickLinks: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "خدماتنا", href: "#services" },
      { label: "باقات الآبار", href: "#projects" },
      { label: "المشاريع الموثقة", href: "#documented-projects" },
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "تواصل معنا", href: "#contact" },
    ],
    socialLinks: [
      { label: "واتساب", Icon: WhatsAppIcon, href: footerLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "البريد الإلكتروني", Icon: EmailIcon, href: footerLinks.email, iconClassName: "text-water-cyan" },
      { label: "Facebook", Icon: FacebookIcon, href: footerLinks.facebook, iconClassName: "text-[#1877F2]" },
      { label: "Instagram", Icon: InstagramIcon, href: footerLinks.instagram, iconClassName: "text-[#E4405F]" },
      { label: "YouTube", Icon: YouTubeIcon, href: footerLinks.youtube, iconClassName: "text-[#FF0000]" },
    ],
  },
  en: {
    badge: "Every Drop Is Ongoing Charity",
    description:
      "A humanitarian initiative dedicated to delivering water and building lasting impact in communities in need, with transparent documentation for every project.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    projectCta: "Request Your Project",
    whatsappTitle: "Direct WhatsApp",
    whatsappText: "+44 7411 572266",
    imageNote: "Water impact begins the moment it arrives",
    copyright: "© 2026 Nidaa Alrahma. All rights reserved.",
    careLine: "Designed with care to serve charitable and ongoing charity projects.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Well Packages", href: "#projects" },
      { label: "Documented Projects", href: "#documented-projects" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { label: "WhatsApp", Icon: WhatsAppIcon, href: footerLinks.whatsapp, iconClassName: "text-[#25D366]" },
      { label: "Email", Icon: EmailIcon, href: footerLinks.email, iconClassName: "text-water-cyan" },
      { label: "Facebook", Icon: FacebookIcon, href: footerLinks.facebook, iconClassName: "text-[#1877F2]" },
      { label: "Instagram", Icon: InstagramIcon, href: footerLinks.instagram, iconClassName: "text-[#E4405F]" },
      { label: "YouTube", Icon: YouTubeIcon, href: footerLinks.youtube, iconClassName: "text-[#FF0000]" },
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

export default function Footer() {
  const { language } = useLanguage();
  const content = footerContent[language] || footerContent.ar;

  return (
    <footer className="relative isolate overflow-hidden bg-[#071d3d] text-white transition-colors duration-300 dark:bg-[#050d19]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#061a36_0%,#0b2f55_54%,#071d3d_100%)] dark:bg-[linear-gradient(145deg,#050b18_0%,#0d1f36_56%,#050d19_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(214,168,79,0.1),transparent_26%)] dark:bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.1),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(214,168,79,0.07),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-water-cyan/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(3,13,20,0.42),transparent)] dark:bg-[linear-gradient(0deg,rgba(3,8,18,0.64),transparent)]" />
      </div>

      <Container>
        <motion.div
          className="grid gap-6 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr_1fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-[1.65rem] border border-white/14 bg-white/[0.085] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl ring-1 ring-water-cyan/10 dark:border-water-cyan/12 dark:bg-white/[0.06] dark:ring-water-cyan/14">
            <a href="#home" className="inline-flex items-center gap-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-water-cyan/25 bg-white shadow-[0_0_22px_rgba(34,199,221,0.2)]">
                <img
                  src={siteConfig.logo2Path}
                  alt={siteConfig.name[language]}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-2xl font-black text-white">
                {siteConfig.name[language]}
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/76">
              {content.description}
            </p>

            <div className="relative mt-5 overflow-hidden rounded-[1.35rem] border border-white/14 bg-white/8 shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={footerHeroImage}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(6,23,34,0.84)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-water-cyan/24 bg-night-navy/56 px-3 py-1.5 text-[11px] font-black text-water-cyan shadow-lg backdrop-blur-xl">
                  <Droplets size={14} />
                  {content.badge}
                </span>
              </div>
            </div>

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-soft-gold/14 px-4 py-2 text-xs font-black text-soft-gold shadow-lg shadow-soft-gold/10">
              <Droplets size={16} />
              {content.imageNote}
            </span>
          </div>

          <div className="rounded-[1.65rem] border border-white/14 bg-white/[0.07] p-5 shadow-[0_16px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl ring-1 ring-white/5 dark:border-water-cyan/10 dark:bg-white/[0.05]">
            <h3 className="flex items-center gap-2 text-lg font-black text-white">
              <Sparkles size={18} className="text-soft-gold" />
              {content.quickLinksTitle}
            </h3>
            <div className="mt-5 grid gap-2">
              {content.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-2.5 text-sm font-bold text-white/76 transition hover:border-water-cyan/18 hover:bg-water-cyan/10 hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.65rem] border border-white/14 bg-white/[0.07] p-5 shadow-[0_16px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl ring-1 ring-white/5 dark:border-water-cyan/10 dark:bg-white/[0.05]">
            <h3 className="flex items-center gap-2 text-lg font-black text-white">
              <Heart size={18} className="text-soft-gold" />
              {content.contactTitle}
            </h3>

            <ExternalLink
              href={footerLinks.whatsapp}
              ariaLabel="WhatsApp"
              className="mt-5 flex items-center gap-3 rounded-[1.35rem] border border-water-cyan/22 bg-gradient-to-r from-water-blue/18 via-water-cyan/12 to-white/[0.07] p-3 text-white shadow-[0_18px_44px_rgba(21,155,215,0.14)] transition hover:-translate-y-0.5 hover:border-water-cyan/40 hover:shadow-[0_22px_54px_rgba(34,199,221,0.2)] dark:from-water-cyan/10 dark:via-water-blue/10 dark:to-white/[0.05]"
            >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/12 text-[#25D366] shadow-inner shadow-white/10">
                <WhatsAppIcon size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-black">{content.whatsappTitle}</span>
                <span className="mt-0.5 block text-xs font-bold text-white/70">{content.whatsappText}</span>
              </span>
              <ArrowUpRight size={16} className="ms-auto text-water-cyan" />
            </ExternalLink>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {content.socialLinks.map(({ label, Icon, href, iconClassName }) => (
                <ExternalLink
                  key={label}
                  href={href}
                  ariaLabel={label}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.085] px-3 py-3 text-sm font-black text-white/84 shadow-sm shadow-black/5 transition hover:-translate-y-0.5 hover:border-water-cyan/40 hover:bg-water-cyan/14 hover:text-white"
                >
                  <Icon size={17} className={iconClassName} />
                  <span>{label}</span>
                </ExternalLink>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1769d5] via-water-blue to-water-cyan px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(34,199,221,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(34,199,221,0.22)]"
            >
              <MessageCircle size={17} />
              {content.projectCta}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-white/12 py-6 text-center text-sm font-medium text-white/72 dark:border-water-cyan/12 sm:flex sm:items-center sm:justify-between sm:text-start">
          <p>{content.copyright}</p>
          <p className="mt-2 sm:mt-0">{content.careLine}</p>
        </div>
      </Container>
    </footer>
  );
}
