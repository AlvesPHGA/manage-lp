import { tv } from 'tailwind-variants';

export const aboutStyle = tv({
   slots: {
      section: 'py-20',
      container: 'max-w-7xl mx-auto flex justify-between',

      aboutContent: 'space-y-10 w-[50%] pt-7',
      aboutTitle:
         'text-5xl font-bold text-darkBlue tracking-tight leading-[56px]',
      aboutText: 'text-lg text-darkGrayishBlue font-normal',

      list: "before:content-['02'] before:first:content-['01'] before:last:content-['03'] before:text-lg before:mr-3 before:relative before:top-7 before:right-24 before:bg-brightRed before:px-6 before:py-2.5 before:rounded-[50px] before:font-medium before:text-white",
      dt: 'text-darkBlue text-lg font-semibold',
      dd: 'text-lg text-darkGrayishBlue mt-3 mb-7',
   },
});
