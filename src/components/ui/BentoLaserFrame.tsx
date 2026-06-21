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

// How far into the card the fade covers (px). Tune this to taste.
const FADE_SIZE = 28;

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

  // For each card, figure out which horizontal edges are "interior" (touching a gap
  // between cards) vs "exterior" (on the true outer boundary of the bento grid).
  // We need to fade at interior edges so the laser dims into the gap naturally.
  //
  // Strategy: a card edge is "interior" if there is another card whose opposite edge
  // is close to it (within a gap threshold). We compare left/right edges in absolute
  // container coordinates.
  const GAP_THRESHOLD = 32; // px — any gap smaller than this is treated as interior

  // Collect absolute left/right edges of all cards (in container space)
  const allLeftEdges = cardBoxes.map((b) => b.left);
  const allRightEdges = cardBoxes.map((b) => b.left + b.width);

  interface CardFade {
    fadeLeft: boolean;
    fadeRight: boolean;
  }

  const cardFades: CardFade[] = cardBoxes.map((box) => {
    const absLeft = box.left;
    const absRight = box.left + box.width;

    // This card's left edge is interior if another card's right edge is close to it
    const fadeLeft = allRightEdges.some(
      (re, i) => cardBoxes[i] !== box && Math.abs(re - absLeft) < GAP_THRESHOLD
    );

    // This card's right edge is interior if another card's left edge is close to it
    const fadeRight = allLeftEdges.some(
      (le, i) => cardBoxes[i] !== box && Math.abs(le - absRight) < GAP_THRESHOLD
    );

    return { fadeLeft, fadeRight };
  });

  return (
    <div
      className="bento-laser-frame-cell"
      style={{ top: outerBox.top, left: outerBox.left, width: W, height: H }}
      aria-hidden="true"
    >
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
            Per-card mask: white (fully visible) across the card surface, with
            smooth linear fades to black (fully transparent) at interior edges.
            This gives the "laser dims into the gap" effect instead of a hard cut.
          */}
          {cardBoxes.map((box, i) => {
            const x = box.left - outerBox.left;
            const y = box.top - outerBox.top;
            const w = box.width;
            const h = box.height;
            const { fadeLeft, fadeRight } = cardFades[i];
            const maskId = `laser-fade-mask-${i}`;

            // Build gradient stop pairs for left/right fades.
            // The mask gradient goes: [black?] → white → white → [black?]
            // expressed as x-percentages across the card width.
            const leftFadeStop = fadeLeft ? (FADE_SIZE / w) * 100 : 0;
            const rightFadeStart = fadeRight ? ((w - FADE_SIZE) / w) * 100 : 100;

            return (
              <mask key={maskId} id={maskId} maskUnits="userSpaceOnUse">
                {/* Base: fully transparent everywhere */}
                <rect x={x} y={y} width={w} height={h} fill="black" />
                {/*
                  Horizontal fade gradient across this card.
                  Left fade: black→white over FADE_SIZE px from card left edge.
                  Right fade: white→black over FADE_SIZE px approaching card right edge.
                  No fade on an exterior edge (card touches the outer boundary).
                */}
                <defs>
                  <linearGradient
                    id={`${maskId}-grad`}
                    x1={x}
                    y1="0"
                    x2={x + w}
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor={fadeLeft ? "black" : "white"} />
                    {fadeLeft && (
                      <stop offset={`${leftFadeStop.toFixed(2)}%`} stopColor="white" />
                    )}
                    {fadeRight && (
                      <stop offset={`${rightFadeStart.toFixed(2)}%`} stopColor="white" />
                    )}
                    <stop offset="100%" stopColor={fadeRight ? "black" : "white"} />
                  </linearGradient>
                </defs>
                {/* Card surface: shows laser where the gradient is white */}
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx={R}
                  ry={R}
                  fill={`url(#${maskId}-grad)`}
                />
              </mask>
            );
          })}
        </defs>

        {/*
          Render three laser rects per card (l3/l2/l1 glow layers), each
          masked to that card's surface with soft edge fades.
          All three share the same outer-rect path so the animation is one
          continuous sweep around the bento boundary.
        */}
        {cardBoxes.map((_, i) => (
          <g key={i} mask={`url(#laser-fade-mask-${i})`}>
            <rect className="laser-l3" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
            <rect className="laser-l2" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
            <rect className="laser-l1" x={0} y={0} width={W} height={H} rx={R} ry={R} pathLength={100} />
          </g>
        ))}
      </svg>
    </div>
  );
}