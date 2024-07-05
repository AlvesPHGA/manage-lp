import { tv } from 'tailwind-variants';
import { defaultClass } from './defaultStyle';

export const aboutStyle = tv({
   extend: defaultClass,

   slots: {
      aboutContent:
         'space-y-10 w-[50%] pt-7 dmd:space-y-6 dml:w-full dml:space-y-4 dml:text-center dml:leading-7 dml:mb-10',

      list: "before:content-['02'] before:first:content-['01'] before:last:content-['03'] before:text-lg before:mr-3 before:relative before:top-7 before:right-24 before:bg-brightRed before:px-6 before:py-2.5 before:rounded-[50px] before:font-medium before:text-white dmd:before:px-4 dmd:before:py-1.5 dmd:before:right-20 dml:before:right-0 dml:before:z-10 dml:before:top-8 dml:space-y-12",
      dt: 'text-darkBlue text-lg font-semibold dmd:text-base dml:text-left dml:ml-16 dml:mt-1.5 relative z-10',
      dd: 'text-lg text-darkGrayishBlue mt-3 mb-7 dmd:text-base dml:text-left dml:leading-7',
   },
});
