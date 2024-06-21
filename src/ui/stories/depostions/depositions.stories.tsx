import { Meta, StoryObj } from '@storybook/react';
import { Depositions } from '../../partials/home/Depositions';

const meta: Meta<typeof Depositions> = {
   title: 'Partials/Depositions',
   component: Depositions,
};

export default meta;
type Story = StoryObj<typeof Depositions>;

export const Deposition: Story = {
   decorators: [
      (Story) => (
         <div>
            <Story />
         </div>
      ),
   ],
};
