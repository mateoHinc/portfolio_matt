import { motion } from "framer-motion";

const prefersReduced =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion:reduce)").matches;

export default function ProgressBar({ value }) {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 rounded-full w-full h-2 overflow-hidden">
      <motion.div
        className="bg-gradient-to-r-h h-full from-(--accent-from) to-(--accent-to)"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: prefersReduced ? 0 : 0.8 }}
      />
    </div>
  );
}
