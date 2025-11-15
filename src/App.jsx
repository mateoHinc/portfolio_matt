// Hooks
import useTheme from "./hooks/useTheme";
import useAccent from "./hooks/useAccent";
import useLang from "./hooks/useLang";

// Sections
import Hero from "./sections/Hero";
import Studies from "./sections/Studies";

// Components
import Header from "./components/Header";

function App() {
  const { dark, toggle } = useTheme();
  const { accent, setAccent } = useAccent();
  const { lang, t, toggleLang } = useLang();

  return (
    <div
      className={
        dark
          ? "bg-neutral-950 via-neutral-950 to-neutral-950 min-h-screen text-neutral-100"
          : "bg-white via-white to-white min-h-screen text-neutral-900"
      }
    >
      <Header
        toggleTheme={toggle}
        darkMode={dark}
        accent={accent}
        onPickAccent={setAccent}
        t={t}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main>
        <Hero t={t} lang={lang} />
        <Studies t={t} lang={lang} />
      </main>
    </div>
  );
}

export default App;
