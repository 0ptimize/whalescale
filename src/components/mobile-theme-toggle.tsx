"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm dark:bg-black/80"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
} 