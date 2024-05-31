import { DepositionsCards } from '../../components/depositions/DepositionsCards';
import { ButtonComponent } from '../../components/form/ButtonComponent';

export const Depositions = () => {
   return (
      <section className="py-20 flex flex-col items-center">
         <h2 className="text-5xl font-bold text-darkBlue tracking-tight leading-[56px] text-center mb-10">
            What they've said'
         </h2>
         <DepositionsCards />
         <ButtonComponent />
      </section>
   );
};
