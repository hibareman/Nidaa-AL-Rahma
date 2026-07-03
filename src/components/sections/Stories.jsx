import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Stories() {
  const { language } = useLanguage();
  const section = siteConfig.sections.stories;

  return (
    <motion.section
      id="stories"
      className="bg-[var(--surface-soft)] py-16 transition-colors duration-300 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <Card className="mx-auto mt-10 max-w-3xl">
          <p className="text-sm leading-7 text-[var(--muted)]">
            {siteConfig.placeholderNote[language]}
          </p>
        </Card>
      </Container>
    </motion.section>
  );
}
