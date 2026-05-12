import Link from "next/link";
import BentoCard from "@/components/ui/BentoCard";
import Marquee from "@/components/Marquee";
import { projects } from "@/lib/data";
import { 
  MapPin, 
  ArrowRight, 
  Mail, 
  Phone, 
  Cpu, 
  BookOpen, 
  GraduationCap, 
  ScanEye 
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [motorpass, littleLion, elearning, grocery] = projects;

  return (
    <>
      <Marquee />

      <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6">
        
        {/* ── HIGH-RES TETRIS GRID (75px Rows for half-height precision) ── */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-[75px] gap-3 md:gap-4">

          {/* ── 1. DEVELOPER HERO BENTO ── */}
          <BentoCard className="col-span-2 row-span-5 sm:row-span-4 md:row-span-4 p-6 lg:p-8 flex flex-col justify-center relative group">
            {/* Top Half: Image & Name */}
            <div className="flex items-center gap-5 lg:gap-6 mb-6">
              {/* Square Image Box (Larger Sizes) */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border border-white/10 relative shrink-0 group-hover:border-accent/40 transition-colors duration-500 shadow-lg">
                <Image 
                  src="/gradpic/profile.JPG" 
                  alt="Paul John Punzal" 
                  fill 
                  sizes="(max-width: 768px) 128px, 128px"
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Name & Title */}
              <div className="flex flex-col">
                <h1 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1.5 lg:mb-2">
                  Paul John Punzal
                </h1>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase text-white/50">
                    Full-Stack & Mobile Dev
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Half: Paragraph 2 */}
            <div className="border-l-2 border-accent/30 pl-4 py-1">
              <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                Building real-world applications—from integrating IoT hardware with AI object detection to full-scale educational platforms—has pushed me to grow across different areas of development, with a growing focus on backend architecture, data optimization, and automation.
              </p>
            </div>
          </BentoCard>

          {/* 2. BASED IN — 2x1 */}
          <BentoCard className="col-span-2 row-span-1 flex items-center justify-between px-5 md:px-6 py-4">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
              Base of Operations
            </span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/80" strokeWidth={2} />
              <div className="font-syne text-lg font-bold">Marilao, Bulacan</div>
            </div>
          </BentoCard>

          {/* 3. EDUCATION — 1x1 (Compact) */}
          <BentoCard className="col-span-1 row-span-1 flex flex-col justify-center px-4 md:px-6 py-4">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-1">
              Graduated
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-syne text-lg md:text-xl font-bold text-white">BSIT</span>
              <span className="font-mono text-[11px] text-accent font-medium tracking-wider">
                2026
              </span>
            </div>
          </BentoCard>

          {/* 4. CORE FOCUS & SERVICES — 1x3 (Vertical Box) */}
          <BentoCard className="col-span-1 row-span-3 flex flex-col p-5 md:p-6">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-4">
              Core Focus
            </span>
            <div className="flex flex-col gap-3">
               <div className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> REST APIs</div>
               <div className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Full-Stack Web</div>
               <div className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Mobile Apps</div>
               <div className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> AI & OCR</div>
               <div className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Automation</div>
            </div>
          </BentoCard>

          {/* 5. GITHUB / OPEN SOURCE — 1x2 */}
          <BentoCard
            href="https://github.com/PaulPunzal"
            external
            className="col-span-1 row-span-2 flex flex-col justify-between group p-5 md:p-6"
            style={{ background: "linear-gradient(135deg, #0c0c0c 0%, #101010 100%)" }}
          >
            <div>
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 group-hover:text-accent/70 transition-colors">
                Open Source
              </span>
              <div className="font-mono text-xs text-white mt-4 group-hover:text-accent transition-colors">@PaulPunzal</div>
            </div>
            {/* Raw SVG to prevent lucide-react compile errors */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white/20 self-end group-hover:text-accent transition-colors">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </BentoCard>

          {/* 6. WIDE TECH STACK — 4x2 (Categorized) */}
          <BentoCard className="col-span-2 lg:col-span-4 row-span-6 sm:row-span-5 md:row-span-4 lg:row-span-2 flex flex-col p-6">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-3 md:mb-4">
              Tech Stack & Architecture
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-full items-center">
              {/* Frontend */}
              <div className="flex flex-col gap-2.5">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Frontend & Mobile</div>
                 <div className="flex flex-wrap gap-1.5 md:gap-2">
                   <span className="tech-pill highlight">Next.js</span>
                   <span className="tech-pill highlight">React Native</span>
                   <span className="tech-pill highlight">Flutter</span>
                   <span className="tech-pill">TypeScript</span>
                   <span className="tech-pill">Tailwind CSS</span>
                   <span className="tech-pill">Bootstrap</span>
                 </div>
              </div>
              {/* Backend */}
              <div className="flex flex-col gap-2.5">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Backend Engineering</div>
                 <div className="flex flex-wrap gap-1.5 md:gap-2">
                   <span className="tech-pill highlight">Nest.js</span>
                   <span className="tech-pill highlight">Laravel</span>
                   <span className="tech-pill">PHP</span>
                   <span className="tech-pill">REST APIs</span>
                   <span className="tech-pill">Node.js</span>
                 </div>
              </div>
              {/* Database */}
              <div className="flex flex-col gap-2.5">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Database</div>
                 <div className="flex flex-wrap gap-1.5 md:gap-2">
                   <span className="tech-pill highlight">MySQL</span>
                   <span className="tech-pill highlight">PostgreSQL</span>
                   <span className="tech-pill highlight">MongoDB</span>
                   <span className="tech-pill">Firebase</span>
                   <span className="tech-pill">Prisma</span>
                   <span className="tech-pill">SQLite</span>
                 </div>
              </div>
            </div>
          </BentoCard>
          
          {/* ── SECTION DIVIDER: PROJECTS ── */}
          <div className="col-span-2 lg:col-span-4 flex items-center gap-2 md:gap-4 py-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10 min-w-[10px]" />
            <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-[8.5px] md:text-[10px] uppercase tracking-[1px] md:tracking-[2px] text-white/50 flex items-center gap-1.5 md:gap-2 whitespace-nowrap shrink-0">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
               Featured Projects
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10 min-w-[10px]" />
          </div>

          {/* 7. MOTORPASS PROJECT — Full Width */}
          <BentoCard href="/projects" accentHover className="col-span-2 lg:col-span-4 row-span-5 md:row-span-4 flex flex-col justify-between group p-6 lg:p-8">
            <div className="flex justify-between items-start">
              {/* Upgraded Icon Container (w-12 h-12) */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5" 
                style={{ background: motorpass.iconBgStyle }}
              >
                <Cpu className="w-6 h-6 text-emerald-300" strokeWidth={1.5} />
              </div>
              <div className="project-arrow">↗</div>
            </div>
            
            <div className="mt-4">
              <span className="font-mono text-[10px] font-medium tracking-[2px] uppercase text-white/50 block mb-2">
                {motorpass.label}
              </span>
              <h3 className="font-syne font-bold text-xl lg:text-2xl tracking-tight text-white mb-3">
                {motorpass.title}
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                {motorpass.shortDesc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {motorpass.previewTags.map((tag) => (
                <span key={tag} className="font-mono bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-[10px] text-white/60 tracking-[0.5px]">
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 8. LITTLE LION — 1x2 */}
          <ProjectPreviewCard project={littleLion} icon={<BookOpen className="w-5 h-5 text-blue-300" strokeWidth={1.5} />} />

          {/* 9. E-LEARNING — 1x2 */}
          <ProjectPreviewCard project={elearning} icon={<GraduationCap className="w-5 h-5 text-purple-300" strokeWidth={1.5} />} />

          {/* 10. GROCERY — Full Width on Mobile */}
          <ProjectPreviewCard project={grocery} icon={<ScanEye className="w-5 h-5 text-orange-300" strokeWidth={1.5} />} className="col-span-2 md:col-span-1" />

          {/* 11. SEE MORE ARCHIVE — Half Width */}
          <BentoCard href="/projects" className="col-span-1 row-span-2 flex flex-col items-center justify-center text-center group p-5 md:p-6">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors">
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
            </div>
            <span className="font-syne text-sm font-bold text-white/70 group-hover:text-white transition-colors">View Full<br/>Archive</span>
          </BentoCard>

          {/* 12. REACH OUT — Half Width */}
          <BentoCard className="col-span-1 row-span-2 flex flex-col justify-center p-5 md:p-6">
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Reach Out
            </span>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-3 group transition-all" href="mailto:punzalpauljohn@gmail.com">
                <Mail className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                <span className="font-mono text-[10px] text-white/70 group-hover:text-accent transition-colors">Email Me</span>
              </a>
              <a className="flex items-center gap-3 group transition-all" href="tel:09683295292">
                <Phone className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                <span className="font-mono text-[10px] text-white/70 group-hover:text-accent transition-colors">0968-329-5292</span>
              </a>
            </div>
          </BentoCard>

          {/* 13. HIRE ME CTA — Responsive Width */}
          <BentoCard
            className="col-span-2 md:col-span-1 lg:col-span-3 row-span-2 flex flex-col lg:flex-row items-start lg:items-end justify-between p-6 lg:p-8"
            href="/contact"
            style={{ background: "linear-gradient(135deg, rgba(125,249,166,0.08) 0%, rgba(0,212,170,0.04) 100%)", borderColor: "rgba(125,249,166,0.15)" }}
          >
            <div className="flex flex-col justify-between h-full">
              <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Hire me
              </span>
              <div className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Let&apos;s build <em style={{ fontStyle: "normal", color: "var(--accent)" }}>together.</em>
              </div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14, background: "var(--accent)", color: "#000", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 12, letterSpacing: "0.3px", padding: "10px 24px", borderRadius: 50, transition: "all 0.2s" }}>
              Get in touch ↗
            </span>
          </BentoCard>

        </div>
      </div>
    </>
  );
}

/* ── LOCAL HELPER: Project Preview Bento Card ── */
function ProjectPreviewCard({ project, icon, className = "col-span-1" }: { project: (typeof projects)[0], icon: React.ReactNode, className?: string }) {
  return (
    <BentoCard className={`${className} row-span-2 flex flex-col justify-between p-5 md:p-6`} href="/projects" accentHover>
      <div className="flex justify-between items-start">
        {/* Slightly larger icon container for the smaller cards */}
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5" 
          style={{ background: project.iconBgStyle }}
        >
          {icon}
        </div>
        <div className="project-arrow ml-auto">↗</div>
      </div>
      <div>
        <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 block mt-4 mb-1.5">
          {project.label}
        </span>
        <h3 className="font-syne font-bold text-base md:text-lg tracking-tight text-white/90">
          {project.title}
        </h3>
      </div>
    </BentoCard>
  );
}