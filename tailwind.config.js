/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#100F0D',
        surface: '#1B1814',
        divider: '#433827',
        foreground: '#F7F1E8',
        muted: '#C8BBAA',
        accent: '#CDA454',
        'accent-soft': '#E7C680',
      },
      fontFamily: {
        body: ['Kanit', 'system-ui', 'sans-serif'],
      },
    },
  },
};
