"use client";
import { useEffect, useState } from "react";

export function useActiveHeading(headingIds: string[]) {
  const [activeId, setActiveId] = useState<string>(headingIds[0] ?? "");

  useEffect(() => {
    if (headingIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
}


// Scroll to a heading with a smooth animation, offsetting the scroll position by 96px to account for the fixed header.
// Used in files: src/components/ui/ReadingProgress.tsx, src/components/ui/TableOfContents.tsx
export function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}