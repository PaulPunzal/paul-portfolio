import Link from "next/link";
import BentoCard from "@/components/ui/BentoCard";
import Marquee from "@/components/Marquee";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [motorpass, littleLion, elearning, grocery] = projects;

  return (
    <>
      <Marquee />

      <div
        className="bento-wrapper"
        style={{ padding: "20px 20px 28px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div className="bento-grid">

          {/* ── 1. HERO — c4 r4 ── */}
          <BentoCard col="c4" row="r4" style={{ justifyContent: "flex-end" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "auto",
              }}
            >
              Developer
            </span>
            <div>
              {/* Avatar */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7DF9A6 0%, #00D4AA 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#000",
                  flexShrink: 0,
                }}
              >
                PJ
              </div>
              {/* Name */}
              <h1
                className="font-syne"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                Paul John
                <br />
                Punzal.
              </h1>
              {/* Tagline */}
              <div
                className="font-mono"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: "0.5px",
                  marginBottom: 14,
                }}
              >
                // Full-Stack &amp; Mobile Developer
              </div>
              {/* Bio */}
              <p
                style={{
                  fontSize: 12.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                IT grad building real systems — from IoT campus gates to SPED
                school platforms. Comfortable across the stack, passionate about
                backend architecture and AI.
              </p>
              {/* Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 14,
                }}
              >
                <div className="status-dot" />
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: "var(--accent)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Available for opportunities
                </span>
              </div>
            </div>
          </BentoCard>

          {/* ── 2. GRADUATING — c2 r2 ── */}
          <BentoCard col="c2" row="r2" style={{ justifyContent: "space-between" }}>
            <span
              className="font-mono"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Education
            </span>
            <div>
              <div
                className="font-syne"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                2026
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>
                Graduating May
              </div>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: 9.5,
                color: "var(--text-muted)",
                letterSpacing: "0.3px",
                lineHeight: 1.5,
                marginTop: "auto",
              }}
            >
              BS Information Technology
              <br />
              PDM · Marilao, Bulacan
            </div>
          </BentoCard>

          {/* ── 3. LOCATION — c2 r2 ── */}
          <BentoCard col="c2" row="r2" style={{ justifyContent: "space-between" }}>
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Based In
              </span>
              <div
                className="font-syne"
                style={{ fontSize: 14, fontWeight: 700, marginTop: 10, marginBottom: 3 }}
              >
                Marilao
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 11, color: "var(--text-muted)" }}
              >
                Bulacan, Philippines
              </div>
            </div>
            <span style={{ fontSize: 22, alignSelf: "flex-end" }}>📍</span>
          </BentoCard>

          {/* ── 4. MOTORPASS PROJECT — c4 r3 ── */}
          <BentoCard
            col="c4"
            row="r3"
            href="/projects"
            accentHover
            style={{ justifyContent: "space-between" }}
          >
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: motorpass.iconBgStyle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {motorpass.emoji}
              </div>
              <div className="project-arrow">↗</div>
            </div>
            {/* Info */}
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginTop: 10,
                  display: "block",
                }}
              >
                {motorpass.label}
              </span>
              <div
                className="font-syne"
                style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px", marginTop: 8, marginBottom: 4 }}
              >
                {motorpass.title}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.55, fontWeight: 300 }}>
                {motorpass.shortDesc}
              </div>
            </div>
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
              {motorpass.previewTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    padding: "2px 7px",
                    fontSize: 9,
                    color: "var(--text-muted)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* ── 5. GITHUB — c2 r2 ── */}
          <BentoCard
            col="c2"
            row="r2"
            href="https://github.com/PaulNewbie"
            external
            style={{
              justifyContent: "space-between",
              background: "linear-gradient(135deg, #0c0c0c 0%, #101010 100%)",
            }}
          >
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Open Source
              </span>
              <div
                className="font-mono"
                style={{ fontSize: 13, color: "var(--text-primary)", marginTop: 8 }}
              >
                @PaulNewbie
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 3 }}
              >
                github.com
              </div>
            </div>
            <span style={{ fontSize: 32, alignSelf: "flex-end" }}>⌥</span>
          </BentoCard>

          {/* ── 6. AI EXPLORATION — c2 r2 ── */}
          <BentoCard
            col="c2"
            row="r2"
            style={{
              justifyContent: "space-between",
              background: "linear-gradient(160deg, #0c0c0c 0%, #0a0f0c 100%)",
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              AI Exploration
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 8 }}>
              {["🦙 LLaMA 3 · Ollama", "👁 YOLO Object Det.", "📄 OCR Pipelines"].map((chip) => (
                <div
                  key={chip}
                  className="font-mono"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "5px 9px",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(125,249,166,0.12)",
                    borderRadius: 7,
                    fontSize: 10,
                    color: "var(--accent)",
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* ── 7. TECH STACK — c5 r2 ── */}
          <BentoCard col="c5" row="r2">
            <span
              className="font-mono"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "auto",
              }}
            >
              Tech Stack
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
              {[
                { label: "React / Next.js", highlight: true },
                { label: "React Native", highlight: true },
                { label: "Flutter", highlight: true },
                { label: "TypeScript" },
                { label: "Laravel" },
                { label: "Python" },
                { label: "PHP" },
                { label: "Firebase" },
                { label: "MySQL" },
                { label: "Prisma" },
                { label: "C#" },
                { label: "Dart" },
              ].map((t) => (
                <span
                  key={t.label}
                  className={`tech-pill font-mono${t.highlight ? " highlight" : ""}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* ── 8. STAT: PROJECTS — c1 r2 ── */}
          <BentoCard col="c1" row="r2" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div
              className="font-syne"
              style={{
                fontWeight: 800,
                fontSize: "clamp(24px, 2.5vw, 32px)",
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "var(--accent)" }}>4</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5, letterSpacing: "0.5px" }}>
              PROJECTS
            </div>
          </BentoCard>

          {/* ── 9. STAT: LANGUAGES — c1 r2 ── */}
          <BentoCard col="c1" row="r2" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div
              className="font-syne"
              style={{
                fontWeight: 800,
                fontSize: "clamp(24px, 2.5vw, 32px)",
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "var(--accent)" }}>6</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 5, letterSpacing: "0.5px" }}>
              LANGUAGES
            </div>
          </BentoCard>

          {/* ── 10. LITTLE LION — c3 r3 ── */}
          <ProjectPreviewCard project={littleLion} />

          {/* ── 11. E-LEARNING — c3 r3 ── */}
          <ProjectPreviewCard project={elearning} col="c3" />

          {/* ── 12. GROCERY — c2 r3 ── */}
          <ProjectPreviewCard project={grocery} col="c2" />

          {/* ── 13. CTA — c2 r3 ── */}
          <BentoCard
            col="c2"
            row="r3"
            href="/contact"
            style={{
              justifyContent: "flex-end",
              background: "linear-gradient(135deg, rgba(125,249,166,0.08) 0%, rgba(0,212,170,0.04) 100%)",
              borderColor: "rgba(125,249,166,0.15)",
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "auto",
              }}
            >
              Hire me
            </span>
            <div style={{ marginTop: "auto" }}>
              <div
                className="font-syne"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(18px, 2vw, 26px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.5px",
                }}
              >
                Let&apos;s
                <br />
                build{" "}
                <em style={{ fontStyle: "normal", color: "var(--accent)" }}>
                  together.
                </em>
              </div>
              <Link
                href="/contact"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 14,
                  background: "var(--accent)",
                  color: "#000",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.3px",
                  padding: "9px 18px",
                  borderRadius: 50,
                  textDecoration: "none",
                  alignSelf: "flex-start",
                  transition: "all 0.2s",
                }}
              >
                Get in touch ↗
              </Link>
            </div>
          </BentoCard>

          {/* ── 14. CONTACT PREVIEW — c4 r2 ── */}
          <BentoCard col="c4" row="r2">
            <span
              className="font-mono"
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "auto",
              }}
            >
              Contact
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
              <a className="contact-row" href="mailto:punzalpauljohn@gmail.com">
                <span style={{ fontSize: 14 }}>✉</span>
                <span className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                  punzalpauljohn@gmail.com
                </span>
              </a>
              <a className="contact-row" href="tel:09683295292">
                <span style={{ fontSize: 14 }}>📞</span>
                <span className="font-mono" style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                  0968-329-5292
                </span>
              </a>
            </div>
          </BentoCard>

        </div>
      </div>
    </>
  );
}

/* ── LOCAL HELPER: Project Preview Bento Card ── */
function ProjectPreviewCard({
  project,
  col = "c3",
}: {
  project: (typeof projects)[0];
  col?: string;
}) {
  return (
    <BentoCard
      col={col}
      row="r3"
      href="/projects"
      accentHover
      style={{ justifyContent: "space-between" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: project.iconBgStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {project.emoji}
        </div>
        <div className="project-arrow">↗</div>
      </div>
      <div>
        <span
          className="font-mono"
          style={{
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginTop: 10,
            display: "block",
          }}
        >
          {project.label}
        </span>
        <div
          className="font-syne"
          style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.2px", marginTop: 8, marginBottom: 4 }}
        >
          {project.title}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.55, fontWeight: 300 }}>
          {project.shortDesc}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
        {project.previewTags.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: 4,
              padding: "2px 7px",
              fontSize: 9,
              color: "var(--text-muted)",
              letterSpacing: "0.3px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}