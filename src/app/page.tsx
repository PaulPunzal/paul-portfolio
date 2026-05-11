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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[75px] gap-4">

          {/* ── 1. DEVELOPER HERO BENTO ── */}
          <BentoCard className="md:col-span-2 md:row-span-4 p-6 lg:p-8 flex flex-col justify-between relative group">
            <div>
              {/* Avatar and Name Header */}
              <div className="flex items-center gap-4 mb-6">
                {/* Circular Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 relative shrink-0 group-hover:border-accent/50 transition-colors duration-500">
                  <Image 
                    src="/gradpic/profile.JPG" 
                    alt="Paul John Punzal" 
                    fill 
                    sizes="64px"
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Upgraded Name Font */}
                <div>
                  <h1 className="font-syne text-2xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/30 mb-1">
                    Paul John Punzal
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[9px] tracking-[2px] uppercase text-white/50">
                      Full-Stack & Mobile Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Refined Paragraph 1 - Grounded and accurate */}
              <p className="font-inter text-sm text-white/60 leading-relaxed font-light mb-4">
                Building real-world applications—from integrating IoT hardware with AI object detection to full-scale educational platforms—has pushed me to grow across different areas of development, with a growing focus on backend architecture, data optimization, and automation.
              </p>
            </div>
            
            {/* Added Paragraph 2 - Your exact words */}
            <div className="border-l-2 border-accent/30 pl-4 py-1">
              <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                It isn't just about syntax—it's about eliminating repetitive processes and turning manual problems into automated solutions. Building things that actually work and genuinely help people is what gives software its purpose and makes the craft worth pursuing.
              </p>
            </div>
          </BentoCard>

          {/* 2. BASED IN — 2x1 */}
          <BentoCard className="md:col-span-2 md:row-span-1 flex items-center justify-between px-6 py-4">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
              Base of Operations
            </span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/80" strokeWidth={2} />
              <div className="font-syne text-lg font-bold">Marilao, Bulacan</div>
            </div>
          </BentoCard>

          {/* 3. EDUCATION — 1x1 (Compact) */}
          <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center px-6 py-4">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-1">
              Graduated
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-syne text-xl font-bold text-white">BSIT</span>
              <span className="font-mono text-[11px] text-accent font-medium tracking-wider">
                2026
              </span>
            </div>
          </BentoCard>

          {/* 4. CORE FOCUS & SERVICES — 1x3 (Vertical Box) */}
          <BentoCard className="md:col-span-1 md:row-span-3 flex flex-col p-6">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-4">
              Core Focus
            </span>
            <div className="flex flex-col gap-3">
               <div className="text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> REST APIs</div>
               <div className="text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Full-Stack Web</div>
               <div className="text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Mobile Apps</div>
               <div className="text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> AI & OCR</div>
               <div className="text-xs text-white/70 font-mono flex items-center gap-2"><span className="text-accent">✦</span> Automation</div>
            </div>
          </BentoCard>

          {/* 5. GITHUB / OPEN SOURCE — 1x2 */}
          <BentoCard
            href="https://github.com/PaulPunzal"
            external
            className="md:col-span-1 md:row-span-2 flex flex-col justify-between group p-6"
            style={{ background: "linear-gradient(135deg, #0c0c0c 0%, #101010 100%)" }}
          >
            <div>
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
                Open Source
              </span>
              <div className="font-mono text-xs text-white mt-4">@PaulPunzal</div>
            </div>
            {/* Raw SVG to prevent lucide-react compile errors */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white/20 self-end group-hover:text-white transition-colors">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </BentoCard>

          {/* 6. WIDE TECH STACK — 4x3 (Categorized) */}
          <BentoCard className="md:col-span-2 lg:col-span-4 md:row-span-4 lg:row-span-3 flex flex-col p-6 lg:p-8">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-6">
              Tech Stack & Architecture
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 h-full">
              {/* Frontend */}
              <div className="flex flex-col gap-4">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-2 mb-1">Frontend & Mobile</div>
                 <div className="flex flex-wrap gap-2">
                   <span className="tech-pill highlight">Next.js</span>
                   <span className="tech-pill highlight">React Native</span>
                   <span className="tech-pill highlight">Flutter</span>
                   <span className="tech-pill">TypeScript</span>
                   <span className="tech-pill">Tailwind CSS</span>
                   <span className="tech-pill">Bootstrap</span>
                 </div>
              </div>
              {/* Backend */}
              <div className="flex flex-col gap-4">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-2 mb-1">Backend Engineering</div>
                 <div className="flex flex-wrap gap-2">
                   <span className="tech-pill highlight">Nest.js</span>
                   <span className="tech-pill highlight">Laravel</span>
                   <span className="tech-pill">PHP</span>
                   <span className="tech-pill">REST APIs</span>
                   <span className="tech-pill">Node.js</span>
                 </div>
              </div>
              {/* Database */}
              <div className="flex flex-col gap-4">
                 <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-2 mb-1">Database</div>
                 <div className="flex flex-wrap gap-2">
                   <span className="tech-pill highlight">MySQL</span>
                   <span className="tech-pill">PostgreSQL</span>
                   <span className="tech-pill">MongoDB</span>
                   <span className="tech-pill">Firebase</span>
                   <span className="tech-pill">Prisma</span>
                   <span className="tech-pill">SQLite</span>
                 </div>
              </div>
            </div>
          </BentoCard>

          {/* ── SECTION DIVIDER: PROJECTS ── */}
          <div className="md:col-span-2 lg:col-span-4 flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-[10px] uppercase tracking-[2px] text-white/50 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
               Featured Projects
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* 7. MOTORPASS PROJECT — 2x4 */}
          <BentoCard href="/projects" accentHover className="md:col-span-2 lg:col-span-2 md:row-span-4 flex flex-col justify-between group p-6 lg:p-8">
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
              {/* Upgraded Title Font Size */}
              <h3 className="font-syne font-bold text-xl lg:text-2xl tracking-tight text-white mb-3">
                {motorpass.title}
              </h3>
              {/* Upgraded Description Font Size (Matches your bio text) */}
              <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                {motorpass.shortDesc}
              </p>
            </div>
            
            {/* Upgraded Tags Layout */}
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

          {/* 10. GROCERY — 1x2 */}
          <ProjectPreviewCard project={grocery} icon={<ScanEye className="w-5 h-5 text-orange-300" strokeWidth={1.5} />} />

          {/* 11. SEE MORE ARCHIVE — 1x2 */}
          <BentoCard href="/projects" className="md:col-span-1 md:row-span-2 flex flex-col items-center justify-center text-center group p-6">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors">
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
            </div>
            <span className="font-syne text-sm font-bold text-white/70 group-hover:text-white transition-colors">View Full<br/>Archive</span>
          </BentoCard>

          {/* 12. REACH OUT — 1x2 */}
          <BentoCard className="md:col-span-1 lg:col-span-1 md:row-span-2 flex flex-col justify-center p-6">
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Reach Out
            </span>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-3 hover:text-accent transition-colors" href="mailto:punzalpauljohn@gmail.com">
                <Mail className="w-4 h-4 text-white/50" />
                <span className="font-mono text-[10px] text-white/70">Email Me</span>
              </a>
              <a className="flex items-center gap-3 hover:text-accent transition-colors" href="tel:09683295292">
                <Phone className="w-4 h-4 text-white/50" />
                <span className="font-mono text-[10px] text-white/70">0968-329-5292</span>
              </a>
            </div>
          </BentoCard>

          {/* 13. HIRE ME CTA — 3x2 (Wide) */}
          <BentoCard
            className="md:col-span-1 lg:col-span-3 md:row-span-2 flex flex-col md:flex-row items-start md:items-end justify-between p-6 lg:p-8"
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
function ProjectPreviewCard({ project, icon, className = "" }: { project: (typeof projects)[0], icon: React.ReactNode, className?: string }) {
  return (
    <BentoCard className={`md:col-span-1 md:row-span-2 flex flex-col justify-between p-6 ${className}`} href="/projects" accentHover>
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
        <h3 className="font-syne font-bold text-lg tracking-tight text-white/90">
          {project.title}
        </h3>
      </div>
    </BentoCard>
  );
}