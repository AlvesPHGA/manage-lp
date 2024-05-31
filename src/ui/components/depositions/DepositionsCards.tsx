import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { depositionStyle } from '../../styles/depositionStyle';

const { swiper, swiperSlide, figure, span, boxText, depo } = depositionStyle();

const listCard = [
   {
      id: 1,
      img: './avatars/avatar-anisha.png',
      name: 'Anisha Li',
      deposition:
         "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
   },

   {
      id: 2,
      img: './avatars/avatar-ali.png',
      name: 'Ali Bravo',
      deposition:
         'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
   },

   {
      id: 3,
      img: './avatars/avatar-richard.png',
      name: 'Richard Watts',
      deposition:
         "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
   },

   {
      id: 4,
      img: './avatars/avatar-shanai.png',
      name: 'Shanai Gough',
      deposition:
         'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
   },
];

export const DepositionsCards = () => {
   return (
      <Swiper
         modules={[Autoplay, Pagination, Navigation]}
         spaceBetween={30}
         slidesPerView={'auto'}
         centeredSlides={true}
         loop={true}
         pagination={{ clickable: true }}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         className={swiper()}
      >
         {listCard.map(({ id, name, img, deposition }) => (
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
