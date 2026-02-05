import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useContentStore } from "../store/useContentStore";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
} as const;

export function ProgramsGrid() {
  const programs = useContentStore((state) => state.programs);

  if (!programs.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-bold text-[#1F1A3D]">منصات الجامعة الرقمية</h2>
        <p className="max-w-2xl text-sm text-[#3F3A66]">
          اكتشف المنصات التدريبية والبرامج الأكاديمية التي تقدمها جامعة الملك خالد لتطوير مهاراتك وتحقيق تطلعاتك المهنية.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-purple-100/70 bg-white/85 shadow-[0_30px_80px_-50px_rgba(56,0,161,0.35)]"
          >
            <div className={`bg-gradient-to-l ${program.color} p-6 text-white`}></div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1F1A3D]">{program.name}</h3>
                <span className="rounded-full bg-[#6A0AE2]/10 px-3 py-1 text-xs font-semibold text-[#6A0AE2]">
                  برنامج مميز
                </span>
              </div>
              <p className="text-sm text-[#3F3A66]">{program.tagline}</p>
              <ul className="grid gap-2 text-sm text-[#2E2A4B]">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-between rounded-2xl bg-[#F9F5FF] px-4 py-2">
                    <span>{feature}</span>
                    <span className="h-2 w-2 rounded-full bg-[#6A0AE2]" />
                  </li>
                ))}
              </ul>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#6A0AE2]">
                {program.cta}
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
