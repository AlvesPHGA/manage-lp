import { ctaStyle } from '../../styles/ctaStyle';
import { worksStyle } from '../../styles/worksStyle';
import { CTAComponent } from '../cta/CTAComponent';

const { container, subtitle } = worksStyle();

export const WorksContent = () => {
   return (
      <div className={container()}>
         <div className="w-[600px] dmd:w-[442px] dml:w-full dml:px-9">
            <h2 className={subtitle()}>
               Simplify how your team
               <span className="text-5xl dmd:text-3xl dml:text-4xl">
                  {' '}
                  works today.
               </span>
            </h2>
         </div>
         <CTAComponent className={ctaStyle({ cta: 'secondary' })} />
      </div>
   );
};
