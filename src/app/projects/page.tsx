"use client";

import { useEffect, useState, useRef } from "react";
import { projects } from "@/lib/data";
import { Cpu, BookOpen, GraduationCap, ScanEye, Network, TrendingUp } from "lucide-react";
import Link from "next/link";

// ── Number formatter for project index ──────────────────────────────────────
function padIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

// ── Icon Mapping for Lucide Icons ───────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-emerald-300" strokeWidth={1.5} />,
  BookOpen: <BookOpen className="w-6 h-6 text-blue-300" strokeWidth={1.5} />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-purple-300" strokeWidth={1.5} />,
  ScanEye: <ScanEye className="w-6 h-6 text-pink-300" strokeWidth={1.5} />,
  Network: <Network className="w-6 h-6 text-cyan-300" strokeWidth={1.5} />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-orange-300" strokeWidth={1.5} />,
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
  const detailPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  const handleProjectClick = (id: string) => {
    setActiveId(id);
    
    // Only auto-scroll on mobile/tablet (below lg breakpoint of 1024px)
    if (window.innerWidth < 1024 && detailPanelRef.current) {
      setTimeout(() => {
        detailPanelRef.current?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 150); // Slight delay allows UI to expand/update before scrolling
    }
  };

  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-16 pt-6 animate-in fade-in duration-700">

      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div className="mb-8 pl-1">
        <p className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent mb-1.5">
          System Archive
        </p>
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-white tracking-tight">
          Featured Work
        </h1>
      </div>

      {/* ── Split Layout ──────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 lg:items-start">

        {/* ── LEFT: Project List ─────────────────────────────────────────── */}
        <div className="lg:w-[340px] shrink-0 flex flex-col gap-3 lg:sticky lg:top-28">
          {/* Mobile Grid Wrapper for 768px */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {projects.map((project, i) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className={`group w-full text-left rounded-[14px] border px-4 py-3.5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0f0f0f] border-accent/30 shadow-[0_0_24px_rgba(125,249,166,0.06)]"
                      : "bg-[#0c0c0c] border-white/[0.07] hover:border-white/[0.15] hover:bg-[#111]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    {/* Index + Label */}
                    <div className="flex items-center gap-2.5">
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
                    className={`flex flex-wrap gap-1.5 mt-2.5 transition-all duration-300 overflow-hidden ${
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
          </div>

          {/* ── Footer note ─────────────────────────────────────────────── */}
          <p className="font-mono text-[9px] text-white/20 text-center pt-1 tracking-[1px] hidden lg:block">
            {projects.length} projects · click to explore
          </p>
        </div>

        {/* ── RIGHT: Detail Panel ───────────────────────────────────────── */}
        <div
          key={active.id}
          ref={detailPanelRef}
          className="flex-1 min-w-0 bg-[#0c0c0c] border border-white/[0.07] rounded-[18px] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300 scroll-mt-24"
        >
          {/* ── Detail Header ───────────────────────────────────────────── */}
          <div className="border-b border-white/[0.07] p-5 lg:p-7">
            <div className="flex items-start justify-between gap-4 mb-4">
              {/* Lucide icon mapping */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.07]"
                style={{ background: active.iconBgStyle }}
              >
                {iconMap[active.iconName] || <Cpu className="w-6 h-6 text-white/50" strokeWidth={1.5} />}
              </div>

              {/* Index badge */}
              <span className="font-mono text-[11px] text-white/20 tabular-nums mt-0.5">
                {padIndex(activeIndex)} / {padIndex(projects.length - 1)}
              </span>
            </div>

            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-accent mb-1.5">
              {active.role}
            </p>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white leading-tight mb-2.5">
              {active.fullTitle}
            </h2>
            <p className="font-inter text-sm text-white/55 leading-relaxed font-light mb-5">
              {active.fullDesc}
            </p>

            {/* ── Links Section (Smart Icons) ───────────────────────────── */}
            {active.githubUrls && active.githubUrls.length > 0 && (
              <div className="flex flex-row flex-wrap gap-2 sm:gap-2.5">
                {active.githubUrls.map((repo, idx) => {
                  const isGithub = repo.url.includes("github.com");
                  const isPicture = repo.label.toLowerCase().includes("picture") || repo.label.toLowerCase().includes("gallery");

                  return (
                    <Link 
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 sm:flex-none items-center justify-center sm:justify-start gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
                    >
                      {isGithub ? (
                        /* GitHub Icon */
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-white transition-colors shrink-0">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      ) : isPicture ? (
                        /* Image/Camera Icon for Pictures */
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-white transition-colors shrink-0">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      ) : (
                        /* External Link Icon for Live Demos */
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-white transition-colors shrink-0">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                      
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[1px] text-white/60 group-hover:text-white pt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {repo.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Bullets ─────────────────────────────────────────────────── */}
          <div className="p-5 lg:p-7 border-b border-white/[0.07]">
            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-white/30 mb-4">
              Key Contributions
            </p>
            <ul className="flex flex-col gap-3">
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

          {/* ── Image Gallery (Screenshots/Hardware) ────── */}
          {active.images && active.images.length > 0 && (
            <div className="p-5 lg:p-7 border-b border-white/[0.07]">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-white/30">
                  Project Gallery
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[1px] uppercase text-white/40 animate-pulse">
                  <span>Scroll</span>
                  <span>→</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex gap-3.5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {active.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="relative h-[280px] sm:h-[360px] shrink-0 snap-center rounded-xl overflow-hidden border border-white/[0.08] bg-[#080808] flex items-center justify-center p-1.5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={img} 
                        alt={`${active.title} screenshot ${idx + 1}`} 
                        className="h-full w-auto rounded-lg object-contain hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                  ))}
                  <div className="w-12 sm:w-16 shrink-0" />
                </div>

                <div className="absolute right-0 top-0 bottom-3 w-20 md:w-28 bg-gradient-to-l from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent pointer-events-none flex items-center justify-end pr-2 md:pr-4">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 shadow-xl animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Certificates Gallery ────── */}
          {active.certificates && active.certificates.length > 0 && (
            <div className="p-5 lg:p-7 border-b border-white/[0.07]">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-accent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  Certificates & Achievements
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[1px] uppercase text-accent/50 animate-pulse">
                  <span>Scroll</span>
                  <span>→</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-3.5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
                  {active.certificates.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className="relative h-[220px] sm:h-[280px] shrink-0 snap-center rounded-xl overflow-hidden border border-accent/20 bg-accent/[0.02] flex items-center justify-center p-2"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={cert} 
                        alt={`${active.title} certificate ${idx + 1}`} 
                        className="h-full w-auto object-contain hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                  ))}
                  <div className="w-12 sm:w-16 shrink-0" />
                </div>

                <div className="absolute right-0 top-0 bottom-3 w-20 md:w-28 bg-gradient-to-l from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent pointer-events-none flex items-center justify-end pr-2 md:pr-4">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 flex items-center justify-center text-accent/70 shadow-[0_0_15px_rgba(125,249,166,0.15)] animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Tech Stack ──────────────────────────────────────────────── */}
          <div className="p-5 lg:p-7">
            <p className="font-mono text-[9px] tracking-[1.8px] uppercase text-white/30 mb-3.5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {active.stack.map((item) => (
                <Tag key={item.label} label={item.label} highlight={item.highlight} />
              ))}
            </div>
          </div>

          {/* ── Nav arrows ──────────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-5 lg:px-7 pb-5 lg:pb-7 pt-0">
            <button
              onClick={() => {
                const prev = projects[activeIndex - 1];
                if (prev) setActiveId(prev.id);
              }}
              disabled={activeIndex === 0}
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-[1px] text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <span>←</span>
              <span>PREV</span>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5 sm:gap-2 items-center">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`rounded-full transition-all duration-300 ${
                    p.id === activeId
                      ? "w-4 sm:w-5 h-1.5 bg-accent"
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
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-[1px] text-white/30 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
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