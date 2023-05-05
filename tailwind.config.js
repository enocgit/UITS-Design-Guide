/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'xs4': '286px',

      'sm3': '340px',

      // 'xs5': '470px',
      
      // 'xs': '522px',

      'sm2': '570px',

      // 'xs2': '603px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // 'smp': '721px',
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      // 'mdp2': '758px',

      // 'mdp3': '848px',

      // 'mdp': '993px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // 'xlp2': '1229px',

      // 'xlp': '1344px',

      '2xl': '1536px',

      '3xl': '1828px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
  ],
}

