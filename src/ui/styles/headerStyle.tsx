import { tv } from 'tailwind-variants';

export const headerStyle = tv({
   slots: {
      header:
         'max-w-7xl mx-auto py-12 flex items-center justify-between dlg:max-w-4xl dmd:w-screen dmd:px-8',
      nav: 'space-x-10 dlg:space-x-6  border dmd:flex',
      navLinks:
         'text-veryDarkBlue font-medium transition hover:text-brightRed border dmd:block',
   },
});
