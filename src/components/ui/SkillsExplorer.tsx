"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { skillFilters, skillList, SkillCategory } from "@/lib/skills";
import { techIconMap } from "@/lib/techIcons";
import TechLogo from "@/components/ui/TechLogo";

// Human-readable category label per skill, pulled straight from skillFilters
// so it stays in sync if you ever rename a category.
const categoryLabels: Record<SkillCategory, string> = skillFilters.reduce(
  (acc, f) => {
    if (f.id !== "all") acc[f.id] = f.label;
    return acc;
  },
  {} as Record<SkillCategory, string>
);

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SkillsExplorer() {
  const [active, setActive] = useState<SkillCategory | "all">("all");
  const [showJumpDown, setShowJumpDown] = useState(false);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  const visible =
    active === "all" ? skillList : skillList.filter((s) => s.category === active);

  useEffect(() => {
    const sentinel = bottomSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowJumpDown(!entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [active]);

  const scrollToBottom = () => {
    bottomSentinelRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="relative">
      {/* ── Filter tabs — segmented-control container so the active
          category reads as a clear, deliberate choice rather than a
          loose row of buttons ── */}
      <div className="inline-flex flex-wrap gap-1 p-1.5 mb-6 rounded-2xl bg-[rgb(var(--ink)/3%)] border border-[rgb(var(--ink)/8%)]">
        {skillFilters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`relative px-4 py-2 rounded-xl font-syne text-[12px] sm:text-[13px] font-bold transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-[var(--text-inverse)]"
                  : "text-[rgb(var(--ink)/50%)] hover:text-[rgb(var(--ink)/85%)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="skills-filter-pill"
                  className="absolute inset-0 z-0 bg-accent rounded-xl shadow-[0_4px_16px_rgba(125,249,166,0.25)]"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Skill grid — the whole block crossfades on filter change
          (instead of each card FLIP-animating to a new slot), and this
          wrapper's height eases smoothly via `layout`. That combination
          is what stops a sparse category (e.g. only 2 items) from
          snapping the page around it. ── */}
      <motion.div layout transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-3"
          >
            {visible.map((item) => (
              <motion.div
                key={item.label}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                className="group flex flex-col items-center justify-center gap-2.5 text-center rounded-xl border border-[rgb(var(--ink)/8%)] bg-[rgb(var(--ink)/2%)] px-2.5 sm:px-3 py-4 sm:py-5 transition-[background-color,border-color,box-shadow] duration-300 hover:border-accent/35 hover:bg-[rgb(var(--ink)/5%)] hover:shadow-[0_8px_24px_rgba(125,249,166,0.08)] cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[rgb(var(--ink)/5%)] border border-[rgb(var(--ink)/10%)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:scale-110">
                  <TechLogo
                    icon={techIconMap[item.label]}
                    label={item.label}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[rgb(var(--ink)/70%)] group-hover:text-accent transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-syne font-bold text-[11px] sm:text-xs text-[var(--text-primary)] leading-tight">
                    {item.label}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[1px] text-[rgb(var(--ink)/35%)] group-hover:text-accent/70 transition-colors duration-300">
                    {categoryLabels[item.category]}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Sentinel marking the end of the grid — invisible, just for scroll targeting */}
      <div ref={bottomSentinelRef} aria-hidden="true" />

      {/* ── Jump to bottom ── */}
      <AnimatePresence>
        {showJumpDown && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToBottom}
            aria-label="Jump to end of skills list"
            className="fixed bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-40 w-11 h-11 rounded-full bg-[var(--surface-1)]/90 backdrop-blur-xl border border-[rgb(var(--ink)/10%)] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-[rgb(var(--ink)/60%)] hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}