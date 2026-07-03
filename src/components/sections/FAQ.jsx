import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { faqItems } from "../../data/faq.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function FAQ() {
  const { language } = useLanguage();
  const section = siteConfig.sections.faq;

  return (
    <motion.section
      id="faq"
      className="bg-[var(--surface-soft)] py-16 transition-colors duration-300 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {faqItems.map((item) => (
            <Card key={item.id}>
              <h3 className="font-bold text-[var(--heading)]">
                {item.question[language]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.answer[language]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
