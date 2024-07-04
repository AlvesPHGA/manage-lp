/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
   theme: {
      backgroundPosition: {
         'rb-screen-1200plus': 'left 23rem bottom 0rem',
         'rb-screen-tablet': 'left 9rem bottom 0rem',

         'topBp-pattern-1200plus': 'left 65rem bottom 140rem',
         'topBp-pattern-laptop': 'left 37rem bottom 140rem',
         'topBp-pattern-tablet': 'left 26rem bottom 125rem',

         'bttmBp-pattern-1200plus': 'right 95rem bottom 18rem',
         'bttmBp-pattern-laptop': 'right 47rem bottom 15rem',
         'bttmBp-pattern-tablet': 'left 25rem top 0rem',
      },

      backgroundSize: {
         'bs-1200plus': '90% 170%',
         'bs-tablet': '100% 100%',

         'topBs-pattern-1200plus': '52% 30%',
         'topBs-pattern-laptop': '62% 25%',
         'topBs-pattern-tablet': '80% 25%',

         'bttmBs-pattern-1200plus': '40% 50%',
         'bttmBs-pattern-laptop': '50% 40%',
         'bttmBs-pattern-tablet': '90% 45%',
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
