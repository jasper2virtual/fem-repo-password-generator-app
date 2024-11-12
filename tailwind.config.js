/** @type {import('tailwindcss').Config} */
export default {
  content: [
'./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'    
  ],
  theme: {
    extend: {
      screens:{
        mobile: '375px',
        tablet: '768px',
        laptop: '1024px',
        desktop:'1440px',
      },
      fontFamily: {
        'jb-mono':['jb-mono']
      },
      colors:{
        app:{
          red:'#F64A4A',
          orange:'#FB7C58',
          yellow:'#F8CD65',
          nenoGreen:'#A4FFAF',
          almostWhite:'#E6E5EA',
          grey:'#817D92',
          darkGrey:'#24232C',
          veryDarkGrey:'#18171F',
        }
      }
    },
  },
  plugins: [],
}

