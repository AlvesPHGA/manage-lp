import { CTAComponent } from '../../components/cta/CTAComponent';
import { DepositionsCards } from '../../components/depositions/DepositionsCards';
import { ctaStyle } from '../../styles/ctaStyle';

import { depositionStyle } from '../../styles/depositionStyle';

const { section, subTitle } = depositionStyle();

export const Depositions = () => {
   return (
      <section className={section()}>
         <h2 className={subTitle()}>What they've said</h2>
         <DepositionsCards />
         <CTAComponent className={ctaStyle({ cta: 'primary' })} />
      </section>
   );
};
