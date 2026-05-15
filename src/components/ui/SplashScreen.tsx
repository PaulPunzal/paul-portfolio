"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SplashScreenProps {
  onComplete: () => void;
  heroRect: HeroRect | null;
}

export default function SplashScreen({ onComplete, heroRect }: SplashScreenProps) {
  const overlayControls  = useAnimation();
  const lineControls     = useAnimation();
  const boxControls      = useAnimation();
  const shimmerControls  = useAnimation();
  const skeletonControls = useAnimation();
  
  const dotLeftControls  = useAnimation();
  const dotRightControls = useAnimation();
  const rippleControls   = useAnimation();
  const ripple2Controls  = useAnimation();
  const gridControls     = useAnimation();

  const latestRect = useRef(heroRect);

  useEffect(() => {
    latestRect.current = heroRect;
  }, [heroRect]);

  useEffect(() => {
    let isMounted = true;

    async function runSequence() {
      try {
        // ── Phase 1: Laser Draw ──
        dotLeftControls.start({ x: -65, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } });
        dotRightControls.start({ x: 65, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } });
        await lineControls.start({
          width: 130,
          opacity: 1,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        });
        if (!isMounted) return;

        // ── Phase 2: Box Expands & Nav Bar Awakens ──
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("revealNav"));
        }

        lineControls.start({ opacity: 0, transition: { duration: 0.15 } });
        dotLeftControls.start({ opacity: 0, transition: { duration: 0.15 } });
        dotRightControls.start({ opacity: 0, transition: { duration: 0.15 } });

        // ── THE ENVIRONMENT REACTION (Brighter Flash) ──
        gridControls.start({
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6], // Reaches full brightness
          transition: { duration: 1.2, ease: "easeOut" }
        });

        // ── DOUBLE SHOCKWAVE (Added Glow/Box-Shadow) ──
        rippleControls.start({
          width: [130, 600],
          height: [1, 400],
          opacity: [1, 0],
          borderRadius: ["4px", "200px"],
          border: ["3px solid rgba(125,249,166,1)", "1px solid rgba(125,249,166,0)"],
          boxShadow: ["0 0 40px 10px rgba(125,249,166,0.6)", "0 0 0px 0px rgba(125,249,166,0)"],
          transition: { duration: 0.8, ease: "easeOut" }
        });

        ripple2Controls.start({
          width: [130, 900],
          height: [1, 700],
          opacity: [0.7, 0],
          borderRadius: ["4px", "300px"],
          border: ["2px solid rgba(125,249,166,0.8)", "1px solid rgba(125,249,166,0)"],
          boxShadow: ["0 0 60px 15px rgba(125,249,166,0.3)", "0 0 0px 0px rgba(125,249,166,0)"],
          transition: { duration: 1.1, ease: "easeOut", delay: 0.05 }
        });

        // Expand the actual box
        await boxControls.start({
          opacity: 1,
          width: 280,
          height: 180,
          x: "-50%",
          y: "-50%",
          transition: {
            opacity:  { duration: 0.2 },
            width:    { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            height:   { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          },
        });
        if (!isMounted) return;

        // Show wireframe
        await skeletonControls.start({
          opacity: 1,
          transition: { duration: 0.3, delay: 0.1 },
        });
        if (!isMounted) return;

        await delay(250);
        if (!isMounted) return;

        // ── Phase 3: Resize ──
        const rect = latestRect.current;
        const targetW = rect?.width  ?? 560;
        const targetH = rect?.height ?? 400;

        await boxControls.start({
          width:  targetW,
          height: targetH,
          x: "-50%",
          y: "-50%",
          transition: {
            width:  { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
            height: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
          },
        });
        if (!isMounted) return;

        // ── Phase 4: Positioning ──
        const vw = document.documentElement.clientWidth;
        const vh = document.documentElement.clientHeight;

        const offsetX = rect ? (rect.x + rect.width / 2) - (vw / 2) : 0;
        const offsetY = rect ? (rect.y + rect.height / 2) - (vh / 2) : 0;

        await boxControls.start({
          x: `calc(-50% + ${offsetX}px)`,
          y: `calc(-50% + ${offsetY}px)`,
          transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          },
        });
        if (!isMounted) return;

        // ── Phase 5: Crossfade ──
        onComplete();

        boxControls.start({
          opacity: 0,
          transition: { duration: 0.3, ease: "easeIn" },
        });

        await overlayControls.start({
          opacity: 0,
          transition: { duration: 0.4, ease: "easeIn", delay: 0.05 },
        });
      } catch (error) {}
    }

    runSequence();

    return () => {
      isMounted = false;
      lineControls.stop();
      boxControls.stop();
      skeletonControls.stop();
      overlayControls.stop();
      dotLeftControls.stop();
      dotRightControls.stop();
      rippleControls.stop();
      ripple2Controls.stop();
      gridControls.stop();
    };
  }, [boxControls, lineControls, onComplete, overlayControls, skeletonControls, dotLeftControls, dotRightControls, rippleControls, ripple2Controls, gridControls]);

  useEffect(() => {
    shimmerControls.start({
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: { duration: 2.5, repeat: Infinity, ease: "linear" },
    });
  }, [shimmerControls]);

  return (
    <motion.div
      animate={overlayControls}
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black pointer-events-none"
    >
      {/* ── DYNAMIC BACKGROUND GRID (Brighter lines) ── */}
      <motion.div
        animate={gridControls}
        initial={{ scale: 1, opacity: 0.6 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          transformOrigin: "center",
        }}
      />
      
      {/* Static Glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(125,249,166,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── DOUBLE SHOCKWAVE RIPPLES ── */}
      <motion.div
        animate={rippleControls}
        initial={{ opacity: 0, x: "-50%", y: "-50%", width: 130, height: 1 }}
        style={{ position: "absolute", top: "50%", left: "50%", boxSizing: "border-box", pointerEvents: "none" }}
      />
      <motion.div
        animate={ripple2Controls}
        initial={{ opacity: 0, x: "-50%", y: "-50%", width: 130, height: 1 }}
        style={{ position: "absolute", top: "50%", left: "50%", boxSizing: "border-box", pointerEvents: "none" }}
      />

      {/* ── THE ALIGNED LASER SPARKS (Brighter glow) ── */}
      <motion.div
        animate={dotLeftControls}
        initial={{ width: 4, height: 4, opacity: 0, x: 0, y: "-50%" }}
        style={{ position: "absolute", top: "50%", left: "50%", background: "#ffffff", borderRadius: "50%", boxShadow: "0 0 15px 4px rgba(125,249,166,0.9)" }}
      />
      <motion.div
        animate={dotRightControls}
        initial={{ width: 4, height: 4, opacity: 0, x: 0, y: "-50%" }}
        style={{ position: "absolute", top: "50%", left: "50%", background: "#ffffff", borderRadius: "50%", boxShadow: "0 0 15px 4px rgba(125,249,166,0.9)" }}
      />

      {/* The Central Line (Solid White with Glow) */}
      <motion.div
        animate={lineControls}
        initial={{ width: 0, opacity: 0 }}
        style={{ position: "absolute", height: 1, background: "rgba(255,255,255,0.9)", boxShadow: "0 0 8px 1px rgba(255,255,255,0.4)", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      />

      {/* The Morphing Box */}
      <motion.div
        animate={boxControls}
        initial={{ opacity: 0, width: 130, height: 1, x: "-50%", y: "-50%" }}
        style={{
          position: "absolute", top: "50%", left: "50%", border: "1px solid rgba(255,255,255,0.1)",
          background: "radial-gradient(circle at top left, rgba(125, 249, 166, 0.04) 0%, var(--bg-card) 45%)",
          borderRadius: 18, overflow: "hidden", willChange: "transform, width, height",
        }}
      >
        {/* SVG Wireframe (Maximized Edge-to-Edge Width) */}
        <motion.div
          animate={skeletonControls}
          initial={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
        >
          <svg viewBox="0 0 560 400" className="w-full h-full opacity-100" preserveAspectRatio="xMidYMid meet">
            {/* 1. Profile Picture Block (Pushed to the far left) */}
            <rect x="4" y="36" width="136" height="136" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            
            {/* 2. Name Block (Stretched to the far right edge) */}
            <rect x="164" y="55" width="392" height="48" rx="10" fill="rgba(255,255,255,0.15)" />
            
            {/* 3. Subtitle / Dev Role Block */}
            <circle cx="172" cy="135" r="8" fill="rgba(125,249,166,0.8)" />
            <rect x="192" y="127" width="310" height="16" rx="6" fill="rgba(125,249,166,0.4)" />

            {/* 4. Left Accent Line (Pushed to the far left) */}
            <rect x="4" y="210" width="4" height="140" fill="rgba(125,249,166,0.5)" rx="2" />

            {/* 5. Paragraph Lines (Stretched massively to fill the entire right side) */}
            <rect x="28" y="216" width="528" height="16" rx="6" fill="rgba(255,255,255,0.12)" />
            <rect x="28" y="252" width="500" height="16" rx="6" fill="rgba(255,255,255,0.12)" />
            <rect x="28" y="288" width="510" height="16" rx="6" fill="rgba(255,255,255,0.12)" />
            <rect x="28" y="324" width="420" height="16" rx="6" fill="rgba(255,255,255,0.12)" />
          </svg>
        </motion.div>

        <motion.div animate={shimmerControls} className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(110deg, transparent 30%, rgba(125,249,166,0.06) 50%, transparent 70%)", backgroundSize: "200% 100%" }} />
      </motion.div>

      {/* Booting Text */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.4 }}>
        <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: "#7df9a6", boxShadow: "0 0 8px 2px rgba(125,249,166,0.5)" }} />
        <span className="font-mono uppercase tracking-[3px]" style={{ fontSize: 9, color: "rgba(125,249,166,0.8)" }}>Paul Punzal</span>
      </motion.div>
    </motion.div>
  );
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}