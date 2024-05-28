import { About } from '../partials/home/About';
import { Depositions } from '../partials/home/Depositions';
import { Intro } from '../partials/home/Intro';

export const Home = () => {
   return (
      <>
         <Intro />
         <About />
         <Depositions />
      </>
   );
};
