import { IntroContent } from '../../components/intro/IntroContent';
import { IntroImage } from '../../components/intro/IntroImage';

export const Intro = () => {
   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <IntroContent />
            <IntroImage />
         </div>
      </section>
   );
};
