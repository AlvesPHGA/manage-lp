import { FormComponent } from '../../components/footer/FormComponent';
import { LinksFooter } from '../../components/footer/LinksFooter';
import { SocialMediasComponent } from '../../components/footer/SocialMediasComponent';
import { LogoSiteComponent } from '../../components/logo/LogoSiteComponent';

import { footerStyle } from '../../styles/footerStyle';

const { footer, container, iconsBox, formCopyBox, copy } = footerStyle();

export const Footer = () => {
   return (
      <footer className={footer()}>
         <div className={container()}>
            <div className={iconsBox()}>
               <LogoSiteComponent fill="#fff" />
               <SocialMediasComponent />
            </div>
            <LinksFooter />
            <div className={formCopyBox()}>
               <FormComponent />
               <span className={copy()}>
                  Copyright 2020. All Rights Reserved
               </span>
            </div>
         </div>
      </footer>
   );
};
