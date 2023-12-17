import type { Meta, StoryObj } from '@storybook/react';

import LayoutNavbar from '.';

const meta: Meta<typeof LayoutNavbar> = {
  title: 'components/Navbar',
  component: LayoutNavbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    // title: 'Test',
  },
};
