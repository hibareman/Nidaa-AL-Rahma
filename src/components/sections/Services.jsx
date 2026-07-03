import { motion } from "motion/react";
import { Droplets, Heart, Landmark } from "lucide-react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { services } from "../../data/services.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const icons = {
  Droplets,
  Heart,
  Landmark,
};

export default function Services() {
  const { language } = useLanguage();
  const section = siteConfig.sections.services;

  return (
    <motion.section
      id="services"
      className="bg-[var(--surface-soft)] py-16 transition-colors duration-300 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <Card key={service.id}>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft text-deep-teal dark:bg-night-panel dark:text-water-cyan">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--heading)]">
                  {service.title[language]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {service.description[language]}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </motion.section>
  );
}
