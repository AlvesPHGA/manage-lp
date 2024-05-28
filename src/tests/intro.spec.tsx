import { render, screen } from '@testing-library/react';
import { Intro } from '../ui/partials/home/Intro';

describe('Intro partial/section', () => {
   it('Should display a title of section on user screen', () => {
      render(<Intro />);

      screen.getByText('Bring everyone together to build better products.');
   });

   it('Should display a small text on section on user screen', () => {
      render(<Intro />);

      screen.getByText(
         'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
      );
   });

   it('Should display an image on section.', () => {
      render(<Intro />);

      screen.getByAltText(
         'image some datas in percents about services of site',
      );
   });
});
