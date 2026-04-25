"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="relative w-12 h-12 flex items-center justify-center rounded-full border border-muted cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-md bg-[#FE4300]"
    >
      <Sun className="absolute h-5 w-5 transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90 text-white" />
      <Moon className="absolute h-5 w-5 text-white transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </div>
  );
}
