import { CTAComponent } from '../../components/cta/CTAComponent';
import { NavComponent } from '../../components/header/NavComponent';
import { LogoSiteComponent } from '../../components/logo/LogoSiteComponent';
import { ctaStyle } from '../../styles/ctaStyle';

import { headerStyle } from '../../styles/headerStyle';
import { Menu } from 'lucide-react';

const { header } = headerStyle();

export const Header = () => {
   return (
      <header>
         <div className={header()}>
            <LogoSiteComponent fill="#242D52" />
            <Menu className="hidden dmd:block dmd:size-12 dmd:mb-5" />

            <div className="flex items-center gap-64 dlg:gap-20 dmd:hidden">
               <NavComponent />
               <CTAComponent className={ctaStyle({ cta: 'primary' })} />
            </div>
         </div>
      </header>
   );
};
