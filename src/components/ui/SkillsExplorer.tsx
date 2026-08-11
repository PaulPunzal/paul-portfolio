"use client";
import { useState } from "react";
import { skillFilters, skillList, SkillCategory } from "@/lib/skills";
import { techIconMap } from "@/lib/techIcons";
import TechLogo from "@/components/ui/TechLogo";

export default function SkillsExplorer() {
  const [active, setActive] = useState<SkillCategory | "all">("all");

  const visible =
    active === "all" ? skillList : skillList.filter((s) => s.category === active);

  return (
    <div>
      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skillFilters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[1px] border transition-colors cursor-pointer ${
                isActive
                  ? "bg-accent text-[var(--text-inverse)] border-accent font-bold"
                  : "bg-[rgb(var(--ink)/3%)] border-[rgb(var(--ink)/10%)] text-[rgb(var(--ink)/55%)] hover:text-[rgb(var(--ink)/85%)] hover:border-[rgb(var(--ink)/20%)]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* ── Skill grid ── */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {visible.map((item) => (
          <span
            key={item.label}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border font-mono text-[9px] sm:text-[10px] tracking-wide transition-colors cursor-default ${
              item.highlight
                ? "bg-accent/10 border-accent/30 text-accent"
                : "bg-[rgb(var(--ink)/3%)] border-[rgb(var(--ink)/8%)] text-[rgb(var(--ink)/60%)] hover:bg-[rgb(var(--ink)/10%)]"
            }`}
          >
            <TechLogo icon={techIconMap[item.label]} label={item.label} className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}