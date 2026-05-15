"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [phase, setPhase] = useState<"drawing" | "expanding" | "splitting" | "exiting">("drawing");

  useEffect(() => {
    // Phase timeline:
    // 0ms   → line starts drawing itself
    // 700ms → box expands from line
    // 1300ms → bento grid splits appear
    // 2200ms → exit phase begins, hero card morph starts
    // 2800ms → finishLoading fires (page content is ready)

    const t1 = setTimeout(() => setPhase("expanding"), 700);
    const t2 = setTimeout(() => setPhase("splitting"), 1300);
    const t3 = setTimeout(() => setPhase("exiting"), 2200);
    const t4 = setTimeout(() => finishLoading(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {phase !== "exiting" && (
        <motion.div
          key="splash-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000000" }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn", delay: 0.3 } }}
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
            animate={{ scale: phase === "splitting" ? 1.4 : 1, opacity: phase === "splitting" ? 1 : 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* ── Corner accent dots ── */}
          {[
            { top: "10%", left: "10%" },
            { top: "10%", right: "10%" },
            { bottom: "10%", left: "10%" },
            { bottom: "10%", right: "10%" },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ ...pos, background: "rgba(125,249,166,0.4)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: phase !== "drawing" ? 1 : 0, scale: phase !== "drawing" ? 1 : 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            />
          ))}

          {/* ── THE CENTRAL ANIMATION ── */}
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

            {/* ── PHASE 2+: The main box that expands from nothing ── */}
            <AnimatePresence>
              {(phase === "expanding" || phase === "splitting") && (
                <motion.div
                  key="main-box"
                  className="absolute"
                  style={{
                    border: "1px solid rgba(125,249,166,0.5)",
                    background: "rgba(9,9,11,0.9)",
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                  initial={{ width: 0, height: 0, opacity: 0, borderRadius: 4 }}
                  animate={{
                    width: phase === "splitting" ? 280 : 200,
                    height: phase === "splitting" ? 180 : 60,
                    opacity: 1,
                    borderRadius: 14,
                  }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Inner content that fades in when splitting */}
                  <motion.div
                    className="absolute inset-0 p-4 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: phase === "splitting" ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    {/* Simulated name lines */}
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

                    {/* Bento grid divider lines appearing */}
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
                            style={{ height: 20, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", flex: w }}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: phase === "splitting" ? 1 : 0, y: phase === "splitting" ? 0 : 4 }}
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
                      background: "linear-gradient(110deg, transparent 30%, rgba(125,249,166,0.06) 50%, transparent 70%)",
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
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ background: "#7df9a6" }} />
            <span
              className="font-mono uppercase tracking-[3px]"
              style={{ fontSize: 9, color: "rgba(125,249,166,0.5)" }}
            >
              Booting system
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* ── layoutId hero card — this is what morphs into the real card ── */}
      {phase === "exiting" && (
        <motion.div
          key="splash-hero-card"
          layoutId="hero-bento-card"
          className="fixed inset-0 z-[100]"
          style={{
            width: 280,
            height: 180,
            border: "1px solid rgba(125,249,166,0.3)",
            background: "rgba(9,9,11,0.95)",
            borderRadius: 18,
            top: "50%",
            left: "50%",
            marginTop: -90,
            marginLeft: -140,
          }}
        />
      )}
    </AnimatePresence>
  );
}