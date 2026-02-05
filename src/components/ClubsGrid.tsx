import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";
import { useContentStore } from "../store/useContentStore";

export function ClubsGrid() {
  const clubs = useContentStore((state) => state.clubs);

  if (!clubs.length) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-bold text-[#1F1A3D]">مجتمع الطلاب</h2>
        <p className="max-w-2xl text-sm text-[#3F3A66]">
          انضم إلى الأندية الطلابية المتنوعة واستفد من الأنشطة والفرص المميزة لتنمية مهاراتك وبناء شبكة علاقات قوية.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {clubs.map((club, index) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-purple-100/70 bg-white/85 shadow-[0_30px_80px_-50px_rgba(56,0,161,0.35)]"
          >
            <div className={`h-24 bg-gradient-to-l ${club.color}`}></div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1F1A3D]">{club.name}</h3>
                <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-[#6A0AE2]">
                  نادي جامعي
                </span>
              </div>
              <p className="text-sm text-[#3F3A66]">{club.description}</p>
              <div className="flex items-center justify-between rounded-2xl bg-[#F9F5FF] px-4 py-3 text-sm text-[#2E2A4B]">
                <span>عدد الأعضاء</span>
                <span className="inline-flex items-center gap-2">
                  <UsersRound className="h-4 w-4 text-[#6A0AE2]" />
                  {club.members}
                </span>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#6A0AE2]">
                انضم للنادي
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
