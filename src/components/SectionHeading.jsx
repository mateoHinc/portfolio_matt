import { motion } from "framer-motion";

const prefersReduced =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const fadeUp = {
  hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: prefersReduced ? 0 : 0.6 },
  },
};

export default function SectionHeading({ id, children }) {
  return (
    <motion.h2
      id={id}
      className="flex items-center gap-2 mb-6 font-bold text-2xl md:text-3xl tracking-tight"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block bg-gradient-to-b rounded w-2 h-6 from-(--accent-from) to-(--accent-to)">
        {children}
      </span>
    </motion.h2>
  );
}
