/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-one": "#6A61D9",
        "clr-two": "#824EA3",
        "clr-three": "#F46ED8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
