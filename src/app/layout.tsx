import type { Metadata } from "next";
import { Syne, DM_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

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
  title: "Paul John Punzal — Full-Stack Developer",
  description:
    "IT graduate building real-world systems across web, mobile, and IoT. Full-Stack & Mobile Developer based in Marilao, Bulacan.",
  keywords: [
    "Paul John Punzal",
    "Full-Stack Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "Flutter",
    "Philippines",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-black text-[#f0f0f0] min-h-screen overflow-x-hidden">
        <Nav />
        <main className="pt-4 sm:pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}