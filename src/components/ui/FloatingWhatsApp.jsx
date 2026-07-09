import { motion } from "motion/react";
import { WhatsAppIcon } from "./BrandIcons.jsx";
import { createWhatsappUrl } from "../../constants/whatsapp.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const positionClass = isArabic ? "right-4 sm:right-6" : "left-4 sm:left-6";
  const ariaLabel = isArabic ? "تواصل عبر واتساب" : "Contact via WhatsApp";
  const label = isArabic ? "تواصل معنا" : "Contact us";

  return (
    <motion.a
      href={createWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`group fixed bottom-4 ${positionClass} z-[70] inline-flex flex-col items-center gap-2 text-[var(--heading)] focus-visible:outline-none sm:bottom-6`}
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 }}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="inline-flex rounded-full border border-white/78 bg-white/88 px-3 py-1.5 text-xs font-black text-[#128c4a] shadow-lg shadow-slate-900/8 backdrop-blur-xl transition-colors duration-300 group-hover:text-[#0f7a40] dark:border-white/12 dark:bg-night-panel/82 dark:text-[#7df0a6]">
        {label}
      </span>

      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[#25D366] text-white shadow-[0_16px_38px_rgba(37,211,102,0.28)] ring-1 ring-[#25D366]/20 backdrop-blur transition-colors duration-300 group-hover:bg-[#20bd5a] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#25D366] dark:border-white/12 dark:bg-[#22c55e] dark:shadow-[0_16px_42px_rgba(34,197,94,0.22)] dark:group-hover:bg-[#16a34a] sm:h-16 sm:w-16">
        <span className="absolute inset-0 rounded-full bg-white/18 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-xl" />
        <WhatsAppIcon size={28} className="relative sm:h-8 sm:w-8" />
      </span>
    </motion.a>
  );
}
