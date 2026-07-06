"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioning) return; // ignore taps while one is already animating

    const next: Theme = theme === "dark" ? "light" : "dark";
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    document.documentElement.style.setProperty("--ripple-x", `${x}px`);
    document.documentElement.style.setProperty("--ripple-y", `${y}px`);

    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    };

    if (!document.startViewTransition) {
      apply();
      return;
    }

    setIsTransitioning(true);
    document.documentElement.classList.add("theme-transitioning");
    window.dispatchEvent(new Event("themeTransitionStart"));

    const transition = document.startViewTransition(apply);
    transition.finished.finally(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove("theme-transitioning");
      window.dispatchEvent(new Event("themeTransitionEnd"));
    });
  };

  // Avoid a hydration mismatch flash — render nothing until we know the real theme.
  if (!mounted) {
    return <div className={`w-9 h-9 rounded-full ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-9 h-9 rounded-full border border-[rgb(var(--ink)/10%)] bg-[rgb(var(--ink)/5%)] flex items-center justify-center text-[rgb(var(--ink)/70%)] hover:text-accent hover:border-accent/30 transition-colors ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" strokeWidth={2} />
      ) : (
        <Moon className="w-4 h-4" strokeWidth={2} />
      )}
    </button>
  );
}