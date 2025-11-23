import { FileDown, Globe } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { CV } from "../data/siteData";

export default function CVSection({ t, lang }) {
  const file = CV[lang] || CV.es;
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="cv">{t.sections.cv}</SectionHeading>
      <div className="flex md:flex-row flex-col items-center gap-4 bg-white/70 dark:bg-neutral-900/60 p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
        <div className="flex-1 md:text-left text-center">
          <h3 className="font-semibold text-lg">{t.sections.cv} PDF</h3>
          <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm">
            {file.lastUpdated} · ~{file.sizeMB} MB
          </p>
        </div>
        <a
          href={file.url}
          download={file.filename}
          className="inline-flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium"
        >
          <FileDown className="w-5 h-5" /> {t.labels.downloadCV}
        </a>
        <a
          href={file.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium"
        >
          <Globe className="w-5 h-5" /> {t.labels.viewInBrowser}
        </a>
      </div>
    </section>
  );
}
