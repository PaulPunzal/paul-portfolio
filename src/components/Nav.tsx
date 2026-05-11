"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7"
      style={{
        height: "var(--nav-height)",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-syne font-black text-[17px] tracking-[-0.3px] text-[#f0f0f0] no-underline flex items-center gap-2"
      >
        PJ<span style={{ color: "var(--accent)" }}>.</span>
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-1 list-none">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="hidden sm:block">
              <Link
                href={href}
                className="text-[13px] font-medium tracking-[0.3px] px-[14px] py-[6px] rounded-[20px] transition-all duration-200 no-underline"
                style={{
                  color: isActive ? "#f0f0f0" : "var(--text-secondary)",
                  background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "#f0f0f0";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}

        {/* CTA */}
        <li>
          <Link
            href="/contact"
            className="text-[13px] font-semibold tracking-[0.3px] px-[18px] py-[8px] rounded-[20px] transition-all duration-200 no-underline ml-1 inline-block"
            style={{
              background: "var(--accent)",
              color: "#000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#9DFFBF";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Let&apos;s Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
}