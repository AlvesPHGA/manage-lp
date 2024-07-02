import { tv } from 'tailwind-variants';

export const defaultClass = tv({
   slots: {
      section: 'py-20 dlg:py-16',
      container: 'max-w-7xl mx-auto flex justify-between dlg:max-w-4xl',
      subTitle:
         'text-5xl font-bold text-darkBlue tracking-tight leading-[56px] dlg:text-4xl',
      text: 'text-lg text-darkGrayishBlue font-normal',
   },
});
