import { tv } from 'tailwind-variants';

export const introStyle = tv({
   slots: {
      section: 'py-20',
      container: 'max-w-7xl mx-auto flex justify-between items-center',
      introContent: 'space-y-10 w-[50%]',
      introTitle:
         'text-6xl font-bold text-darkBlue tracking-tight leading-[68px]',
      introText: 'text-lg text-darkGrayishBlue font-normal',
      introImage: 'w-[620px]',
   },
});
