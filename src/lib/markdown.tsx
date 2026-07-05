import { ReactNode } from "react";

// ── Tiny markdown-lite renderer ──────────────────────────────────────────
// Supports just what the blog posts actually use: "## " headings, "- " list
// blocks, **bold**, *italic*, and plain paragraphs. Intentionally dependency
// -free — swap for a real markdown lib later if posts get more complex.

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

    // ── Heading ──
    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={key++}
          className="font-syne text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mt-9 sm:mt-10 mb-4 first:mt-0"
        >
          {line.replace("## ", "")}
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

    // ── Paragraph ──
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("- ")
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