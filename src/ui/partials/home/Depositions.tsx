import { CTAComponent } from '../../components/cta/CTAComponent';
import { DepositionsCards } from '../../components/depositions/DepositionsCards';
import { ctaStyle } from '../../styles/ctaStyle';

import { depositionStyle } from '../../styles/depositionStyle';

const { section, title } = depositionStyle();

export const Depositions = () => {
   return (
      <section className={section()}>
         <h2 className={title()}>What they've said</h2>
         <DepositionsCards />
         <CTAComponent className={ctaStyle({ cta: 'primary' })} />
      </section>
   );
};
