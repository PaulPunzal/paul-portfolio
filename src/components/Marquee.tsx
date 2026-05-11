import { marqueeItems } from "@/lib/data";

// The core languages
const baseLanguages = ["TypeScript", "PHP", "Dart", "Python", "JavaScript", "C#", "SQL"];

// We multiply the array EXACTLY 6 times (an even number) 
// This ensures the 50% animation loop point is completely invisible
const programmingLanguages = [
  ...baseLanguages, 
  ...baseLanguages, 
  ...baseLanguages, 
  ...baseLanguages,
  ...baseLanguages,
  ...baseLanguages
];

export default function Marquee() {
  // Multiply by 4 (also an even number) for a seamless loop
  const doubledItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="flex flex-col gap-1 mt-3 mb-2">
      {/* First Marquee - Moving Left */}
      <div className="marquee-wrap">
        <div className="marquee-track font-mono" style={{ animationDuration: "40s" }}>
          {doubledItems.map((item, i) => {
            const textToRender = typeof item === "string" ? item : item.text;
            
            return (
              <span key={`m1-${i}`} className="marquee-item">
                {textToRender}
              </span>
            );
          })}
        </div>
      </div>

      {/* Second Marquee - Moving Right (Languages) */}
      <div className="marquee-wrap opacity-60">
        <div 
          className="marquee-track font-mono" 
          style={{ 
            animationDirection: "reverse", 
            animationDuration: "45s"
          }}
        >
          {programmingLanguages.map((lang, i) => (
            <span key={`m2-${i}`} className="marquee-item text-[10px] text-accent">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}