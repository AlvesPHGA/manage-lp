import { IntroContent } from '../../components/intro/IntroContent';
import { IntroImage } from '../../components/intro/IntroImage';

import { introStyle } from '../../styles/introStyle';

const { section, container } = introStyle();

export const Intro = () => {
   return (
      <section className={section()}>
         <div className={container()}>
            <IntroContent />
            <IntroImage />
         </div>
      </section>
   );
};
