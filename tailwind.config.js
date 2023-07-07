/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F5F8",
        accent: {
          purple: "#7378D9",
          green: "#04BF9D",
          red: "#F46A82",
        },
        color: {
          default: "#3F3747",
          muted: "#8B8C95",
        },
        backdrop: {
          purple: "#E1E1EF",
        },
        input: {
          border: "#b2b2bf",
          disabled: "#E1E1EF",
        }
      },
    },
    screens: {
      'sm': '640px',
      'md': '821px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
