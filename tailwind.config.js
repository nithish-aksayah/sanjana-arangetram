/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#5D2A8E', // Indigo/Purple from the image
          light: '#7B45B3',
          dark: '#411D63',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F9D71C',
          dark: '#B8860B',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5DC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'], // For the elegant titles
      },
    },
  },
  plugins: [],
}
