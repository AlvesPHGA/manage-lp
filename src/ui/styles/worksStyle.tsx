import { tv } from 'tailwind-variants';

export const worksStyle = tv({
   slots: {
      section: '',
      container: 'max-w-7xl flex items-center justify-between mx-auto',
      subtitle: 'text-5xl text-white font-bold leading-[56px]',
      cta: 'block border-2 border-white h-fit px-7 py-3 bg-white text-brightRed rounded-[24px] font-bold hover:text-white hover:bg-transparent transition',
   },
});
