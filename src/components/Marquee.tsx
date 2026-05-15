"use client";
import { marqueeItems } from "@/lib/data";
import { motion } from "framer-motion";

const baseLanguages = ["TypeScript", "PHP", "Dart", "Python", "JavaScript", "C#", "SQL"];
const programmingLanguages = [
  ...baseLanguages, ...baseLanguages, ...baseLanguages, 
  ...baseLanguages, ...baseLanguages, ...baseLanguages
];

// ── ADDED isVisible PROP ──
export default function Marquee({ isVisible = true }: { isVisible?: boolean }) {
  const doubledItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    // ── FRAMER MOTION CENTER-SPREAD ──
    <motion.div 
      className="flex flex-col gap-1 mt-3 mb-2"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{ transformOrigin: "center" }}
    >
      <div className="marquee-wrap">
        <div className="marquee-track font-mono" style={{ animationDuration: "40s" }}>
          {doubledItems.map((item, i) => {
            const textToRender = typeof item === "string" ? item : item.text;
            return <span key={`m1-${i}`} className="marquee-item">{textToRender}</span>;
          })}
        </div>
      </div>

      <div className="marquee-wrap opacity-60">
        <div className="marquee-track font-mono" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
          {programmingLanguages.map((lang, i) => (
            <span key={`m2-${i}`} className="marquee-item text-[10px] text-accent">{lang}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}