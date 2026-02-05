import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useUIStore } from "../../store/useUIStore";

const menuItems = [
  "الرئيسية",
  "خدمات الجامعة",
  "صوت الجامعة",
  "المساعد الذكي",
  "مجتمع الطلاب",
  "التواصل",
];

const variants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.3 },
  }),
};

export function FloatingMenu() {
  const { isMenuOpen, toggleMenu, closeAll } = useUIStore();

  return (
    <div className="relative">
      <button
        className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/10"
        onClick={toggleMenu}
      >
        <span>القائمة</span>
        {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full mt-4 w-56 overflow-hidden rounded-2xl border border-white/40 bg-white/95 text-right shadow-xl backdrop-blur-xl"
          >
            <ul className="divide-y divide-purple-50/70">
              {menuItems.map((item, index) => (
                <motion.li key={item} custom={index} variants={variants} initial="hidden" animate="visible">
                  <button
                    className="block w-full px-5 py-3 text-sm text-[#2E2A4B] transition hover:bg-purple-50"
                    onClick={closeAll}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
