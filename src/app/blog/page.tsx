"use client";

import { useEffect } from "react";
import { blogPosts } from "@/lib/data";
import BlogCard from "@/components/ui/BlogCard";
import { Cpu, Sparkles, Briefcase } from "lucide-react";

// Map each post's iconName to an actual icon element.
// Add an entry here whenever a new post introduces a new iconName.
const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-accent" strokeWidth={1.5} />, // unchanged — keep this one accent
  Sparkles: <Sparkles className="w-6 h-6 text-[rgb(var(--ink)/70%)]" strokeWidth={1.5} />,
  Briefcase: <Briefcase className="w-6 h-6 text-[rgb(var(--ink)/70%)]" strokeWidth={1.5} />,
};

export default function BlogPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-16 pt-6 animate-in fade-in duration-700">
      {/* Page Header — matches About/Contact pattern */}
      <div className="mb-8 pl-1">
        <p className="font-mono text-[9px] tracking-[2.5px] uppercase text-accent mb-1.5">
          Notes & Writing
        </p>
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
          Blog.
        </h1>
        <p className="font-inter text-sm text-[rgb(var(--ink)/50%)] font-light max-w-lg">
          Behind-the-scenes notes on the things I&apos;ve built, and what building them actually taught me.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            coverBgStyle={post.coverBgStyle}
            coverImage={post.coverImage}
            icon={iconMap[post.iconName]}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            readTime={post.readTime}
          />
        ))}
      </div>

      {/* ── Design credit — small and out of the way ── */}
      <div className="mt-14 pt-6 border-t border-[rgb(var(--ink)/6%)] text-center">
        <p className="font-mono text-[9px] tracking-[1px] text-[rgb(var(--ink)/20%)]">
          Blog layout inspired by{" "}
          <a
            href="https://bryllim.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--ink)/30%)] hover:text-accent transition-colors underline underline-offset-2"
          >
            bryllim.com/blog
          </a>
        </p>
      </div>
    </div>
  );
}