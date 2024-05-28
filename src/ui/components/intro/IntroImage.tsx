import { introStyle } from '../../styles/introStyle';

const { introImage } = introStyle();

export const IntroImage = () => {
   return (
      <figure className={introImage()}>
         <img
            src="./icons/illustration-intro.svg"
            alt="image some datas in percents about services of site"
         />
      </figure>
   );
};
