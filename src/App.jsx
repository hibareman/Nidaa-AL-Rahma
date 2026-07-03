import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/layout/Navbar.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";

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
          </main>
        </motion.div>
      ) : null}
    </div>
  );
}
