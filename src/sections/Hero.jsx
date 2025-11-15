import { motion } from "motion/react";
import { PROFILE_TEXT, PROFILE } from "../data/siteData";
import useTheme from "../hooks/useTheme";

const prefersReduced =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero({ t, lang }) {
  const { dark } = useTheme();

  return (
    <section
      id="inicio"
      className="items-center gap-8 grid md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.6 }}
        className="order-2 md:order-1"
      >
        <h1
          className="mb-3 font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight"
          style={{ color: "var(--accent-from)" }}
        >
          {PROFILE_TEXT[lang].role}
        </h1>
        <p className={`mb-4 ${dark ? "text-neutral-400" : "text-gray-800"}`}>
          {PROFILE_TEXT[lang].summary}
        </p>
        <ul
          className={`space-y-1 text-sm ${
            dark ? "text-neutral-400" : "text-gray-800"
          }`}
        >
          <li>
            <strong>{t.labels.name}:</strong> {PROFILE.name}
          </li>
          <li>
            <strong>{t.labels.location}:</strong> {PROFILE.location[lang]}
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.6 }}
        className="order-1 md:order-2"
      >
        <div className="relative mx-auto w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72">
          <motion.img
            src={PROFILE.photo}
            alt="Picture"
            className="shadow-lg border border-neutral-200 dark:border-neutral-800 rounded-2xl w-full h-full object-cover"
            whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
            transition={{ duration: prefersReduced ? 0 : 0.4 }}
          />
          <div
            className="-z-10 absolute -inset-1 blur-2xl rounded-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--accent-from) 0%, var(--accent-to) 100%)",
              opacity: 0.25,
            }}
          ></div>
        </div>
      </motion.div>
    </section>
  );
}
