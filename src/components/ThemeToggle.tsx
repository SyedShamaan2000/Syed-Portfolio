import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Check local storage or default to dark
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full transition-all duration-300 hover:bg-emerald-glow text-txt-mid hover:text-emerald-accent"
      aria-label="Toggle visual theme"
      id="theme-toggle"
    >
      {isDark ? (
        <Sun className="h-[21px] w-[21px] animate-fade-in" />
      ) : (
        <Moon className="h-[21px] w-[21px] animate-fade-in" />
      )}
    </button>
  );
}
