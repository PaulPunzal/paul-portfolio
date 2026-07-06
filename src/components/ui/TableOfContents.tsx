"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToHeading } from "@/lib/useActiveHeading";

interface Heading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  activeId: string;
  variant: "sidebar" | "mobile";
}

export default function TableOfContents({ headings, activeId, variant }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  if (headings.length < 2) return null;

  if (variant === "sidebar") {  
    return (
      <aside className="hidden lg:block w-[220px] shrink-0 self-start sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <nav className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] tracking-[2px] uppercase text-[rgb(var(--ink)/35%)] mb-3 pl-3.5">
            On This Page
            </span>
            {headings.map((h) => {
            const isActive = h.id === activeId;
            return (
                <button
                key={h.id}
                onClick={() => scrollToHeading(h.id)}
                className={`text-left font-inter text-[12.5px] leading-snug pl-3.5 py-1.5 border-l-2 transition-colors duration-200 cursor-pointer ${
                    isActive
                    ? "border-accent text-[var(--text-primary)] font-medium"
                    : "border-[rgb(var(--ink)/8%)] text-[rgb(var(--ink)/40%)] hover:text-[rgb(var(--ink)/70%)] hover:border-[rgb(var(--ink)/25%)]"
                }`}
                >
                {h.text}
                </button>
            );
            })}
        </nav>
      </aside>
    );
  }

  return (
    <div className="lg:hidden mb-8 rounded-xl border border-[rgb(var(--ink)/8%)] bg-[rgb(var(--ink)/2%)] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer"
      >
        <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-[rgb(var(--ink)/50%)]">
          On This Page
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[rgb(var(--ink)/40%)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-4 pb-3 flex flex-col gap-0.5 border-t border-[rgb(var(--ink)/6%)] pt-2">
          {headings.map((h) => {
            const isActive = h.id === activeId;
            return (
              <button
                key={h.id}
                onClick={() => {
                  setOpen(false);
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => scrollToHeading(h.id));
                  });
                }}
                className={`text-left font-inter text-[13px] py-1.5 transition-colors ${
                  isActive ? "text-accent font-medium" : "text-[rgb(var(--ink)/60%)]"
                }`}
              >
                {h.text}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}