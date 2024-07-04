import { tv } from 'tailwind-variants';

export const defaultClass = tv({
   slots: {
      section: 'py-20 dlg:py-16 dmd:py-12',
      container:
         'max-w-7xl mx-auto flex justify-between dlg:max-w-4xl dmd:w-screen dmd:px-8',
      subTitle:
         'text-5xl font-bold text-darkBlue tracking-tight leading-[56px] dlg:text-4xl dmd:text-2xl',
      text: 'text-lg text-darkGrayishBlue font-normal dmd:text-base',
   },
});
