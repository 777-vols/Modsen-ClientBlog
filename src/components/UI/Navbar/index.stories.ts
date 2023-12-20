import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '.';

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Navbar',
  args: {
    locale: 'en',
  },
};
