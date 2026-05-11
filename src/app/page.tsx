import Link from "next/link";
import BentoCard from "@/components/ui/BentoCard";
import Marquee from "@/components/Marquee";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [motorpass, littleLion, elearning, grocery] = projects;

  return (
    <>
      <Marquee />

      <div className="w-full max-w-[1200px] mx-auto px-4 pb-12 pt-6">
        
        {/* ── FLAWLESS 4-COLUMN TETRIS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[170px] gap-4">

          {/* ── ROW 1 & 2 ── */}

          {/* 1. HERO — 2x2 (Takes 2 columns, 2 rows) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-end">
            <span
              className="font-mono"
              style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "auto" }}
            >
              Developer
            </span>
            <div>
              <div
                style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #7DF9A6 0%, #00D4AA 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 22, color: "#000", flexShrink: 0 }}
              >
                PJ
              </div>
              <h1 className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 34px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--text-primary)", marginBottom: 6 }}>
                Paul John<br />Punzal.
              </h1>
              <div className="font-mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.5px", marginBottom: 14 }}>
                // Full-Stack &amp; Mobile Developer
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>
                IT grad building real systems — from IoT campus gates to SPED school platforms. Comfortable across the stack, passionate about backend architecture and AI.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 14 }}>
                <div className="status-dot" />
                <span className="font-mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.5px" }}>
                  Available for opportunities
                </span>
              </div>
            </div>
          </BentoCard>

          {/* 2. GRADUATING — 1x1 */}
          <BentoCard className="flex flex-col justify-between">
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Education
            </span>
            <div>
              <div className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(28px, 3vw, 40px)", color: "var(--accent)", lineHeight: 1 }}>
                2026
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>Graduating May</div>
            </div>
            <div className="font-mono" style={{ fontSize: 9.5, color: "var(--text-muted)", letterSpacing: "0.3px", lineHeight: 1.5, marginTop: "auto" }}>
              BS Information Technology<br />PDM · Marilao, Bulacan
            </div>
          </BentoCard>

          {/* 3. LOCATION — 1x1 */}
          <BentoCard className="flex flex-col justify-between">
            <div>
              <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Based In
              </span>
              <div className="font-syne" style={{ fontSize: 14, fontWeight: 700, marginTop: 10, marginBottom: 3 }}>
                Marilao
              </div>
              <div className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>Bulacan, Philippines</div>
            </div>
            <span style={{ fontSize: 22, alignSelf: "flex-end" }}>📍</span>
          </BentoCard>

          {/* 4. GITHUB — 1x1 */}
          <BentoCard
            href="https://github.com/PaulNewbie"
            external
            className="flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #0c0c0c 0%, #101010 100%)" }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Open Source
              </span>
              <div className="font-mono" style={{ fontSize: 13, color: "var(--text-primary)", marginTop: 8 }}>@PaulNewbie</div>
              <div className="font-mono" style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 3 }}>github.com</div>
            </div>
            <span style={{ fontSize: 32, alignSelf: "flex-end" }}>⌥</span>
          </BentoCard>

          {/* 5. AI EXPLORATION — 1x1 */}
          <BentoCard
            className="flex flex-col justify-between"
            style={{ background: "linear-gradient(160deg, #0c0c0c 0%, #0a0f0c 100%)" }}
          >
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Focus
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 8 }}>
              {["🦙 LLaMA 3", "👁 YOLO Object Det.", "📄 AI OCR"].map((chip) => (
                <div key={chip} className="font-mono" style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 9px", background: "var(--accent-dim)", border: "1px solid rgba(125,249,166,0.12)", borderRadius: 7, fontSize: 10, color: "var(--accent)" }}>
                  {chip}
                </div>
              ))}
            </div>
          </BentoCard>


          {/* ── ROW 3 ── */}

          {/* 6. TECH STACK — 2x1 (Wide) */}
          <BentoCard className="md:col-span-2 flex flex-col">
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "auto" }}>
              Tech Stack
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
              {[
                { label: "Next.js", highlight: true }, { label: "React Native", highlight: true }, { label: "Flutter", highlight: true },
                { label: "TypeScript" }, { label: "Laravel" }, { label: "Python" }, { label: "PHP" }, { label: "Firebase" },
                { label: "MySQL" }, { label: "Prisma" }, { label: "C#" }, { label: "Dart" },
              ].map((t) => (
                <span key={t.label} className={`tech-pill font-mono${t.highlight ? " highlight" : ""}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 7. STAT: PROJECTS — 1x1 */}
          <BentoCard className="flex flex-col items-center justify-center text-center">
            <div className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(24px, 2.5vw, 32px)", color: "var(--text-primary)", lineHeight: 1 }}>
              <span style={{ color: "var(--accent)" }}>4</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5, letterSpacing: "0.5px" }}>PROJECTS</div>
          </BentoCard>

          {/* 8. STAT: LANGUAGES — 1x1 */}
          <BentoCard className="flex flex-col items-center justify-center text-center">
            <div className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(24px, 2.5vw, 32px)", color: "var(--text-primary)", lineHeight: 1 }}>
              <span style={{ color: "var(--accent)" }}>6</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5, letterSpacing: "0.5px" }}>LANGUAGES</div>
          </BentoCard>


          {/* ── ROW 4 & 5 ── */}

          {/* 9. MOTORPASS PROJECT — 2x2 (Takes 2 cols, 2 rows) */}
          <BentoCard href="/projects" accentHover className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: motorpass.iconBgStyle, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                {motorpass.emoji}
              </div>
              <div className="project-arrow">↗</div>
            </div>
            <div>
              <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 10, display: "block" }}>
                {motorpass.label}
              </span>
              <div className="font-syne" style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.2px", marginTop: 8, marginBottom: 4 }}>
                {motorpass.title}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55, fontWeight: 300 }}>
                {motorpass.shortDesc}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 12 }}>
              {motorpass.previewTags.map((tag) => (
                <span key={tag} className="font-mono" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "2px 7px", fontSize: 9, color: "var(--text-muted)", letterSpacing: "0.3px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 10. LITTLE LION — 1x1 */}
          <ProjectPreviewCard project={littleLion} />

          {/* 11. E-LEARNING — 1x1 */}
          <ProjectPreviewCard project={elearning} />

          {/* 12. GROCERY — 1x1 */}
          <ProjectPreviewCard project={grocery} />

          {/* 13. CONTACT PREVIEW — 1x1 */}
          <BentoCard className="flex flex-col justify-between">
            <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "auto" }}>
              Reach Out
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
              <a className="contact-row flex items-center gap-2" href="mailto:punzalpauljohn@gmail.com">
                <span style={{ fontSize: 14 }}>✉</span>
                <span className="font-mono" style={{ fontSize: 9, color: "var(--text-secondary)" }}>Email Me</span>
              </a>
              <a className="contact-row flex items-center gap-2" href="tel:09683295292">
                <span style={{ fontSize: 14 }}>📞</span>
                <span className="font-mono" style={{ fontSize: 9, color: "var(--text-secondary)" }}>0968-329-5292</span>
              </a>
            </div>
          </BentoCard>


          {/* ── ROW 6 ── */}

          {/* 14. CTA — 2x1 (Wide) */}
          <BentoCard
            className="md:col-span-4 lg:col-span-4 flex flex-col md:flex-row items-start md:items-end justify-between"
            href="/contact"
            style={{ background: "linear-gradient(135deg, rgba(125,249,166,0.08) 0%, rgba(0,212,170,0.04) 100%)", borderColor: "rgba(125,249,166,0.15)" }}
          >
            <div className="flex flex-col justify-between h-full">
              <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Hire me
              </span>
              <div className="font-syne" style={{ fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Let&apos;s build <em style={{ fontStyle: "normal", color: "var(--accent)" }}>together.</em>
              </div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14, background: "var(--accent)", color: "#000", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 12, letterSpacing: "0.3px", padding: "10px 24px", borderRadius: 50, transition: "all 0.2s" }}>
              Get in touch ↗
            </span>
          </BentoCard>

        </div>
      </div>
    </>
  );
}

/* ── LOCAL HELPER: Project Preview Bento Card ── */
function ProjectPreviewCard({ project, className = "" }: { project: (typeof projects)[0], className?: string }) {
  return (
    <BentoCard className={`flex flex-col justify-between ${className}`} href="/projects" accentHover>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: project.iconBgStyle, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
          {project.emoji}
        </div>
        <div className="project-arrow">↗</div>
      </div>
      <div>
        <span className="font-mono" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 10, display: "block" }}>
          {project.label}
        </span>
        <div className="font-syne" style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px", marginTop: 8, marginBottom: 4 }}>
          {project.title}
        </div>
      </div>
    </BentoCard>
  );
}