/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6366f1",
          600: "#4f46e5",
        },

        background: {
          DEFAULT: "#0b0f19",
          secondary: "#111827",
          tertiary: "#1f2937",
        },

        neutral: {
          400: "#a1a1aa",
          600: "#52525b",
        },
      },

      boxShadow: {
        glow: "0 0 20px rgba(99,102,241,0.4)",
        "glow-white": "0 0 20px rgba(255,255,255,0.2)",
        card: "0 10px 30px rgba(0,0,0,0.5)",
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },

  plugins: [],
};