// Hooks
import useTheme from "./hooks/useTheme";
import useAccent from "./hooks/useAccent";
import useLang from "./hooks/useLang";

// Components
import Header from "./components/Header";

function App() {
  const { dark, toggle } = useTheme();
  const { accent, setAccent } = useAccent();
  const { lang, t, toggleLang } = useLang();

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white dark:from-neutral-950 via-white dark:via-neutral-950 to-white dark:to-neutral-950 min-h-screen text-neutral-900 dark:text-neutral-100">
      <Header
        toggleTheme={toggle}
        darkMode={dark}
        accent={accent}
        onPickAccent={setAccent}
        t={t}
        lang={lang}
        onToggleLang={toggleLang}
      />
    </div>
  );
}

export default App;
