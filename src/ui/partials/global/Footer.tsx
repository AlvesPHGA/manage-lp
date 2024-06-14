import { LinksFooter } from '../../components/footer/LinksFooter';
import { SocialMediasComponent } from '../../components/footer/SocialMediasComponent';
import { LogoSiteComponent } from '../../components/logo/LogoSiteComponent';

export const Footer = () => {
   return (
      <footer className="bg-darkBlue py-20">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="space-y-20">
               <LogoSiteComponent fill="#fff" />
               <SocialMediasComponent />
            </div>
            <LinksFooter />
         </div>
      </footer>
   );
};
