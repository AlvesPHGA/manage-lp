import { About } from '../partials/home/About';
import { Depositions } from '../partials/home/Depositions';
import { Intro } from '../partials/home/Intro';
import { Works } from '../partials/home/Works';

export const Home = () => {
   return (
      <>
         <Intro />
         <div className="bg-backSiteImg bg-no-repeat h-fit bg-bttmBp-pattern-1200plus bg-bttmBs-pattern-1200plus">
            <About />
            <Depositions />
         </div>
         <Works />
      </>
   );
};
