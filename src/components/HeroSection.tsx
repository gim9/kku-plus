import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { useContentStore } from "../store/useContentStore";

const heroImage = "/assets/hero-new.png";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const hero = useContentStore((state) => state.hero);

  if (!hero) return null;

  return (
    <section className="overflow-hidden rounded-3xl bg-white/70 shadow-[0_40px_120px_-60px_rgba(90,0,160,0.35)] backdrop-blur-lg">
      <div className="grid gap-6 p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={heroVariants}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-4 py-2 text-sm text-white shadow-lg shadow-pink-200/30"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            {hero.highlight}
          </motion.span>
          <motion.h1
            variants={heroVariants}
            className="text-3xl font-extrabold leading-snug text-[#1F1A3D] sm:text-4xl lg:text-5xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p variants={heroVariants} className="text-lg text-[#3F3A66]">
            {hero.subtitle}
          </motion.p>
          <motion.div
            variants={heroVariants}
            className="grid gap-3 sm:flex sm:flex-row sm:items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/40"
            >
              <ArrowLeft className="h-4 w-4" />
              {hero.ctaLabel}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6A0AE2] px-6 py-3 text-sm font-semibold text-[#6A0AE2]"
            >
              <Play className="h-4 w-4" />
              {hero.secondaryCta}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[220px] overflow-hidden rounded-[26px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="لوحة ترحيبية بجامعة الملك خالد"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1238]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-4 w-full max-w-[220px] rounded-2xl bg-white/80 p-4 text-sm backdrop-blur-md sm:bottom-6 sm:right-6 sm:max-w-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6A0AE2] to-[#D744B3] text-white shadow-lg">
                <Play className="h-4 w-4" />
              </span>
              <div className="text-[#2F2655]">
                <p className="text-xs text-[#6A0AE2]">أحدث الفعاليات</p>
                <p className="font-semibold">تابع البث المباشر الآن</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
