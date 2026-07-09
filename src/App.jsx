import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/layout/Navbar.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Services from "./components/sections/Services.jsx";
import Projects from "./components/sections/Projects.jsx";
import DocumentedProjects from "./components/sections/DocumentedProjects.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp.jsx";
export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsPreloading(false);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--body)] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isPreloading ? (
          <Preloader key="nidaa-preloader" onComplete={handlePreloaderComplete} />
        ) : null}
      </AnimatePresence>

      {!isPreloading ? (
        <motion.div
          key="nidaa-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <DocumentedProjects />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </motion.div>
      ) : null}
    </div>
  );
}
