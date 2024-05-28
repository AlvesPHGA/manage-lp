import { render, screen } from '@testing-library/react';
import { About } from '../ui/partials/home/About';

describe('About section', () => {
   it('Should display a title on about section on user screen', () => {
      render(<About />);

      screen.getByText("What's different about Manage?");
   });

   it('Should display a small text about section to user', () => {
      render(<About />);

      screen.getByText(
         'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made form modern digital product teams.',
      );
   });

   it('Should display a list about company service.', () => {
      render(<About />);

      screen.getByText('Track company-wide progress');
      screen.getByText('Advanced built-in reports');
      screen.getByText('Everything you need in one place');
   });
});
