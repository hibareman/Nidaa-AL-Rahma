import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { wellTypes } from "../../data/wells.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function WellTypes() {
  const { language } = useLanguage();
  const section = siteConfig.sections.wells;

  return (
    <motion.section
      id="wells"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {wellTypes.map((well) => (
            <Card key={well.id}>
              <h3 className="text-lg font-bold text-[var(--heading)]">
                {well.title[language]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {well.description[language]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
