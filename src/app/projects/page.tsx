"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Cpu, BookOpen, GraduationCap, ScanEye } from "lucide-react";
import Link from "next/link";

// ── Number formatter for project index ──────────────────────────────────────
function padIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

// ── Icon Mapping for Lucide Icons ───────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7 text-emerald-300" strokeWidth={1.5} />,
  BookOpen: <BookOpen className="w-7 h-7 text-blue-300" strokeWidth={1.5} />,
  GraduationCap: <GraduationCap className="w-7 h-7 text-purple-300" strokeWidth={1.5} />,
  ScanEye: <ScanEye className="w-7 h-7 text-orange-300" strokeWidth={1.5} />,
};

// ── Tag/pill component ───────────────────────────────────────────────────────
function Tag({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-md font-mono text-[10px] tracking-[0.4px] border ${
        highlight
          ? "bg-accent/10 border-accent/25 text-accent"
          : "bg-white/[0.04] border-white/[0.08] text-white/50"
      }`}
    >
      {label}
    </span>
  );
}

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);

  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-16 pt-6 animate-in fade-in duration-700">

      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div className="mb-10 pl-1">
        <p className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent mb-2">
          System Archive
        </p>
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-white tracking-tight">
          Featured Work
        </h1>
      </div>

      {/* ── Split Layout ──────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-start">

        {/* ── LEFT: Project List ─────────────────────────────────────────── */}
        <div className="lg:w-[340px] shrink-0 flex flex-col gap-2 lg:sticky lg:top-28">
          {projects.map((project, i) => {
            const isActive = project.id === activeId;
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`group w-full text-left rounded-[14px] border px-5 py-4 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0f0f0f] border-accent/30 shadow-[0_0_24px_rgba(125,249,166,0.06)]"
                    : "bg-[#0c0c0c] border-white/[0.07] hover:border-white/[0.15] hover:bg-[#111]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  {/* Index + Label */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] font-medium tabular-nums ${
                        isActive ? "text-accent" : "text-white/25"
                      }`}
                    >
                      {padIndex(i)}
                    </span>
                    <span
                      className={`font-mono text-[9px] tracking-[1.5px] uppercase ${
                        isActive ? "text-accent/70" : "text-white/30"
                      }`}
                    >
                      {project.label}
                    </span>
                  </div>

                  {/* Active indicator dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-accent scale-100" : "bg-white/10 scale-75 group-hover:scale-100 group-hover:bg-white/20"
                    }`}
                  />
                </div>

                {/* Project Title */}
                <h3
                  className={`font-syne font-bold text-lg leading-tight transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Preview tags — only on active */}
                <div
                  className={`flex flex-wrap gap-1.5 mt-3 transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {project.previewTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-white/40 bg-white/[0.03] border border-white/[0.07] rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}

          {/* ── Footer note ─────────────────────────────────────────────── */}
          <p className="font-mono text-[9px] text-white/20 text-center pt-2 tracking-[1px]">
            {projects.length} projects · click to explore
          </p>
        </div>

        {/* ── RIGHT: Detail Panel ───────────────────────────────────────── */}
        <div
          key={active.id}
          className="flex-1 min-w-0 bg-[#0c0c0c] border border-white/[0.07] rounded-[18px] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {/* ── Detail Header ───────────────────────────────────────────── */}
          <div className="border-b border-white/[0.07] p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4 mb-5">
              {/* Lucide icon mapping */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.07]"
                style={{ background: active.iconBgStyle }}
              >
                {iconMap[active.iconName] || <Cpu className="w-7 h-7 text-white/50" strokeWidth={1.5} />}
              </div>

              {/* Index badge */}
              <span className="font-mono text-[11px] text-white/20 tabular-nums mt-1">
                {padIndex(activeIndex)} / {padIndex(projects.length - 1)}
              </span>
            </div>

            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-accent mb-2">
              {active.role}
            </p>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white leading-tight mb-3">
              {active.fullTitle}
            </h2>
            <p className="font-inter text-sm text-white/55 leading-relaxed font-light mb-6">
              {active.fullDesc}
            </p>

            {/* ── GitHub Repositories Section ───────────────────────────── */}
            {active.githubUrls && active.githubUrls.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {active.githubUrls.map((repo, idx) => (
                  <Link 
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
                  >
                    {/* Raw SVG to prevent lucide-react compile errors */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white/20 self-end group-hover:text-white transition-colors">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="font-mono text-[10px] uppercase tracking-[1px] text-white/60 group-hover:text-white pt-0.5">
                      {repo.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ── Bullets ─────────────────────────────────────────────────── */}
          <div className="p-6 lg:p-8 border-b border-white/[0.07]">
            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-white/30 mb-5">
              Key Contributions
            </p>
            <ul className="flex flex-col gap-4">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 items-start">
                  {/* Bullet number */}
                  <span className="font-mono text-[10px] text-accent/60 tabular-nums mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Tech Stack ──────────────────────────────────────────────── */}
          <div className="p-6 lg:p-8">
            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-white/30 mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {active.stack.map((item) => (
                <Tag key={item.label} label={item.label} highlight={item.highlight} />
              ))}
            </div>
          </div>

          {/* ── Nav arrows ──────────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
            <button
              onClick={() => {
                const prev = projects[activeIndex - 1];
                if (prev) setActiveId(prev.id);
              }}
              disabled={activeIndex === 0}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <span>←</span>
              <span>PREV</span>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`rounded-full transition-all duration-300 ${
                    p.id === activeId
                      ? "w-5 h-1.5 bg-accent"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const next = projects[activeIndex + 1];
                if (next) setActiveId(next.id);
              }}
              disabled={activeIndex === projects.length - 1}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <span>NEXT</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}