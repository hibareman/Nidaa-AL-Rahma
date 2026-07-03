import { motion } from "motion/react";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { projects } from "../../data/projects.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Projects() {
  const { language } = useLanguage();
  const section = siteConfig.sections.projects;

  return (
    <motion.section
      id="projects"
      className="bg-[var(--surface-soft)] py-16 transition-colors duration-300 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="mb-5 h-32 rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface-soft)]" />
              <h3 className="text-lg font-bold text-[var(--heading)]">
                {project.title[language]}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {project.location[language]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
