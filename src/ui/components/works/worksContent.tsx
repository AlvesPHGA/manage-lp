import { ctaStyle } from '../../styles/ctaStyle';
import { worksStyle } from '../../styles/worksStyle';
import { CTAComponent } from '../cta/CTAComponent';

const { container, subtitle } = worksStyle();

export const WorksContent = () => {
   return (
      <div className={container()}>
         <div className="w-[600px] dmd:w-[442px]">
            <h2 className={subtitle()}>
               Simplify how your team
               <span className="text-5xl dmd:text-3xl"> works today.</span>
            </h2>
         </div>
         <CTAComponent className={ctaStyle({ cta: 'secondary' })} />
      </div>
   );
};
