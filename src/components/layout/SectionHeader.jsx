import { useLanguage } from "../../context/LanguageContext.jsx";

function localize(value, language) {
  if (!value || typeof value === "string") {
    return value;
  }

  return value[language] || value.ar || value.en || "";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const { language } = useLanguage();
  const alignment = align === "start" ? "items-start text-start" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="mb-3 text-sm font-semibold text-soft-gold">
          {localize(eyebrow, language)}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-2xl font-bold text-[var(--heading)] sm:text-3xl">
        {localize(title, language)}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          {localize(description, language)}
        </p>
      ) : null}
    </div>
  );
}
