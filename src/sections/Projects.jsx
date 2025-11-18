import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/siteData";

export default function Projects({ t, lang }) {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="proyectos">{t.sections.projects}</SectionHeading>
      <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard
            key={typeof p.title === "string" ? p.title : p.title.es}
            {...p}
            t={t}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}
