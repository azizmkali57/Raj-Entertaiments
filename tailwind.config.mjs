/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },

    extend: {
      colors: {
        // Warm near-black — never pure #000, keeps the palette from going cold
        ink: {
          DEFAULT: "#0a0908",
          soft: "#121110",
          raised: "#1a1816",
          line: "rgba(244, 240, 232, 0.1)",
        },

        // Warm off-white, used for body text and light surfaces
        bone: {
          DEFAULT: "#f4f0e8",
          muted: "rgba(244, 240, 232, 0.65)",
          faint: "rgba(244, 240, 232, 0.4)",
        },

        // Auspicious red — primary accent, CTAs, emphasis
        crimson: {
          DEFAULT: "#c0342d",
          bright: "#e0453b",
          deep: "#7a1f1c",
          glow: "rgba(192, 52, 45, 0.35)",
        },

        // Brass/metal gold — secondary accent, borders, icon fills
        gold: {
          DEFAULT: "#b48a45",
          soft: "#c9a666",
          deep: "#8a6a32",
        },

        // Pale warm gold-cream — the quiet accent (scrollbar thumb, hairlines,
        // anywhere `gold` would be too loud)
        champagne: "#d9c9a3",
      },

      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },

      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.4em",
      },

      borderRadius: {
        luxury: "20px",
        "luxury-btn": "999px",
      },

      boxShadow: {
        "luxury-sm": "0 1px 2px rgba(10,9,8,0.06), 0 4px 12px rgba(10,9,8,0.08)",
        luxury: "0 8px 24px rgba(10,9,8,0.18), 0 2px 8px rgba(10,9,8,0.12)",
        "luxury-hover": "0 12px 32px rgba(192,52,45,0.25), 0 4px 16px rgba(10,9,8,0.2)",
      },

      backgroundImage: {
        "stage-glow":
          "radial-gradient(60% 50% at 68% 40%, rgba(192,52,45,0.22), transparent 70%)",

        vignette:
          "radial-gradient(120% 100% at 50% 0%, transparent 40%, rgba(10,9,8,0.9) 100%)",

        "luxury-gradient":
          "linear-gradient(to right, rgba(10,9,8,0.9) 0%, rgba(10,9,8,0.6) 28%, rgba(10,9,8,0.2) 52%, transparent 72%)",

        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },

      keyframes: {
        "bounce-y": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(10px)", opacity: "0.5" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },

      animation: {
        "bounce-y": "bounce-y 2.2s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;