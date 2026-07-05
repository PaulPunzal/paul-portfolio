"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderArchive, Newspaper, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [isDocked, setIsDocked] = useState(false); // ← NEW

  // ── SMART MOUNTING LOGIC ──
  useEffect(() => {
    if (pathname !== "/") {
      setIsReady(true);
      return;
    }
    const handleReveal = () => setIsReady(true);
    window.addEventListener("revealNav", handleReveal);
    const timer = setTimeout(() => setIsReady(true), 1500);
    return () => {
      window.removeEventListener("revealNav", handleReveal);
      clearTimeout(timer);
    };
  }, [pathname]);

  // ── DOCK DETECTION (mobile only — watches the page-end sentinel) ──
  useEffect(() => {
    const sentinel = document.getElementById("page-end-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsDocked(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderArchive },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  return (
    <>
      {/* ── DESKTOP NAVBAR (unchanged) ── */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 z-50 w-[95%] max-w-2xl"
        initial={{ x: "-50%", scaleX: 0, opacity: 0 }}
        animate={{ x: "-50%", scaleX: isReady ? 1 : 0, opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
      >
        <nav className="flex items-center justify-between px-3 py-2 bg-[var(--surface-1)]/50 backdrop-blur-md border border-[rgb(var(--ink)/10%)] rounded-full shadow-2xl shadow-black/50">
          <Link href="/" className="font-syne font-bold text-[var(--text-primary)] text-xl ml-3 tracking-tighter group flex items-center gap-1">
            PJ<span className="text-accent group-hover:animate-pulse">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[rgb(var(--ink)/5%)] p-1 rounded-full border border-[rgb(var(--ink)/5%)] mr-2">
              {navLinks.map((link) => {
                // Exact match for Home so it doesn't light up everywhere;
                // prefix match for the rest so nested routes like
                // /blog/some-post still highlight "Blog".
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-mono tracking-[1px] uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-[rgb(var(--ink)/10%)] text-[var(--text-primary)]"
                        : "text-[rgb(var(--ink)/40%)] hover:text-[var(--text-primary)] hover:bg-[rgb(var(--ink)/5%)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <ThemeToggle className="mr-1" />
            <Link href="/contact" className="font-mono text-[11px] uppercase tracking-[1px] font-bold text-[var(--text-inverse)] bg-accent px-5 py-2.5 rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300">
              Contact Me
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}