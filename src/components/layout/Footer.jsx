import Container from "../ui/Container.jsx";
import { navigationItems } from "../../data/navigation.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-10 transition-colors duration-300">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-start">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={siteConfig.logoPath}
                alt={siteConfig.name[language]}
                className="h-12 w-12 rounded-full object-contain"
              />
              <span className="text-lg font-bold text-[var(--heading)]">
                {siteConfig.name[language]}
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              {siteConfig.tagline[language]}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--heading)]"
              >
                {item.label[language]}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} {siteConfig.name[language]}.{" "}
            {language === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </Container>
    </footer>
  );
}
