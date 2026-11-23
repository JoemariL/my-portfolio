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
        'background-primary': '#0C0C0C',
        'background-secondary': '#31363F',
        canvas: '#0C0C0C',
        surface: '#18181B',
        divider: '#3F3F46',
        foreground: '#FAFAFA',
        muted: '#C4C4CC',
        accent: '#FDE047',
        'accent-soft': '#FEF08A'
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
