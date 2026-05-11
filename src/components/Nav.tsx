"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    // Fixed container that centers the navbar at the top of the screen
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      
      {/* The Glassmorphism Pill */}
      <nav className="flex items-center justify-between px-3 py-2 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/50">
        
        {/* Left: Logo */}
        <Link href="/" className="font-syne font-bold text-white text-xl ml-3 tracking-tighter group flex items-center gap-1">
          PJ<span className="text-accent group-hover:animate-pulse">.</span>
        </Link>

        {/* Center/Right: Links & CTA */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Navigation Links (Hidden on tiny mobile, visible on sm+) */}
          <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 mr-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono tracking-[1px] uppercase transition-all duration-300 ${
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Let's Talk CTA */}
          <Link
            href="/contact"
            className="font-mono text-[11px] uppercase tracking-[1px] font-bold text-[#000] bg-accent px-5 py-2.5 rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

      </nav>
    </div>
  );
}