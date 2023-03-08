/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        heartbeat: "heartbeat 1.5s alternate infinite",
      },
      keyframes: {
        heartbeat: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
