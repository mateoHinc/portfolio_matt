import SectionHeading from "../components/SectionHeading";
import SkillItem from "../components/SkillItem";
import { SKILLS } from "../data/siteData";

export default function Skills({ t }) {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="habilidades">{t.sections.skills}</SectionHeading>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <SkillItem key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
