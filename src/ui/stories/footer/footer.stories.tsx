import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../partials/global/Footer';

const meta: Meta<typeof Footer> = {
   component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterPartial: Story = {
   decorators: [
      (Story) => (
         <div>
            <Story />
         </div>
      ),
   ],
};
