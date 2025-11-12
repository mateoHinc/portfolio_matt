import { Palette } from "lucide-react";
import { ACCENTS } from "../data/siteData";
import { useState } from "react";

export default function AccentPalette({
  accent,
  onPickAccent,
  label = "Acento",
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        title={label}
        className="inline-flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 border border-neutral-200 dark:border-neutral-800 rounded-xl"
      >
        <Palette className="w-5 h-5" />
        <span className="hidden sm:inline text-sm capitalize">{accent}</span>
        <span
          className="bg-grandient-to-r rounded-full w-3 h-3 from-(--accent-from) to-(--accent-to)"
          aria-hidden
        />
      </button>
      {open && (
        <div className="right-0 absolute gap-2 grid grid-cols-4 bg-white dark:bg-neutral-900 shadow-md mt-2 p-2 border border-neutral-200 dark:border-neutral-800 rounded-xl">
          {Object.keys(ACCENTS).map((key) => (
            <button
              key={key}
              onClick={() => {
                onPickAccent(key);
                setOpen(false);
              }}
              className={`w-8 h-8 rounded-full border ${
                accent === key
                  ? "ring-2 ring-offset-2 ring-[(--accent-from)]"
                  : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(90deg, ${ACCENTS[key].from}, ${ACCENTS[key].to})`,
                borderColor: "rgba(0,0,0,0.08)",
              }}
              aria-label={`Elegir ${key}`}
              title={key}
            />
          ))}
        </div>
      )}
    </div>
  );
}
