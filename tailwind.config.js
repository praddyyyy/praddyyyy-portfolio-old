/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Orbitron', 'sans-serif'],
      secondary: ['Rajdhani', 'sans-serif'],
      tertiary: ['Aldrich', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        // "site": "url('/portfolio-next-js/site-bg.jpg')", // For production
        "site": "url('/site-bg.jpg')", // For development
      },
    },
  },
  plugins: [],
};