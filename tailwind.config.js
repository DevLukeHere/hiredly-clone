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
  plugins: [],
};
