/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Blue
          dark: '#2563eb',
          light: '#93c5fd',
        },
        secondary: {
          DEFAULT: '#10b981', // Green
          dark: '#059669',
          light: '#6ee7b7',
        },
        danger: {
          DEFAULT: '#ef4444', // Red
          dark: '#dc2626',
          light: '#fca5a5',
        },
        warning: {
          DEFAULT: '#f59e0b', // Amber
          dark: '#d97706',
          light: '#fcd34d',
        },
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
};