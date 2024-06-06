import { ButtonComponent } from '../form/ButtonComponent';

export const WorksContent = () => {
   return (
      <div className="max-w-7xl flex justify-between mx-auto">
         <div className="w-[600px]">
            <h2 className="text-5xl text-white font-bold leading-[56px]">
               Simplify how your team{' '}
               <span className="text-5xl">works today.</span>
            </h2>
         </div>
         <ButtonComponent />
      </div>
   );
};
