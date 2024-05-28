import { IntroContent } from '../../components/intro/IntroContent';

export const Intro = () => {
   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <IntroContent />

            <img
               className="w-[620px]"
               src="./icons/illustration-intro.svg"
               alt="image some datas in percents about services of site"
            />
         </div>
      </section>
   );
};
