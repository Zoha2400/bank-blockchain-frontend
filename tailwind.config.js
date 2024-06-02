/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset 6px -6px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
