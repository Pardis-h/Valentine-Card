/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom1:
          "inset 100px 20px 100px rgba(0,0,0,.15), 30px 0 50px rgba(0,0,0,0.3)",
        custom2:
          "inset 100px 20px 100px rgba(0,0,0,0.22), 100px 20px 100px rgba(0,0,0,0.1)",
        custom3: "30px 0 #dc2626",
        custom4: "-39px 0 #333",
      },
    },
  },
  plugins: [],
};
