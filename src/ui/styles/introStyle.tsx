import { tv } from 'tailwind-variants';

import { defaultClass } from './defaultStyle';

export const introStyle = tv({
   extend: defaultClass,

   slots: {
      container: 'items-center dml:flex-col-reverse dml:gap-5',
      introContent:
         'space-y-10 w-[50%] dmd:space-y-6 dml:w-full dml:text-center',
      introTitle:
         'text-6xl font-bold text-darkBlue tracking-tight leading-[68px] dlg:text-5xl dlg:leading-[54px] dmd:text-4xl dmd:leading-[42px]',
      text: 'mb-10',
      introImage: 'w-[620px] dlg:w-[50%] dml:w-full',
   },
});
