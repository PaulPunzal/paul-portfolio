import type { Metadata } from "next";
import { Syne, DM_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";
import FloatingResume from "@/components/ui/FloatingResume";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${syne.variable} ${dmMono.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-black text-[#f0f0f0] min-h-screen overflow-x-hidden">
        <Nav />
        <FloatingResume />
        <main className="pt-4 sm:pt-24 pb-28 lg:pb-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}