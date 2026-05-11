"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderArchive, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderArchive },
  ];

  return (
    <>
      {/* ── DESKTOP & TABLET NAVBAR (Hidden on mobile) ── */}
      <div className="hidden sm:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
        <nav className="flex items-center justify-between px-3 py-2 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/50">
          
          {/* Logo */}
          <Link href="/" className="font-syne font-bold text-white text-xl ml-3 tracking-tighter group flex items-center gap-1">
            PJ<span className="text-accent group-hover:animate-pulse">.</span>
          </Link>

          {/* Links & CTA */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 mr-2">
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

            <Link
              href="/contact"
              className="font-mono text-[11px] uppercase tracking-[1px] font-bold text-[#000] bg-accent px-5 py-2.5 rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </nav>
      </div>

      {/* ── MOBILE BOTTOM NAVBAR (Visible only on mobile) ── */}
      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        <nav className="flex items-center justify-between px-2 py-2 bg-[#0c0c0c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-accent" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className="font-mono text-[8px] uppercase tracking-[1px]">{link.name}</span>
              </Link>
            );
          })}
          
          {/* Let's Talk Mobile Icon */}
          <Link
            href="/contact"
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-full transition-all duration-300 ${
              pathname === "/contact" 
                ? "bg-accent/20 text-accent" 
                : "text-accent/80 hover:text-accent"
            }`}
          >
            <Mail className="w-4 h-4" strokeWidth={pathname === "/contact" ? 2.5 : 2} />
            <span className="font-mono text-[8px] uppercase tracking-[1px]">Contact</span>
          </Link>
        </nav>
      </div>
    </>
  );
}