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
  const overlayControls = useAnimation();
  const lineControls    = useAnimation();
  const boxControls     = useAnimation();
  const shimmerControls = useAnimation();
  const skeletonControls = useAnimation();

  const latestRect = useRef(heroRect);

  useEffect(() => {
    latestRect.current = heroRect;
  }, [heroRect]);

  // ── THE FIX: STRICT MODE SAFE ANIMATION ──
  useEffect(() => {
    let isMounted = true;

    async function runSequence() {
      try {
        // Phase 1: Line draws itself
        await lineControls.start({
          width: 130,
          opacity: 1,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        });
        if (!isMounted) return; // Exit immediately if user clicked away!

        // Phase 2: Box expands
        lineControls.start({ opacity: 0, transition: { duration: 0.15 } });
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

        await skeletonControls.start({
          opacity: 1,
          transition: { duration: 0.3, delay: 0.1 },
        });
        if (!isMounted) return;

        await delay(250);
        if (!isMounted) return;

        // Phase 3: Resize 
        const rect = latestRect.current;
        const targetW = rect?.width  ?? 560;
        const targetH = rect?.height ?? 400;

        skeletonControls.start({ opacity: 0, transition: { duration: 0.2 } });

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

        // Phase 4: Positioning
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

        // Phase 5: Crossfade
        onComplete();

        boxControls.start({
          opacity: 0,
          transition: { duration: 0.3, ease: "easeIn" },
        });

        await overlayControls.start({
          opacity: 0,
          transition: { duration: 0.4, ease: "easeIn", delay: 0.05 },
        });
      } catch (error) {
        // Failsafe: if animation is violently interrupted by routing, ignore it.
      }
    }

    runSequence();

    // ── THE CRITICAL CLEANUP FUNCTION ──
    return () => {
      isMounted = false;
      // Stop all animations dead in their tracks so they don't fight the new mount!
      lineControls.stop();
      boxControls.stop();
      skeletonControls.stop();
      overlayControls.stop();
    };
  }, [boxControls, lineControls, onComplete, overlayControls, skeletonControls]);

  // Ambient effects
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(125,249,166,0.055) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {[
        { top: "10%",    left:  "10%" },
        { top: "10%",    right: "10%" },
        { bottom: "10%", left:  "10%" },
        { bottom: "10%", right: "10%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ ...pos, background: "rgba(125,249,166,0.4)" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
        />
      ))}

      <motion.div
        animate={lineControls}
        initial={{ width: 0, opacity: 0 }}
        style={{
          position: "absolute",
          height: 1,
          background: "rgba(255,255,255,0.55)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div
        animate={boxControls}
        initial={{
          opacity: 0,
          width: 130,
          height: 1,
          x: "-50%",
          y: "-50%",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          background: "radial-gradient(circle at top left, rgba(125, 249, 166, 0.025) 0%, var(--bg-card) 45%)",
          borderRadius: 18,
          overflow: "hidden",
          willChange: "transform, width, height",
        }}
      >
        <motion.div
          animate={skeletonControls}
          initial={{ opacity: 0 }}
          className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-center pointer-events-none"
        >
          {/* ── WIREFRAME: Picture & Title Area ── */}
          <div className="flex items-center gap-5 lg:gap-6 mb-6">
            {/* Picture Skeleton */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl bg-white/5 border border-white/10 shrink-0" />
            
            {/* Name & Subtitle Skeleton */}
            <div className="flex flex-col gap-3 w-full">
              <div className="h-6 sm:h-8 lg:h-10 bg-white/10 rounded-md w-3/4" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <div className="h-3 sm:h-4 bg-accent/20 rounded-sm w-1/2" />
              </div>
            </div>
          </div>

          {/* ── WIREFRAME: Description Paragraph ── */}
          <div className="border-l-2 border-accent/30 pl-4 py-1 flex flex-col gap-2.5">
            <div className="h-2.5 sm:h-3 bg-white/10 rounded-sm w-full" />
            <div className="h-2.5 sm:h-3 bg-white/10 rounded-sm w-11/12" />
            <div className="h-2.5 sm:h-3 bg-white/10 rounded-sm w-4/5" />
          </div>
        </motion.div>

        <motion.div
          animate={shimmerControls}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(110deg, transparent 30%, rgba(125,249,166,0.04) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: "#7df9a6" }} />
        <span className="font-mono uppercase tracking-[3px]" style={{ fontSize: 9, color: "rgba(125,249,166,0.5)" }}>
          Booting system
        </span>
      </motion.div>
    </motion.div>
  );
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}