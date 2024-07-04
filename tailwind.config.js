/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    ...[
      '#5EBF8A',
      '#3C83FF',
      '#9747FF',
      '#FF7A00',
      '#00D179',
      '#11DCCA',
      '#FFE600',
      '#4A8CFF',
      '#e535ab',
      '#000000',
      '#7377ad',
      '#01d5f7',
      '#eba318',
      '#9a77b5',
      '#8bcea5',
      '#a1bc34',
      '#ef5e97',
      '#57A645',
      '#FF9900',
      '#207196',
      '#092D1F',
      '#F6D049',
    ].map(
      (color) =>
        `bg-[${color}] text-[${color}] group-hover:text-[${color}] group-hover:bg-[${color}]`
    ),
  ],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: '1.5rem',
        // default breakpoints but with 40px removed
        screens: {
          sm: '768px',
          md: '998px',
          lg: '1110px',
          xl: '1240px',
          '2xl': '1320px',
        },
      },
      colors: {
        primary: '#31BAA9',
        darkGray: '#848484',
        lightGray: '#F3F3F3',
        glass: 'rgba(255,255,255,0.15)',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        primary: '40px',
        secondary: '50px',
      },
      boxShadow: {
        custom: '0px 0px 15px 4px rgba(0, 0, 0, 0.04)',
      },
    },
  },

  plugins: [],
};
