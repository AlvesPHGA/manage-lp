import { worksStyle } from '../../styles/worksStyle';

const { container, subtitle, cta } = worksStyle();

export const WorksContent = () => {
   return (
      <div className={container()}>
         <div className="w-[600px]">
            <h2 className={subtitle()}>
               Simplify how your team{' '}
               <span className="text-5xl">works today.</span>
            </h2>
         </div>
         <a className={cta()} href="#">
            Get Started
         </a>
      </div>
   );
};
