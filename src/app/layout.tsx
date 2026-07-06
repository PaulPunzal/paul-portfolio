import type { Metadata } from "next";
import { Syne, DM_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import "./globals.css";
import FloatingResume from "@/components/ui/FloatingResume";
import ThemeToggle from "@/components/ui/ThemeToggle";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PaulPunzal | Portfolio — Full-Stack Developer",
  description: "Portfolio of Paul John Punzal - Full-Stack & Mobile Developer",
};

// Runs before paint so the saved theme applies immediately —
// avoids a dark->light (or light->dark) flash on every page load.
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${syne.variable} ${dmMono.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-inter antialiased min-h-screen overflow-x-hidden flex flex-col">
        <Nav />
        <FloatingResume />
        <ThemeToggle className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] w-10 h-10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]" />

        {/* NEW: Wrapper container acts as a 'track' for the sticky navbar */}
        <div className="flex-1 flex flex-col relative w-full">
          <main className="pt-4 sm:pt-24 flex-1">
            {children}
          </main>

          {/* MobileNav placed at the very end of the track */}
          <MobileNav />
        </div>

        <Footer />
        <div id="page-end-sentinel" className="h-px w-full" aria-hidden="true" />
      </body>
    </html>
  );
}