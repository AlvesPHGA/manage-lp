import { tv } from 'tailwind-variants';

import { defaultClass } from './defaultStyle';

export const introStyle = tv({
   extend: defaultClass,

   slots: {
      container: 'items-center',
      introContent: 'space-y-10 w-[50%]',
      introTitle:
         'text-6xl font-bold text-darkBlue tracking-tight leading-[68px]',
      introText: 'text-lg text-darkGrayishBlue font-normal mb-10',
      introImage: 'w-[620px]',
   },
});
