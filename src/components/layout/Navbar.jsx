// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

const navItems = {
  ar: [
    { id: "home", href: "#home", label: "الرئيسية" },
    { id: "about", href: "#about", label: "من نحن" },
    { id: "services", href: "#services", label: "خدماتنا" },
    { id: "projects", href: "#projects", label: "باقات الآبار" },
    { id: "documented-projects", href: "#documented-projects", label: "المشاريع الموثقة" },
    { id: "faq", href: "#faq", label: "الأسئلة الشائعة" },
    { id: "contact", href: "#contact", label: "تواصل معنا" },
  ],
  en: [
    { id: "home", href: "#home", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "services", href: "#services", label: "Services" },
    { id: "projects", href: "#projects", label: "Well Packages" },
    { id: "documented-projects", href: "#documented-projects", label: "Documented Projects" },
    { id: "faq", href: "#faq", label: "FAQ" },
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
  const [activeId, setActiveId] = useState("home");
  const [hoveredId, setHoveredId] = useState(null);
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const items = (navItems[language] || navItems.ar);

  // تحديد القسم النشط عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }));

      let currentActive = "home";
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentActive = section.id;
          }
        }
      }
      
      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

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

  const handleItemClick = (id) => {
    setActiveId(id);
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

          <div className="hidden items-stretch gap-4 self-stretch xl:flex 2xl:gap-8">
            {items.map((item) => {
              const isActive = activeId === item.id;
              const isHovered = hoveredId === item.id;
              
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative inline-flex items-center px-1 text-sm font-bold transition-all duration-300 2xl:text-base ${
                    isActive
                      ? "text-[#1769d5] dark:text-water-cyan"
                      : "text-[#3f4b62] hover:text-[#1769d5] dark:text-slate-200 dark:hover:text-water-cyan"
                  }`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.label}
                  
                  {/* ✅ الخط النشط - يظهر تحت القسم المحدد */}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-1 rounded-t-full bg-gradient-to-r from-water-blue to-water-cyan shadow-lg shadow-water-blue/25 transition-all duration-500 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                  
                  {/* ✅ خط الـ Hover - يظهر عند المرور على العنصر (حتى لو كان نشطاً) */}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-1 rounded-t-full bg-gradient-to-r from-water-blue/60 to-water-cyan/60 transition-all duration-300 ${
                      isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#c9d9ec] bg-white/62 text-[#071d3d] transition hover:border-water-blue dark:border-white/10 dark:bg-white/8 dark:text-white xl:hidden"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              {isOpen || isClosing ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* القائمة المتنقلة */}
        <div
          className={`mt-3 transition-all duration-200 ease-out xl:hidden ${
            isOpen || isClosing
              ? "max-h-[calc(100svh-7rem)] overflow-y-auto overscroll-contain opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="grid gap-1 rounded-[1.25rem] border border-white/80 bg-white/88 p-3 shadow-xl shadow-water-blue/10 backdrop-blur-2xl dark:border-white/10 dark:bg-night-panel/92">
            {items.map((item, index) => {
              const reversedIndex = items.length - 1 - index;
              
              let delay = 0;
              if (isClosing) {
                delay = reversedIndex * 30;
              } else if (isOpen) {
                delay = index * 30;
              }

              const shouldHide = isClosing && delay < (items.length - 1) * 30;
              const isActive = activeId === item.id;
              
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleItemClick(item.id)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-250 ease-out ${
                    isActive
                      ? "bg-water-blue/10 text-[#1769d5] dark:bg-water-cyan/10 dark:text-water-cyan"
                      : "text-[#3f4b62] hover:bg-water-blue/8 hover:text-[#1769d5] dark:text-slate-100 dark:hover:bg-white/8"
                  } ${
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
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-water-blue dark:bg-water-cyan" />
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
