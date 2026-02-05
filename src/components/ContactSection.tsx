import { motion } from "framer-motion";
import { useContentStore } from "../store/useContentStore";

export function ContactSection() {
  const contact = useContentStore((state) => state.contact);

  if (!contact) return null;

  return (
    <section className="grid gap-6 rounded-3xl border border-purple-100/60 bg-white/80 p-6 shadow-[0_40px_120px_-60px_rgba(90,0,160,0.3)] backdrop-blur-xl lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#1F1A3D]">{contact.title}</h2>
        <p className="text-sm text-[#3F3A66]">{contact.subtitle}</p>
        <ul className="space-y-3 text-sm text-[#2E2A4B]">
          <li className="flex items-center justify-between rounded-2xl bg-[#F9F5FF] px-4 py-3">
            <span>البريد الموحد</span>
            <a href="mailto:info@kku.edu.sa" className="text-[#6A0AE2] hover:underline">
              info@kku.edu.sa
            </a>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-[#F9F5FF] px-4 py-3">
            <span>الهاتف</span>
            <a href="tel:+966920000" className="text-[#6A0AE2] hover:underline">
              +966 9200 00 000
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 rounded-3xl border border-purple-50 bg-white/70 p-5"
        onSubmit={(event) => {
          event.preventDefault();
          alert("تم استلام طلبك، سنتواصل معك قريبًا.");
        }}
      >
        <div className="grid gap-3 md:grid-cols-2">
          {contact.fields.map((field) => (
            <label key={field.id} className="space-y-2 text-sm text-[#2E2A4B]">
              <span>{field.label}</span>
              {field.id === "details" ? (
                <textarea
                  name={field.id}
                  rows={4}
                  required
                  className="w-full rounded-2xl border border-purple-100 bg-white/60 px-4 py-3 text-sm outline-none focus:border-[#6A0AE2] focus:ring-2 focus:ring-purple-100"
                />
              ) : (
                <input
                  name={field.id}
                  required
                  className="w-full rounded-2xl border border-purple-100 bg-white/60 px-4 py-3 text-sm outline-none focus:border-[#6A0AE2] focus:ring-2 focus:ring-purple-100"
                />
              )}
            </label>
          ))}
        </div>
        <label className="space-y-2 text-sm text-[#2E2A4B]">
          <span>أرفق ملف (اختياري)</span>
          <input
            type="file"
            className="w-full rounded-2xl border border-dashed border-purple-200 bg-white/60 px-4 py-4 text-sm text-[#6A0AE2]"
          />
        </label>
        <button className="w-full rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/40">
          {contact.submitLabel}
        </button>
      </motion.form>
    </section>
  );
}
