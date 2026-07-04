// src/components/MobileNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderArchive, Newspaper, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Blog POST pages (e.g. /blog/my-post) get a reading-mode nav — collapsed
  // into a single floating burger button instead of the full bottom dock.
  // The /blog listing page itself keeps the normal dock.
  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog";

  useEffect(() => {
    // 1. If not on the home page, show immediately
    if (pathname !== "/") {
      setIsReady(true);
      return;
    }

    // 2. Listen strictly for the Splash Screen to announce it's finished
    const handleReveal = () => setIsReady(true);
    window.addEventListener("revealNav", handleReveal);

    // 3. Cleanup listener
    return () => {
      window.removeEventListener("revealNav", handleReveal);
    };
  }, [pathname]);

  // Close the burger menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderArchive },
    { name: "Blog", href: "/blog", icon: Newspaper },
  ];

  // ── READING MODE: floating burger, only on individual blog posts ──
  if (isBlogPost) {
    return (
      <div className="sm:hidden fixed bottom-6 right-4 z-50">
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-16 right-0 w-44 bg-[#0c0c0c]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col gap-0.5"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-mono text-[11px] uppercase tracking-[1px] transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-accent" : ""}`} />
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="flex items-center gap-2.5 px-3 py-2.5 mt-0.5 pt-3 border-t border-white/5 rounded-xl font-mono text-[11px] uppercase tracking-[1px] text-accent hover:bg-accent/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setMenuOpen((v) => !v)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isReady ? 1 : 0, opacity: isReady ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-12 rounded-full bg-[#0c0c0c]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-white/80" />
          ) : (
            <Menu className="w-5 h-5 text-white/80" />
          )}
        </motion.button>
      </div>
    );
  }

  // ── NORMAL DOCK: everywhere else ──
  return (
    <div className="sm:hidden sticky bottom-6 w-full flex justify-center z-50 mt-8 mb-2 pointer-events-none">
      <motion.div
        className="w-[90%] max-w-[400px] pointer-events-auto"
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
    </div>
  );
}