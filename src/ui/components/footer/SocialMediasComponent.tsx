import { ReactSVG } from 'react-svg';

const socialMidia = [
   'facebook',
   'youtube',
   'twitter',
   'pinterest',
   'instagram',
];

export const SocialMediasComponent = () => {
   return (
      <div className="flex space-x-4">
         {socialMidia.map((s) => (
            <ReactSVG
               src={`public/icons/icon-${s}.svg`}
               className="fill-white hover:fill-brightRed transition cursor-pointer hover:scale-125"
            />
         ))}
      </div>
   );
};
