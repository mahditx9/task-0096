/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#007bff",
        "blue-dark": "#0056b3",
        dark: "#212529",
        light: "#F6F6F6",
        "gray-dark": "#343a40",
        "green-light": "#20c997",
        "green-dark": "#28a745",
        "gray-light": "#ABABAB",
        "danger-light": "#da3b3b",
        "danger-dark": "#c91c05",
        orange: "#fd7e14",
        gold: "#ffc107",
      },
      screens: {
        mobile: "500px",
        tablet: "700px",
        desktop: "1000px",
      },
      borderRadius: {
        ld: "18px",
      },
    },
  },
  plugins: [],
};
