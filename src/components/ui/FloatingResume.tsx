"use client";

import { Download } from "lucide-react";

export default function FloatingResume() {
  return (
    <a
      href="/resume/Paul_Punzal_Resume.pdf" 
      download="Paul_Punzal_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 lg:bottom-10 lg:right-10 z-[100] group flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 scale-90 sm:scale-100"
    >
      {/* ── Rotating SVG Text ── */}
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite] text-white/40 group-hover:text-accent transition-colors duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text fontSize="10.5" className="font-mono tracking-[0.2em] uppercase" fill="currentColor">
            <textPath href="#circlePath" startOffset="0%">
              • Download CV • Download CV 
            </textPath>
          </text>
        </svg>
      </div>

      {/* ── Center Glassmorphic Button ── */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0c0c0c]/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-accent group-hover:translate-y-0.5 transition-all duration-300" />
      </div>
    </a>
  );
}