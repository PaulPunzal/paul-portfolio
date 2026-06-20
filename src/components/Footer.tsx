"use client";

import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Reduced padding (py-6) and top margin (mt-8)
    <footer className="relative w-full border-t border-white/5 py-6 mt-8 overflow-hidden bg-[#050505]">
      
      {/* ── 1. AMBIENT BACKGROUND GLOW ── */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: "radial-gradient(ellipse at 50% 150%, rgba(125, 249, 166, 0.06) 0%, transparent 60%)" 
        }} 
      />

      {/* ── 2. MULTI-LASER SCAN ARRAY ── */}
        {/* Primary line — brightest, slowest, sets the pace */}
        <motion.div
        className="absolute top-0 h-[1px] w-[200px] md:w-[420px] pointer-events-none"
        style={{
            background: "linear-gradient(90deg, transparent, rgba(125, 249, 166, 0.9), transparent)"
        }}
        animate={{ left: ["-50%", "150%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />

        {/* Secondary line — faster, dimmer, offset start */}
        <motion.div
        className="absolute top-0 h-[1px] w-[120px] md:w-[240px] pointer-events-none"
        style={{
            background: "linear-gradient(90deg, transparent, rgba(125, 249, 166, 0.45), transparent)"
        }}
        animate={{ left: ["-50%", "150%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1.4 }}
        />

        {/* Tertiary line — thin, fast, sparse — feels like a stray signal */}
        <motion.div
        className="absolute top-0 h-[1px] w-[70px] md:w-[140px] pointer-events-none"
        style={{
            background: "linear-gradient(90deg, transparent, rgba(125, 249, 166, 0.6), transparent)"
        }}
        animate={{ left: ["-50%", "150%"] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "linear", delay: 3.2 }}
        />

        {/* Ambient glow that breathes in sync with the primary line's pass */}
        <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(125, 249, 166, 0.08) 0%, transparent 65%)"
        }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

      {/* ── FOOTER CONTENT (z-10 to stay above background) ── */}
      {/* Reduced gap (gap-4) for a tighter mobile layout */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-syne font-bold text-white/90 text-lg tracking-tight">
            Paul Punzal
          </span>
          <span className="font-mono text-[10px] text-white/40 tracking-[1px] uppercase mt-1">
            © {new Date().getFullYear()} — All Rights Reserved.
          </span>
        </div>

        {/* Center: System Status / Easter Egg */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[9px] text-white/30 uppercase tracking-[2px]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" />
          Hello, world! :)
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-5">
          <a 
            href="https://github.com/PaulPunzal" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white/40 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white/20 self-end group-hover:text-accent transition-colors">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
          </a>
          <a 
            href="mailto:punzalpauljohn@gmail.com" 
            className="text-white/40 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </a>
          
          {/* Subtle Divider */}
          <div className="w-[1px] h-4 bg-white/10 mx-1"></div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/40 hover:text-accent transition-colors cursor-pointer"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider hidden sm:block">Top</span>
            <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors bg-white/[0.02]">
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}