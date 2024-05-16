/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
   theme: {
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
