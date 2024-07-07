import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'code-bg': '#2a2e34',
        'interact-border': '#CCD0D6'
      },
    },
  },
  plugins: [],
}

export default config