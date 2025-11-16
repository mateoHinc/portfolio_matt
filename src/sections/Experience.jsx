import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCE } from "../data/siteData";

export default function Experience({ t, lang }) {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="experiencia">{t.sections.experience}</SectionHeading>
      <ol className="relative">
        {EXPERIENCE.map((e, idx) => (
          <ExperienceItem
            key={`${e.company}-${idx}`}
            {...e}
            last={idx === EXPERIENCE.length - 1}
            lang={lang}
          />
        ))}
      </ol>
    </section>
  );
}
