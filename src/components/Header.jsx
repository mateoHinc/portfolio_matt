import { Sun, Moon, Menu, X } from "lucide-react";
import AccentPalette from "./AccentPalette";
import { PROFILE } from "../data/siteData";
import { useState } from "react";

export default function Header({
  toggleTheme,
  darkMode,
  accent,
  onPickAccent,
  t,
  lang,
  onToggleLang,
}) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#estudios", label: t.nav.studies },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#cv", label: t.nav.cv },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="top-0 z-40 sticky supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 backdrop-blur border-neutral-200 dark:border-neutral-800 border-b">
      <nav className="relative flex items-center gap-2 sm:gap-3 lg:gap-4 mx-auto px-4 py-3 max-w-6xl">
        <a href="#inicio" className="mr-2 font-semibold text-base sm:text-lg">
          {PROFILE.name.split(" ")[0]}
        </a>
        <ul className="hidden md:flex items-center gap-5 ml-auto text-sm">
          {navItems.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="hover:underline underline-offset-4">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label={t.labels.theme}
          className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 border border-neutral-200 dark:border-neutral-800 rounded-xl"
          title={t.labels.theme}
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <AccentPalette
          accent={accent}
          onPickAccent={onPickAccent}
          label={t.labels.accent}
        />
        <button
          onClick={onToggleLang}
          aria-label={t.labels.language}
          title={t.labels.language}
          className="hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-xl font-medium text-sm"
        >
          {lang.toUpperCase()}
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex justify-center items-center hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 border border-neutral-200 dark:border-neutral-800 rounded-xl"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-neutral-200 dark:border-neutral-800 border-t">
          <ul className="gap-2 grid mx-auto px-4 py-2 max-w-6xl text-sm">
            {navItems.map((it) => (
              <li key={it.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={it.href}
                  className="block hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3 py-2 rounded-lg w-full"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
