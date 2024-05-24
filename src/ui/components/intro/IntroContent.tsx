import { ButtonComponent } from '../form/ButtonComponent';

export const IntroContent = () => {
   return (
      <div className="w-[40%]">
         <h1 className="text-5xl font-bold">
            Bring everyone together to build better products.
         </h1>
         <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
         </p>
         <ButtonComponent />
      </div>
   );
};
