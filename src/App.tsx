import { useEffect } from "react";
import { useContentStore } from "./store/useContentStore";
import { useUIStore } from "./store/useUIStore";
import { HeroSection } from "./components/HeroSection";
import { StatsBar } from "./components/StatsBar";
import { EventsCarousel } from "./components/EventsCarousel";
import { ProgramsGrid } from "./components/ProgramsGrid";
import { VoiceSection } from "./components/VoiceSection";
import { AssistantPanel } from "./components/assistant/AssistantPanel";
import { ClubsGrid } from "./components/ClubsGrid";
import { ContactSection } from "./components/ContactSection";
import { FloatingMenu } from "./components/navigation/FloatingMenu";
import { PageLoader } from "./components/common/PageLoader";
import { ErrorBanner } from "./components/common/ErrorBanner";
import { MainLayout } from "./layouts/MainLayout";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const fetchContent = useContentStore((state) => state.fetchContent);
  const loading = useContentStore((state) => state.loading);
  const error = useContentStore((state) => state.error);
  const { closeAll } = useUIStore();

  useEffect(() => {
    fetchContent().catch(() => undefined);
  }, [fetchContent]);

  return (
    <div className="min-h-screen bg-[#F6F4F1] text-[#1B1B1F] font-tajawal">
      <motion.header
        className="sticky top-0 z-50 bg-white/90 shadow-lg shadow-purple-300/20 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-3 py-1 text-xs text-white">
              بوابة الطلبة والخريجين
            </span>
            <span className="text-2xl font-black uppercase tracking-wide text-[#6A0AE2]">KKU Plus</span>
          </motion.div>
          <FloatingMenu />
        </div>
      </motion.header>

      <MainLayout>
        <main className="space-y-12 pb-24 pt-6">
          <AnimatePresence>{loading ? <PageLoader /> : null}</AnimatePresence>
          {error ? <ErrorBanner message={error} onClose={closeAll} /> : null}
          <HeroSection />
          <StatsBar />
          <EventsCarousel />
          <ProgramsGrid />
          <VoiceSection />
          <ClubsGrid />
          <ContactSection />
        </main>
      </MainLayout>

      <AssistantPanel />
    </div>
  );
}

export default App;
