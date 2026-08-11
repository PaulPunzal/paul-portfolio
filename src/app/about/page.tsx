"use client";

import { useEffect, useState, useRef} from "react";
import BentoCard from "@/components/ui/BentoCard";
import { skillGroups } from "@/lib/data";
import SkillsExplorer from "@/components/ui/SkillsExplorer";
import { 
  User, 
  GraduationCap, 
  BriefcaseBusiness, 
  BrainCircuit, 
  Database,
  Bot,
  Terminal,
  GitBranch,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ScanEye
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// ── FRAMER MOTION VARIANTS (CINEMATIC SLOW-POP) ──
const containerVariants: Variants = {
  offscreen: { opacity: 1 }, 
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Elegant, deliberate domino effect
      delayChildren: 0.1,   
    },
  },
};

const itemVariants: Variants = {
  offscreen: { 
    opacity: 0, 
    y: 40, 
    scale: 0.96 // Very subtle scale so it doesn't feel jumpy
  }, 
  onscreen: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.9,           // A full 900ms of graceful movement
      ease: [0.16, 1, 0.3, 1]  // The exact buttery curve from your Splash Screen!
    } 
  },
};

const platformTools = ["Git / GitHub", "Docker", "Postman", "Linux", "Figma", "VS Code"];
const mlAiTools = ["TensorFlow", "PyTorch", "LangChain", "Transformers", "YOLO/ONNX", "OCR", "LLaMA 3", "Ollama"];

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if window is desktop size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Force native scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6">
      
      {/* Page Header */}
      <motion.div 
        className="mb-8 pl-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">About Me.</h1>
        <p className="font-mono text-xs tracking-widest text-[rgb(var(--ink)/40%)] uppercase">System Architecture</p>
      </motion.div>

      {/* ── ANIMATED TETRIS GRID ── */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-[75px] gap-3 md:gap-4"
        variants={containerVariants}
        // If mobile, start fully visible ("onscreen"), otherwise do the animation ("offscreen")
        initial={isMobile ? "onscreen" : "offscreen"}
        whileInView="onscreen"
        viewport={{ once: true, margin: "-20px" }}
      >

        {/* 1. PROFILE PICTURE */}
        <motion.div variants={itemVariants} className="order-1 md:order-1 col-span-2 sm:col-span-1 row-span-5 md:col-span-1 lg:col-span-1 md:row-span-5">
          <BentoCard className="w-full h-full p-0 overflow-hidden relative group">
            <Image 
              src="/gradpic/profile.JPG" 
              alt="Paul John Punzal" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top lg:object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-1)] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="font-mono text-[9px] text-accent font-medium tracking-[1.8px] uppercase bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                PJ Punzal
              </span>
            </div>
          </BentoCard>
        </motion.div>

        {/* 2A. BIO PART 1 (LEFT SIDE) */}
        <motion.div variants={itemVariants} className="order-3 md:order-2 col-span-2 sm:col-span-1 row-span-7 min-[375px]:row-span-6 sm:row-span-5 md:col-span-1 lg:col-span-1 md:row-span-5">
          <BentoCard className="w-full h-full p-6 lg:p-6 xl:p-8 flex flex-col justify-center relative">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-accent/70 mb-3 block">
              Introduction
            </span>
            <h2 className="font-syne text-xl lg:text-lg xl:text-2xl font-bold text-[var(--text-primary)] mb-3 lg:mb-4 leading-tight">
              A Bit About Me
            </h2>
            <div className="border-l-2 border-accent/30 pl-4">
              <p className="font-inter text-sm lg:text-xs xl:text-sm text-[rgb(var(--ink)/60%)] leading-relaxed font-normal mb-3 md:mb-0">                I'm a Full-Stack and Mobile Developer who loves turning ideas into working systems. My coding journey started out of pure curiosity, but everything really clicked once I started connecting digital code with physical hardware — building an <span className="text-accent/80">AI-powered Raspberry Pi</span> system for my capstone showed me what technology is actually for.
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* 3. ACADEMIC BACKGROUND */}
        <motion.div variants={itemVariants} className="order-2 md:order-3 col-span-2 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-2 z-20">
          <BentoCard className="w-full h-full flex flex-col justify-center p-6 lg:px-8 relative">
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-[rgb(var(--ink)/50%)] mb-3">
              Academic Background
            </span>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-[rgb(var(--ink)/5%)] flex items-center justify-center border border-[rgb(var(--ink)/10%)] shrink-0">
                <GraduationCap className="w-5 h-5 text-[rgb(var(--ink)/70%)]" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-lg text-[var(--text-primary)] leading-tight mb-1">BS Information Technology</h3>
                <p className="font-inter text-[11px] text-[rgb(var(--ink)/50%)]">Pambayang Dalubhasaan ng Marilao</p>
              </div>
            </div>
            <div className="mt-auto pt-3 border-t border-[rgb(var(--ink)/5%)] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[rgb(var(--ink)/40%)]">Status: <span className="text-[var(--text-primary)]">Graduated</span></span>
              <span className="font-mono text-[10px] text-accent">Class of 2022 - 2026</span>
            </div>
          </BentoCard>
        </motion.div>

        {/* 2B. BIO PART 2 (RIGHT SIDE) — AI AUTOMATION MODULE */}
        <motion.div variants={itemVariants} className="!hidden md:!flex order-4 md:order-4 col-span-2 sm:col-span-1 row-span-3 md:col-span-1 lg:col-span-1 md:row-span-3 relative group">
          
          {/* ── Outer Breathing Glow ── */}
          <motion.div 
            animate={{ opacity: [0.05, 0.15, 0.05], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent/20 rounded-[24px] blur-xl z-0 pointer-events-none"
          />

          <BentoCard 
            className="w-full h-full p-0 flex flex-col items-center justify-center relative z-10 overflow-hidden border border-accent/20 backdrop-blur-sm" 
            style={{ background: "rgba(5, 5, 5, 0.35)" }}
          >
            
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              
              {/* The Cursor-Tracking Eye */}
              <div className="relative z-20">
                <CyberEye />
              </div>

            </div>
          </BentoCard>
        </motion.div>

        {/* 4. AI EXPLORATION */}
        <motion.div variants={itemVariants} className="order-5 md:order-5 col-span-2 sm:col-span-1 row-span-3 md:col-span-1 lg:col-span-1 md:row-span-3">
          <BentoCard className="w-full h-full flex flex-col justify-center p-6" >
            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[rgb(var(--ink)/5%)] flex items-center justify-center border border-[rgb(var(--ink)/10%)] mb-3 sm:mb-5">
              <BrainCircuit className="w-4 h-4 sm:w-8 sm:h-8 text-[rgb(var(--ink)/70%)]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-syne text-base sm:text-sm lg:text-base font-bold text-[var(--text-primary)] mb-2">AI & Automation</h3>
              <p className="font-inter text-xs sm:text-[11px] lg:text-xs text-[rgb(var(--ink)/50%)] leading-relaxed">
                Passionate about self-study. Exploring locally-hosted LLMs (LLaMA 3), YOLO object detection, and OCR pipelines.
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </motion.div>

      {/* ── LANGUAGES, AI & TOOLBELT — standalone section, sized to its own
          content instead of being forced into the tetris grid's fixed
          row-height track (that's what was clipping it before) ── */}
      <motion.div
        id="skills"
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 md:mt-4 scroll-mt-28"
      >
        <BentoCard className="w-full flex flex-col p-5 sm:p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-5 lg:mb-6">
            <Terminal className="w-5 h-5 text-[rgb(var(--ink)/50%)]" />
            <span className="font-mono text-[9px] font-medium tracking-[1.8px] uppercase text-[rgb(var(--ink)/50%)]">
              Languages, AI & Toolbelt
            </span>
          </div>

          <SkillsExplorer />
        </BentoCard>
      </motion.div>
    </div>
  );
}

// ── CYBERNETIC CURSOR-TRACKING EYE ──
function CyberEye() {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [eyeTransform, setEyeTransform] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      
      const rect = eyeRef.current.getBoundingClientRect();
      // Calculate the exact center of the eye element
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      // Calculate distance between mouse and eye center
      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      // 1. Calculate Pupil Position
      const angle = Math.atan2(deltaY, deltaX);
      const maxDistance = 16; 
      const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY) / 15);

      setPupilPos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });

      // 2. Calculate 3D Eye Tilt (Head movement simulation)
      // We use window dimensions to keep the rotation subtle and smooth
      const rotY = (deltaX / window.innerWidth) * 50;  // Look left/right (max ~25deg)
      const rotX = -(deltaY / window.innerHeight) * 50; // Look up/down (max ~25deg)
      const rotZ = (deltaX / window.innerWidth) * 15;  // Slight head tilt

      setEyeTransform({
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={eyeRef} 
      className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center"
      style={{ perspective: "1000px" }} // Adds actual 3D depth to the rotation
    >
      {/* Container that handles the 3D tilt and the blinking */}
      <motion.div 
        animate={{ 
          rotateX: eyeTransform.rotateX, 
          rotateY: eyeTransform.rotateY, 
          rotateZ: eyeTransform.rotateZ,
          scaleY: [1, 1, 0.05, 1, 1], // The blink effect (squishing the Y axis)
        }}
        transition={{
          // Smooth physics for the mouse tracking
          rotateX: { type: "spring", stiffness: 300, damping: 30 },
          rotateY: { type: "spring", stiffness: 300, damping: 30 },
          rotateZ: { type: "spring", stiffness: 300, damping: 30 },
          // Keyframe timing for the blink (closes quickly and opens)
          scaleY: { duration: 5, repeat: Infinity, times: [0, 0.9, 0.92, 0.94, 1], ease: "easeInOut" }
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Eye Shape (Sclera) */}
        <div 
          className="absolute inset-0 bg-[var(--surface-1)] border border-[rgb(var(--ink)/20%)] shadow-[0_0_30px_rgba(125,249,166,0.15)] overflow-hidden flex items-center justify-center"
          style={{ borderRadius: "100% 0", transform: "rotate(45deg) translateZ(0)" }}
        >
          {/* Un-rotate inner container to keep pupil straight */}
          <div style={{ transform: "rotate(-45deg)" }} className="relative w-full h-full flex items-center justify-center">
            
            {/* Moving Iris & Pupil */}
            <motion.div 
              animate={{ x: pupilPos.x, y: pupilPos.y }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/50 shadow-[0_0_15px_var(--accent)]"
            >
              {/* Outer Iris Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-accent/40 rounded-full border-dashed"
              />

              {/* Deep Pupil */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full z-10 border border-accent/20" />
              
              {/* 3D Catchlight Reflection */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full blur-[1px] z-20" />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}