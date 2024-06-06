import { About } from '../partials/home/About';
import { Depositions } from '../partials/home/Depositions';
import { Intro } from '../partials/home/Intro';
import { Works } from '../partials/home/Works';

export const Home = () => {
   return (
      <>
         <Intro />
         <About />
         <Depositions />
         <Works />
      </>
   );
};
