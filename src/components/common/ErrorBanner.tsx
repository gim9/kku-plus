import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface ErrorBannerProps {
  message: string;
  onClose: () => void;
}

export function ErrorBanner({ message, onClose }: ErrorBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50/80 px-5 py-4 text-[#6A0AE2]"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-5 w-5 text-red-500" />
        <p className="text-sm text-red-700">{message}</p>
      </div>
      <button onClick={onClose} className="text-red-400 transition hover:text-red-600">
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
