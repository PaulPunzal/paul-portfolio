// src/components/MobileNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderArchive, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderArchive },
  ];

  return (
    /* CHANGED: z-[100] is now z-50 so that it correctly hides behind 
       the z-[100] black overlay of the Splash Screen until it fades out!
    */
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