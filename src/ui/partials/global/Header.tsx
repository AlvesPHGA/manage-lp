import { ButtonComponent } from '../../components/form/ButtonComponent';
import { NavComponent } from '../../components/header/NavComponent';
import { LogoSiteComponent } from '../../components/logo/LogoSiteComponent';

export const Header = () => {
   return (
      <header>
         <div className="max-w-7xl mx-auto py-12 flex items-center justify-between">
            <LogoSiteComponent fill="#242D52" />
            <NavComponent />
            <ButtonComponent>Get Started</ButtonComponent>
         </div>
      </header>
   );
};
