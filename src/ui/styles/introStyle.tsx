import { tv } from 'tailwind-variants';

import { defaultClass } from './defaultStyle';

export const introStyle = tv({
   extend: defaultClass,

   slots: {
      container: 'items-center',
      introContent: 'space-y-10 w-[50%] dmd:space-y-6',
      introTitle:
         'text-6xl font-bold text-darkBlue tracking-tight leading-[68px] dlg:text-5xl dlg:leading-[54px] dmd:text-4xl dmd:leading-[42px]',
      text: 'mb-10',
      introImage: 'w-[620px] dlg:w-[50%]',
   },
});
