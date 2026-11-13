import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <-- IMPORTANT POUR LE MODE SOMBRE
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: { DEFAULT: "#C04828", deep: "#8B2E14" },
        sand: "#F4EDE2",
        ivory: "#FDFBF7",
        charcoal: "#1A1A1A",
        stone: "#6B6560",
        gold: "#D4A574",
        brand: "#5c1c0d",
        brandDeep: "#3a1006",
        darkBg: "#121212",      // Pour le mode sombre
        darkSurface: "#1E1E1E", // Pour les cartes en mode sombre
      },
fontFamily: {
  fraunces: ["Fraunces", "Georgia", "serif"],
  inter: ["Inter", "system-ui", "sans-serif"],
},
      fontSize: {
        "h1": ["72px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h2": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h3": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        "8xl": "1280px",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(26,26,26,0.04), 0 4px 12px rgba(26,26,26,0.06)",
        "soft-lg": "0 2px 4px rgba(26,26,26,0.04), 0 12px 32px rgba(26,26,26,0.10)",
        "soft-xl": "0 4px 8px rgba(26,26,26,0.05), 0 24px 48px rgba(26,26,26,0.12)",
        "cta": "0 6px 20px rgba(192,72,40,0.28)",
        "cta-lg": "0 10px 30px rgba(192,72,40,0.36)",
      },
      borderRadius: {
        "card": "16px",
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.4,0,0.2,1) both",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;