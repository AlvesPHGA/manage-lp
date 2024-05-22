import { headerStyle } from '../../styles/headerStyle';

const { nav, navLinks } = headerStyle();

const listNavigation = [
   'Pricing',
   'Product',
   'About Us',
   'Careers',
   'Community',
];

export const NavComponent = () => {
   return (
      <nav className={nav()}>
         {listNavigation.map((link) => (
            <a key={link} className={navLinks()} href="#">
               {link}
            </a>
         ))}
      </nav>
   );
};
