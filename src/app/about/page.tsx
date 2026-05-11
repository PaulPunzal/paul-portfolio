import BentoCard from "@/components/ui/BentoCard";
import { 
  User, 
  GraduationCap, 
  BriefcaseBusiness, 
  BrainCircuit, 
  Database,
  Bot,
  Terminal,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6 animate-in fade-in duration-700">
      
      {/* Page Header */}
      <div className="mb-8 pl-2">
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">About Me.</h1>
        <p className="font-mono text-xs tracking-widest text-white/40 uppercase">System Architecture</p>
      </div>

      {/* ── HIGH-RES TETRIS GRID (75px Rows for fine-grained control) ── */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-[75px] gap-3 md:gap-4">

        {/* ── TOP SECTION (Rows 1 to 5) ── */}

        {/* 1. PROFILE PICTURE (Vertical) — 1x5 */}
        <BentoCard className="order-1 md:order-1 col-span-2 sm:col-span-1 row-span-5 md:col-span-1 lg:col-span-1 md:row-span-5 p-0 overflow-hidden relative group">
          <Image 
            src="/gradpic/profile.JPG" 
            alt="Paul John Punzal" 
            fill
            priority
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-top lg:object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="font-mono text-[9px] text-accent font-medium tracking-[1.8px] uppercase bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
              PJ Punzal
            </span>
          </div>
        </BentoCard>

        {/* 2A. L-SHAPE BIO (LEFT ARM) — 1x5 */}
        <BentoCard className="order-3 md:order-2 col-span-2 sm:col-span-1 row-span-7 min-[375px]:row-span-6 sm:row-span-5 md:col-span-1 lg:col-span-1 md:row-span-5 lg:rounded-br-none p-6 lg:p-6 xl:p-8 flex flex-col justify-center relative z-10">
          <h2 className="font-syne text-xl lg:text-lg xl:text-2xl font-bold text-white mb-3 lg:mb-4 leading-tight">
            A Bit About Me
          </h2>
          <p className="font-inter text-sm lg:text-xs xl:text-sm text-white/60 leading-relaxed font-light mb-3 lg:mb-4">
            I'm a Full-Stack and Mobile Developer who loves turning ideas into working systems. My coding journey started out of pure curiosity, but everything clicked when I began connecting digital code with physical hardware.
          </p>
          <p className="font-inter text-sm lg:text-xs xl:text-sm text-white/60 leading-relaxed font-light mb-3 md:mb-0">
            During my capstone project, integrating a Raspberry Pi with AI object detection and OCR showed me the true purpose of technology.
          </p>
          
          {/* MOBILE ONLY 2B TEXT (Visually fuses the two cards together on phones) */}
          <div className="md:hidden">
            <p className="font-inter text-sm text-white/60 leading-relaxed font-light mt-1">
              It isn't just about syntax—it's about automating tedious processes and solving manual problems. Building things that actually work and help people is what makes software engineering worth pursuing for me.
            </p>
          </div>
        </BentoCard>

        {/* 3. ACADEMIC BACKGROUND — 2x2 (Sits in the top right cut-out of the L) */}
        <BentoCard className="order-2 md:order-3 col-span-2 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-2 flex flex-col justify-center p-6 lg:px-8 relative z-20">
          <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-3">
            Academic Background
          </span>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <GraduationCap className="w-5 h-5 text-white/70" />
            </div>
            <div>
              <h3 className="font-syne font-bold text-lg text-white leading-tight mb-1">BS Information Technology</h3>
              <p className="font-inter text-[11px] text-white/50">Pambayang Dalubhasaan ng Marilao</p>
            </div>
          </div>
          <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/40">Status: <span className="text-white">Graduated</span></span>
            <span className="font-mono text-[10px] text-accent">Class of 2022 - 2026</span>
          </div>
        </BentoCard>

        {/* 2B. L-SHAPE BIO (RIGHT ARM) — 1x3 */}
        {/* Added !hidden md:!flex to FORCE the box to hide on mobile! */}
        <BentoCard className="!hidden md:!flex order-4 md:order-4 col-span-2 sm:col-span-1 row-span-3 md:col-span-1 lg:col-span-1 md:row-span-3 lg:rounded-l-none lg:border-l-0 lg:-ml-[17px] p-6 lg:pl-[41px] flex-col justify-center relative z-20">
          <div className="relative z-30">
            <p className="font-inter text-sm lg:text-xs xl:text-sm text-white/60 leading-relaxed font-light">
              It isn't just about syntax—it's about automating tedious processes and solving manual problems. Building things that actually work and help people is what makes software engineering worth pursuing for me.
            </p>
          </div>
        </BentoCard>

        {/* 4. AI EXPLORATION — 1x3 */}
        <BentoCard className="order-5 md:order-5 col-span-2 sm:col-span-1 row-span-3 md:col-span-1 lg:col-span-1 md:row-span-3 flex flex-col justify-center p-6" style={{ background: "linear-gradient(160deg, #0c0c0c 0%, #0a0f0c 100%)" }}>
          <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-3 sm:mb-5">
            <BrainCircuit className="w-4 h-4 sm:w-8 sm:h-8 text-purple-400/80" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-syne text-base sm:text-sm lg:text-base font-bold text-white mb-2">AI & Automation</h3>
            <p className="font-inter text-xs sm:text-[11px] lg:text-xs text-white/50 leading-relaxed">
              Passionate about self-study. Exploring locally-hosted LLMs (LLaMA 3), YOLO object detection, and OCR pipelines.
            </p>
          </div>
        </BentoCard>

        {/* ── MIDDLE BRIDGE ── */}

        {/* 5. LANGUAGES & TOOLS — 4x2 (Shorter height, tight padding) */}
        <BentoCard className="order-6 md:order-6 col-span-2 lg:col-span-4 row-span-4 md:row-span-3 lg:row-span-2 flex flex-col justify-center p-6 lg:px-8 lg:py-5">
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <Terminal className="w-5 h-5 text-white/50" />
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
              Languages & Toolbelt
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-syne font-bold text-white/80 w-full">Core Languages</span>
              <div className="flex flex-wrap gap-1.5">
                {["TypeScript", "PHP", "Python", "Dart", "C#", "JavaScript", "SQL"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/60 font-mono text-[10px] tracking-wide hover:bg-white/10 transition-colors cursor-default">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-syne font-bold text-white/80 w-full">Tools & Platforms</span>
              <div className="flex flex-wrap gap-1.5">
                {["Git / GitHub", "Figma", "Docker", "Postman", "Linux", "Ollama"].map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/60 font-mono text-[10px] tracking-wide hover:bg-white/10 transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BentoCard>


        {/* ── BOTTOM SECTION (Rows 9 to 14) ── */}  
        {/* 6. THE AI PARADIGM & SYSTEM DESIGN — 2x6 (Left Side) */}
        <BentoCard className="order-7 md:order-7 col-span-2 md:col-span-2 lg:col-span-2 row-span-7 min-[400px]:row-span-6 min-[425px]:row-span-5 sm:row-span-5 md:row-span-5 lg:row-span-6 flex flex-col justify-center p-5 sm:p-6 lg:p-8" style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #050505 100%)" }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Bot className="w-5 h-5 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 -ml-6">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
            </div>
            <h2 className="font-syne text-2xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 lg:mb-5">Developing in the AI Era</h2>
            <p className="font-inter text-sm lg:text-sm xl:text-base text-white/60 leading-relaxed font-light mb-4 lg:mb-5">
              In today's landscape, writing raw syntax is no longer the barrier it used to be. With AI writing boilerplate, even non-coders can build apps. I embrace AI heavily as a co-pilot so I stay ahead of the curve, but my core focus has shifted to what AI cannot safely do: <span className="text-white font-medium">System Architecture.</span>
            </p>
            <p className="font-inter text-sm lg:text-sm xl:text-base text-white/60 leading-relaxed font-light">
              My goal is architecting accurate and bulletproof systems. I spend my time engineering the <span className="text-accent/80">optimization, data validation, strict security, role authorization, and scalability</span> of the platform. I focus on designing the perfect blueprint; the AI just helps me lay the bricks faster.
            </p>
          </div>
        </BentoCard>

        {/* 7. BACKEND LOVE — 2x3 (Right Side, Top - Taller height to prevent cut-offs) */}
        <BentoCard className="order-8 md:order-8 col-span-2 md:col-span-1 lg:col-span-2 row-span-3 sm:row-span-3 flex flex-row sm:flex-col lg:flex-row items-start lg:items-center p-5 sm:p-6 lg:p-8 gap-4 lg:gap-6">
          <div className="flex w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 items-center justify-center border border-white/10 shrink-0">
            <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/60" />
          </div>
          <div>
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-accent mb-2 block">
              The Engine Room
            </span>
            <h3 className="font-syne text-base xl:text-lg font-bold text-white mb-2">Database & API Structuring</h3>
            <p className="font-inter text-xs text-white/60 leading-relaxed">
              While I love crafting clean UIs, my true passion lies in the backend. I specialize in designing scalable RESTful APIs, strict database schemas, and ensuring clean data contracts between mobile frontends and SQL databases.
            </p>
          </div>
        </BentoCard>

        {/* 8. DEVOPS & CI/CD — 2x3 (Right Side, Bottom - Taller height to prevent cut-offs) */}
        <BentoCard className="order-9 md:order-9 col-span-2 md:col-span-1 lg:col-span-2 row-span-3 sm:row-span-3 md:row-span-3 flex flex-row sm:flex-col lg:flex-row items-start lg:items-center p-5 sm:p-6 lg:p-8 gap-4 lg:gap-6 group">
          <div className="flex w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 items-center justify-center border border-white/10 shrink-0 group-hover:border-accent/30 transition-colors">
            <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-accent transition-colors" />
          </div>
          <div>
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-2 block">
              Current Trajectory
            </span>
            <h3 className="font-syne text-base xl:text-lg font-bold text-white mb-2">DevOps & CI/CD Pipelines</h3>
            <p className="font-inter text-xs text-white/60 leading-relaxed">
              A solid designed architecture is nothing without a robust deployment strategy. I am actively expanding my expertise into DevOps, focusing on setting up continuous integration, containerized deployments, and highly maintainable infrastructure.
            </p>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}