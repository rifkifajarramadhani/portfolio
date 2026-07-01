import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#1a1a2e',
        'secondary-bg': '#16213e',
        'accent-1': '#00f5c3',
        'accent-2': '#e94560',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
      },
    },
  },
  plugins: [tailwindAnimate],
}
export default config
