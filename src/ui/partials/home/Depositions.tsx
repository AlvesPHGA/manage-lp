import { DepositionsCards } from '../../components/depositions/DepositionsCards';
import { ButtonComponent } from '../../components/form/ButtonComponent';

import { depositionStyle } from '../../styles/depositionStyle';

const { section, title } = depositionStyle();

export const Depositions = () => {
   return (
      <section className={section()}>
         <h2 className={title()}>What they've said</h2>
         <DepositionsCards />
         <ButtonComponent />
      </section>
   );
};
