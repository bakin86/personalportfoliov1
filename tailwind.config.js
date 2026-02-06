/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'yapari': ['Yapari', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'drowner': ['Drowner', 'sans-serif'],
        'display': ['Yapari', 'cursive'],
        'mono': ['Drowner', 'monospace'],
        'body': ['Coolvetica', 'sans-serif'],
      },
      colors: {
        brutal: {
          black: '#0a0a0a',
          white: '#ffffff',
          red: '#ff0000',
          'red-dark': '#cc0000',
          'red-light': '#ff3333',
          gray: '#1a1a1a',
          'gray-light': '#2a2a2a',
          'light-bg': '#fafafa',
          'light-text': '#0a0a0a',
        }
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
