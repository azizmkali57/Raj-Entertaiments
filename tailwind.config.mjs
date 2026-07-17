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
        ink: {
          DEFAULT: "#0a0908",
          soft: "#121110",
          raised: "#1a1816",
          line: "rgba(244, 240, 232, 0.1)",
        },

        bone: {
          DEFAULT: "#f4f0e8",
          muted: "rgba(244, 240, 232, 0.65)",
          faint: "rgba(244, 240, 232, 0.4)",
        },

        crimson: {
          DEFAULT: "#c0342d",
          bright: "#e0453b",
          deep: "#7a1f1c",
          glow: "rgba(192, 52, 45, 0.35)",
        },

        bg: "#050505",
        surface: "#0D0D0D",
        card: "#111111",
        primaryRed: "#B71C1C",
        accentGlow: "#E53935",
        muted: "#9A9A9A",
        gold: "#B48A45",
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

      backgroundImage: {
        "stage-glow":
          "radial-gradient(60% 50% at 68% 40%, rgba(192,52,45,0.22), transparent 70%)",

        vignette:
          "radial-gradient(120% 100% at 50% 0%, transparent 40%, rgba(10,9,8,0.9) 100%)",
      },

      keyframes: {
        "bounce-y": {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(10px)",
            opacity: "0.5",
          },
        },

        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(28px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        "pulse-ring": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1.6)",
            opacity: "0",
          },
        },
      },

      animation: {
        "bounce-y": "bounce-y 2.2s ease-in-out infinite",
        "fade-up":
          "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;