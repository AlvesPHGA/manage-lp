import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { depositionStyle } from '../../styles/depositionStyle';

import { depositions } from '../../../../public/content.json';

const { swiper, swiperSlide, figure, span, boxText, depo } = depositionStyle();

interface SwiperProps {
   id: number;
   name: string;
   img: string;
   deposition: string;
}

export const DepositionsCards = () => {
   return (
      <Swiper
         data-testid="slider-of-comments"
         modules={[Autoplay, Pagination, Navigation]}
         spaceBetween={30}
         slidesPerView={'auto'}
         centeredSlides={true}
         loop={true}
         pagination={{ clickable: true }}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         className={swiper()}
      >
         {depositions.map(({ id, name, img, deposition }: SwiperProps) => (
            <SwiperSlide key={id} virtualIndex={id} className={swiperSlide()}>
               <figure className={figure()}>
                  <img src={img} alt={`photo by ${name}`} />
               </figure>
               <span className={span()}>{name}</span>
               <div className={boxText()}>
                  <p className={depo()}>"{deposition}"</p>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
