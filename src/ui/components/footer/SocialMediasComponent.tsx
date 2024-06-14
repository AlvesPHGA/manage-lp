import {
   Facebook,
   Instagram,
   Pinterest,
   Twitter,
   Youtube,
} from '../logo/IconsSocialMedia';

export const SocialMediasComponent = () => {
   return (
      <div className="flex space-x-4">
         <a href="#" className="block w-fit hover:scale-125 transition">
            <Facebook />
         </a>
         <a href="#" className="block w-fit hover:scale-125 transition">
            <Youtube />
         </a>
         <a href="#" className="block w-fit hover:scale-125 transition">
            <Twitter />
         </a>
         <a href="#" className="block w-fit hover:scale-125 transition">
            <Pinterest />
         </a>
         <a href="#" className="block w-fit hover:scale-125 transition">
            <Instagram />
         </a>
      </div>
   );
};
