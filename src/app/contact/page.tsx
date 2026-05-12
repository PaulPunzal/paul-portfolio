import BentoCard from "@/components/ui/BentoCard";
import StatusDot from "@/components/ui/StatusDot";
import { Mail, MapPin, Briefcase, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6 animate-in fade-in duration-700">
      
      {/* Page Header (Aligned with About/Home style) */}
      <div className="mb-8 pl-2">
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Connect.</h1>
        <p className="font-mono text-xs tracking-widest text-white/40 uppercase">Initiate Contact</p>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[75px] gap-3 md:gap-4">

        {/* 1. STATUS BANNER (Full Width Header) */}
        <BentoCard className="col-span-2 md:col-span-4 row-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 lg:px-8 border border-[rgba(125,249,166,0.12)] bg-gradient-to-br from-[rgba(125,249,166,0.06)] to-[rgba(0,212,170,0.03)] group">
          <div>
            <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-2">Current Status</div>
            <div className="flex items-center gap-3 mb-1">
              <StatusDot />
              <span className="font-syne font-bold text-lg sm:text-xl text-white">Available for Work</span>
            </div>
            <p className="font-inter text-[11px] sm:text-xs text-white/60 font-light max-w-xl">
              Graduating May 2026 · Open to entry-level and mid-level positions in web, mobile, or full-stack engineering.
            </p>
          </div>
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(125,249,166,0.05)] border border-[rgba(125,249,166,0.2)] text-[rgba(125,249,166,0.8)] group-hover:scale-110 transition-transform duration-500 shrink-0 ml-6">
            <Briefcase className="w-5 h-5" />
          </div>
        </BentoCard>

        {/* 2. EMAIL / PRIMARY CTA */}
        <BentoCard href="mailto:punzalpauljohn@gmail.com" className="col-span-2 md:col-span-2 row-span-2 flex flex-col justify-center p-5 sm:p-6 group">
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-accent/30 transition-colors">
              <Mail className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
            </div>
            <div className="project-arrow opacity-50 group-hover:opacity-100 transition-opacity">↗</div>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[2px] text-accent uppercase mb-1.5">Direct Line</div>
            <div className="font-syne font-bold text-base sm:text-lg lg:text-xl text-white mb-1 group-hover:text-accent transition-colors truncate">
              punzalpauljohn@gmail.com
            </div>
            <p className="font-inter text-[10px] sm:text-xs text-white/40">Response time: ~24 hours</p>
          </div>
        </BentoCard>

        {/* 3. PHONE TILE */}
        <BentoCard href="tel:+" className="col-span-2 md:col-span-2 row-span-2 flex flex-col justify-center p-5 sm:p-6 group">
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-accent/30 transition-colors">
              <Phone className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
            </div>
            <div className="project-arrow opacity-50 group-hover:opacity-100 transition-opacity">↗</div>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[2px] text-accent uppercase mb-1.5">Mobile Contact</div>
            <div className="font-syne font-bold text-base sm:text-lg lg:text-xl text-white mb-1 group-hover:text-accent transition-colors truncate">
              +63 9683295292
            </div>
            <p className="font-inter text-[10px] sm:text-xs text-white/40">Available 9AM - 6PM</p>
          </div>
        </BentoCard>

        {/* 4. LOCATION TILE (Square) */}
        <BentoCard className="col-span-1 md:col-span-1 row-span-2 flex flex-col justify-between p-5 sm:p-6">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <MapPin className="w-4 h-4 text-white/70" />
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-1 block">Base</div>
            <div className="font-syne font-bold text-sm sm:text-base text-white mb-0.5">Marilao</div>
            <p className="font-inter text-[10px] text-white/40">Bulacan, PH</p>
          </div>
        </BentoCard>

        {/* 5. GITHUB TILE (Square) */}
        <BentoCard href="https://github.com/PaulPunzal" className="col-span-1 md:col-span-1 row-span-2 flex flex-col justify-between p-5 sm:p-6 group">
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-accent/30 transition-colors">
              <GithubIcon className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
            </div>
            <div className="project-arrow opacity-50 group-hover:opacity-100 transition-opacity">↗</div>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-1 block">Code</div>
            <div className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">GitHub</div>
            <p className="font-inter text-[10px] text-white/40 hidden sm:block">View repos</p>
          </div>
        </BentoCard>

        {/* 6. SOCIALS COMBINED TILE */}
        <BentoCard className="col-span-2 md:col-span-2 row-span-2 p-0 flex overflow-hidden">
          <div className="flex w-full h-full divide-x divide-white/10">
            {/* Facebook Half */}
            <a href="https://www.facebook.com/PaulJohnPunzal1" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col justify-between p-5 sm:p-6 group hover:bg-white/[0.02] transition-colors relative">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#1877F2]/20 group-hover:border-[#1877F2]/50 transition-colors">
                  <FacebookIcon className="w-4 h-4 text-white/70 group-hover:text-[#1877F2] transition-colors" />
                </div>
                <div className="project-arrow opacity-50 group-hover:opacity-100 transition-opacity">↗</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-1 block">Social</div>
                <div className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-[#1877F2] transition-colors">Facebook</div>
              </div>
            </a>

            {/* Instagram Half */}
            <a href="https://www.instagram.com/pauljohnpunzal" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col justify-between p-5 sm:p-6 group hover:bg-white/[0.02] transition-colors relative">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#E1306C]/20 group-hover:border-[#E1306C]/50 transition-colors">
                  <InstagramIcon className="w-4 h-4 text-white/70 group-hover:text-[#E1306C] transition-colors" />
                </div>
                <div className="project-arrow opacity-50 group-hover:opacity-100 transition-opacity">↗</div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[1.5px] text-accent uppercase mb-1 block">Visuals</div>
                <div className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-[#E1306C] transition-colors">Instagram</div>
              </div>
            </a>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}

{/* ── CUSTOM BRAND ICONS (Replaces missing Lucide icons) ── */}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}