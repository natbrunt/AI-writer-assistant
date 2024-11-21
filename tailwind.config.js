/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/comps/*.{html,js}", "./src/comps/AI_writer/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

