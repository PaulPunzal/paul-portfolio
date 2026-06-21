"use client";
import { useEffect, useState, RefObject } from "react";

interface BentoLaserFrameProps {
  containerRef: RefObject<HTMLElement>;
  cardRefs: RefObject<HTMLElement>[];
  ready: boolean;
}

export default function BentoLaserFrame({ containerRef, cardRefs, ready }: BentoLaserFrameProps) {
  const [box, setBox] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  useEffect(() => {
    if (!ready) return;

    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerBox = container.getBoundingClientRect();
      let top = Infinity, left = Infinity, right = -Infinity, bottom = -Infinity;

      cardRefs.forEach((ref) => {
        const el = ref.current;
        if (!el) return;
        const b = el.getBoundingClientRect();
        top = Math.min(top, b.top);
        left = Math.min(left, b.left);
        right = Math.max(right, b.right);
        bottom = Math.max(bottom, b.bottom);
      });

      if (top === Infinity) return;

      setBox({
        top: top - containerBox.top,
        left: left - containerBox.left,
        width: right - left,
        height: bottom - top,
      });
    };

    // Poll every frame for ~1.6s to ride out the entrance animation
    // (translate/scale/opacity transitions don't trigger ResizeObserver,
    // so a single early measurement would otherwise freeze on stale coords).
    let rafId: number;
    let frame = 0;
    const SETTLE_FRAMES = 100;

    const tick = () => {
      measure();
      frame++;
      if (frame < SETTLE_FRAMES) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    // After settling, keep it accurate on real layout/resize changes
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    cardRefs.forEach((ref) => ref.current && observer.observe(ref.current));
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ready, containerRef, cardRefs]);

  if (!box) return null;

  return (
    <div
      className="bento-laser-frame-cell"
      style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
      aria-hidden="true"
    >
      <svg className="bento-laser-frame" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
        <rect className="laser-l3" x="0" y="0" width="100%" height="100%" rx="18" ry="18" pathLength={100} />
        <rect className="laser-l2" x="0" y="0" width="100%" height="100%" rx="18" ry="18" pathLength={100} />
        <rect className="laser-l1" x="0" y="0" width="100%" height="100%" rx="18" ry="18" pathLength={100} />
      </svg>
    </div>
  );
}