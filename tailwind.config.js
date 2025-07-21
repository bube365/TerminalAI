/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-50": "#F9F5FF",
        "brand-600": "#7F56D9",
        "gray-600": "#535862",
        "gray-300": "#D5D7DA",
        "gray-500": "#717680",
        "gray-700": "#414651",
      },
    },
  },
  plugins: [],
};
