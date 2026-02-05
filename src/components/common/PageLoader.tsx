import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-white/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-[#D744B3]/30 border-t-[#6A0AE2]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
}
