/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'hero-img':"url('bgImgHero.png')",
        'footer-image': "url('https://raw.githubusercontent.com/ALEpantovic/websajt/master/public/bgImgFooter.png')",
      },
      keyframes: {
        'open-burger': {
           '0%': {transform:'scaleY(0)'},
           '80%': {transform:'scaleY(1.2)'},
           '100%': {transform:'scaleY(1)'},
        },
        'slideInRight': {
           '0%': { transform: 'scaleX(0)',opacity: '0'  },
           '100%': { transform: 'scaleX(1)',opacity: '1'  },
        },
        'slideOutLeft': {
           '0%': { transform: 'scaleX(1)' },
           '100%': { transform: 'scaleX(0)' },
        },
        'slideInLeft': {
           '0%': { transform: 'translateX(-100%)' },
           '100%': { transform: 'translateX(0)' },
        }, 
        'slideRight': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
       }, 
          'slideUp': {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0)' },
       },
       'popin': {
        '0%': { transform: 'scale(0,0)' },
        '100%': { transform: 'scale(1,1)' },
     },
       },
       animation:{
        'open-burger':'open-burger 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
        'slide-out-left': 'slideOutLeft 0.5s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-in-out forwards',
        'slide-right': 'slideRight 1s ease-in-out forwards',
        'slide-Up': 'slideUp 1s ease-in-out forwards',
        'pop-In': 'popin 1s ease-in-out forwards',
      },
      aspectRatio: {
        '16/9': '56.25%',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [require('tailwindcss-aspect-ratio'),],
};
