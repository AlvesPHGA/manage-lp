import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header:
         'max-w-7xl mx-auto py-12 flex items-center justify-between dlg:max-w-4xl',
      nav: 'space-x-10',
      navLinks: 'text-veryDarkBlue font-medium transition hover:text-brightRed',
   },
});
