import { useEffect, useState, useCallback } from "react";
import { ACCENTS } from "../data/siteData";

export default function useAccent() {
  const getInitial = () => {
    if (typeof window === "undefined") return "morado";
    const stored = localStorage.getItem("theme:accent");
    return stored && ACCENTS[stored] ? stored : "morado";
  };

  const [accent, setAccent] = useState(getInitial);

  const apply = useCallback((key) => {
    const root = document.documentElement;
    const { from, to } = ACCENTS[key];
    root.style.setProperty("--accent-from", from);
    root.style.setProperty("--accent-to", to);
  }, []);

  useEffect(() => {
    apply(accent);

    try {
      localStorage.setItem("theme:accent", accent);
    } catch (error) {
      console.log(error);
    }
  }, [accent, apply]);

  return { accent, setAccent };
}
