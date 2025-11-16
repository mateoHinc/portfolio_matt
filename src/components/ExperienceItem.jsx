export default function ExperienceItem({
  role,
  company,
  period,
  location,
  achievements,
  tech,
  last,
  lang,
}) {
  return (
    <li className="relative pb-8 last:pb-0 pl-6">
      <span
        className={`absolute left-0 top-1.5 h-full w-px ${
          last ? "bg-transparent" : "bg-neutral-200 dark:bg-neutral-800"
        }`}
      />
      <span className="top-1.5 left-[-3.5px] absolute bg-linear-to-r rounded-full w-2.5 h-2.5 from-(--accent-from) to-(--accent-to)" />
      <div className="bg-white/70 dark:bg-neutral-900/60 p-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-semibold text-base sm:text-lg">{role[lang]}</h3>
          <span className="text-neutral-500 text-sm">• {company[lang]}</span>
          <span className="ml-auto text-neutral-500 text-xs sm:text-sm">
            {period[lang]} • {location[lang]}
          </span>
        </div>
        <ul className="space-y-2 mt-3 text-neutral-700 dark:text-neutral-300 text-sm list-disc list-inside">
          {achievements[lang]?.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
        {tech?.length ? (
          <ul className="flex flex-wrap gap-2 mt-3">
            {tech.map((tt) => (
              <li
                key={tt}
                className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-300 text-xs"
              >
                {tt}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
