"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
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
  ScanEye,
} from "lucide-react";
import Image from "next/image";
import SplashScreen from "@/components/ui/SplashScreen";

interface HeroRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Persists across client-side tab navigation
let hasPlayedSplash = false;

export default function HomePage() {
  const [splashVisible, setSplashVisible] = useState(!hasPlayedSplash);
  const [pageVisible,   setPageVisible]   = useState(hasPlayedSplash);
  const [heroRect,      setHeroRect]      = useState<HeroRect | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const [motorpass, littleLion, elearning, grocery] = projects;
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── THE SIMPLIFIED CHECK ──
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Tell the browser to forget where the user was scrolled
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. Force the page to start at the absolute top
      window.scrollTo(0, 0);

      // 3. Mark the splash as played for client-side routing (tab changes)
      hasPlayedSplash = true; 
    }
  }, []);

  // Measure the Hero Card
  useEffect(() => {
    if (!splashVisible) return; // Don't bother measuring if we aborted

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (heroRef.current) {
          const rect = heroRef.current.getBoundingClientRect();
          setHeroRect({
            x:      rect.left,
            y:      rect.top,
            width:  rect.width,
            height: rect.height,
          });
        }
      });
    });
  }, [splashVisible]);

  const handleSplashComplete = useCallback(() => {
    setPageVisible(true);
    setTimeout(() => setSplashVisible(false), 500);
  }, []);

  // ── Anime.js text & breathing icon animations ──────────────────────────
  useEffect(() => {
    if (!pageVisible) return;

    const nameWords      = document.querySelectorAll(".name-word");
    const subtitleWords  = document.querySelectorAll(".subtitle-word");
    const breathingIcons = document.querySelectorAll(".breathing-icon");

    anime.remove(nameWords);
    anime.remove(subtitleWords);
    anime.remove(breathingIcons);

    anime.set(nameWords,     { translateY: "100%", opacity: 0 });
    anime.set(subtitleWords, { translateY: "100%", opacity: 0 });

    const textSequence = anime.timeline({ loop: true });

    textSequence
      .add({
        targets:  nameWords,
        translateY: ["100%", "0%"],
        opacity:  [0, 1],
        duration: 900,
        delay:    anime.stagger(70, { start: 200 }),
        easing:   "easeOutCubic",
      })
      .add({
        targets:  subtitleWords,
        translateY: ["100%", "0%"],
        opacity:  [0, 1],
        duration: 600,
        delay:    anime.stagger(40),
        easing:   "easeOutCubic",
      }, "-=300")
      .add({
        targets:  nameWords,
        translateY: ["0%", "-100%"],
        opacity:  [1, 0],
        duration: 800,
        delay:    anime.stagger(50, { start: 2000 }),
        easing:   "easeInCubic",
      })
      .add({
        targets:  subtitleWords,
        translateY: ["0%", "-100%"],
        opacity:  [1, 0],
        duration: 600,
        delay:    anime.stagger(50),
        easing:   "easeInCubic",
      }, "-=400");

    return () => {
      anime.remove(nameWords);
      anime.remove(subtitleWords);
      anime.remove(breathingIcons);
    };
  }, [pageVisible]);

  // Framer Motion stagger variant for the bento grid
  const gridVariants = {
    hidden:   { opacity: 0 },
    visible:  {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  return (
    <>
      {/* ── SPLASH SCREEN ─────────────────────────────────────────────────
          Stays mounted until handleSplashComplete fires + 500ms buffer.
          heroRect is null on the first render tick; SplashScreen will
          receive it once the double-rAF measurement completes (usually
          within the same frame as the first useEffect). The sequence
          doesn't reach Phase 3 (resize) until ~1400ms in, so the rect
          is always ready in time.
      ──────────────────────────────────────────────────────────────────── */}
      {splashVisible && (
        <SplashScreen
          heroRect={heroRect}
          onComplete={handleSplashComplete}
        />
      )}

      {/* ── PORTFOLIO GRID ────────────────────────────────────────────────
          Rendered immediately at opacity:0 so the browser establishes
          the layout and we can measure it. Transitions to opacity:1
          when pageVisible becomes true (triggered by handleSplashComplete).

          `pointer-events-none` while invisible so the user can't
          accidentally click invisible links during the splash.
      ──────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: pageVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: pageVisible ? "auto" : "none" }}
      >
        {/* Pass the pageVisible state to trigger the animation */}
        <Marquee isVisible={pageVisible} />

        <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6">
          <motion.div
            variants={isMobile ? {} : gridVariants} 
            initial={isMobile ? "visible" : "hidden"} 
            animate={pageVisible || isMobile ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-[75px] gap-3 md:gap-4"
          >

            {/* ── 1. DEVELOPER HERO BENTO ────────────────────────────────
                This div has NO BentoCard wrapper on purpose — we need a
                plain ref to measure it. It uses the .bento-card class
                directly so it looks identical.
            ────────────────────────────────────────────────────────────── */}
            <div
              ref={heroRef}
              className="bento-card col-span-2 row-span-5 sm:row-span-4 md:row-span-4 p-6 lg:p-8 flex flex-col justify-center relative group"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(125, 249, 166, 0.025) 0%, var(--bg-card) 45%)",
              }}
            >
              
              {/* ── NEW: THE SEAMLESS BORDER HANDOFF FADE ── */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-50"
                style={{ borderRadius: 18 }} // Perfectly matches the 18px radius from the Splash Screen!
                initial={{ border: "1px solid rgba(125,249,166,0.5)" }}
                animate={{ border: pageVisible ? "1px solid rgba(125,249,166,0)" : "1px solid rgba(125,249,166,0.5)" }}
                transition={{ duration: 5, delay: 0.3, ease: "easeOut" }}
              />

              {/* Inner content fades in when pageVisible — prevents the
                  snapshot of empty content during measurement */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: pageVisible ? 1 : 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                className="flex flex-col h-full justify-center"
              >
                <div className="flex items-center gap-5 lg:gap-6 mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border border-white/10 relative shrink-0 group-hover:border-accent/40 transition-colors duration-500 shadow-lg">
                    <Image
                      src="/gradpic/profile.JPG"
                      alt="Paul John Punzal"
                      fill
                      sizes="(max-width: 768px) 128px, 128px"
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-1.5 lg:mb-2 flex flex-wrap gap-[0.25em]">
                      {"Paul John Punzal".split(" ").map((word, i) => (
                        <span key={i} className="relative overflow-hidden inline-flex pb-1">
                          <span className="text-white/20 inline-block relative z-0">{word}</span>
                          <span className="name-word absolute left-0 top-0 text-white z-10 inline-block">
                            {word}
                          </span>
                        </span>
                      ))}
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase flex flex-wrap gap-[0.4em]">
                        {"Full-Stack & Mobile Dev".split(" ").map((word, i) => (
                          <span key={i} className="relative overflow-hidden inline-flex pb-0.5">
                            <span className="text-white/30 inline-block relative z-0">{word}</span>
                            <span className="subtitle-word absolute left-0 top-0 text-accent z-10 inline-block">
                              {word}
                            </span>
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-accent/30 pl-4 py-1">
                  <p className="font-inter text-sm text-white/60 leading-relaxed font-light">
                    Building real-world applications—from integrating IoT hardware with AI object
                    detection to full-scale educational platforms—has pushed me to grow across
                    different areas of development, with a growing focus on backend architecture,
                    data optimization, and automation.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── 2. BASED IN — 2x1 ── */}
            <BentoCard className="col-span-2 row-span-1 flex items-center justify-between px-5 md:px-6 py-4">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50">
                Base of Operations
              </span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/80" strokeWidth={2} />
                <div className="font-syne text-lg font-bold">Marilao, Bulacan</div>
              </div>
            </BentoCard>

            {/* ── 3. EDUCATION — 1x1 ── */}
            <BentoCard className="col-span-1 row-span-1 flex flex-col justify-center px-4 md:px-6 py-4">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-1">
                Graduated
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-syne text-lg md:text-xl font-bold text-white">BSIT</span>
                <span className="font-mono text-[11px] text-accent font-medium tracking-wider">2026</span>
              </div>
            </BentoCard>

            {/* ── 4. CORE FOCUS & SERVICES — 1x3 ── */}
            <BentoCard className="col-span-1 row-span-3 flex flex-col p-5 md:p-6">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-4">
                Core Focus
              </span>
              <div className="flex flex-col gap-3">
                {["REST APIs", "Full-Stack Web", "Mobile Apps", "AI & OCR", "Automation"].map((item) => (
                  <div key={item} className="text-[10px] md:text-xs text-white/70 font-mono flex items-center gap-2">
                    <span className="text-accent">✦</span> {item}
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* ── 5. GITHUB — 1x2 ── */}
            <BentoCard href="https://github.com/PaulPunzal" external className="col-span-1 row-span-2 flex flex-col justify-between group p-5 md:p-6">
              <div>
                <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 group-hover:text-accent/70 transition-colors">
                  Open Source
                </span>
                <div className="font-mono text-xs text-white mt-4 group-hover:text-accent transition-colors">
                  @PaulPunzal
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white/20 self-end group-hover:text-accent transition-colors">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </BentoCard>

            {/* ── 6. WIDE TECH STACK — 4x2 ── */}
            <BentoCard className="col-span-2 lg:col-span-4 row-span-6 sm:row-span-5 md:row-span-4 lg:row-span-2 flex flex-col p-6">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-3 md:mb-4">
                Tech Stack & Architecture
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-full items-center">
                <div className="flex flex-col gap-2.5">
                  <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Frontend & Mobile</div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {["Next.js", "React Native", "Flutter", "TypeScript", "Tailwind CSS", "Bootstrap"].map((t) => (
                      <span key={t} className={`tech-pill${["Next.js","React Native","Flutter"].includes(t) ? " highlight" : ""}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Backend Engineering</div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {["Nest.js", "Laravel", "PHP", "REST APIs", "Node.js"].map((t) => (
                      <span key={t} className={`tech-pill${["Nest.js","Laravel"].includes(t) ? " highlight" : ""}`}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="text-sm font-syne font-bold text-white/80 border-b border-white/10 pb-1 mb-1">Database</div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Prisma", "SQLite"].map((t) => (
                      <span key={t} className={`tech-pill${["MySQL","PostgreSQL","MongoDB"].includes(t) ? " highlight" : ""}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* ── SECTION DIVIDER ── */}
            <div className="col-span-2 lg:col-span-4 flex items-center gap-2 md:gap-4 py-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10 min-w-[10px]" />
              <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-[8.5px] md:text-[10px] uppercase tracking-[1px] md:tracking-[2px] text-white/50 flex items-center gap-1.5 md:gap-2 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                Featured Projects
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10 min-w-[10px]" />
            </div>

            {/* ── 7. MOTORPASS PROJECT ── */}
            <BentoCard href="/projects" accentHover className="col-span-2 lg:col-span-4 row-span-5 md:row-span-4 flex flex-col justify-between group p-6 lg:p-8">
              <div className="flex justify-between items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                  style={{ background: motorpass.iconBgStyle }}
                >
                  <Cpu className="w-6 h-6 text-emerald-300 css-breathing-icon" strokeWidth={1.5} />
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
                  <span key={tag} className="tech-pill-reveal font-mono bg-white/5 border border-white/10 rounded-md px-2.5 py-1 text-[10px] text-white/60 tracking-[0.5px]">
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* ── 8. LITTLE LION ── */}
            <ProjectPreviewCard
              project={littleLion}
              icon={<BookOpen className="w-5 h-5 text-blue-300" strokeWidth={1.5} />}
            />

            {/* ── 9. E-LEARNING ── */}
            <ProjectPreviewCard
              project={elearning}
              icon={<GraduationCap className="w-5 h-5 text-purple-300" strokeWidth={1.5} />}
            />

            {/* ── 10. GROCERY ── */}
            <ProjectPreviewCard
              project={grocery}
              icon={<ScanEye className="w-5 h-5 text-orange-300" strokeWidth={1.5} />}
              className="col-span-2 md:col-span-1"
            />

            {/* ── 11. SEE MORE ARCHIVE ── */}
            <BentoCard href="/projects" className="col-span-1 row-span-2 flex flex-col items-center justify-center text-center group p-5 md:p-6">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:border-accent/40 transition-colors">
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              </div>
              <span className="font-syne text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                View Full<br />Archive
              </span>
            </BentoCard>

            {/* ── 12. REACH OUT ── */}
            <BentoCard className="col-span-1 row-span-2 flex flex-col justify-center p-5 md:p-6">
              <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-4">
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

            {/* ── 13. HIRE ME CTA ── */}
            <BentoCard
              href="/contact"
              className="col-span-2 md:col-span-1 lg:col-span-3 row-span-2 flex flex-col lg:flex-row items-start lg:items-end justify-between p-6 lg:p-8"
              style={{
                background: "linear-gradient(135deg, var(--accent-dim) 0%, transparent 100%)",
                borderColor: "var(--accent-glow)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-white/50 mb-4">
                  Hire me
                </span>
                <div
                  className="font-syne font-extrabold"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, letterSpacing: "-0.5px" }}
                >
                  Let&apos;s build{" "}
                  <em style={{ fontStyle: "normal", color: "var(--accent)" }}>together.</em>
                </div>
              </div>
              <span
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14,
                  background: "var(--accent)", color: "#000",
                  fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.3px", padding: "10px 24px", borderRadius: 50,
                  transition: "all 0.2s",
                }}
              >
                Get in touch ↗
              </span>
            </BentoCard>

          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

/* ── LOCAL HELPER: Project Preview Bento Card ── */
function ProjectPreviewCard({
  project,
  icon,
  className = "col-span-1",
}: {
  project: (typeof projects)[0];
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <BentoCard className={`${className} row-span-2 flex flex-col justify-between p-5 md:p-6`} href="/projects" accentHover>
      <div className="flex justify-between items-start">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5 css-breathing-icon"
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