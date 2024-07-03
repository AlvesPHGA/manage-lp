import { tv } from 'tailwind-variants';
import { defaultClass } from './defaultStyle';

export const depositionStyle = tv({
   extend: defaultClass,

   slots: {
      section: 'flex flex-col items-center',
      subTitle: 'text-center mb-10',

      swiper: 'pt-20 mb-16 w-full',
      swiperSlide:
         'relative text-center px-20 pb-10 pt-20 bg-veryLightGray rounded !w-fit dlg:!w-[480px]dlg:px-16',

      figure:
         'size-[80px] absolute bottom-52 right-[50%] translate-x-[50%] z-10 dlg:bottom-60',
      span: 'text-lg text-darkBlue font-semibold',
      boxText: 'mt-5 w-[550px] mx-auto dlg:w-[400px]',
      depo: 'text-darkGrayishBlue text-lg',
   },
});
