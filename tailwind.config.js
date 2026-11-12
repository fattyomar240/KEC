/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D6E1EF',
          200: '#AEC3DE',
          300: '#7F9FC8',
          400: '#4F77A8',
          500: '#2F5A8C',
          600: '#1F4272',
          700: '#163257',
          800: '#10243F',
          900: '#0A1A2F',
          950: '#050E1B',
        },
        amber: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE38A',
          300: '#FFD452',
          400: '#FFC526',
          500: '#FFB300',
          600: '#E09A00',
          700: '#B57A00',
          800: '#8A5D00',
          900: '#5E3F00',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 26, 47, 0.06), 0 8px 24px -12px rgba(10, 26, 47, 0.18)',
        lift: '0 2px 4px rgba(10, 26, 47, 0.08), 0 24px 48px -16px rgba(10, 26, 47, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
