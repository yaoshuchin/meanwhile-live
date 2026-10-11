import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05090b',
        float: {
          DEFAULT: '#0a1114',
          hover: '#152228',
          active: '#1e343d',
          edge: '#1e2f36'
        },
        sky: {
          light: '#e4ecee',
          muted: '#93a6ac',
          accent: '#4fa8d8'
        }
      },
      fontSize: {
        '2xs': '0.6875rem', // 11px
        '3xs': '0.625rem',  // 10px
      }
    },
  },
  plugins: [],
};
export default config;
