import { motion } from "framer-motion";
import { Mic, Search, SlidersHorizontal } from "lucide-react";
import { useContentStore } from "../store/useContentStore";

export function VoiceSection() {
  const voice = useContentStore((state) => state.voice);
  const categoryFilter = useContentStore((state) => state.categoryFilter);
  const setCategoryFilter = useContentStore((state) => state.setCategoryFilter);

  if (!voice) return null;

  const filteredEpisodes = voice.episodes.filter((episode) =>
    categoryFilter === "جميع الفئات" ? true : episode.title.includes(categoryFilter)
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-sm text-[#6A0AE2]">بثوث الجامعة المباشرة</span>
          <h2 className="text-2xl font-bold text-[#1F1A3D]">{voice.title}</h2>
          <p className="text-sm text-[#3F3A66]">{voice.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {voice.categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                categoryFilter === category
                  ? "border-[#6A0AE2] bg-[#6A0AE2] text-white shadow-lg shadow-purple-200/40"
                  : "border-purple-100 bg-white text-[#6A0AE2] hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 rounded-3xl border border-[#E3EBFF] bg-white/90 p-6 shadow-[0_30px_80px_-50px_rgba(56,0,161,0.2)]"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-[#6A0AE2]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6A0AE2] to-[#D744B3] text-white shadow-lg">
                <Mic className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-[#6A0AE2]">البودكاست</p>
                <h3 className="text-xl font-semibold text-[#1F1A3D]">
                  محتوى مباشر ومسجل
                </h3>
              </div>
            </div>
            <button className="self-start rounded-full border border-purple-200 p-2 text-[#6A0AE2] hover:bg-purple-50">
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-[#F5F8FF] p-4">
            <label className="flex items-center gap-3 text-[#6A0AE2]">
              <Search className="h-5 w-5" />
              <input
                type="search"
                placeholder="ابحث عن بث"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#6A0AE2]/60"
              />
            </label>
          </div>

          <div className="space-y-4">
            {filteredEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="rounded-2xl border border-[#E3EBFF] bg-gradient-to-l from-white to-[#F5F8FF] p-5"
              >
                <div className="flex flex-col gap-2 text-sm text-[#6A0AE2] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                    تم بثه في {episode.airedAt}
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                    المدة: {episode.duration}
                  </span>
                </div>
                <h4 className="mt-3 text-lg font-semibold text-[#1F1A3D]">{episode.title}</h4>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6A0AE2]">
                  استمع الآن
                </button>
              </div>
            ))}
            {!filteredEpisodes.length ? (
              <p className="rounded-2xl bg-[#F5F8FF] p-6 text-center text-sm text-[#3F3A66]">
                لا توجد حلقات مطابقة للفلتر الحالي.
              </p>
            ) : null}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 rounded-3xl border border-[#E3EBFF] bg-white/90 p-6 shadow-[0_30px_80px_-50px_rgba(56,0,161,0.2)]"
        >
          <h3 className="text-lg font-semibold text-[#1F1A3D]">مكتبة الصوتيات</h3>
          <p className="text-sm text-[#3F3A66]">
            تابع البثوث المباشرة، المعسكرات، والبودكاست الجامعي أولًا بأول.
          </p>
          <div className="rounded-2xl bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] p-6 text-white shadow-lg">
            <h4 className="text-lg font-semibold">اشترك في النشرة الصوتية</h4>
            <p className="mt-2 text-sm text-white/80">
              احصل على تنبيهات فورية لأحدث الحلقات والفعاليات الصوتية.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              اشترك الآن
            </button>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
