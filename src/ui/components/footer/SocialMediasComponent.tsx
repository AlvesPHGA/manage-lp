import { ReactSVG } from 'react-svg';
import { footerStyle } from '../../styles/footerStyle';

const socialMidia = [
   'facebook',
   'youtube',
   'twitter',
   'pinterest',
   'instagram',
];

const { socialBox, iconsSocialMidia } = footerStyle();

export const SocialMediasComponent = () => {
   return (
      <div className={socialBox()}>
         {socialMidia.map((s) => (
            <ReactSVG
               src={`public/icons/icon-${s}.svg`}
               className={iconsSocialMidia()}
               aria-label={`link ${s} social media`}
            />
         ))}
      </div>
   );
};
