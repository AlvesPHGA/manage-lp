import { tv } from 'tailwind-variants';
import { defaultClass } from './defaultStyle';

export const worksStyle = tv({
   extend: defaultClass,

   slots: {
      section: '',
      container: 'items-center',
      subtitle: 'text-5xl text-white font-bold leading-[56px] dmd:text-3xl',
      cta: 'block border-2 border-white h-fit px-7 py-3 bg-white text-brightRed rounded-[24px] font-bold hover:text-white hover:bg-transparent transition',
   },
});
