/** @type {import('tailwindcss').Config} */
export default {
  // Templates live in src/ as JS modules; the build writes static HTML to dist/.
  content: ['./src/**/*.{mjs,js,html}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        // Brand blue. Change DEFAULT/600 to rebrand the whole site.
        primary: {
          DEFAULT: '#1971c2',
          50: '#f3f8fd',
          100: '#e7f2fc',
          200: '#c7dff5',
          300: '#94c2ec',
          400: '#5ba1df',
          500: '#3086d0',
          600: '#1971c2',
          700: '#145a9c',
          800: '#134d84',
          900: '#12406c',
          950: '#0c2848',
        },
        // Dark navy used for text in light mode and surfaces in dark mode.
        ink: {
          DEFAULT: '#172033',
          900: '#172033',
          950: '#0c1322',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
    },
  },
  plugins: [],
};
