import { useEffect, useMemo, useState } from "react";
import { I18N } from "../data/siteData";

export default function useLang() {
  const getInitial = () => {
    if (typeof window === "undefined") return "es";
    const stored = localStorage.getItem("ui:lang");
    if (stored === "es" || stored === "en") return stored;
    const nav = navigator?.language?.toLowerCase() || "es";
    return nav.startsWith("en") ? "en" : "es";
  };
  const [lang, setLang] = useState(getInitial);
  const t = useMemo(() => I18N[lang], [lang]);

  useEffect(() => {
    try {
      localStorage.setItem("ui:lang", lang);
    } catch (error) {
      console.log(error);
    }
  }, [lang]);

  return {
    lang,
    t,
    toggleLang: () => setLang((l) => (l === "es" ? "en" : "es")),
  };
}
