/** @type {import('tailwindcss').Config} */
import { Flowbite } from 'flowbite-react'
const flowbite = require("flowbite-react/tailwind");
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neutralGrey':'#717171',
        'gray900':'#18191F',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

