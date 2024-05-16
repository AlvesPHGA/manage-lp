import { About } from '../partials/home/About';
import { Discussions } from '../partials/home/Discussions';
import { Intro } from '../partials/home/Intro';
import { Service } from '../partials/home/Service';

export const Home = () => {
   return (
      <>
         <Intro />
         <About />
         <Discussions />
         <Service />
      </>
   );
};
