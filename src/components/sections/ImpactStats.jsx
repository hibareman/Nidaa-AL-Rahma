import { motion } from "motion/react";
import { Droplets, Landmark, MapPin, Users } from "lucide-react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { stats } from "../../data/stats.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

const icons = {
  Droplets,
  Landmark,
  MapPin,
  Users,
};

export default function ImpactStats() {
  const { language } = useLanguage();
  const section = siteConfig.sections.impact;

  return (
    <motion.section
      id="impact"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = icons[stat.icon];

            return (
              <Card key={stat.id} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft text-deep-teal dark:bg-night-panel dark:text-water-cyan">
                  <Icon size={22} />
                </div>
                <div className="text-3xl font-bold text-[var(--heading)]">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {stat.label[language]}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </motion.section>
  );
}
