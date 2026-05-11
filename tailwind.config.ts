import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        accent: "#7DF9A6",
        "accent-dim": "rgba(125,249,166,0.12)",
        "card-bg": "#0c0c0c",
        "card-hover": "#111111",
      },
      borderRadius: {
        bento: "18px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.75)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.5s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "fade-up": "fade-up 0.4s ease both",
      },
    },
  },
  plugins: [],
};

export default config;