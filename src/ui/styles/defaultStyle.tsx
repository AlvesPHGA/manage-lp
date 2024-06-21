import { tv } from 'tailwind-variants';

export const defaultClass = tv({
   slots: {
      section: 'py-20',
      container: 'max-w-7xl mx-auto flex justify-between',
      subTitle:
         'text-5xl font-bold text-darkBlue tracking-tight leading-[56px]',
      text: 'text-lg text-darkGrayishBlue font-normal',
   },
});
