import { useEffect, useState } from "react";

export default function useTheme() {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme:dark");
    if (stored === "true") return true;
    if (stored === "false") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme:dark", String(dark));
    } catch {
      console.log("");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((v) => !v) };
}
