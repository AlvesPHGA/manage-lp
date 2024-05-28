import { ButtonComponent } from '../form/ButtonComponent';

import { introStyle } from '../../styles/introStyle';

const { introContent, introTitle, introText } = introStyle();

export const IntroContent = () => {
   return (
      <div className={introContent()}>
         <div className="w-[90%]">
            <h1 className={introTitle()}>
               Bring everyone together to build better products.
            </h1>
         </div>
         <div className="w-[60%]">
            <p className={introText()}>
               Manage makes it simple for software teams to plan day-to-day
               tasks while keeping the larger team goals in view.
            </p>
         </div>
         <ButtonComponent />
      </div>
   );
};
