"use client";
import { useEffect, useState, RefObject } from "react";

interface BentoLaserFrameProps {
  containerRef: RefObject<HTMLElement>;
  cardRefs: RefObject<HTMLElement>[];
  ready: boolean;
}

interface Box {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface CardBox {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function BentoLaserFrame({ containerRef, cardRefs, ready }: BentoLaserFrameProps) {
  const [outerBox, setOuterBox] = useState<Box | null>(null);
  const [cardBoxes, setCardBoxes] = useState<CardBox[]>([]);

  useEffect(() => {
    if (!ready) return;

    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerBox = container.getBoundingClientRect();
      let top = Infinity, left = Infinity, right = -Infinity, bottom = -Infinity;
      const boxes: CardBox[] = [];

      cardRefs.forEach((ref) => {
        const el = ref.current;
        if (!el) return;
        const b = el.getBoundingClientRect();
        boxes.push({
          top: b.top - containerBox.top,
          left: b.left - containerBox.left,
          width: b.width,
          height: b.height,
        });
        top = Math.min(top, b.top);
        left = Math.min(left, b.left);
        right = Math.max(right, b.right);
        bottom = Math.max(bottom, b.bottom);
      });

      if (top === Infinity) return;

      setCardBoxes(boxes);
      setOuterBox({
        top: top - containerBox.top,
        left: left - containerBox.left,
        width: right - left,
        height: bottom - top,
      });
    };

    let rafId: number;
    let frame = 0;
    const SETTLE_FRAMES = 100;
    const tick = () => {
      measure();
      frame++;
      if (frame < SETTLE_FRAMES) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

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

  if (!outerBox || cardBoxes.length === 0) return null;

  const W = outerBox.width;
  const H = outerBox.height;
  const R = 18; // must match --radius in globals.css

  // Build a clipPath from actual card shapes so the laser line is hidden
  // in the gaps between cards but still travels as ONE continuous path
  // around the outer bounding rectangle.
  const clipId = "laser-clip-outer";

  return (
    <div
      className="bento-laser-frame-cell"
      style={{ top: outerBox.top, left: outerBox.left, width: W, height: H }}
      aria-hidden="true"
    >
      {/*
        Key fix: use width/height as the viewBox so SVG user units === CSS px.
        This means rx/ry=18 in SVG == exactly 18px border-radius, no distortion.
        DO NOT use preserveAspectRatio="none" — that's what was warping the corners.
      */}
      <svg
        className="bento-laser-frame"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
      >
        <defs>
          {/*
            ClipPath: union of all card rectangles (inset by 1px so we don't
            bleed into the gap). The laser travels the OUTER rect but is only
            painted where a card surface exists beneath it.
          */}
          <clipPath id={clipId}>
            {cardBoxes.map((box, i) => {
              const x = box.left - outerBox.left;
              const y = box.top - outerBox.top;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={box.width}
                  height={box.height}
                  rx={R}
                  ry={R}
                />
              );
            })}
          </clipPath>
        </defs>

        {/* The single outer laser rectangle, clipped to card surfaces only */}
        <g clipPath={`url(#${clipId})`}>
          <rect className="laser-l3" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
          <rect className="laser-l2" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
          <rect className="laser-l1" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
        </g>
      </svg>
    </div>
  );
}