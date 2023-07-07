/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#512acc",
        tertiary: "#ffffff",
        "background-grey": "#f5f5f5",
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
  plugins: [],
};
