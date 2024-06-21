import { tv } from 'tailwind-variants';
import { defaultClass } from './defaultStyle';

export const footerStyle = tv({
   extend: defaultClass,

   slots: {
      footer: 'bg-veryDarkBlue py-20',
      container: 'items-center',
      iconsBox: 'space-y-20',
      socialBox: 'flex space-x-4',
      iconsSocialMidia:
         'fill-white hover:fill-brightRed transition cursor-pointer hover:scale-125',
      formCopyBox: 'text-right flex flex-col gap-16',
      copy: 'text-xs text-darkGrayishBlue',
   },
});
