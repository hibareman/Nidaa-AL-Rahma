import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

const navItems = {
  ar: [
    { id: "home", href: "#home", label: "الرئيسية" },
    { id: "about", href: "#about", label: "من نحن" },
    { id: "projects", href: "#projects", label: "مشاريعنا" },
    { id: "impact", href: "#impact", label: "تقرير الأثر" },
    { id: "stories", href: "#stories", label: "أخبارنا" },
    { id: "contact", href: "#contact", label: "تواصل معنا" },
  ],
  en: [
    { id: "home", href: "#home", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "impact", href: "#impact", label: "Impact Report" },
    { id: "stories", href: "#stories", label: "News" },
    { id: "contact", href: "#contact", label: "Contact" },
  ],
};

function NavLogoMark() {
  return (
    <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-water-blue/20 bg-white shadow-lg shadow-water-blue/15 dark:border-water-cyan/20 dark:bg-night-navy/70 dark:shadow-water-cyan/10">
      <img
        src={siteConfig.logo2Path}
        alt=""
        className="h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/70 dark:ring-white/10" />
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const items = (navItems[language] || navItems.ar).filter((item) =>
    ["home", "about"].includes(item.id),
  );

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, items.length * 30 + 200);
    } else {
      setIsOpen(true);
    }
  };

  const handleItemClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, items.length * 30 + 200);
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6 lg:px-8">
      <Container className="px-0">
        <nav className="relative flex min-h-20 items-center justify-between gap-4 rounded-[1.65rem] border border-white/80 bg-white/72 px-5 shadow-xl shadow-water-blue/8 backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-night-panel/76 dark:shadow-black/15 sm:px-7">
          <a href="#home" className="flex min-w-0 items-center gap-4" onClick={() => setIsOpen(false)}>
            <NavLogoMark />
            <span className="truncate text-2xl font-black text-[#1769d5] dark:text-water-cyan">
              {siteConfig.name[language]}
            </span>
          </a>

          <div className="hidden items-stretch gap-8 self-stretch lg:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative inline-flex items-center px-1 text-base font-bold transition ${
                  item.id === "home"
                    ? "text-[#1769d5] dark:text-water-cyan"
                    : "text-[#3f4b62] hover:text-[#1769d5] dark:text-slate-200 dark:hover:text-water-cyan"
                }`}
              >
                {item.label}
                {item.id === "home" ? (
                  <span className="absolute inset-x-0 -bottom-px mx-auto h-1.5 w-full rounded-t-full bg-[#1769d5] shadow-lg shadow-water-blue/25 dark:bg-water-cyan" />
                ) : null}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#071d3d] transition hover:bg-water-blue/8 dark:text-slate-100 dark:hover:bg-white/8"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Moon size={25} /> : <Sun size={25} />}
            </button>

            <span className="hidden h-8 w-px bg-[#9cb0ca]/55 sm:block dark:bg-white/15" />

            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-11 min-w-14 items-center justify-center rounded-xl border border-[#c9d9ec] bg-white/62 px-3 text-base font-black text-[#071d3d] shadow-sm transition hover:border-water-blue dark:border-white/10 dark:bg-white/8 dark:text-white"
              aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              {language === "ar" ? "EN" : "AR"}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9d9ec] bg-white/62 text-[#071d3d] transition hover:border-water-blue dark:border-white/10 dark:bg-white/8 dark:text-white lg:hidden"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              {isOpen || isClosing ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <div
          className={`mt-3 overflow-hidden transition-all duration-200 ease-out lg:hidden ${
            isOpen || isClosing ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-1 rounded-[1.25rem] border border-white/80 bg-white/88 p-3 shadow-xl shadow-water-blue/10 backdrop-blur-2xl dark:border-white/10 dark:bg-night-panel/92">
            {items.map((item, index) => {
              // ترتيب عكسي: آخر عنصر يختفي أولاً (من الأسفل للأعلى)
              const reversedIndex = items.length - 1 - index;
              
              let delay = 0;
              if (isClosing) {
                // عند الإغلاق: العنصر الأخير (reversedIndex = 0) يختفي أولاً
                delay = reversedIndex * 30;
              } else if (isOpen) {
                // عند الفتح: العنصر الأول يظهر أولاً (نفس التأخير 30ms)
                delay = index * 30;
              }

              // العنصر يختفي فقط إذا كان في حالة الإغلاق وتم تحديده للإخفاء
              const shouldHide = isClosing && delay < (items.length - 1) * 30;
              
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleItemClick}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold text-[#3f4b62] transition-all duration-250 ease-out hover:bg-water-blue/8 hover:text-[#1769d5] dark:text-slate-100 dark:hover:bg-white/8 ${
                    isOpen || isClosing
                      ? shouldHide
                        ? "-translate-y-2 scale-95 opacity-0"
                        : "translate-y-0 scale-100 opacity-100"
                      : "-translate-y-2 scale-95 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
