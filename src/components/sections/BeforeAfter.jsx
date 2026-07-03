import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function BeforeAfter() {
  const { language } = useLanguage();
  const section = siteConfig.sections.beforeAfter;

  return (
    <motion.section
      id="before-after"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <Card className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="min-h-48 rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <h3 className="font-bold text-[var(--heading)]">
              {language === "ar" ? "قبل" : "Before"}
            </h3>
          </div>
          <div className="min-h-48 rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <h3 className="font-bold text-[var(--heading)]">
              {language === "ar" ? "بعد" : "After"}
            </h3>
          </div>
        </Card>
      </Container>
    </motion.section>
  );
}
