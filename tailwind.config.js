/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
   theme: {
      backgroundPosition: {
         'rb-screen-1200plus': 'left 23rem bottom 0rem',

         'topBp-pattern-1200plus': 'left 65rem bottom 140rem',
         'topBp-pattern-laptop': 'left 37rem bottom 140rem',

         'bttmBp-pattern-1200plus': 'right 95rem bottom 18rem',
         'bttmBp-pattern-laptop': 'right 47rem bottom 15rem',
      },

      backgroundSize: {
         'bs-1200plus': '90% 170%',

         'topBs-pattern-1200plus': '52% 30%',
         'topBs-pattern-laptop': '62% 25%',

         'bttmBs-pattern-1200plus': '40% 50%',
         'bttmBs-pattern-laptop': '50% 40%',
      },

      extend: {
         colors: {
            brightRed: 'hsl(12, 88%, 59%)',
            darkBlue: 'hsl(228, 39%, 23%)',

            darkGrayishBlue: 'hsl(227, 12%, 61%)',
            veryDarkBlue: 'hsl(233, 12%, 13%)',
            veryPaleRed: 'hsl(13, 100%, 96%)',
            veryLightGray: 'hsl(0, 0%, 98%)',
         },

         fontFamily: {
            vietnam: ['Be Vietnam Pro', 'sans-serif'],
         },

         backgroundImage: {
            backSiteImg: "url('./public/icons/bg-tablet-pattern.svg')",
         },

         screens: {
            dlg: { max: '1024px' },
            dmd: { max: '768px' },
            dml: { max: '425px' },
            dmm: { max: '425px' },
            dms: { max: '320px' },
         },
      },
   },
   plugins: [],
};
