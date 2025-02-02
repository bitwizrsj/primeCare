/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite', // Custom animation duration
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },  // Starts from the right (off-screen)
          '100%': { transform: 'translateX(-50%)' }, // Ends to the left (off-screen)
        },
      }
    },
  },
  plugins: [],
}

