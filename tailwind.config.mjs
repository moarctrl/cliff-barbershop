/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdebd4',
          200: '#fad7ac',
          300: '#f6bc79',
          400: '#f19645',
          500: '#ed7720',
          600: '#df5d13',
          700: '#b8440f',
          800: '#933715',
          900: '#763013',
        },
        dark: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
