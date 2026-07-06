"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { MarkdownContent, extractHeadings } from "@/lib/markdown";
import { useActiveHeading } from "@/lib/useActiveHeading";
import TableOfContents from "@/components/ui/TableOfContents";
import ReadingProgress from "@/components/ui/ReadingProgress";
import { ArrowLeft, Link2, Check, Cpu, Sparkles, Briefcase } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7 text-accent" strokeWidth={1.5} />,
  Sparkles: <Sparkles className="w-7 h-7 text-[rgb(var(--ink)/70%)]" strokeWidth={1.5} />,
  Briefcase: <Briefcase className="w-7 h-7 text-[rgb(var(--ink)/70%)]" strokeWidth={1.5} />,
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const articleRef = useRef<HTMLElement>(null);

  const headings = useMemo(() => (post ? extractHeadings(post.content) : []), [post]);
  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const activeId = useActiveHeading(headingIds);

  const totalMinutes = useMemo(() => {
    if (!post) return 1;
    const match = post.readTime.match(/\d+/);
    return match ? parseInt(match[0], 10) : 5;
  }, [post]);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  if (!post) {
    return (
      <div className="w-full max-w-[720px] mx-auto px-4 py-24 text-center">
        <p className="font-syne text-2xl font-bold text-[var(--text-primary)] mb-3">Post not found</p>
        <Link href="/blog" className="font-mono text-xs text-accent uppercase tracking-widest">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;

    const href = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(href);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = href;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Copy link failed", error);
    }
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-4 pb-16 pt-6 animate-in fade-in duration-700">
      <ReadingProgress
        targetRef={articleRef}
        title={post.title}
        totalMinutes={totalMinutes}
        headings={headings}
        activeId={activeId}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1.5px] text-[rgb(var(--ink)/50%)] hover:text-accent transition-colors mb-6"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        All posts
      </Link>

      <div className="lg:flex lg:items-start lg:justify-center lg:gap-10">
        <TableOfContents headings={headings} activeId={activeId} variant="sidebar" />

        <article
          ref={articleRef}
          className="bg-[var(--surface-1)] border border-[rgb(var(--ink)/7%)] rounded-bento overflow-hidden w-full max-w-[820px]"
        >
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[1.5px] text-[rgb(var(--ink)/50%)] mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[rgb(var(--ink)/25%)]" />
              <span>{post.readTime} read</span>
            </div>

            <h1 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
              {post.title}
            </h1>
            <p className="font-inter text-[15px] sm:text-base text-[rgb(var(--ink)/70%)] leading-relaxed font-light mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pb-6 mb-8 border-b border-[rgb(var(--ink)/7%)]">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[rgb(var(--ink)/10%)] relative shrink-0">
                <Image
                  src="/gradpic/profile.JPG"
                  alt="Paul John Punzal"
                  fill
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>
              <span className="font-mono text-xs text-[rgb(var(--ink)/80%)]">Paul John Punzal</span>
            </div>

            <TableOfContents headings={headings} activeId={activeId} variant="mobile" />

            <div
              className="relative h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden flex items-center justify-center mb-9 border border-[rgb(var(--ink)/7%)]"
              style={post.coverImage ? undefined : { background: post.coverBgStyle }}
            >
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 820px) 100vw, 820px"
                  className="object-cover object-center"
                  priority
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-[rgb(var(--ink)/10%)] backdrop-blur-sm border border-[rgb(var(--ink)/15%)] flex items-center justify-center">
                  {iconMap[post.iconName]}
                </div>
              )}
            </div>

            <MarkdownContent content={post.content} />

            <div className="flex items-center justify-between pt-8 mt-4 border-t border-[rgb(var(--ink)/7%)]">
              <Link
                href="/blog"
                className="font-mono text-[10px] uppercase tracking-[1.5px] text-[rgb(var(--ink)/50%)] hover:text-accent transition-colors"
              >
                ← All posts
              </Link>
              <button
                onClick={handleCopyLink}
                className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1.5px] transition-colors cursor-pointer ${
                  copied ? "text-accent" : "text-[rgb(var(--ink)/50%)] hover:text-accent"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Link2 className="w-3.5 h-3.5" />
                    Copy link
                  </>
                )}
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}