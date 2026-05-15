"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  finishLoading: () => void;
  heroRect?: DOMRect | null;
}

export default function SplashScreen({ finishLoading, heroRect }: SplashScreenProps) {
  const [phase, setPhase] = useState<
    "drawing" | "expanding" | "splitting" | "resizing" | "positioning" | "exiting"
  >("drawing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("expanding"),   700);
    const t2 = setTimeout(() => setPhase("splitting"),   1300);
    const t3 = setTimeout(() => setPhase("resizing"),    2200); // box grows to hero card size
    const t4 = setTimeout(() => setPhase("positioning"), 3000); // box flies to hero card position
    const t5 = setTimeout(() => setPhase("exiting"),     3700); // overlay fades out
    const t6 = setTimeout(() => finishLoading(),         4000); // page fully takes over

    return () => { [t1, t2, t3, t4, t5, t6].forEach(clearTimeout); };
  }, [finishLoading]);

  // Target size — use measured rect if available, otherwise sensible desktop fallback
  const targetW = heroRect?.width  ?? 560;
  const targetH = heroRect?.height ?? 400;

  // Offset from viewport center to hero card center
  const targetX = heroRect
    ? heroRect.left + heroRect.width  / 2 - window.innerWidth  / 2
    : 0;
  const targetY = heroRect
    ? heroRect.top  + heroRect.height / 2 - window.innerHeight / 2
    : 0;

  const isResizing    = phase === "resizing"    || phase === "positioning" || phase === "exiting";
  const isPositioning = phase === "positioning" || phase === "exiting";

  return (
    <AnimatePresence>
      {phase !== "exiting" && (
        <motion.div
          key="splash-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000000" }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeIn" } }}
        >
          {/* ── Ambient grid background ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* ── Ambient radial accent bloom ── */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 600,
              height: 600,
              background: "radial-gradient(circle, rgba(125,249,166,0.06) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale:   phase === "splitting" ? 1.4 : 1,
              opacity: phase === "splitting" ? 1   : 0.5,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* ── Corner accent dots ── */}
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
              animate={{
                opacity: phase !== "drawing" ? 1 : 0,
                scale:   phase !== "drawing" ? 1 : 0,
              }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            />
          ))}

          {/* ── Central animation container ── */}
          <div className="relative flex items-center justify-center" style={{ width: 280, height: 180 }}>

            {/* ── PHASE 1: Horizontal line draws itself ── */}
            <AnimatePresence>
              {phase === "drawing" && (
                <motion.div
                  key="line"
                  className="absolute"
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.6)",
                    top: "50%",
                    left: "50%",
                    originX: 0,
                    x: "-50%",
                    y: "-50%",
                  }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 120, opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </AnimatePresence>

            {/* ── PHASE 2+: The main box that morphs all the way to hero position ── */}
            <AnimatePresence>
              {(phase === "expanding" || phase === "splitting" || phase === "resizing" || phase === "positioning") && (
                <motion.div
                  key="main-box"
                  className="absolute"
                  style={{
                    // Exact match to .bento-card styles in globals.css
                    border:       "1.5px solid rgba(255, 255, 255, 0.05)",
                    background:   "#09090b",
                    borderRadius: 18,
                    overflow:     "hidden",
                    top:  "50%",
                    left: "50%",
                  }}
                  initial={{ width: 0, height: 0, opacity: 0, x: "-50%", y: "-50%" }}
                  animate={{
                    width:  isResizing    ? targetW : (phase === "splitting" ? 280 : 200),
                    height: isResizing    ? targetH : (phase === "splitting" ? 180 : 60),
                    x:      isPositioning ? `calc(-50% + ${targetX}px)` : "-50%",
                    y:      isPositioning ? `calc(-50% + ${targetY}px)` : "-50%",
                    opacity: 1,
                  }}
                  transition={{
                    width: {
                      duration: isResizing ? 0.65 : 0.5,
                      ease:     isResizing ? [0.4, 0, 0.2, 1] : [0.16, 1, 0.3, 1],
                    },
                    height: {
                      duration: isResizing ? 0.65 : 0.5,
                      ease:     isResizing ? [0.4, 0, 0.2, 1] : [0.16, 1, 0.3, 1],
                    },
                    x: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
                    y: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  {/* Inner skeleton content — fades out when resizing starts */}
                  <motion.div
                    className="absolute inset-0 p-4 flex flex-col justify-between"
                    animate={{ opacity: isResizing ? 0 : (phase === "splitting" ? 1 : 0) }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col gap-1.5">
                      <motion.div
                        className="rounded-sm"
                        style={{ height: 10, background: "rgba(255,255,255,0.7)", width: "65%" }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: phase === "splitting" ? 1 : 0 }}
                        transition={{ duration: 0.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <motion.div
                        className="rounded-sm"
                        style={{ height: 6, background: "rgba(125,249,166,0.7)", width: "40%" }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: phase === "splitting" ? 1 : 0 }}
                        transition={{ duration: 0.35, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <motion.div
                        style={{ height: 1, background: "rgba(255,255,255,0.08)", width: "100%" }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: phase === "splitting" ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                      />
                      <div className="flex gap-2">
                        {[1, 0.6, 0.8].map((w, i) => (
                          <motion.div
                            key={i}
                            className="rounded-sm"
                            style={{
                              height: 20,
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              flex: w,
                            }}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{
                              opacity: phase === "splitting" ? 1 : 0,
                              y:       phase === "splitting" ? 0 : 4,
                            }}
                            transition={{ duration: 0.3, delay: 0.45 + i * 0.06 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Shimmer sweep */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(110deg, transparent 30%, rgba(125,249,166,0.06) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bottom boot text ── */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "splitting" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ background: "#7df9a6" }}
            />
            <span
              className="font-mono uppercase tracking-[3px]"
              style={{ fontSize: 9, color: "rgba(125,249,166,0.5)" }}
            >
              Booting system
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}