"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderArchive, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

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
  ];

  const NAV_HEIGHT = 76;

  return (
    <>
      {/* Spacer — only needed while nav floats fixed, to reserve its place */}
      {!isDocked && (
        <div
          className="sm:hidden"
          style={{ height: `calc(${NAV_HEIGHT}px + env(safe-area-inset-bottom))` }}
          aria-hidden="true"
        />
      )}

      {/* Single motion.div — only ever animates scaleX/opacity once on mount.
          Positioning is handled purely by Tailwind classes, no manual transform,
          so toggling isDocked never replays the entrance animation. */}
      <motion.div
        className={`sm:hidden w-[90%] max-w-[400px] z-50 ${
          isDocked
            ? "relative mx-auto mb-6"
            : "fixed bottom-6 left-1/2 -translate-x-1/2"
        }`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isReady ? 1 : 0, opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
      >
        <nav className="flex items-center justify-between px-2 py-2 bg-[#0c0c0c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-accent" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className="font-mono text-[8px] uppercase tracking-[1px]">{link.name}</span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 ${
              pathname === "/contact" ? "bg-accent/20 text-accent" : "text-accent/80 hover:text-accent"
            }`}
          >
            <Mail className="w-4 h-4" strokeWidth={pathname === "/contact" ? 2.5 : 2} />
            <span className="font-mono text-[8px] uppercase tracking-[1px]">Contact</span>
          </Link>
        </nav>
      </motion.div>
    </>
  );
}