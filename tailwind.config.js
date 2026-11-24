/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#100F0D',
        'background-secondary': '#31363F',
        canvas: '#100F0D',
        surface: '#1B1814',
        divider: '#433827',
        foreground: '#F7F1E8',
        muted: '#C8BBAA',
        accent: '#CDA454',
        'accent-soft': '#E7C680'
      },
      container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
      },
      fontFamily: {
        body: ['Kanit', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: ['@tailwindcss/forms'],
});
