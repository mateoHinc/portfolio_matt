import ProgressBar from "./ProgressBar";

export default function SkillItem({ name, level, logo }) {
  return (
    <div className="bg-white/70 dark:bg-neutral-900/60 shadow-sm hover:shadow-md p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-7 h-7 object-contain"
          />
        ) : (
          <div className="place-items-center grid w-7 h-7 text-lg"></div>
        )}
        <span className="font-medium">{name}</span>
        <span className="ml-auto text-neutral-500 text-sm">{level}%</span>
      </div>
      <ProgressBar value={level} />
    </div>
  );
}
