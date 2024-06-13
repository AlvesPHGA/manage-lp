import { render, screen } from '@testing-library/react';
import { Works } from '../ui/partials/home/Works';

describe('Works section', () => {
   it('Should display a subtitle on section', () => {
      render(<Works />);
      screen.getByText('Simplify how your team');
   });

   it('Should display a cta on section', () => {
      render(<Works />);
      screen.getByText('Get Started');
   });
});
