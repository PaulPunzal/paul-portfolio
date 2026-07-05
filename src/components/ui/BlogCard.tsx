import Link from "next/link";
import { ReactNode } from "react";

interface BlogCardProps {
  href: string;
  coverBgStyle: string;
  icon: ReactNode;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export default function BlogCard({
  href,
  coverBgStyle,
  icon,
  date,
  title,
  excerpt,
  readTime,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-bento border border-[rgb(var(--ink)/7%)] bg-[var(--surface-1)] overflow-hidden hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
    >
      {/* ── Placeholder cover — swap for a real <Image> once you have one ── */}
      <div
        className="relative h-40 sm:h-44 flex items-center justify-center overflow-hidden shrink-0"
        style={{ background: coverBgStyle }}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        <div className="relative w-14 h-14 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <span className="font-mono text-[9px] tracking-[1.8px] uppercase text-[rgb(var(--ink)/40%)] mb-2.5">
          {date}
        </span>
        <h3 className="font-syne font-bold text-lg text-[var(--text-primary)] mb-2 leading-snug group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-inter text-[13px] text-[rgb(var(--ink)/50%)] leading-relaxed font-light line-clamp-2 mb-4">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1px] text-[rgb(var(--ink)/30%)]">
          <span>Read</span>
          <span className="w-1 h-1 rounded-full bg-[rgb(var(--ink)/20%)]" />
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}