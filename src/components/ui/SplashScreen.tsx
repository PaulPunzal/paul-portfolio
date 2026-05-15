"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Tell the main page to show the portfolio after 2.8 seconds
    const timeout = setTimeout(() => finishLoading(), 2800);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      // The whole screen slides UP to reveal your portfolio
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-16 h-16">
        {/* Top Left Box */}
        <motion.div
          className="absolute top-0 left-0 bg-white rounded-md"
          initial={{ width: 8, height: 8, x: 28, y: 28, borderRadius: "50%" }}
          animate={{
            width: [8, 30, 30, 30],
            height: [8, 8, 30, 30],
            x: [28, 0, 0, 0],
            y: [28, 28, 0, 0],
            borderRadius: ["50%", "8px", "8px", "8px"],
            backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "var(--accent)"],
          }}
          transition={{ duration: 2, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        />
        {/* Top Right Box */}
        <motion.div
          className="absolute top-0 right-0 bg-white rounded-md"
          initial={{ width: 0, height: 0, x: 0, y: 28 }}
          animate={{
            width: [0, 0, 30, 30],
            height: [0, 0, 30, 30],
            x: [0, 0, 0, 0],
            y: [28, 28, 0, 0],
            backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "var(--bg-card)"],
            border: ["none", "none", "none", "1px solid var(--accent-glow)"]
          }}
          transition={{ duration: 2, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        />
        {/* Bottom Left Box */}
        <motion.div
          className="absolute bottom-0 left-0 bg-white rounded-md"
          initial={{ width: 0, height: 0, x: 28, y: 0 }}
          animate={{
            width: [0, 0, 30, 30],
            height: [0, 0, 30, 30],
            x: [28, 28, 0, 0],
            y: [0, 0, 0, 0],
            backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "var(--bg-card)"],
            border: ["none", "none", "none", "1px solid var(--accent-glow)"]
          }}
          transition={{ duration: 2, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        />
        {/* Bottom Right Box */}
        <motion.div
          className="absolute bottom-0 right-0 bg-white rounded-md"
          initial={{ width: 0, height: 0, x: 0, y: 0 }}
          animate={{
            width: [0, 0, 30, 30],
            height: [0, 0, 30, 30],
            x: [0, 0, 0, 0],
            y: [0, 0, 0, 0],
            backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "var(--bg-card)"],
            border: ["none", "none", "none", "1px solid var(--accent-glow)"]
          }}
          transition={{ duration: 2, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}