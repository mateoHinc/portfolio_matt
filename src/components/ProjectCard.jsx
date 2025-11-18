import { motion } from "motion/react";
import { Globe, Github } from "lucide-react";

const prefersReduced =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProjectCard({
  title,
  desc,
  cover,
  tags,
  demo,
  repo,
  t,
  lang,
}) {
  return (
    <motion.article
      className="group bg-white/70 dark:bg-neutral-900/60 hover:shadow-md border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-shadow"
      initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          src={cover}
          alt={typeof title === "string" ? title : title.es}
          className="w-full h-full object-cover"
          whileHover={{ scale: prefersReduced ? 1 : 1.03 }}
          transition={{ duration: prefersReduced ? 0 : 0.4 }}
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-semibold text-lg">
          {typeof title === "string" ? title : title[lang]}
        </h3>
        <p className="mb-3 text-neutral-600 dark:text-neutral-300 text-sm">
          {typeof desc === "string" ? desc : desc[lang]}
        </p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tg) => (
            <li
              key={tg}
              className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-300 text-xs"
            >
              {tg}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium text-sm"
            >
              <Globe className="w-4 h-4" />
              {t.labels.demo}
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              {t.labels.code}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
