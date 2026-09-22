import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f7f8fa",
          soft: "#eef1f5",
        },
        ink: {
          DEFAULT: "#0f1218",
          soft: "#1a1f2a",
          muted: "#5c6570",
          line: "#e4e7ec",
        },
        bone: {
          DEFAULT: "#ffffff",
          muted: "#f0f2f5",
        },
        mist: "#5c6570",
        signal: {
          DEFAULT: "#e8462f",
          soft: "#ff5c45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1180px",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(232,70,47,0.08), transparent 55%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(15,18,24,0.04), transparent 50%), linear-gradient(180deg, #ffffff 0%, #f7f8fa 100%)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        pill: "0 8px 32px rgba(15,18,24,0.08), 0 2px 8px rgba(15,18,24,0.04)",
        soft: "0 20px 50px -20px rgba(15,18,24,0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-zoom": {
          "0%": { opacity: "0", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "hero-zoom": "hero-zoom 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
