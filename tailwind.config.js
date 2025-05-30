/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
        switzer: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
