import { ButtonComponent } from '../form/ButtonComponent';

export const IntroContent = () => {
   return (
      <div className="space-y-10">
         <div className="w-[40%]">
            <h1 className="text-6xl font-bold text-darkBlue tracking-tight leading-[68px]">
               Bring everyone together to build better products.
            </h1>
         </div>
         <div className="w-[31%]">
            <p className="text-lg text-darkGrayishBlue font-normal">
               Manage makes it simple for software teams to plan day-to-day
               tasks while keeping the larger team goals in view.
            </p>
         </div>
         <ButtonComponent />
      </div>
   );
};
