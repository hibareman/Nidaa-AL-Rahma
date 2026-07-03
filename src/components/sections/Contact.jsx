import { motion } from "motion/react";
import Button from "../ui/Button.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Container from "../ui/Container.jsx";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Contact() {
  const { language } = useLanguage();
  const section = siteConfig.sections.contact;

  return (
    <motion.section
      id="contact"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-[var(--heading)]">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </dt>
                <dd className="mt-1 text-[var(--muted)]">{siteConfig.contact.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--heading)]">
                  {language === "ar" ? "الهاتف" : "Phone"}
                </dt>
                <dd className="mt-1 text-[var(--muted)]">{siteConfig.contact.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--heading)]">
                  {language === "ar" ? "الموقع" : "Location"}
                </dt>
                <dd className="mt-1 text-[var(--muted)]">
                  {siteConfig.contact.location[language]}
                </dd>
              </div>
            </dl>
          </Card>

          <Card>
            <p className="text-sm leading-7 text-[var(--muted)]">
              {siteConfig.placeholderNote[language]}
            </p>
            <div className="mt-6">
              <Button href={`mailto:${siteConfig.contact.email}`}>
                {language === "ar" ? "إرسال رسالة" : "Send message"}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </motion.section>
  );
}
