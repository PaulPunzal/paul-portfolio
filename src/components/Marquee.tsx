import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  // Duplicate items for seamless loop
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap" style={{ marginTop: "10px" }}>
      <div className="marquee-track font-mono">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}