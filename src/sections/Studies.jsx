import SectionHeading from "../components/SectionHeading";
import { STUDIES } from "../data/siteData";
import useTheme from "../hooks/useTheme";

export default function Studies({ t, lang }) {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="estudios">{t.sections.studies}</SectionHeading>
      <div className="space-y-5">
        {STUDIES.map((s, i) => (
          <div
            key={i}
            className="bg-white/70 dark:bg-neutral-900/60 p-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-semibold text-lg">{s.title[lang]}</h3>
              <span className="text-neutral-500 text-sm">• {s.org[lang]}</span>
              <span className="ml-auto text-neutral-500 text-sm">{s.year}</span>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">
              {s.details[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
