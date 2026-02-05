import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useContentStore } from "../../store/useContentStore";
import { useUIStore } from "../../store/useUIStore";

export function AssistantPanel() {
  const assistant = useContentStore((state) => state.assistant);
  const { isAssistantOpen, toggleAssistant } = useUIStore();

  if (!assistant) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isAssistantOpen ? (
          <motion.div
            key="assistant-panel"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="w-[360px] overflow-hidden rounded-3xl border border-purple-100/70 bg-white/90 shadow-[0_40px_120px_-60px_rgba(90,0,160,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/80">المساعد الذكي</p>
                  <p className="text-base font-semibold">جامعة الملك خالد</p>
                </div>
              </div>
              <button onClick={toggleAssistant}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 px-5 py-6 text-sm text-[#2E2A4B]">
              <p className="rounded-2xl bg-[#F9F5FF] px-4 py-3 text-[#6A0AE2]">
                {assistant.welcome}
              </p>
              <div className="space-y-3">
                <p className="text-xs text-[#6A0AE2]">أسئلة سريعة</p>
                {assistant.quickQuestions.map((question) => (
                  <button
                    key={question}
                    className="w-full rounded-2xl border border-purple-100 px-4 py-3 text-right text-sm transition hover:border-[#6A0AE2] hover:bg-purple-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-purple-100 px-4 py-3">
                <textarea
                  rows={3}
                  placeholder="اكتب رسالتك هنا ..."
                  className="w-full resize-none bg-transparent text-sm outline-none"
                />
              </div>
              <button className="w-full rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/40">
                إرسال الآن
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        layout
        onClick={toggleAssistant}
        className="inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-[#F4359D] via-[#D744B3] to-[#6A0AE2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle className="h-5 w-5" />
        تحدث مع المساعد
      </motion.button>
    </div>
  );
}
