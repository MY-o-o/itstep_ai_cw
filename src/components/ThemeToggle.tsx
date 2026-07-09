"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-white/5 hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-md transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <Sun className="absolute w-5 h-5 transition-all duration-500 transform dark:-rotate-90 dark:opacity-0 text-amber-500 group-hover:rotate-45" />
        <Moon className="absolute w-5 h-5 transition-all duration-500 transform rotate-90 opacity-0 dark:rotate-0 dark:opacity-100 text-blue-400 group-hover:-rotate-12" />
      </div>
    </button>
  );
}
