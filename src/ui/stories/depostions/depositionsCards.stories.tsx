import { Meta, StoryObj } from '@storybook/react';
import { DepositionsCards } from '../../components/depositions/DepositionsCards';

const meta: Meta<typeof DepositionsCards> = {
   title: 'Components/DepositionsCards',
   component: DepositionsCards,
};

export default meta;
type Story = StoryObj<typeof DepositionsCards>;

export const DepositionCards: Story = {
   decorators: [
      (Story) => (
         <div>
            <Story />
         </div>
      ),
   ],
};
