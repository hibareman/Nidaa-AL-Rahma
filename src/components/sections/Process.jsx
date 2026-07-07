import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const steps = [
  {
    id: "assessment",
    title: {
      ar: "دراسة الاحتياج",
      en: "Assessment",
    },
  },
  {
    id: "planning",
    title: {
      ar: "التخطيط والتنفيذ",
      en: "Planning and delivery",
    },
  },
  {
    id: "handover",
    title: {
      ar: "التوثيق والتسليم",
      en: "Documentation and handover",
    },
  },
];

export default function Process() {
  const { language } = useLanguage();
  const section = siteConfig.sections.process;

  return (
    <motion.section
      id="process"
      className="bg-[var(--surface-soft)] py-16 transition-colors duration-300 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.id}>
              <span className="text-sm font-semibold text-water-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[var(--heading)]">
                {step.title[language]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {siteConfig.sectionFallbackNote[language]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
