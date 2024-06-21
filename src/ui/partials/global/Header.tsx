import { CTAComponent } from '../../components/cta/CTAComponent';
import { NavComponent } from '../../components/header/NavComponent';
import { LogoSiteComponent } from '../../components/logo/LogoSiteComponent';
import { ctaStyle } from '../../styles/ctaStyle';

import { headerStyle } from '../../styles/headerStyle';

const { header } = headerStyle();

export const Header = () => {
   return (
      <header>
         <div className={header()}>
            <LogoSiteComponent fill="#242D52" />
            <NavComponent />
            <CTAComponent className={ctaStyle({ cta: 'primary' })} />
         </div>
      </header>
   );
};
