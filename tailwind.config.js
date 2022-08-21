/* eslint-disable global-require */
module.exports = {
  corePlugins: {
    container: false
  },
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      '1/2': '50%',
      20: '20rem',
      30: '30rem'
    },
    fontFamily: {
      nunito: 'Nunito Sans'
    },
    fontSize: {
      xs: 'var(--step--2)', // .tiny
      sm: 'var(--step--1)', // small
      base: 'var(--step-0)', // p
      md: 'var(--step-1)', // h6
      lg: 'var(--step-2)', // h5
      xl: 'var(--step-3)', // h4
      '2xl': 'var(--step-4)', // h4
      '3xl': 'var(--step-5)', // h4
      '4xl': 'var(--step-6)' // h4
    },
    extend: {
      colors: {
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)'
        },
        blue: 'var(--blue)',
        red: 'var(--red)'
      }
    },
    backgroundColor: {
      primary: 'var(--bg-primary)',
      secondary: 'var(--bg-secondary)',
      logo: 'var(--bg-logo)',
      navHover: 'var(--bg-nav-hover)',
      button: 'var(--text-tertiary)',
      search: 'var(--bg-search-input)',
      deleteBtn: 'var(--bg-delete-btn)',
      deleteBtnHover: 'var(--bg-delete-btn-hover)'
    },
    textColor: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      tertiary: 'var(--text-tertiary)',
      textHover: 'var(--text-hover)',
      navTitle: 'var(--text-nav-title)',
      eventBtn: 'var(--text-create-event)'
    }
  },

  plugins: [require('tailwind-scrollbar')]
}
