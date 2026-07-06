import { ReactNode } from "react";

// ── Tiny markdown-lite renderer ──────────────────────────────────────────
// Supports: "## " headings, "- " list blocks, "> " pull-quotes, **bold**,
// *italic*, and plain paragraphs. Dependency-free by design.

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Used by the Table of Contents to read a post's headings without
// re-rendering the whole thing — must stay in sync with the h2 branch below.
export function extractHeadings(content: string): { id: string; text: string }[] {
  return content
    .trim()
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      return { id: slugify(text), text };
    });
}

function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.filter(Boolean).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="text-[var(--text-primary)] font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={`${keyPrefix}-${i}`} className="italic text-[rgb(var(--ink)/85%)]">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // ── Heading (now carries a stable id for anchor scrolling) ──
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "").trim();
      const id = slugify(text);
      blocks.push(
        <h2
          id={id}
          key={key++}
          className="font-syne text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mt-9 sm:mt-10 mb-4 first:mt-0 scroll-mt-28"
        >
          {text}
        </h2>
      );
      i++;
      continue;
    }

    // ── List block ──
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace(/^- /, ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="flex flex-col gap-3 my-5">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-2.5 items-start text-[15px] sm:text-[18px] text-[rgb(var(--ink)/80%)] leading-relaxed"
              style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
            >
              <span className="text-accent mt-1.5 shrink-0 text-[10px]">✦</span>
              <span>{parseInline(item, `li-${key}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // ── Pull-quote block — new "> " syntax ──
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].replace(/^> /, ""));
        i++;
      }
      blocks.push(
        <blockquote key={key++} className="my-8 sm:my-10 pl-6 sm:pl-8 border-l-[3px] border-accent/50 relative">
          <span
            aria-hidden="true"
            className="absolute -left-1 -top-3 font-syne text-5xl sm:text-6xl text-accent/15 select-none"
          >
            &ldquo;
          </span>
          <p
            className="font-syne text-[20px] sm:text-[26px] font-semibold text-[var(--text-primary)] leading-snug"
          >
            {parseInline(quoteLines.join(" "), `bq-${key}`)}
          </p>
        </blockquote>
      );
      continue;
    }

    // ── Paragraph ──
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ")
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p
        key={key++}
        className="text-[16px] sm:text-[19px] text-[rgb(var(--ink)/85%)] leading-[1.75] mb-5"
        style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
      >
        {parseInline(paraLines.join(" "), `p-${key}`)}
      </p>
    );
  }

  return <div>{blocks}</div>;
}