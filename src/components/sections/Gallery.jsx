import { motion } from "motion/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../layout/SectionHeader.jsx";
import Container from "../ui/Container.jsx";
import { galleryItems } from "../../data/gallery.js";
import { siteConfig } from "../../constants/siteConfig.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Gallery() {
  const { language } = useLanguage();
  const section = siteConfig.sections.gallery;

  return (
    <motion.section
      id="gallery"
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <SectionHeader {...section} />
        <div className="mt-10">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="min-h-56 rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300">
                  <p className="font-semibold text-[var(--heading)]">
                    {item.title[language]}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </motion.section>
  );
}
