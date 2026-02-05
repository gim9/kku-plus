import { motion } from "framer-motion";
import { useContentStore } from "../store/useContentStore";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
    },
  }),
};

export function StatsBar() {
  const stats = useContentStore((state) => state.stats);

  if (!stats.length) return null;

  return (
    <section className="grid gap-3 rounded-3xl border border-[#E3EBFF] bg-white/90 p-4 shadow-[0_32px_90px_-40px_rgba(106,10,226,0.15)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col rounded-2xl border border-[#EEF2FF] bg-gradient-to-t from-[#F5F8FF] to-white px-5 py-6"
        >
          <span className="text-sm text-[#6A0AE2]">{stat.label}</span>
          <span className="mt-3 text-3xl font-bold text-[#1F1A3D]">{stat.value}</span>
        </motion.div>
      ))}
    </section>
  );
}
