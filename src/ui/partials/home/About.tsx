import { AboutContent } from '../../components/about/AboutContent';
import { AboutList } from '../../components/about/AboutList';

import { aboutStyle } from '../../styles/aboutStyle';

const { section, container } = aboutStyle();

export const About = () => {
   return (
      <section className={section()}>
         <div className={container()}>
            <AboutContent />
            <AboutList />
         </div>
      </section>
   );
};
