/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '896px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1440px',
      '2xl': '1920px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'deal_of_the_day_bg': "url('../public/assets/deal_of_the_day_bg.png')",
        // 'appinfo_bg': "url('../public/assets/appinfo_bg.png')",
      },
      colors: {},
    },
  },
  plugins: [],
}

