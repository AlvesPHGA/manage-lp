import { render, screen } from '@testing-library/react';
import { Header } from '../ui/partials/global/Header';

describe('Header component', () => {
   it('Should display logo of header on screen', () => {
      render(<Header />);

      screen.getByLabelText('logo site');
   });

   it('Should display links on screen', () => {
      render(<Header />);

      screen.getByText('Pricing');
      screen.getByText('Product');
      screen.getByText('About Us');
      screen.getByText('Careers');
      screen.getByText('Community');
   });

   it('Should display a button of header on screen', () => {
      render(<Header />);

      screen.getByRole('button');
   });
});
