import { tv } from 'tailwind-variants';

export const footerStyle = tv({
   slots: {
      footer: 'bg-veryDarkBlue py-20',
      container: 'max-w-7xl mx-auto flex justify-between items-center',
      iconsBox: 'space-y-20',
      formCopyBox: 'text-right flex flex-col gap-16',
      copy: 'text-xs text-darkGrayishBlue',
   },
});
