import { tv } from 'tailwind-variants';

export const ctaStyle = tv({
   base: 'border-2 font-medium  rounded-full py-2.5 px-8  transition-all hover:bg-transparent',

   variants: {
      cta: {
         primary:
            'text-white border-brightRed bg-brightRed shadow-[0_10px_20px_-2px_rgba(242,95,58,0.3)] hover:text-brightRed',
         secondary: 'border-white bg-white text-brightRed hover:text-white',
      },
   },
});
