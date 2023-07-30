/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#222222",
        secondary: "#512acc",
        tertiary: "#ffffff",
        "background-grey": "#f5f5f5",
        "disabled-grey": "#d8d8d8",
        "hover-purple": "#40249b",
        "button-black": "#2e2e2e",
        "button-green": "#6ec197",
        "hover-green": "#37b074",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        "desktop-wide": "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
