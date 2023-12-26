import type { Meta, StoryObj } from '@storybook/react';

import LayoutNavbar from '.';

const meta: Meta<typeof LayoutNavbar> = {
  title: 'components/LayoutNavbar',
  component: LayoutNavbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LayoutNavbar',
  args: {
    locale: 'en',
  },
};
