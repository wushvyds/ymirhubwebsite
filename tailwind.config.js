/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080d',
          900: '#0c0c14',
          850: '#11111c',
          800: '#161625',
          700: '#1e1e31',
          600: '#2a2a42',
        },
        accent: {
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
        },
        blueish: {
          300: '#7dd3fc',
          400: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7.5xl': '84rem',
      },
    },
  },
  plugins: [],
};
