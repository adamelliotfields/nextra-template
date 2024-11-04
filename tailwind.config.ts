import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  content: ['./theme.config.tsx', './pages/**/*.{mdx,tsx}', './components/**/*.{mdx,tsx}'],
  plugins: [animate]
}

export default config
