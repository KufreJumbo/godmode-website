import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Brand navy, sampled from GM logo.png
        navy: {
          DEFAULT: "#002160",
          950: "#030F2B",
          900: "#041740",
          800: "#002160",
          700: "#0B2F7A",
          600: "#1340A0",
        },
        // Royal blue: depth, links, interactive states
        blue: {
          50: "#EEF4FF",
          100: "#DCE8FF",
          200: "#B9D0FF",
          500: "#1D5BD6",
          600: "#174BB3",
        },
        // Brand gold, sampled from GM logo.png; used sparingly
        gold: {
          DEFAULT: "#DAB24F",
          50: "#FBF7EC",
          100: "#F7EFD8",
          200: "#EEDDA9",
          500: "#DAB24F",
          600: "#B8922F",
          700: "#8F6F1C",
        },
        ink: "#0B1220",
        slate: {
          DEFAULT: "#4B5565",
          600: "#4B5565",
          500: "#697586",
        },
        mist: "#F5F7FB",
        line: "#E4E8F0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.875rem, 3.6vw, 2.875rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0, 33, 96, 0.04), 0 8px 24px -12px rgba(0, 33, 96, 0.12)",
        "card-hover": "0 2px 4px rgba(0, 33, 96, 0.05), 0 20px 40px -16px rgba(0, 33, 96, 0.22)",
        glow: "0 0 0 1px rgba(218, 178, 79, 0.5), 0 12px 40px -10px rgba(218, 178, 79, 0.45)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(0,33,96,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,33,96,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "marquee-reverse": "marquee-reverse 48s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
