import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContentStore } from "../store/useContentStore";

const eventsBg = "/assets/events-table-gradient.png";

export function EventsCarousel() {
  const events = useContentStore((state) => state.events);
  const eventsTable = useContentStore((state) => state.eventsTable);

  if (!events.length || !eventsTable) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1F1A3D]">الإعلانات والهاكاثونات والمعسكرات والورشات</h2>
        <div className="flex gap-2 text-[#6A0AE2]">
          <button className="rounded-full border border-purple-200 p-2 transition hover:bg-purple-50">
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-purple-200 p-2 transition hover:bg-purple-50">
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#E3EBFF] bg-white/90 shadow-[0_30px_90px_-60px_rgba(90,0,160,0.25)]">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsBg})` }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-right text-sm text-[#2E2A4B]">
              <thead>
                <tr>
                  {eventsTable.columns.map((column) => (
                    <th key={column} className="px-6 py-4 font-semibold text-white/90">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {eventsTable.rows.map((row, index) => (
                  <tr key={row.event} className={`bg-white/70 ${index !== eventsTable.rows.length - 1 ? "border-b border-[#E6EDFF]" : ""}`}>
                    <td className="px-6 py-4 font-semibold text-[#1F1A3D]">{row.event}</td>
                    <td className="px-6 py-4 text-[#6A0AE2]">{row.date}</td>
                    <td className="px-6 py-4">{row.time}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[#F5F8FF] px-3 py-1 text-xs text-[#6A0AE2]">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-[#E3EBFF] bg-white/90 shadow-[0_30px_90px_-60px_rgba(90,0,160,0.25)]">
        <div className="relative overflow-hidden rounded-3xl">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid gap-6 p-6 sm:grid-cols-[1fr_minmax(0,420px)]"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FF] px-3 py-1 text-xs text-[#6A0AE2]">
                  الفعالية القادمة
                </span>
                <h3 className="text-2xl font-bold text-[#1F1A3D]">{event.title}</h3>
                <p className="text-sm text-[#3F3A66]">{event.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-[#6A0AE2]">
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1">{event.date}</span>
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1">{event.time}</span>
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1">{event.location}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#6A0AE2]">
                  اعرف المزيد
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>

              <div className="relative h-64 overflow-hidden rounded-2xl bg-[#F5F8FF]">
                <img
                  src="/assets/highlight-slide.png"
                  alt={event.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4">
                  {events.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-2 w-8 rounded-full ${dotIndex === index ? "bg-[#6A0AE2]" : "bg-white/60"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
