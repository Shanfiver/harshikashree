import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        maroon: {
          DEFAULT: '#7A0C2E',
          dark: '#4E0619',
          light: '#A31942',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E4C766',
          dark: '#9C7C1B',
        },
        cream: {
          DEFAULT: '#FBF3E7',
          dark: '#F3E6D3',
        },
        ink: '#241211',
      },
      backgroundImage: {
        'temple-arch': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A227' stroke-width='1' opacity='0.15'%3E%3Cpath d='M60 10 L60 110 M10 60 L110 60'/%3E%3Ccircle cx='60' cy='60' r='45'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
