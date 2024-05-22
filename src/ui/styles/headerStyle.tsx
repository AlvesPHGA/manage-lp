import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header: 'max-w-7xl mx-auto py-12 flex items-center justify-between',
      nav: 'space-x-10',
      navLinks: 'text-veryDarkBlue font-medium transition hover:opacity-80',
   },
});
