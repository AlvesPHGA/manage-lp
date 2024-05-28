import { AboutContent } from '../../components/about/AboutContent';
import { AboutList } from '../../components/about/AboutList';

export const About = () => {
   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto flex justify-between">
            <AboutContent />
            <AboutList />
         </div>
      </section>
   );
};
