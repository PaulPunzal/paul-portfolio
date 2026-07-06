"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { scrollToHeading } from "@/lib/useActiveHeading";

interface Heading {
  id: string;
  text: string;
}

interface ReadingProgressProps {
  targetRef: RefObject<HTMLElement | null>;
  title: string;
  totalMinutes: number;
  headings: Heading[];
  activeId: string;
}

export default function ReadingProgress({
  targetRef,
  title,
  totalMinutes,
  headings,
  activeId,
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [showChip, setShowChip] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const measure = () => {
      const el = targetRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;

      setProgress(pct);
      setShowChip(pct > 0.03 && pct < 0.98);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetRef]);

  // Auto-close the popover once the chip itself would hide (e.g. reaching the end)
  useEffect(() => {
    if (!showChip && open) setOpen(false);
  }, [showChip, open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const minutesLeft = Math.max(1, Math.round(totalMinutes * (1 - progress)));
  const radius = 9;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      {/* ── Top progress line ── */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[70] pointer-events-none">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Floating progress chip — click to reveal title + jump list ── */}
      <div
        ref={wrapRef}
        className={`fixed bottom-6 left-4 sm:left-6 z-40 transition-all duration-300 ${
          showChip ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        {open && (
          <div className="absolute bottom-full left-0 mb-3 w-[270px] bg-[var(--surface-1)] border border-[rgb(var(--ink)/10%)] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="px-4 py-3.5 border-b border-[rgb(var(--ink)/7%)]">
              <p className="font-syne font-bold text-[13px] text-[var(--text-primary)] leading-snug mb-1">
                {title}
              </p>
              <span className="font-mono text-[9px] uppercase tracking-[1px] text-[rgb(var(--ink)/45%)]">
                {progress >= 0.98 ? "Finished" : `${minutesLeft} min left`}
              </span>
            </div>
            {headings.length > 1 && (
              <div className="max-h-[240px] overflow-y-auto py-1.5">
                {headings.map((h) => {
                  const isActive = h.id === activeId;
                  return (
                    <button
                      key={h.id}
                      onClick={() => {
                        scrollToHeading(h.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 font-inter text-[12.5px] leading-snug transition-colors cursor-pointer ${
                        isActive
                          ? "text-accent font-medium bg-accent/5"
                          : "text-[rgb(var(--ink)/60%)] hover:text-[rgb(var(--ink)/85%)] hover:bg-[rgb(var(--ink)/4%)]"
                      }`}
                    >
                      {h.text}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Larger on sm+ so it reads clearly on desktop instead of
            disappearing into the corner */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 bg-[var(--surface-1)]/90 backdrop-blur-xl border border-[rgb(var(--ink)/10%)] rounded-full pl-3.5 pr-5 py-2.5 sm:pl-4 sm:pr-6 sm:py-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:border-accent/30 transition-colors cursor-pointer"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" className="shrink-0 -rotate-90 sm:w-[30px] sm:h-[30px]">
            <circle cx="13" cy="13" r={radius} fill="none" stroke="rgb(var(--ink) / 12%)" strokeWidth="2.5" />
            <circle
              cx="13"
              cy="13"
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
            />
          </svg>
          <span className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[1px] text-[rgb(var(--ink)/70%)] whitespace-nowrap">
            {Math.round(progress * 100)}%
          </span>
        </button>
      </div>
    </>
  );
}