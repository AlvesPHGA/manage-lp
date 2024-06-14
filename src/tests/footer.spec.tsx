import { render, screen } from '@testing-library/react';
import { Footer } from '../ui/partials/global/Footer';

describe('Footer', () => {
   it('Should display a logo of site on footer', () => {
      render(<Footer />);
      screen.getByLabelText('logo site');
   });

   it('Should display some links of social medias on footer', () => {
      render(<Footer />);
      screen.getByAltText('icon facebook');
      screen.getByAltText('icon youtube');
      screen.getByAltText('icon twitter');
      screen.getByAltText('icon pinterest');
      screen.getByAltText('icon instagram');
   });

   it('Should display an text input on footer', () => {
      render(<Footer />);
      screen.getByPlaceholderText('Updates in your inbox...');
   });
});
