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

/*
  The CORE is built from several short "step" dashes laid end-to-end along
  the path, each with its own opacity, so the visible beam tapers in
  brightness along its length (dim -> bright center -> dim), not just
  across its width. The HALO is a SINGLE continuous dash, blurred — one
  smooth wash of glow behind the core.

  IMPORTANT FIX: every dasharray here is a clean "dash gap" pair (NEVER a
  leading 0). A dasharray that starts with a literal 0-length dash, combined
  with stroke-linecap:round, renders that zero-length dash as a small solid
  DOT (round caps draw a full circle at both ends of any dash, including a
  zero-length one) — that was the stray dot + "duplicate glow" bug. Instead,
  each step's position is set purely via its own static stroke-dashoffset
  (where it sits within the beam), and the WHOLE beam then travels by
  animating a single shared CSS custom property that every rect's dashoffset
  is calculated from — so there is exactly one moving thing, not a phantom
  second artifact riding along behind it.
*/
const PATH_TOTAL = 100; // pathLength is normalized to 0-100 on every rect
const BEAM_LENGTH = 14; // total length (in pathLength units) the tapered core occupies
const STEP_OPACITIES = [0.08, 0.2, 0.4, 0.65, 0.9, 1, 0.9, 0.65, 0.4, 0.2, 0.08];
const STEP_SIZE = BEAM_LENGTH / STEP_OPACITIES.length;
// const HALO_LENGTH = 8; // shorter + tighter than the core taper so glow concentrates near the hot center
const GAP_SIZE = PATH_TOTAL - STEP_SIZE; // dash + gap always sums to exactly one full lap

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

  const clipId = "laser-clip-outer";

  // Each step's FIXED position within the beam (relative offset from the
  // beam's leading edge). The shared animation then shifts ALL of these by
  // the same amount every frame via stroke-dashoffset, so they travel as
  // one rigid unit with no phantom dots and no possibility of drift.
  // const haloRelativeOffset = BEAM_LENGTH / 2 - HALO_LENGTH / 2;

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

          {/* Tight blur so the halo's visible spread stays smaller than the gap between cards */}
          <filter id="bento-glow-soft" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>

        <g clipPath={`url(#${clipId})`} shapeRendering="geometricPrecision">


          {/* CRISP CORE PASS — thin, bright, unblurred, tapered along its length */}
          {STEP_OPACITIES.map((op, i) => {
            const relativeOffset = i * STEP_SIZE;
            return (
              <rect
                key={`core-${i}`}
                className="laser-beam-core laser-beam-anim"
                x={0} y={0} width={W} height={H} rx={R} ry={R}
                pathLength={100}
                style={{
                  strokeDasharray: `${STEP_SIZE} ${GAP_SIZE}`,
                  strokeOpacity: op,
                  // @ts-expect-error custom property used by the keyframe below
                  "--step-offset": relativeOffset,
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}